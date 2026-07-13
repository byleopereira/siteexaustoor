import type { Metadata, Viewport } from "next";
import { Archivo, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exaustoor · Fabricação de peças de exaustão em alumínio | Guarulhos-SP",
  description:
    "Fábrica de peças de ventilação e exaustão em alumínio: chapéu chinês, terminal TEE, grelhas de pressurização, dutos e peças sob encomenda. Guarulhos/SP.",
  keywords: [
    "terminal tee balanceado",
    "chapéu chinês alumínio",
    "grelha de deflexão pressurização",
    "peças de exaustão sob medida",
    "duto flexível alumínio",
  ],
  openGraph: {
    title: "Exaustoor · Fabricação de peças de exaustão em alumínio",
    description:
      "Peças de ventilação e exaustão em alumínio. Fábrica própria em Guarulhos, do catálogo à peça sob medida.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#101315",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${interTight.variable} ${plexMono.variable}`}
    >
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-sinal focus:px-4 focus:py-2 focus:text-branco"
        >
          Pular para o conteúdo
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
