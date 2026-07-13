import Reveal from "@/components/Reveal";

const FATOS = [
  { dado: "Fábrica própria", rotulo: "Guarulhos · SP" },
  { dado: "20+ peças", rotulo: "em catálogo" },
  { dado: "Sob encomenda", rotulo: "peça fora do padrão em dias" },
  { dado: "Alumínio · aço · PVC", rotulo: "materiais que trabalhamos" },
];

export default function Fatos() {
  return (
    <section className="bg-aluminio-luz pb-[72px] md:pb-section">
      <div className="shell">
        <div className="grid grid-cols-1 gap-px border-t tech-line sm:grid-cols-2 lg:grid-cols-4">
          {FATOS.map((f, i) => (
            <Reveal
              key={f.dado}
              delay={i * 80}
              className="border-t tech-line pt-6 sm:border-t-0 lg:pr-8"
            >
              <p className="font-display text-xl font-bold leading-tight text-tinta md:text-2xl">
                {f.dado}
              </p>
              <p className="mono-label mt-3 text-2xs text-tinta/50">{f.rotulo}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
