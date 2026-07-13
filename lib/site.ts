// Dados reais da empresa (fonte: site atual exaustoor.com.br + briefing).
export const site = {
  nome: "Exaustoor",
  descricao:
    "Desenvolvimento e fabricação de peças especiais em alumínio para ventilação e exaustão.",
  telefone: "11 4372-9891",
  telefoneDigits: "551143729891",
  endereco: {
    rua: "Rua Amador Bueno, 212, Jardim Munhoz",
    cidade: "Guarulhos/SP",
    cep: "CEP 07042-230",
  },
  cnpj: "00.000.000/0001-00", // placeholder — substituir pelo CNPJ real
} as const;

/**
 * Monta um link do WhatsApp com mensagem pré-preenchida.
 * Modelo: "Olá! Vim pelo site. Preciso de: [tipo]. Detalhes: [descrição]. Meu nome: [nome]."
 */
export function whatsappLink(params?: {
  tipo?: string;
  descricao?: string;
  nome?: string;
}): string {
  const tipo = params?.tipo?.trim() || "uma peça de exaustão";
  const partes = [`Olá! Vim pelo site. Preciso de: ${tipo}.`];
  if (params?.descricao?.trim()) partes.push(`Detalhes: ${params.descricao.trim()}.`);
  if (params?.nome?.trim()) partes.push(`Meu nome: ${params.nome.trim()}.`);
  const texto = encodeURIComponent(partes.join(" "));
  return `https://wa.me/${site.telefoneDigits}?text=${texto}`;
}
