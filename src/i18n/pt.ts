import type { Content } from "@/i18n/types";

export const pt: Content = {
  htmlLang: "pt-BR",
  label: "Português",
  meta: {
    title: "Raw Code Brothers — IA aplicada para empresas B2B",
    description:
      "Desenvolvemos agentes e automações de IA sob medida para empresas B2B. Integrados aos seus sistemas, com resultado medido e monitoramento em produção.",
    ogImage: "/og.png",
    ogLocale: "pt_BR",
  },
  ui: {
    skipToContent: "Pular para o conteúdo",
    primaryNav: "Principal",
    home: "início",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    contact: "PEDIR DIAGNÓSTICO",
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
    eyebrow: "IA aplicada para empresas B2B",
    titleLead: "Sua empresa já testou IA.",
    titleAccent: "A gente coloca para funcionar.",
    body: [
      "Desenvolvemos agentes e automações sob medida para empresas B2B.",
      "Integrados aos seus sistemas, medidos em horas e reais economizados, monitorados em produção.",
    ],
    bodyStrong: "Sem hype. IA em produção.",
  },
  sections: {
    services: {
      eyebrow: "Serviços",
      title: "O que a gente entrega",
      lead: "Do diagnóstico à IA rodando na operação. Você começa pela etapa que faz sentido hoje.",
    },
    process: {
      eyebrow: "Processo",
      title: "Como a gente trabalha",
      lead: "Três fases, da ideia à IA em produção. De um lado o piloto que não sai do lugar, do outro o nosso jeito.",
    },
    projects: {
      eyebrow: "Projetos",
      title: "O que já está rodando",
      lead: "Sistemas que construímos e mantemos em produção. Alguns para clientes, outros nossos.",
    },
    team: {
      eyebrow: "Time",
      title: "Quem está por trás",
      lead: "Dois engenheiros com mais de vinte anos somados de software em produção. Você fala direto com quem constrói a sua IA.",
    },
  },
  services: [
    {
      name: "Diagnóstico de IA",
      summary:
        "Mapeamos os processos da sua operação e mostramos onde a IA dá retorno. Você recebe o ganho estimado, o custo e um plano, com preço fechado.",
      bullets: [
        "Mapa de processos",
        "Ganho e custo estimados",
        "Plano de implantação",
      ],
    },
    {
      name: "Agentes e automação",
      summary:
        "Agentes que leem documentos, respondem clientes e executam tarefas de backoffice. Sua equipe sai do trabalho repetitivo e confere só o que precisa de decisão.",
      bullets: [
        "Leitura e extração de documentos",
        "Atendimento no WhatsApp",
        "Fluxos de backoffice",
      ],
    },
    {
      name: "IA conectada aos seus dados",
      summary:
        "A IA só ajuda quando enxerga o que a empresa sabe. Conectamos ERP, CRM, planilhas e documentos internos, com controle de acesso e LGPD.",
      bullets: [
        "Integração com ERP e CRM",
        "Busca em documentos internos",
        "Controle de acesso e LGPD",
      ],
    },
    {
      name: "IA em produção",
      summary:
        "Depois do lançamento, a IA precisa de cuidado. Medimos o acerto das respostas, monitoramos erros e controlamos o custo por tarefa. Também assumimos pilotos que pararam no meio do caminho.",
      bullets: [
        "Avaliação contínua das respostas",
        "Monitoramento e custo por tarefa",
        "Resgate de piloto parado",
      ],
    },
  ],
  phases: [
    {
      call: "init()",
      title: "Antes da primeira linha",
      usual:
        "Uma ideia de IA sem métrica de sucesso. Ninguém sabe dizer quanto a empresa vai ganhar nem quanto vai custar.",
      ours: "Diagnóstico com o processo escolhido, o ganho estimado e o que fica de fora. Preço e prazo fechados antes de começar.",
    },
    {
      call: "build()",
      title: "Enquanto a IA toma forma",
      usual:
        "Uma demonstração bonita com dados de exemplo. Quando entram os dados reais, a IA erra e o projeto para no piloto.",
      ours: "Piloto com os seus dados reais desde a primeira semana. Você mede o acerto e corrige o rumo enquanto ainda é barato.",
    },
    {
      call: "ship()",
      title: "Depois que entra na operação",
      usual:
        "A IA erra e ninguém percebe até o cliente reclamar. O custo de uso cresce sem controle.",
      ours: "Avaliação automática das respostas, monitoramento de erros e custo por tarefa. A gente descobre a falha antes de você.",
    },
  ],
  projects: [
    {
      name: "Sunshine Contabilidade",
      summary:
        "Portal B2B de um escritório contábil com mais de 500 empresas clientes. Uma IA lê cada guia e preenche empresa, vencimento e valor sozinha. Cada empresa vê só os seus documentos e recebe aviso de documento novo e lembrete de vencimento pelo WhatsApp, com auditoria de acesso e LGPD.",
      tags: ["IA", "WhatsApp", "Hono", "PostgreSQL", "Cloudflare R2", "LGPD"],
      href: "https://www.sunshinecontabilidade.com/",
      live: true,
      kind: "client",
    },
    {
      name: "Gramo.studio",
      summary:
        "Usa IA para estudar o que funciona em vídeo curto no Instagram, TikTok e YouTube, propor ideias adaptadas à marca de quem usa e entregar a peça pronta para publicar. O método foi validado em dez perfis antes de virar plataforma.",
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
        "Engenheiro backend sênior em São Paulo. Há mais de cinco anos constrói sistemas em TypeScript, Node.js, Elixir e PostgreSQL.",
        "Especializado em IA aplicada a documentos, onboarding e KYC, e em arquitetura orientada a eventos.",
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
        "Engenheiro de software com mais de quinze anos de estrada, focado em arquitetura de sistemas que aguentam crescer.",
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
    title: "Qual processo você quer tirar da mão da sua equipe?",
    body: "Conte o processo. Em 30 minutos, a gente diz se IA resolve, quanto custa e em quanto tempo entra no ar.",
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
