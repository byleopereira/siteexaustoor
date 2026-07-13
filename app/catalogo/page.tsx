import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Rodape from "@/components/Rodape";
import Reveal from "@/components/Reveal";
import { familias, produtos } from "@/lib/catalog";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catálogo — Exaustoor | Peças de exaustão em alumínio",
  description:
    "Catálogo completo de peças de ventilação e exaustão em alumínio: terminais, chapéus, grelhas, difusores, dutos, portas de abrigo e exaustores. Guarulhos/SP.",
};

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="bg-aluminio-luz">
        {/* Cabeçalho da página */}
        <header className="bg-grafite pb-16 pt-32 text-aluminio-luz md:pb-24 md:pt-40">
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
              Cada peça sai da fábrica em Guarulhos. O que não está aqui, a gente
              desenha e fabrica sob medida.
            </p>
          </div>
        </header>

        {/* Grade de produtos */}
        <section className="section-pad">
          <div className="shell">
            <div className="grid gap-px border-l border-t tech-line sm:grid-cols-2 lg:grid-cols-3">
              {produtos.map((p, i) => (
                <Reveal
                  key={p.nome}
                  as="article"
                  delay={(i % 3) * 60}
                  className="group border-b border-r tech-line bg-branco"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-aluminio-luz">
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-steel group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="mono-label text-2xs text-tinta/40">{p.familia}</p>
                    <h2 className="mt-2 font-display text-lg font-bold text-tinta">
                      {p.nome}
                    </h2>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Famílias — resumo textual */}
        <section className="section-pad bg-branco">
          <div className="shell">
            <h2 className="font-display text-2xl font-extrabold text-tinta md:text-3xl">
              As 5 famílias de peça
            </h2>
            <div className="mt-12 grid gap-px border-t tech-line md:grid-cols-2">
              {familias.map((f) => (
                <Reveal key={f.id} className="border-t tech-line py-8 md:pr-10">
                  <div className="flex items-baseline gap-4">
                    <span className="mono-label text-2xs text-sinal">F{f.numero}</span>
                    <h3 className="font-display text-lg font-bold text-tinta">
                      {f.nome}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl font-sans text-base leading-relaxed text-tinta/70">
                    {f.descricao}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                    {f.pecas.map((peca) => (
                      <li
                        key={peca}
                        className="border tech-line px-3 py-1.5 font-sans text-xs text-tinta/70"
                      >
                        {peca}
                      </li>
                    ))}
                  </ul>
                  <p className="mono-label mt-5 text-2xs text-tinta/40">{f.spec}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

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
