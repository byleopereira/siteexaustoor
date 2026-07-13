import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Rodape from "@/components/Rodape";
import Reveal from "@/components/Reveal";
import { familias, catalogo } from "@/lib/catalog";
import { whatsappLink } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Catálogo · Exaustoor | Peças de exaustão em alumínio",
  description:
    "Catálogo completo de peças de ventilação e exaustão em alumínio: chapéu chinês, terminal TEE, grelhas de deflexão e ventilação, difusor, dutos flexíveis, portas de abrigo, kit hidráulico e exaustor. Guarulhos/SP.",
};

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="bg-aluminio-luz">
        {/* Cabeçalho da página */}
        <header className="bg-grafite pb-16 pt-32 text-aluminio-luz md:pb-20 md:pt-40">
          <div className="shell">
            <Link
              href="/"
              className="mono-label text-2xs text-aluminio/60 transition-colors hover:text-sinal"
            >
              ← Voltar
            </Link>
            <h1 className="mt-6 max-w-3xl font-display text-3xl font-extrabold leading-[1.02] md:text-[5rem]">
              O catálogo inteiro.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base text-aluminio md:text-lg">
              {catalogo.length} peças que saem da fábrica em Guarulhos. O que não
              está aqui, a gente desenha e fabrica sob medida.
            </p>

            {/* índice por família */}
            <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="Famílias">
              {familias.map((f) => (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className="mono-label text-2xs text-aluminio/70 transition-colors hover:text-sinal"
                >
                  {f.nome}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Famílias com produtos */}
        {familias.map((fam) => {
          const itens = catalogo.filter((p) => p.familia === fam.nome);
          if (!itens.length) return null;
          return (
            <section
              key={fam.id}
              id={fam.id}
              className="scroll-mt-20 border-t tech-line py-16 md:py-24"
            >
              <div className="shell">
                <Reveal className="flex items-baseline gap-4">
                  <span className="mono-label text-sm text-sinal">F{fam.numero}</span>
                  <div>
                    <h2 className="font-display text-2xl font-extrabold text-tinta md:text-3xl">
                      {fam.nome}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-base text-tinta/60">
                      {fam.descricao}
                    </p>
                  </div>
                </Reveal>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  {itens.map((p, i) => (
                    <Reveal
                      as="article"
                      key={p.slug}
                      delay={(i % 2) * 80}
                      className="group flex flex-col border tech-line bg-branco"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-aluminio-luz">
                        <Image
                          src={asset(p.img)}
                          alt={p.nome}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-steel group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-lg font-bold text-tinta">
                          {p.nome}
                        </h3>

                        <div className="mt-3 space-y-3 font-sans text-base leading-relaxed text-tinta/75">
                          {p.descricao.map((d, idx) => (
                            <p key={idx}>{d}</p>
                          ))}
                        </div>

                        {p.bullets && (
                          <ul className="mt-4 space-y-2">
                            {p.bullets.map((b) => (
                              <li
                                key={b}
                                className="flex gap-3 font-sans text-sm text-tinta/70"
                              >
                                <span
                                  aria-hidden
                                  className="mt-2 h-px w-3 shrink-0 bg-sinal"
                                />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}

                        {p.dados && (
                          <dl className="mt-5 space-y-1.5 border-t tech-line pt-4">
                            {p.dados.map((d) => (
                              <div
                                key={d.k}
                                className="flex items-baseline justify-between gap-4"
                              >
                                <dt className="mono-label text-2xs text-tinta/45">
                                  {d.k}
                                </dt>
                                <dd className="mono-label text-2xs text-tinta">
                                  {d.v}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        )}

                        <a
                          href={whatsappLink({ tipo: p.nome })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 self-start font-sans text-base font-medium text-sinal transition-transform duration-300 ease-steel hover:translate-x-1"
                        >
                          Pedir orçamento →
                        </a>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA final */}
        <section className="bg-grafite py-20 text-aluminio-luz">
          <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl font-display text-xl font-bold leading-tight md:text-2xl">
              Não achou a peça exata? É pra isso que existe a fábrica.
            </p>
            <a
              href={whatsappLink({ tipo: "uma peça sob medida" })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Rodape />
    </>
  );
}
