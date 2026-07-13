// Converte os PNGs crus gerados no Higgsfield (/public/img/_raw) para WebP
// otimizados (<= 250KB) com os nomes finais usados pelo site.
// Uso: npm run optimize:images
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const RAW = join(ROOT, "public", "img", "_raw");
const OUT = join(ROOT, "public", "img");

const KB = 1024;
const MAX = 250 * KB;

// [origem, destino, largura, qualidade, mantémAlpha]
const JOBS = [
  // ---- Hero (camadas) ----
  ["fundo.png", "hero/hero-fundo.webp", 2000, 78, false],
  ["telhado.png", "hero/hero-telhado.webp", 2000, 80, false],
  ["turbina-cutout.png", "hero/hero-grade.webp", 1600, 86, true],
  ["anel-cutout.png", "hero/hero-anel.webp", 1400, 86, true],
  ["eixo-cutout.png", "hero/hero-eixo.webp", 1400, 86, true],
  // ---- Catálogo (produtos) ----
  ["prod-chapeu-chines.png", "produtos/chapeu-chines.webp", 1200, 82, false],
  ["prod-chapeu-balanceado.png", "produtos/chapeu-balanceado.webp", 1200, 82, false],
  ["prod-terminal-tee.png", "produtos/terminal-tee.webp", 1200, 82, false],
  ["prod-grelha-ventilacao.png", "produtos/grelha-ventilacao.webp", 1200, 82, false],
  ["prod-grelha-deflexao.png", "produtos/grelha-deflexao.webp", 1200, 82, false],
  ["prod-difusor.png", "produtos/difusor.webp", 1200, 82, false],
  ["prod-duto-flexivel.png", "produtos/duto-flexivel.webp", 1200, 82, false],
  ["prod-abracadeira.png", "produtos/abracadeira.webp", 1200, 82, false],
  ["prod-porta-abrigo.png", "produtos/porta-abrigo.webp", 1200, 82, false],
  ["prod-exaustor-banheiro.png", "produtos/exaustor-banheiro.webp", 1200, 82, false],
  // ---- Ambiente ----
  ["fabrica-dobra.png", "ambiente/fabrica-dobra.webp", 2000, 78, false],
  ["textura-aluminio.png", "ambiente/textura-aluminio.webp", 1400, 72, false],
];

async function run() {
  let total = 0;
  let warnings = 0;
  for (const [src, dest, width, quality, alpha] of JOBS) {
    const srcPath = join(RAW, src);
    const destPath = join(OUT, dest);
    await mkdir(dirname(destPath), { recursive: true });

    let q = quality;
    let bytes = Infinity;
    // Reduz a qualidade progressivamente até caber em 250KB.
    for (let attempt = 0; attempt < 6 && bytes > MAX; attempt++) {
      const pipeline = sharp(srcPath).resize({ width, withoutEnlargement: true });
      if (!alpha) pipeline.flatten({ background: "#EEF1F3" });
      await pipeline.webp({ quality: q, alphaQuality: 90, effort: 6 }).toFile(destPath);
      bytes = (await stat(destPath)).size;
      if (bytes > MAX) q -= 8;
    }

    total += bytes;
    const kb = (bytes / KB).toFixed(0);
    const flag = bytes > MAX ? "  ⚠ > 250KB" : "";
    if (bytes > MAX) warnings++;
    console.log(`${dest.padEnd(34)} ${String(kb).padStart(5)} KB  q${q}${flag}`);
  }
  console.log(`\nTotal: ${(total / KB / KB).toFixed(2)} MB em ${JOBS.length} arquivos.`);
  if (warnings) console.log(`⚠ ${warnings} arquivo(s) acima de 250KB — revisar.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
