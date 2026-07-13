import Reveal from "@/components/Reveal";

const PUBLICOS = [
  {
    nome: "Construtora",
    texto:
      "Volume, prazo de obra e peça de pressurização conforme o projeto do bombeiro. Tabela B2B mediante cadastro.",
  },
  {
    nome: "Condomínio",
    texto:
      "Reposição de grelha, terminal e duto sem precisar reformar o prédio inteiro.",
  },
  {
    nome: "Instalador",
    texto:
      "Peça pronta ou fora do padrão, rápido. Você não perde a obra esperando fornecedor.",
  },
  {
    nome: "Residência",
    texto: "Exaustor de banheiro, chapéu chinês, grelha. Peça certa, medida certa.",
  },
];

export default function Publicos() {
  return (
    <section className="section-pad bg-aluminio-luz">
      <div className="shell">
        <Reveal>
          <h2 className="max-w-3xl font-display text-2xl font-extrabold leading-[1.05] text-tinta md:text-3xl">
            Da obra grande ao banheiro de casa.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px border-t tech-line md:grid-cols-2 lg:grid-cols-4">
          {PUBLICOS.map((p, i) => (
            <Reveal
              key={p.nome}
              delay={i * 70}
              className="border-t tech-line pt-6 lg:pr-8"
            >
              <h3 className="font-display text-lg font-bold text-tinta">{p.nome}</h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-tinta/70">
                {p.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
