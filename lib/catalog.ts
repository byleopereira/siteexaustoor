// Conteúdo do catálogo.
// - familias: usado na seção do catálogo na home (5 famílias representativas).
// - catalogo: catálogo completo (página /catalogo), com fotos reais + descrições
//   e dados técnicos oficiais da Exaustoor.

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
      "Acabamento e acesso técnico. Abrigo de hidrante, quadro de telefonia, kit hidráulico, fechado com peça de alumínio, não com gambiarra.",
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

// ---- Catálogo completo (fotos reais + descrições oficiais) ----
export type ProdutoCatalogo = {
  slug: string;
  nome: string;
  familia: string; // deve casar com Familia.nome
  img: string;
  descricao: string[];
  bullets?: string[];
  dados?: { k: string; v: string }[];
};

const acab = "Com acabamentos em alumínio natural, anodizado ou pintura eletrostática.";

export const catalogo: ProdutoCatalogo[] = [
  // ---------- Terminais e chapéus ----------
  {
    slug: "chapeu-chines",
    nome: "Chapéu Chinês",
    familia: "Terminais e chapéus",
    img: "/img/catalogo/chapeu-chines.webp",
    descricao: [
      "Terminal para chaminés, fabricado sob encomenda de acordo com as suas necessidades, seja para exaustão em aquecedores ou ventilação.",
      acab,
    ],
    dados: [
      { k: "Material", v: "Alumínio" },
      { k: "Resistente à corrosão", v: "Sim" },
      { k: "Inflamabilidade", v: "Incombustível" },
      { k: "Temperatura", v: "-40 °C a 200 °C" },
    ],
  },
  {
    slug: "chapeu-chines-balanceado",
    nome: "Chapéu Chinês Balanceado",
    familia: "Terminais e chapéus",
    img: "/img/catalogo/chapeu-chines-balanceado.webp",
    descricao: [
      "Terminal para chaminés do tipo chapéu chinês, balanceado, fabricado sob encomenda de acordo com as suas necessidades, seja para exaustão em aquecedores ou ventilação.",
      acab,
    ],
    dados: [
      { k: "Material", v: "Alumínio" },
      { k: "Resistente à corrosão", v: "Sim" },
      { k: "Inflamabilidade", v: "Incombustível" },
      { k: "Temperatura", v: "-40 °C a 200 °C" },
    ],
  },
  {
    slug: "terminal-tee",
    nome: "Terminal TEE",
    familia: "Terminais e chapéus",
    img: "/img/catalogo/terminal-tee.webp",
    descricao: [
      "Composto por uma aba e um gargalo em alumínio polido. Usado em fachadas como terminal da chaminé, impede o retorno dos gases queimados.",
      "Fabricado sob encomenda de acordo com as suas necessidades, seja para exaustão em aquecedores ou ventilação.",
      acab,
    ],
    dados: [
      { k: "Material", v: "Alumínio" },
      { k: "Temperatura", v: "-40 °C a 200 °C" },
      { k: "Resistente à corrosão", v: "Sim" },
      { k: "Inflamabilidade", v: "Incombustível" },
    ],
  },
  {
    slug: "terminal-tee-balanceado",
    nome: "Terminal TEE Balanceado",
    familia: "Terminais e chapéus",
    img: "/img/catalogo/terminal-tee-balanceado.webp",
    descricao: [
      "Composto por uma aba e um gargalo em alumínio polido, na versão balanceada. Usado em fachadas como terminal da chaminé, impede o retorno dos gases queimados.",
      "Fabricado sob encomenda de acordo com as suas necessidades, seja para exaustão em aquecedores ou ventilação.",
      acab,
    ],
    dados: [
      { k: "Material", v: "Alumínio" },
      { k: "Temperatura", v: "-40 °C a 200 °C" },
      { k: "Resistente à corrosão", v: "Sim" },
      { k: "Inflamabilidade", v: "Incombustível" },
    ],
  },

  // ---------- Grelhas e difusores ----------
  {
    slug: "grelha-deflexao-comando-unico",
    nome: "Grelha de deflexão comando único (pressurização)",
    familia: "Grelhas e difusores",
    img: "/img/catalogo/grelha-deflexao-comando-unico.webp",
    descricao: [
      "Grelha para insuflamento de ar de simples deflexão, com lâminas individualmente reguláveis que permitem o direcionamento desejado do ar no ambiente.",
      "Fabricada em perfis de alumínio extrudado, com acabamento padrão anodizado fosco natural, ou, quando solicitado, com pintura à base de epóxi-pó em cores sob consulta.",
    ],
    bullets: [
      "Construída em perfis de alumínio extrudado e anodizado fosco natural",
      "Aletas de deflexão ajustadas individualmente",
      "Cores: natural, branco ou preto (outras sob consulta)",
    ],
  },
  {
    slug: "grelha-ventilacao-bandeira-fixa",
    nome: "Grelha de ventilação com bandeira fixa",
    familia: "Grelhas e difusores",
    img: "/img/catalogo/grelha-ventilacao-bandeira-fixa.webp",
    descricao: [
      "Grelha para retorno de ar, com lâminas fixas no formato de vírgulas sobrepostas, para melhor aspiração do ar no ambiente. Pode ser fornecida com acessórios como registro de regulagem e captor de ar.",
      "Bandeiras fixas feitas sob medida, com tamanhos personalizados: melhor aproveitamento de espaço e economia no projeto e na instalação.",
    ],
    bullets: [
      "Aletas horizontais fixas para o retorno do ar",
      "Perfis de alumínio extrudado e anodizado fosco natural",
      "Cores: natural, branco ou preto (outras sob consulta)",
    ],
  },
  {
    slug: "grelha-ventilacao-plena",
    nome: "Grelha de ventilação plena",
    familia: "Grelhas e difusores",
    img: "/img/catalogo/grelha-ventilacao-plena.webp",
    descricao: [
      "Grelha plena para retorno de ar, com lâminas fixas no formato de vírgulas sobrepostas, para melhor aspiração do ar no ambiente. Pode ser fornecida com acessórios como registro de regulagem e captor de ar.",
      "Fabricada em perfis de alumínio extrudado, com acabamento padrão anodizado fosco natural, ou, quando solicitado, com pintura à base de epóxi-pó em cores sob consulta.",
    ],
    bullets: [
      "Aletas horizontais fixas para o retorno do ar",
      "Perfis de alumínio extrudado e anodizado fosco natural",
      "Cores: natural, branco ou preto (outras sob consulta)",
    ],
  },
  {
    slug: "difusor-regulavel",
    nome: "Difusor regulável",
    familia: "Grelhas e difusores",
    img: "/img/catalogo/difusor-regulavel.webp",
    descricao: [
      "Indicado para insuflamento ou exaustão de ar em sistemas de ventilação e climatização.",
      "De fácil instalação: sistema simples e prático de fixação por molas. O colarinho se encaixa diretamente no tubo flexível, agilizando a montagem.",
      "Pode ser instalado em forros de gesso, isopor, lã de vidro, madeira e plástico.",
    ],
  },

  // ---------- Dutos e conexões ----------
  {
    slug: "duto-flexivel-aluminio",
    nome: "Duto flexível alumínio",
    familia: "Dutos e conexões",
    img: "/img/catalogo/duto-flexivel-aluminio.webp",
    descricao: [
      "Confeccionado em alumínio com cravação especial, o que o torna muito resistente e flexível. Para sistemas de baixa e média pressão.",
      "Disponível em rolos de Ø 63 a 203 mm, com até 3 m esticado e 1 m compactado. Aceita emendas e curvas sem obstruir a passagem do ar.",
    ],
    dados: [
      { k: "Temperatura máx. de trabalho", v: "250 °C" },
      { k: "Velocidade máx. do ar", v: "25 m/s" },
      { k: "Pressão de trabalho", v: "máx. 250 / mín. -200 mmca" },
      { k: "Comprimento máx. sem emenda", v: "3 m" },
    ],
  },
  {
    slug: "duto-flexivel-poliester",
    nome: "Duto flexível poliéster",
    familia: "Dutos e conexões",
    img: "/img/catalogo/duto-flexivel-poliester.webp",
    descricao: [
      "Duto flexível em plástico branco, indicado para instalação em coifas ou depuradores.",
    ],
    dados: [
      { k: "Diâmetro", v: "150 mm" },
      { k: "Comprimento", v: "3 m" },
      { k: "Material", v: "PVC" },
      { k: "Cor", v: "Branca" },
    ],
  },
  {
    slug: "duto-flexivel-poliester-aluminizado",
    nome: "Duto flexível poliéster aluminizado",
    familia: "Dutos e conexões",
    img: "/img/catalogo/duto-flexivel-poliester-aluminizado.webp",
    descricao: [
      "Confeccionado em alumínio e poliéster, com espiral em aço carbono cobreado: não deforma e é anticorrosivo. Para sistemas de baixa e média pressão.",
      "Aceita emendas e curvas sem obstruir a passagem do ar.",
    ],
    dados: [
      { k: "Temperatura máx. de trabalho", v: "140 °C" },
      { k: "Velocidade máx. do ar", v: "25 m/s" },
      { k: "Pressão de trabalho", v: "máx. 300 / mín. -30 mmca" },
      { k: "Comprimento máx. sem emenda", v: "10 m" },
    ],
  },
  {
    slug: "abracadeiras-fita",
    nome: "Abraçadeiras de fita",
    familia: "Dutos e conexões",
    img: "/img/catalogo/abracadeiras-fita.webp",
    descricao: [
      "Recomendadas para mangueiras de material semirrígido, pela alta capacidade de aperto, e também para materiais macios, por não ter perfurações na fita.",
      "Projeto versátil e design europeu: o deslocamento lateral da rosca e a otimização do centro de força proporcionam um aperto radial homogêneo.",
    ],
  },
  {
    slug: "abracadeiras-especiais",
    nome: "Abraçadeiras especiais",
    familia: "Dutos e conexões",
    img: "/img/catalogo/abracadeiras-especiais.webp",
    descricao: [
      "Fabricadas sob encomenda de acordo com as suas necessidades, para suporte e fixação de dutos flexíveis com segurança.",
      acab,
    ],
  },

  // ---------- Portas, guarnições e carenagens ----------
  {
    slug: "porta-abrigo",
    nome: "Porta de abrigo",
    familia: "Portas, guarnições e carenagens",
    img: "/img/catalogo/porta-abrigo.webp",
    descricao: [
      "Portinhola de abrir, veneziana ventilada, de 2 folhas, ideal para proporcionar ventilação adequada ao ambiente.",
      "Possui parafusos e chumbadores de aço inox, além de fecho de alumínio, oferecendo maior durabilidade.",
    ],
    dados: [
      { k: "Material", v: "Alumínio" },
      { k: "Cor", v: "Natural" },
      { k: "Peso", v: "3,45 kg" },
    ],
  },
  {
    slug: "porta-abrigo-vidro-hidrante",
    nome: "Porta de abrigo com vidro para hidrante",
    familia: "Portas, guarnições e carenagens",
    img: "/img/catalogo/porta-abrigo-vidro-hidrante.webp",
    descricao: [
      "Porta de abrigo para hidrante em vidro temperado jateado, com cantos vivos.",
      "Tamanho e desenho personalizados para integrar a decoração de cada ambiente.",
    ],
  },
  {
    slug: "porta-guarnicao-telefonia-eletrica",
    nome: "Porta guarnição para telefonia e elétrica",
    familia: "Portas, guarnições e carenagens",
    img: "/img/catalogo/porta-guarnicao-telefonia-eletrica.webp",
    descricao: [
      "Desenvolvida para proporcionar ventilação adequada e integração com a decoração do ambiente.",
      "Uma forma discreta e moderna de acabamento. " + acab,
    ],
  },
  {
    slug: "kit-hidraulico",
    nome: "Kit hidráulico",
    familia: "Portas, guarnições e carenagens",
    img: "/img/catalogo/kit-hidraulico.webp",
    descricao: [
      "Armação em alumínio, feita sob encomenda, para sustentação e suporte de sistema hidráulico e encanamentos.",
      "Perfeito para padronizar e simplificar instalações em prédios residenciais e comerciais.",
    ],
  },
  {
    slug: "carenagem-kit-hidraulico",
    nome: "Carenagem para kit hidráulico",
    familia: "Portas, guarnições e carenagens",
    img: "/img/catalogo/carenagem-kit-hidraulico.webp",
    descricao: [
      "Em conjunto com o kit hidráulico, faz o acabamento de forma simples e rápida.",
      acab,
    ],
  },

  // ---------- Exaustores ----------
  {
    slug: "exaustor-banheiro",
    nome: "Exaustor para banheiro",
    familia: "Exaustores",
    img: "/img/catalogo/exaustor-banheiro.webp",
    descricao: [
      "Ideal para instalação no teto ou parede, com uso direto ou por duto flexível e grade externa. Serve em gesso ou laje.",
      "Ótimo acabamento, baixíssimo ruído e fácil instalação. Indicado para lavabos, banheiros, salas, quartos, closets, escritórios, consultórios, lojas, provadores e garagens.",
    ],
    dados: [
      { k: "Vazão (descarga livre)", v: "185 m³/h" },
      { k: "Nível de ruído", v: "45 dBA" },
      { k: "Pressão", v: "50 a 60 Pa" },
      { k: "Potência (descarga livre)", v: "20 W" },
      { k: "Velocidade", v: "2500 rpm" },
      { k: "Ø do flexível", v: "120 mm" },
      { k: "Proteção", v: "IP44" },
      { k: "Garantia", v: "1 ano contra defeito de fabricação" },
    ],
  },
];
