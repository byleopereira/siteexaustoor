import Image from "next/image";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

export default function Normas() {
  return (
    <section id="normas" className="section-pad bg-aluminio-luz">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="mono-label mb-6 inline-block border-l-2 border-azul-tecnico pl-3 text-2xs text-azul-tecnico">
            Pressurização de escadas
          </p>
          <h2 className="font-display text-2xl font-extrabold leading-[1.08] text-tinta md:text-3xl">
            Grelha de deflexão não é detalhe. É o que o bombeiro vai olhar.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 font-sans text-base leading-relaxed text-tinta/80 md:text-lg">
            <p>
              A pressurização da escada de emergência é o que mantém a rota de
              fuga livre de fumaça. Fabricamos as grelhas de deflexão de comando
              único e duplo comando usadas nesses sistemas, no diâmetro e na vazão
              que o projeto exigir.
            </p>
            <p className="text-tinta">
              Se o seu projetista mandou a especificação, a gente fabrica em cima
              dela.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["COMANDO ÚNICO", "DUPLO COMANDO", "Ø E VAZÃO DO PROJETO"].map((t) => (
              <span
                key={t}
                className="mono-label border border-azul-tecnico/40 px-3 py-1.5 text-2xs text-azul-tecnico"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={whatsappLink({ tipo: "grelha de deflexão para pressurização" })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10"
          >
            Enviar especificação do projeto
          </a>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={120}>
          <figure className="relative aspect-[4/3] w-full overflow-hidden border tech-line bg-aluminio-luz">
            <Image
              src="/img/produtos/grelha-deflexao.webp"
              alt="Grelha de deflexão de duplo comando usada em pressurização de escadas"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
