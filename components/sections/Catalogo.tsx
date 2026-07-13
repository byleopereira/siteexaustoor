import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { familias } from "@/lib/catalog";

export default function Catalogo() {
  return (
    <section id="catalogo" className="section-pad bg-branco">
      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold leading-[1.05] text-tinta md:text-3xl">
              O que sai da fábrica
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-tinta/70 md:text-lg">
              Peça de catálogo ou peça desenhada pro seu projeto. As duas coisas
              saem da mesma linha de produção.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px border-t border-l tech-line sm:grid-cols-2 lg:grid-cols-3">
          {familias.map((f, i) => (
            <Reveal
              key={f.id}
              delay={(i % 3) * 80}
              as="article"
              className="group flex flex-col border-b border-r tech-line bg-branco focus-within:bg-aluminio-luz/40 hover:bg-aluminio-luz/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-aluminio-luz">
                <Image
                  src={f.img}
                  alt={f.imgAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-steel group-hover:scale-[1.04]"
                />
                <span className="mono-label absolute left-4 top-4 text-2xs text-tinta/40">
                  F{f.numero}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-tinta">{f.nome}</h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-tinta/70">
                  {f.descricao}
                </p>
                <p
                  className="mono-label mt-5 text-2xs text-sinal opacity-0 transition-opacity duration-500 ease-steel group-focus-within:opacity-100 group-hover:opacity-100 motion-reduce:opacity-100"
                  aria-hidden="true"
                >
                  {f.spec}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Card de fechamento: leva ao catálogo completo */}
          <Reveal
            as="article"
            delay={160}
            className="flex flex-col justify-between border-b border-r tech-line bg-grafite p-6 text-aluminio-luz"
          >
            <p className="font-display text-lg font-bold leading-tight">
              Mais de 20 peças em catálogo — e as que ainda não existem.
            </p>
            <Link
              href="/catalogo"
              className="mt-8 inline-flex items-center gap-2 font-sans text-base font-medium text-sinal transition-transform duration-300 ease-steel hover:translate-x-1"
            >
              Ver catálogo completo →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
