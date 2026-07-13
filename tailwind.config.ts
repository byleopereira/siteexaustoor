import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // Design system "Aço e Ar" — tokens exatos do briefing. Sem cores default do Tailwind na UI.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      grafite: "#101315",
      "grafite-2": "#1B2024",
      aluminio: "#C9CFD4",
      "aluminio-luz": "#EEF1F3",
      branco: "#FFFFFF",
      tinta: "#0C0F11",
      sinal: "#FF5A1F",
      "azul-tecnico": "#2E5C8A",
    },
    fontFamily: {
      display: ["var(--font-archivo)", "system-ui", "sans-serif"],
      sans: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
    },
    // Escala tipográfica do briefing: 12 / 14 / 16 / 20 / 28 / 40 / 64 / 96
    fontSize: {
      "2xs": ["0.75rem", { lineHeight: "1.4" }], // 12
      xs: ["0.875rem", { lineHeight: "1.5" }], // 14
      base: ["1rem", { lineHeight: "1.6" }], // 16
      lg: ["1.25rem", { lineHeight: "1.5" }], // 20
      xl: ["1.75rem", { lineHeight: "1.2" }], // 28
      "2xl": ["2.5rem", { lineHeight: "1.1" }], // 40
      "3xl": ["4rem", { lineHeight: "1.05" }], // 64
      "4xl": ["6rem", { lineHeight: "1.0" }], // 96
    },
    extend: {
      maxWidth: {
        shell: "1280px",
      },
      borderRadius: {
        // Chapa dobrada, não plástico. Radius só em botões: 2px.
        none: "0",
        btn: "2px",
      },
      letterSpacing: {
        mono: "0.08em",
      },
      spacing: {
        section: "120px",
        "section-sm": "72px",
      },
      transitionTimingFunction: {
        steel: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "scroll-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(4px)" },
        },
      },
      animation: {
        "scroll-pulse": "scroll-pulse 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
