"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whatsappLink } from "@/lib/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Mode = "static" | "mobile" | "full";

// Anotações técnicas que passam DENTRO do túnel (copy do briefing).
const ANOTACOES = [
  "GRADE",
  "ALETA 0,8 mm",
  "EIXO INOX",
  "ROLAMENTO BLINDADO",
  "Ø 300 mm",
  "FLUXO CONTÍNUO",
];

export default function Hero() {
  const [mode, setMode] = useState<Mode>("static");
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLImageElement>(null);
  const telhadoRef = useRef<HTMLImageElement>(null);
  const gradeRef = useRef<HTMLImageElement>(null);
  const anelRef = useRef<HTMLImageElement>(null);
  const eixoRef = useRef<HTMLImageElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const exitLightRef = useRef<HTMLDivElement>(null);
  const exitLineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const annotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const progressRef = useRef(0);

  // Decide o modo apenas no cliente (evita mismatch de hidratação).
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowMem =
      typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory ===
        "number" &&
      (navigator as Navigator & { deviceMemory?: number }).deviceMemory! < 4;
    if (reduced || lowMem) {
      setMode("static");
      return;
    }
    setMode(window.innerWidth < 768 ? "mobile" : "full");
  }, []);

  const trackHeight = useMemo(() => {
    if (mode === "full") return "400vh";
    if (mode === "mobile") return "260vh";
    return "100svh";
  }, [mode]);

  // Timeline do scroll (só quando animado).
  useEffect(() => {
    if (mode === "static") return;
    const section = sectionRef.current;
    if (!section) return;

    const isMobile = mode === "mobile";
    const ctx = gsap.context(() => {
      // Estados iniciais (também servem de "repouso" p=0). Filtra nulos.
      const setSafe = (t: gsap.TweenTarget, v: gsap.TweenVars) => {
        const list = (Array.isArray(t) ? t : [t]).filter(Boolean);
        if (list.length) gsap.set(list, v);
      };
      setSafe([flashRef.current, exitLightRef.current, vignetteRef.current], {
        autoAlpha: 0,
      });
      setSafe(eixoRef.current, { autoAlpha: 0, scale: 0.3, z: -200 });
      setSafe(exitLineRef.current, { autoAlpha: 0, y: 30 });
      setSafe(annotRefs.current.filter(Boolean), { autoAlpha: 0, y: 14 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            progressRef.current = self.progress;
          },
        },
      });

      // Helper que ignora alvos nulos (evita "GSAP target null").
      const add = (
        target: Element | null,
        vars: gsap.TweenVars,
        pos: number,
      ) => {
        if (target) tl.to(target, vars, pos);
      };

      // ---- Rotação acelerando (o giro que vira disco contínuo) ----
      add(gradeRef.current, { rotation: 2600, ease: "power2.in", duration: 0.72 }, 0);
      if (!isMobile) {
        add(anelRef.current, { rotation: -3200, ease: "power2.in", duration: 0.72 }, 0);
      }

      // ---- Fundo: leve zoom + vinheta escurecendo ----
      add(skyRef.current, { scale: 1.18, duration: 0.7 }, 0.15);
      add(vignetteRef.current, { autoAlpha: 1, duration: 0.3 }, 0.4);

      // ---- Telhado: parallax e saída ----
      if (!isMobile) {
        add(telhadoRef.current, { yPercent: 24, autoAlpha: 0, duration: 0.35 }, 0.12);
      }

      // ---- Headline + hint somem no início ----
      add(
        headlineRef.current,
        { y: -40, filter: "blur(8px)", autoAlpha: 0, duration: 0.22, ease: "power1.in" },
        0.18,
      );
      add(scrollHintRef.current, { autoAlpha: 0, duration: 0.12 }, 0.16);

      // ---- Entrada: câmera avança pela grade ----
      add(
        gradeRef.current,
        { scale: 9, z: 520, autoAlpha: 0, duration: 0.3, ease: "power2.in" },
        0.4,
      );
      if (!isMobile) {
        add(
          anelRef.current,
          { scale: 13, z: 820, autoAlpha: 0, duration: 0.3, ease: "power2.in" },
          0.42,
        );
      }

      // ---- Interior: eixo + rolamento atravessam em Z ----
      if (!isMobile) {
        add(
          eixoRef.current,
          { scale: 5, z: 420, autoAlpha: 1, duration: 0.12, ease: "power1.out" },
          0.62,
        );
        add(
          eixoRef.current,
          { scale: 9, z: 760, autoAlpha: 0, duration: 0.12, ease: "power1.in" },
          0.76,
        );

        // Anotações técnicas piscando no túnel
        const base = 0.64;
        const step = 0.026;
        annotRefs.current.filter(Boolean).forEach((el, i) => {
          const t = base + i * step;
          add(el, { autoAlpha: 1, y: 0, duration: 0.014 }, t);
          add(el, { autoAlpha: 0, duration: 0.014 }, t + step * 0.7);
        });
      }

      // ---- Saída: flash branco + cross-fade para o claro ----
      add(flashRef.current, { autoAlpha: 0.9, duration: 0.02 }, 0.8);
      add(exitLightRef.current, { autoAlpha: 1, duration: 0.08 }, 0.8);
      add(flashRef.current, { autoAlpha: 0, duration: 0.05 }, 0.82);

      // ---- Do outro lado ----
      add(exitLineRef.current, { autoAlpha: 1, y: 0, duration: 0.1 }, 0.88);
    }, section);

    return () => ctx.revert();
  }, [mode]);

  // Partículas de ar (canvas leve) — só no modo full.
  useEffect(() => {
    if (mode !== "full") return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const N = 90;
    const parts = Array.from({ length: N }, () => spawn());

    function spawn() {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 40;
      return {
        angle,
        r,
        speed: 0.4 + Math.random() * 1.2,
        len: 6 + Math.random() * 20,
      };
    }

    function resize() {
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const p = progressRef.current;
      ctx.clearRect(0, 0, w, h);
      // Fluxo forte só na fase de entrada/interior (0.35–0.85)
      const intensity = Math.max(0, Math.min(1, (p - 0.32) / 0.4)) * (1 - Math.max(0, (p - 0.85) / 0.15));
      if (intensity > 0.01) {
        const cx = w / 2;
        const cy = h / 2;
        ctx.lineCap = "round";
        for (const pt of parts) {
          pt.r += pt.speed * (1 + intensity * 6);
          if (pt.r > Math.max(w, h) * 0.75) {
            pt.r = Math.random() * 30;
            pt.angle = Math.random() * Math.PI * 2;
          }
          const x1 = cx + Math.cos(pt.angle) * pt.r;
          const y1 = cy + Math.sin(pt.angle) * pt.r;
          const x2 = cx + Math.cos(pt.angle) * (pt.r - pt.len * (1 + intensity * 3));
          const y2 = cy + Math.sin(pt.angle) * (pt.r - pt.len * (1 + intensity * 3));
          const alpha = (pt.r / (Math.max(w, h) * 0.75)) * intensity * 0.5;
          ctx.strokeStyle = `rgba(201, 207, 212, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [mode]);

  const animated = mode !== "static";

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{ height: trackHeight }}
      className="relative bg-grafite"
      aria-label="Exaustoor — fabricação de peças de exaustão em alumínio"
    >
      <div
        ref={stageRef}
        className="sticky top-0 h-[100svh] w-full overflow-hidden bg-grafite"
        style={{ perspective: "1200px" }}
      >
        {/* camada 0 — céu/fundo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={skyRef}
          src="/img/hero/hero-fundo.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* vinheta */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(16,19,21,0.85)_100%)]" />

        {/* camada 1 — telhado (silhueta) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={telhadoRef}
          src="/img/hero/hero-telhado.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[55%] w-full object-cover [mask-image:linear-gradient(to_top,black_45%,transparent)]"
        />

        {/* Núcleo da turbina (camadas 3/4/5) */}
        <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
          {/* camada 4 — anel interno (gira contrário) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={anelRef}
            src="/img/hero/hero-anel.webp"
            alt=""
            aria-hidden="true"
            width={1400}
            height={1400}
            className="absolute h-[50svh] max-h-[50svh] w-auto max-w-[80vw] opacity-70 md:h-[64svh] md:max-h-[64svh] [will-change:transform]"
          />
          {/* camada 5 — eixo + rolamento (interior) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={eixoRef}
            src="/img/hero/hero-eixo.webp"
            alt=""
            aria-hidden="true"
            width={1400}
            height={1400}
            className="absolute h-[40svh] w-auto max-w-[70vw] opacity-0 [will-change:transform]"
          />
          {/* camada 3 — grade / turbina (elemento principal) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={gradeRef}
            src="/img/hero/hero-grade.webp"
            alt="Exaustor eólico de telhado em alumínio, visto de frente"
            width={1600}
            height={1600}
            fetchPriority="high"
            className="absolute h-[56svh] max-h-[56svh] w-auto max-w-[92vw] drop-shadow-[0_0_60px_rgba(255,90,31,0.10)] md:h-[72svh] md:max-h-[72svh] [will-change:transform]"
          />
        </div>

        {/* camada 6 — partículas de ar */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />

        {/* scrim inferior — garante legibilidade da headline no mobile */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-grafite via-grafite/70 to-transparent md:hidden" />

        {/* camada 7 — headline + CTA */}
        <div className="pointer-events-none absolute inset-0">
          <div className="shell flex h-full flex-col justify-end pb-24 md:pb-28">
            <div ref={headlineRef} className="max-w-3xl [will-change:transform,opacity]">
              <p className="mono-label mb-5 text-2xs text-aluminio/80">
                Fábrica em Guarulhos · SP
              </p>
              <h1 className="font-display text-[13vw] font-extrabold leading-[0.98] text-aluminio-luz sm:text-3xl md:text-3xl">
                O ar precisa de uma saída.
                <br />
                <span className="text-branco">A gente fabrica ela.</span>
              </h1>
              <p className="mt-6 max-w-xl font-sans text-base text-aluminio md:text-lg">
                Peças de ventilação e exaustão em alumínio. Fábrica própria em
                Guarulhos, desde peça de catálogo até a que ninguém tem.
              </p>
              <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
                <a href="#orcamento" className="btn-primary">
                  Pedir orçamento
                </a>
                <Link
                  href="/catalogo"
                  className="btn-ghost text-aluminio-luz hover:border-aluminio-luz"
                >
                  Ver o catálogo
                </Link>
              </div>
            </div>
          </div>

          {/* indicador de scroll */}
          {animated && (
            <div
              ref={scrollHintRef}
              className="absolute inset-x-0 bottom-6 flex justify-center"
            >
              <span className="mono-label flex items-center gap-2 text-2xs text-sinal">
                role para entrar
                <span className="inline-block animate-scroll-pulse">↓</span>
              </span>
            </div>
          )}
        </div>

        {/* anotações do túnel */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-[60svh] w-[60svh]">
            {ANOTACOES.map((txt, i) => {
              // Espalha as anotações em torno do centro
              const positions = [
                "left-0 top-6",
                "right-0 top-16",
                "left-8 bottom-10",
                "right-6 bottom-24",
                "left-1/2 top-0 -translate-x-1/2",
                "left-1/2 bottom-0 -translate-x-1/2",
              ];
              return (
                <span
                  key={txt}
                  ref={(el) => {
                    annotRefs.current[i] = el;
                  }}
                  className={`mono-label absolute text-2xs text-aluminio-luz/90 opacity-0 ${positions[i]}`}
                >
                  {txt}
                </span>
              );
            })}
          </div>
        </div>

        {/* camada 8 — flash branco */}
        <div
          ref={flashRef}
          className="pointer-events-none absolute inset-0 bg-branco opacity-0"
        />
        {/* cross-fade para o claro (outro lado) */}
        <div
          ref={exitLightRef}
          className="pointer-events-none absolute inset-0 bg-aluminio-luz opacity-0"
        >
          <div className="shell flex h-full items-center">
            <div ref={exitLineRef} className="max-w-2xl opacity-0">
              <p className="mono-label mb-4 text-2xs text-tinta/50">Saída do túnel</p>
              <p className="font-display text-xl font-bold leading-tight text-tinta md:text-2xl">
                Você acabou de atravessar uma peça nossa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
