// Prefixa caminhos de assets com o basePath do deploy.
// Necessário para <img> puro (as camadas da Hero), pois o Next só aplica o
// basePath automaticamente em next/image, Link e _next/*.
// Vazio no dev e em hosts na raiz; "/siteexaustoor" no GitHub Pages.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
