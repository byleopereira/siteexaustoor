import Reveal from "@/components/Reveal";

const PERGUNTAS = [
  {
    q: "Vocês vendem para pessoa física?",
    a: "Sim. Do exaustor de banheiro à peça sob encomenda, atendemos residência, condomínio, instalador e construtora.",
  },
  {
    q: "Fabricam peça fora do padrão?",
    a: "Essa é a nossa especialidade. Mande a medida ou o desenho pelo WhatsApp e retornamos com prazo e preço.",
  },
  {
    q: "Qual o prazo de uma peça especial?",
    a: "Depende da complexidade, mas trabalhamos em dias, não em semanas. O prazo exato vai junto com o orçamento.",
  },
  {
    q: "Vocês instalam?",
    a: "Nosso forte é fabricar. Para instalação, orientamos e indicamos o caminho técnico correto.",
  },
  {
    q: "Atendem fora de São Paulo?",
    a: "Sim, com envio. A fábrica fica em Guarulhos/SP e despachamos para todo o Brasil.",
  },
];

export default function FAQ() {
  return (
    <section className="section-pad bg-aluminio-luz">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="mono-label mb-6 text-2xs text-tinta/50">Perguntas frequentes</p>
            <h2 className="font-display text-2xl font-extrabold leading-[1.05] text-tinta md:text-3xl">
              Antes de você perguntar.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t tech-line">
            {PERGUNTAS.map((p) => (
              <details
                key={p.q}
                className="group border-b tech-line py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-tinta">
                  {p.q}
                  <span
                    aria-hidden
                    className="mono-label shrink-0 text-xl text-sinal transition-transform duration-300 ease-steel group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-tinta/70">
                  {p.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
