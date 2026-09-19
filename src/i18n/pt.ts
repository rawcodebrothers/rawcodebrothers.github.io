import type { Content } from "@/i18n/types";

export const pt: Content = {
  htmlLang: "pt-BR",
  label: "Português",
  meta: {
    title: "Raw Code Brothers — Software sob medida",
    description:
      "Estúdio de software que constrói produtos sob medida para empresas e microempreendedores. Arquitetura moderna, código legível e entrega contínua.",
    ogImage: "/og.png",
    ogLocale: "pt_BR",
  },
  ui: {
    skipToContent: "Pular para o conteúdo",
    primaryNav: "Principal",
    home: "início",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    contact: "FALAR COM O TIME",
    seeProjects: "VER PROJETOS",
    statusLive: "no ar",
    statusBuilding: "em construção",
    usualWay: "Como costuma ser",
    ourWay: "Com a",
    switchTo: "English",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Projetos", href: "#projetos" },
    { label: "Time", href: "#time" },
  ],
  hero: {
    eyebrow: "Software de alto nível",
    titleLead: "Software sob medida, escrito por quem",
    titleAccent: "lê o código depois.",
    body: [
      "Construímos produtos para empresas e microempreendedores.",
      "Arquitetura moderna, tipagem de ponta a ponta e testes automatizados.",
    ],
    bodyStrong: "Sem ruído, só código.",
  },
  sections: {
    services: {
      eyebrow: "Serviços",
      title: "O que a gente entrega",
      lead: "Quatro frentes de trabalho. Cada projeto usa uma ou várias, conforme o problema exige.",
    },
    process: {
      eyebrow: "Processo",
      title: "Como a gente trabalha",
      lead: "Três fases, do primeiro contato ao produto no ar. De um lado o jeito de sempre, do outro o nosso.",
    },
    projects: {
      eyebrow: "Projetos",
      title: "O que já está rodando",
      lead: "Produtos que construímos e mantemos. Alguns para clientes, outros nossos.",
    },
    team: {
      eyebrow: "Time",
      title: "Quem está por trás",
      lead: "Dois engenheiros com mais de vinte anos somados de código em produção. Você fala direto com quem escreve.",
    },
  },
  services: [
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
  ],
  phases: [
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
  ],
  projects: [
    {
      name: "Lojinha da Carlota",
      summary:
        "Loja de cosméticos com catálogo, carrinho e fechamento de pedido pelo WhatsApp. Feita para quem vende sozinha e não quer gerenciar checkout.",
      tags: ["SvelteKit", "TypeScript", "PostgreSQL"],
      href: "https://lojinhadacarlota.app/",
      live: true,
    },
    {
      name: "Sunshine Contabilidade",
      summary:
        "Presença digital de um escritório contábil com mais de 500 clientes. Captação de contato e apresentação clara dos serviços.",
      tags: ["Astro", "TypeScript", "SEO"],
      href: "https://www.sunshinecontabilidade.com/",
      live: true,
    },
    {
      name: "A Mente do Tatame",
      summary:
        "Plataforma de conteúdo sobre neurociência aplicada ao jiu-jitsu. Newsletter, acervo de artigos e venda de livros digitais.",
      tags: ["Conteúdo", "Newsletter", "Produtos digitais"],
      href: "https://amentedotatame.com/",
      live: true,
    },
    {
      name: "Lumoki",
      summary:
        "Aplicativo de acompanhamento de saúde mental. Registro diário, leitura de padrões e lembretes que respeitam a rotina de quem usa.",
      tags: ["Expo", "TypeScript", "React Native"],
      href: "https://lumoki.app/",
      live: false,
    },
  ],
  team: [
    {
      name: "Simão Júnior",
      role: "Engenheiro de software, sócio",
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
      github: "fabianoleittes",
      avatar: "https://avatars.githubusercontent.com/u/279344?v=4&s=160",
      bio: [
        "Engenheiro de software com mais de quinze anos de estrada, focado em arquitetura de sistemas.",
        "Faixa preta de jiu-jitsu e autor de A Mente do Tatame, onde aplica neurociência do aprendizado ao treino. A mesma disciplina que usa para depurar código.",
      ],
      links: [
        { label: "Site", href: "https://amentedotatame.com/" },
        { label: "GitHub", href: "https://github.com/fabianoleittes" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/fabianoleittes",
        },
      ],
    },
  ],
  cta: {
    title: "Vamos conversar sobre o seu produto?",
    body: "Conte o problema. A gente responde com o escopo, o prazo e o preço.",
  },
  footer: {
    site: "Site",
    contact: "Contato",
    rights: "Todos os direitos reservados.",
  },
  logosPage: {
    title: "Raw Code Brothers — Versões do logo",
    description: "Comparação das versões do logo.",
    eyebrow: "Marca",
    heading: "Versões do logo",
    lead: "Cada versão está recortada no conteúdo, sem o espaço vazio do quadrado original.",
    inUse: "em uso",
    sizes: ["Barra, 34px", "Barra alta, 48px", "Rodapé, 64px", "Herói, 112px"],
  },
};
