"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";

const OPCOES = [
  "Peça de catálogo",
  "Peça sob medida",
  "Pressurização",
  "Não sei ainda",
];

type Status = "idle" | "sucesso" | "erro";

export default function Orcamento() {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [tipo, setTipo] = useState(OPCOES[0]);
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!whats.trim()) {
      setStatus("erro");
      return;
    }
    const link = whatsappLink({
      tipo,
      descricao: descricao || `WhatsApp do cliente: ${whats}`,
      nome,
    });
    setStatus("sucesso");
    window.open(link, "_blank", "noopener,noreferrer");
  }

  const campo =
    "w-full rounded-btn border border-aluminio/25 bg-grafite px-4 py-3 font-sans text-base text-aluminio-luz placeholder:text-aluminio/40 focus:border-sinal focus:outline-none";

  return (
    <section id="orcamento" className="section-pad bg-grafite-2 text-aluminio-luz">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-2xl font-extrabold leading-[1.08] md:text-3xl">
            Diga o que você precisa. A gente responde com prazo e preço.
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-aluminio md:text-lg">
            Se tiver o desenho ou a medida, melhor ainda. Se não tiver, a gente
            ajuda a definir.
          </p>
          <a
            href={`tel:+${site.telefoneDigits}`}
            className="mono-label mt-8 inline-block text-sm text-aluminio-luz underline decoration-sinal decoration-2 underline-offset-4"
          >
            {site.telefone}
          </a>
        </div>

        <form onSubmit={enviar} className="lg:col-span-7" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mono-label mb-2 block text-2xs text-aluminio/60">
                Nome ou empresa *
              </span>
              <input
                className={campo}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                autoComplete="name"
                placeholder="Seu nome ou a empresa"
              />
            </label>
            <label className="block">
              <span className="mono-label mb-2 block text-2xs text-aluminio/60">
                WhatsApp *
              </span>
              <input
                className={campo}
                value={whats}
                onChange={(e) => {
                  setWhats(e.target.value);
                  if (status === "erro") setStatus("idle");
                }}
                required
                inputMode="tel"
                autoComplete="tel"
                aria-invalid={status === "erro"}
                placeholder="(11) 90000-0000"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mono-label mb-2 block text-2xs text-aluminio/60">
              O que você precisa?
            </span>
            <select
              className={campo}
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              {OPCOES.map((o) => (
                <option key={o} value={o} className="bg-grafite text-aluminio-luz">
                  {o}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block">
            <span className="mono-label mb-2 block text-2xs text-aluminio/60">
              Descrição / medidas (opcional)
            </span>
            <textarea
              className={`${campo} min-h-28 resize-y`}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Diâmetro, quantidade, ângulo, material… o que você já souber."
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn-primary">
              Enviar pelo WhatsApp
            </button>
            <p
              role="status"
              aria-live="polite"
              className={`font-sans text-base ${
                status === "erro"
                  ? "text-sinal"
                  : status === "sucesso"
                    ? "text-aluminio"
                    : "sr-only"
              }`}
            >
              {status === "sucesso" && "Pronto, abrimos o WhatsApp pra você."}
              {status === "erro" &&
                "Faltou o WhatsApp. Sem ele não conseguimos te responder."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
