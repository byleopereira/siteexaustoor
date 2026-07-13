/** @type {import('next').NextConfig} */
// basePath vem de NEXT_PUBLIC_BASE_PATH (setado no deploy do GitHub Pages, ex.: /siteexaustoor).
// Vazio no dev e em hosts na raiz (Vercel / domínio próprio).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export", // gera site estático em /out para o GitHub Pages
  reactStrictMode: true,
  trailingSlash: true, // /catalogo -> /catalogo/index.html (roteamento no Pages)
  images: {
    unoptimized: true, // Pages não tem o otimizador do Next; as imagens já são WebP <=250KB
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
