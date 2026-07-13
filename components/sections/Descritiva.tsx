import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

export default function Descritiva() {
  return (
    <section id="conteudo" className="section-pad bg-aluminio-luz">
      <div className="shell">
        <Reveal>
          <p className="mono-label mb-6 text-2xs text-tinta/50">Saída do túnel</p>
          <h2 className="max-w-4xl font-display text-2xl font-extrabold leading-[1.05] text-tinta md:text-3xl">
            Você acabou de atravessar uma peça nossa.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={80}>
            <p className="font-sans text-base leading-relaxed text-tinta/80 md:text-lg">
              A Exaustoor projeta e fabrica peças de exaustão, ventilação e
              pressurização em alumínio. Chapéu chinês, terminal TEE, grelhas,
              difusores, dutos flexíveis, portas de abrigo. Tudo sai da nossa
              fábrica em Guarulhos.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5" delay={160}>
            <p className="font-sans text-base leading-relaxed text-tinta/80 md:text-lg">
              A diferença é simples: quando o projeto pede uma peça que o mercado
              não estoca (diâmetro fora do padrão, ângulo estranho, chapa mais
              grossa), a gente não pede pra você mudar o projeto.{" "}
              <span className="text-tinta">A gente fabrica a peça.</span>
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-sans text-base font-medium text-sinal transition-transform duration-300 ease-steel hover:translate-x-1"
            >
              Falar com a fábrica →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
