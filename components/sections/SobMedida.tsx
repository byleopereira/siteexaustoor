import Image from "next/image";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

const BULLETS = [
  "Alumínio, aço galvanizado, aço inox e PVC",
  "Terminais, joelhos, reduções, chapas de fechamento, suportes",
  "Desenho técnico ou medida no papel, os dois servem",
  "Preço e prazo diferenciados para CNPJ e pedidos recorrentes",
];

export default function SobMedida() {
  return (
    <section id="sob-medida" className="section-pad bg-grafite text-aluminio-luz">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mono-label mb-6 text-2xs text-sinal">
            Peças especiais sob encomenda
          </p>
          <h2 className="font-display text-2xl font-extrabold leading-[1.05] md:text-3xl">
            Quando o mercado não tem, a gente faz.
          </h2>
          <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-aluminio md:text-lg">
            <p>
              Nem todo projeto cabe no catálogo do distribuidor. Diâmetro que não
              existe, ângulo que ninguém dobra, chapa que precisa ser mais grossa
              por causa da temperatura.
            </p>
            <p>
              A gente tem a máquina e a mão de obra aqui dentro. Você manda o
              desenho ou a medida, e a peça sai em dias, não em semanas.
            </p>
          </div>

          <ul className="mt-8 space-y-3 border-t border-aluminio/20 pt-8">
            {BULLETS.map((b) => (
              <li key={b} className="flex gap-3 font-sans text-base text-aluminio">
                <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-sinal" />
                {b}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink({ tipo: "uma peça sob medida" })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10"
          >
            Mandar meu desenho pelo WhatsApp
          </a>
        </Reveal>

        <Reveal delay={120}>
          <figure className="relative aspect-[4/3] w-full overflow-hidden border border-aluminio/15">
            <Image
              src="/img/ambiente/fabrica-dobra.webp"
              alt="Chapa de alumínio sendo dobrada em uma dobradeira dentro da fábrica"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <figcaption className="mono-label absolute bottom-3 left-3 text-2xs text-aluminio-luz/80">
              Dobra de chapa · fábrica própria
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
