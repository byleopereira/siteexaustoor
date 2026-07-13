// Conteúdo do catálogo — copy exata do briefing (02_COPY_EXAUSTOOR.md).
export type Familia = {
  id: string;
  numero: string;
  nome: string;
  descricao: string;
  pecas: string[];
  spec: string; // aparece no hover, em mono
  img: string;
  imgAlt: string;
};

export const familias: Familia[] = [
  {
    id: "terminais-chapeus",
    numero: "01",
    nome: "Terminais e chapéus",
    descricao:
      "A saída do ar no telhado. Protege da chuva, mantém a tiragem e não deixa o vento voltar.",
    pecas: ["Chapéu Chinês", "Chapéu Chinês Balanceado", "Terminal TEE Balanceado"],
    spec: "ALUMÍNIO · Ø SOB MEDIDA · BALANCEADO",
    img: "/img/produtos/chapeu-balanceado.webp",
    imgAlt: "Chapéu chinês balanceado em alumínio escovado",
  },
  {
    id: "grelhas-difusores",
    numero: "02",
    nome: "Grelhas e difusores",
    descricao:
      "Por onde o ar entra e sai do ambiente. Inclui as grelhas de deflexão usadas em pressurização de escada de emergência.",
    pecas: [
      "Grelha de ventilação com bandeira fixa",
      "Grelha de ventilação em PVC",
      "Grelha combinada com terminal",
      "Grelha de deflexão comando único",
      "Grelha de deflexão duplo comando",
      "Difusor regulável",
    ],
    spec: "DEFLEXÃO REGULÁVEL · PRESSURIZAÇÃO · ALUMÍNIO / PVC",
    img: "/img/produtos/grelha-deflexao.webp",
    imgAlt: "Grelha de deflexão de duplo comando em alumínio",
  },
  {
    id: "dutos-conexoes",
    numero: "03",
    nome: "Dutos e conexões",
    descricao:
      "O caminho do ar. Flexível para contornar o que estiver no meio, com abraçadeira que não solta.",
    pecas: [
      "Duto flexível alumínio",
      "Duto flexível poliéster",
      "Duto flexível poliéster aluminizado",
      "Abraçadeiras de fita",
      "Abraçadeiras especiais",
    ],
    spec: "FLEXÍVEL · MÚLTIPLOS DIÂMETROS · ALUMINIZADO",
    img: "/img/produtos/duto-flexivel.webp",
    imgAlt: "Duto flexível de alumínio aluminizado",
  },
  {
    id: "portas-guarnicoes",
    numero: "04",
    nome: "Portas, guarnições e carenagens",
    descricao:
      "Acabamento e acesso técnico. Abrigo de hidrante, quadro de telefonia, kit hidráulico — fechado com peça de alumínio, não com gambiarra.",
    pecas: [
      "Porta de abrigo",
      "Porta de abrigo com vidro para hidrante",
      "Porta guarnição para telefonia e elétrica",
      "Kit hidráulico",
      "Carenagem para kit hidráulico",
    ],
    spec: "ALUMÍNIO · SOB MEDIDA · ACABAMENTO DE OBRA",
    img: "/img/produtos/porta-abrigo.webp",
    imgAlt: "Porta de abrigo com moldura de alumínio e vidro",
  },
  {
    id: "exaustores",
    numero: "05",
    nome: "Exaustores",
    descricao: "Tira o ar viciado, a umidade e o cheiro do ambiente fechado.",
    pecas: ["Exaustor para banheiro"],
    spec: "INSTALAÇÃO EM PAREDE OU FORRO",
    img: "/img/produtos/exaustor-banheiro.webp",
    imgAlt: "Exaustor de banheiro compacto com grelha frontal",
  },
];

// Grid completo de produtos (página /catalogo)
export type Produto = { nome: string; familia: string; img: string; alt: string };

export const produtos: Produto[] = [
  { nome: "Chapéu Chinês", familia: "Terminais e chapéus", img: "/img/produtos/chapeu-chines.webp", alt: "Chapéu chinês em alumínio" },
  { nome: "Chapéu Chinês Balanceado", familia: "Terminais e chapéus", img: "/img/produtos/chapeu-balanceado.webp", alt: "Chapéu chinês balanceado em alumínio" },
  { nome: "Terminal TEE Balanceado", familia: "Terminais e chapéus", img: "/img/produtos/terminal-tee.webp", alt: "Terminal TEE balanceado em alumínio" },
  { nome: "Grelha de ventilação", familia: "Grelhas e difusores", img: "/img/produtos/grelha-ventilacao.webp", alt: "Grelha de ventilação com bandeira fixa" },
  { nome: "Grelha de deflexão", familia: "Grelhas e difusores", img: "/img/produtos/grelha-deflexao.webp", alt: "Grelha de deflexão para pressurização" },
  { nome: "Difusor regulável", familia: "Grelhas e difusores", img: "/img/produtos/difusor.webp", alt: "Difusor de ar regulável em alumínio" },
  { nome: "Duto flexível", familia: "Dutos e conexões", img: "/img/produtos/duto-flexivel.webp", alt: "Duto flexível de alumínio" },
  { nome: "Abraçadeiras", familia: "Dutos e conexões", img: "/img/produtos/abracadeira.webp", alt: "Conjunto de abraçadeiras metálicas" },
  { nome: "Porta de abrigo", familia: "Portas, guarnições e carenagens", img: "/img/produtos/porta-abrigo.webp", alt: "Porta de abrigo com vidro para hidrante" },
  { nome: "Exaustor de banheiro", familia: "Exaustores", img: "/img/produtos/exaustor-banheiro.webp", alt: "Exaustor de banheiro" },
];
