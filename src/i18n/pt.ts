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
    kindClient: "para cliente",
    kindOwn: "produto nosso",
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
        "Loja de cosméticos que vende sem checkout. A cliente monta o carrinho no catálogo e fecha o pedido pelo WhatsApp, então quem vende não precisa administrar pagamento online nem conciliar recebimento.",
      tags: ["Astro", "React", "Tailwind", "Cloudflare Pages"],
      href: "https://lojinhadacarlota.app/",
      live: true,
      kind: "client",
    },
    {
      name: "Sunshine Contabilidade",
      summary:
        "Presença digital de um escritório contábil com mais de 500 clientes. Apresenta os serviços e capta contato, com estrutura de conteúdo feita para ranquear nas buscas da região.",
      tags: ["Astro", "TypeScript", "SEO"],
      href: "https://www.sunshinecontabilidade.com/",
      live: true,
      kind: "client",
    },
    {
      name: "Gramo.studio",
      summary:
        "Estuda o que funciona em vídeo curto no Instagram, TikTok e YouTube, propõe ideias adaptadas à marca de quem usa e entrega a peça pronta para publicar. O método foi validado em dez perfis antes de virar plataforma.",
      tags: ["Svelte", "TypeScript", "Python", "PostgreSQL", "Multi-tenant"],
      live: false,
      kind: "own",
    },
    {
      name: "A Mente do Tatame",
      summary:
        "Traduz pesquisa de aprendizado motor em método prático para o jiu-jitsu. Vende livros digitais com cartão e PIX, e entrega o arquivo por link assinado que expira. Cobrança repetida não gera entrega duplicada.",
      tags: ["Next.js", "Cloudflare", "Stripe", "PIX", "D1"],
      href: "https://amentedotatame.com/",
      live: true,
      kind: "own",
    },
    {
      name: "Lumoki",
      summary:
        "Acompanhamento de saúde mental com um bicho virtual que evolui junto com o cuidado de quem usa. Acesso a ajuda em crise, acessibilidade e linguagem que não julga entraram como requisito, não como ajuste depois.",
      tags: [
        "React Native",
        "Hono",
        "PostgreSQL",
        "Cloudflare Workers",
        "Filas",
      ],
      href: "https://lumoki.app/",
      live: false,
      kind: "own",
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
