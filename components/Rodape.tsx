import Link from "next/link";
import { site } from "@/lib/site";

const COLUNAS = [
  { label: "Produtos", href: "/catalogo" },
  { label: "Sob medida", href: "/#sob-medida" },
  { label: "Orçamento", href: "/#orcamento" },
  { label: "Blog (Dicas & Normas)", href: "/#" },
];

const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Rua Amador Bueno 212 Jardim Munhoz Guarulhos SP",
)}`;

export default function Rodape() {
  return (
    <footer className="bg-grafite text-aluminio">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-6">
          <p className="mono-label text-sm tracking-[0.2em] text-aluminio-luz">
            EXAUSTOOR
          </p>
          <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-aluminio">
            Desenvolvimento e fabricação de peças especiais em alumínio.
          </p>

          <address className="mt-8 not-italic font-sans text-base leading-relaxed text-aluminio">
            {site.endereco.rua}
            <br />
            {site.endereco.cidade}, {site.endereco.cep}
            <br />
            <a
              href={`tel:+${site.telefoneDigits}`}
              className="text-aluminio-luz hover:text-sinal"
            >
              {site.telefone}
            </a>
          </address>

          <a
            href={mapa}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label mt-4 inline-block text-2xs text-sinal underline-offset-4 hover:underline"
          >
            Ver no mapa →
          </a>
        </div>

        <nav className="md:col-span-6 md:justify-self-end" aria-label="Rodapé">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-4">
            {COLUNAS.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="font-sans text-base text-aluminio transition-colors hover:text-aluminio-luz"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-aluminio/15">
        <div className="shell flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label text-2xs text-aluminio/50">
            CNPJ {site.cnpj} · Guarulhos · SP
          </p>
          <p className="mono-label text-2xs text-aluminio/50">
            © {new Date().getFullYear()} Exaustoor
          </p>
        </div>
      </div>
    </footer>
  );
}
