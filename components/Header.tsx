"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

const NAV = [
  { href: "/#catalogo", label: "Catálogo" },
  { href: "/#sob-medida", label: "Sob medida" },
  { href: "/#normas", label: "Normas" },
  { href: "/#orcamento", label: "Orçamento" },
];

type Variant = "top" | "hidden" | "solid";

export default function Header() {
  // "top": transparente sobre o escuro · "hidden": some no flythrough · "solid": claro
  const [variant, setVariant] = useState<Variant>("top");

  useEffect(() => {
    const compute = () => {
      const hero = document.getElementById("hero");
      const vh = window.innerHeight;
      const y = window.scrollY;
      if (hero) {
        const track = hero.offsetHeight - vh;
        if (track > 100) {
          // Home com Hero animada: some durante a travessia, volta sólido no fim.
          const p = y / track;
          setVariant(y < vh * 0.12 ? "top" : p >= 0.78 ? "solid" : "hidden");
          return;
        }
        // Hero estática (reduced-motion / low-mem)
        setVariant(y > vh * 0.55 ? "solid" : "top");
        return;
      }
      // Páginas sem Hero (ex.: /catalogo, com cabeçalho escuro no topo)
      setVariant(y > 220 ? "solid" : "top");
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const solid = variant === "solid";
  const hidden = variant === "hidden";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,transform,opacity,border-color] duration-500 ease-steel ${
        hidden ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${
        solid
          ? "border-b border-aluminio/40 bg-aluminio-luz/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <Link
          href="/"
          className={`mono-label text-sm font-medium tracking-[0.2em] transition-colors ${
            solid ? "text-tinta" : "text-aluminio-luz"
          }`}
        >
          EXAUSTOOR
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-sans text-xs transition-colors hover:text-sinal ${
                solid ? "text-tinta/80" : "text-aluminio"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-btn px-4 py-2 font-sans text-xs font-medium transition-colors ${
            solid
              ? "bg-grafite text-aluminio-luz hover:bg-tinta"
              : "border border-aluminio/50 text-aluminio-luz hover:border-aluminio-luz"
          }`}
        >
          {site.telefone}
        </a>
      </div>
    </header>
  );
}
