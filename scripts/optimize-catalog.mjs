// Normaliza as fotos reais (/fotos_produtos) para o catálogo:
// enquadra cada uma em 4:3 sobre fundo claro (#EEF1F3) e exporta WebP <=250KB
// em /public/img/catalogo. Uso: npm run optimize:catalog
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "fotos_produtos");
const OUT = join(ROOT, "public", "img", "catalogo");
const MAX = 250 * 1024;

// [arquivo de origem, slug de destino]
const JOBS = [
  ["Chapéu Chinês.jpg", "chapeu-chines"],
  ["Chapéu chinês Balanceado.jpg", "chapeu-chines-balanceado"],
  ["Terminal TEE.jpg", "terminal-tee"],
  ["Terminal TEE Balanceado.jpg", "terminal-tee-balanceado"],
  ["Grelha de deflexão comando único para pressurização.jpg", "grelha-deflexao-comando-unico"],
  ["Grelha de ventilação com bandeira fixa.jpg", "grelha-ventilacao-bandeira-fixa"],
  ["Grelha de ventilação plena.jpg", "grelha-ventilacao-plena"],
  ["Difusor regulável.jpg", "difusor-regulavel"],
  ["Duto flexível alumínio.jpg", "duto-flexivel-aluminio"],
  ["Duto flexível poliester.jpg", "duto-flexivel-poliester"],
  ["Duto flexível poliester aluminizado.jpg", "duto-flexivel-poliester-aluminizado"],
  ["Abraçadeiras de fita.jpg", "abracadeiras-fita"],
  ["Abraçadeiras especiais.jpg", "abracadeiras-especiais"],
  ["Porta de abrigo.jpg", "porta-abrigo"],
  ["Porta de abrigo com vidro para hidrante de incêndio.jpg", "porta-abrigo-vidro-hidrante"],
  ["Porta Guarnição para telefonia e elétrica.jpg", "porta-guarnicao-telefonia-eletrica"],
  ["Kit hidráulico.jpg", "kit-hidraulico"],
  ["Carenagem para kit hidráulico.jpg", "carenagem-kit-hidraulico"],
  ["Exaustor para banheiro.jpg", "exaustor-banheiro"],
];

async function run() {
  await mkdir(OUT, { recursive: true });
  let warnings = 0;
  for (const [src, slug] of JOBS) {
    const destPath = join(OUT, `${slug}.webp`);
    let q = 82;
    let bytes = Infinity;
    for (let attempt = 0; attempt < 6 && bytes > MAX; attempt++) {
      await sharp(join(SRC, src))
        .resize(1200, 900, { fit: "contain", background: "#eef1f3" })
        .webp({ quality: q, effort: 6 })
        .toFile(destPath);
      bytes = (await stat(destPath)).size;
      if (bytes > MAX) q -= 8;
    }
    const kb = (bytes / 1024).toFixed(0);
    const flag = bytes > MAX ? "  ⚠ > 250KB" : "";
    if (bytes > MAX) warnings++;
    console.log(`${slug.padEnd(38)} ${String(kb).padStart(5)} KB  q${q}${flag}`);
  }
  console.log(`\n${JOBS.length} fotos processadas.`);
  if (warnings) console.log(`⚠ ${warnings} acima de 250KB.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
