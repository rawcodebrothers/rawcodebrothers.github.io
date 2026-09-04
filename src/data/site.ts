export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export type Service = {
  readonly name: string;
  readonly summary: string;
  readonly bullets: readonly string[];
};

export type Project = {
  readonly name: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly href: string;
  readonly status: "no ar" | "em construção";
};

export type Person = {
  readonly name: string;
  readonly role: string;
  readonly initials: string;
  readonly github: string;
  readonly avatar: string;
  readonly bio: readonly string[];
  readonly links: readonly NavLink[];
};

export const site = {
  name: "Raw Code Labs",
  tagline:
    "Building clean, efficient, and robust software. No noise, just raw code.",
  description:
    "Estúdio de software que constrói produtos sob medida para empresas e microempreendedores. Arquitetura moderna, código legível e entrega contínua.",
  email: "simao.msjr@gmail.com",
  github: "https://github.com/Raw-Code-Labs",
} as const;

export const navLinks: readonly NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Time", href: "#time" },
];

export const services: readonly Service[] = [
  {
    name: "Produto sob medida",
    summary:
      "Do primeiro rascunho ao ar. Descobrimos o problema, cortamos o escopo até o essencial e entregamos em ciclos curtos.",
    bullets: ["Descoberta e escopo", "Design de produto", "Entrega contínua"],
  },
  {
    name: "Backend e integrações",
    summary:
      "APIs, filas e integrações que aguentam carga real. Tipagem de ponta a ponta, testes automatizados e observabilidade desde o primeiro dia.",
    bullets: [
      "APIs e arquitetura orientada a eventos",
      "Integrações e pagamentos",
      "Testes e monitoramento",
    ],
  },
  {
    name: "Automação com IA",
    summary:
      "Classificação de documentos, extração de dados e fluxos que tiram o trabalho repetitivo da mão de quem produz.",
    bullets: [
      "Classificação de documentos",
      "Fluxos automatizados",
      "Onboarding e KYC",
    ],
  },
  {
    name: "Resgate de sistema",
    summary:
      "Assumimos o código que ninguém quer tocar. Cobrimos com testes, medimos o que quebra e voltamos a entregar sem susto.",
    bullets: ["Auditoria técnica", "Cobertura de testes", "Migração gradual"],
  },
];

export const projects: readonly Project[] = [
  {
    name: "Lojinha da Carlota",
    summary:
      "Loja de cosméticos com catálogo, carrinho e fechamento de pedido pelo WhatsApp. Feita para quem vende sozinha e não quer gerenciar checkout.",
    tags: ["SvelteKit", "TypeScript", "PostgreSQL"],
    href: "https://lojinhadacarlota.app/",
    status: "no ar",
  },
  {
    name: "Sunshine Contabilidade",
    summary:
      "Presença digital de um escritório contábil com mais de 500 clientes. Captação de contato e apresentação clara dos serviços.",
    tags: ["Astro", "TypeScript", "SEO"],
    href: "https://www.sunshinecontabilidade.com/",
    status: "no ar",
  },
  {
    name: "A Mente do Tatame",
    summary:
      "Plataforma de conteúdo sobre neurociência aplicada ao jiu-jitsu. Newsletter, acervo de artigos e venda de livros digitais.",
    tags: ["Conteúdo", "Newsletter", "Produtos digitais"],
    href: "https://amentedotatame.com/",
    status: "no ar",
  },
  {
    name: "Lumoki",
    summary:
      "Aplicativo de acompanhamento de saúde mental. Registro diário, leitura de padrões e lembretes que respeitam a rotina de quem usa.",
    tags: ["Expo", "TypeScript", "React Native"],
    href: "https://lumoki.app/",
    status: "em construção",
  },
];

export const team: readonly Person[] = [
  {
    name: "Simão Júnior",
    role: "Engenheiro de software, sócio",
    initials: "SJ",
    github: "simaojunior",
    avatar: "https://avatars.githubusercontent.com/u/29005352?v=4&s=160",
    bio: [
      "Engenheiro backend sênior em São Paulo. Trabalha com TypeScript, Node.js, Elixir e PostgreSQL há mais de cinco anos.",
      "Especializado em onboarding e KYC, classificação de documentos com IA e arquitetura orientada a eventos. Autodidata, ainda em treino.",
    ],
    links: [
      { label: "Site", href: "https://simaojunior.dev/" },
      { label: "GitHub", href: "https://github.com/simaojunior" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/simaojunior" },
    ],
  },
  {
    name: "Fabiano Leite",
    role: "Engenheiro de software, sócio",
    initials: "FL",
    github: "fabianoleittes",
    avatar: "https://avatars.githubusercontent.com/u/279344?v=4&s=160",
    bio: [
      "Engenheiro de software com mais de quinze anos de estrada, focado em arquitetura de sistemas.",
      "Faixa preta de jiu-jitsu e autor de A Mente do Tatame, onde aplica neurociência do aprendizado ao treino. A mesma disciplina que usa para depurar código.",
    ],
    links: [
      { label: "Site", href: "https://amentedotatame.com/" },
      { label: "GitHub", href: "https://github.com/fabianoleittes" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/fabianoleittes" },
    ],
  },
];

export type Phase = {
  readonly call: string;
  readonly title: string;
  readonly usual: string;
  readonly ours: string;
};

export const phases: readonly Phase[] = [
  {
    call: "init()",
    title: "Antes da primeira linha",
    usual:
      "Orçamento por chute e escopo que só existe na conversa. O preço muda no meio do caminho e ninguém sabe dizer quando termina.",
    ours: "Escopo escrito, com o que entra e o que fica de fora. Preço e prazo fechados antes de começar.",
  },
  {
    call: "build()",
    title: "Enquanto o produto cresce",
    usual:
      "Semanas de silêncio e um relatório que você não tem como verificar. Quando aparece algo para ver, mudar já saiu caro.",
    ours: "Ambiente no ar desde a primeira semana. Você usa o que já está pronto e corrige o rumo enquanto ainda é barato.",
  },
  {
    call: "ship()",
    title: "Depois que entra no ar",
    usual:
      "O código é entregue e o problema passa a ser seu. Sem testes e sem monitoramento, a falha aparece pela boca do cliente.",
    ours: "Testes automatizados e monitoramento de erros desde o primeiro dia. A gente descobre a falha antes de você.",
  },
];
