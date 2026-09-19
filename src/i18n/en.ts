import type { Content } from "@/i18n/types";

export const en: Content = {
  htmlLang: "en",
  label: "English",
  meta: {
    title: "Raw Code Brothers — Software built to fit",
    description:
      "A software studio building tailored products for companies and small businesses. Modern architecture, readable code and continuous delivery.",
    ogImage: "/og-en.png",
    ogLocale: "en_US",
  },
  ui: {
    skipToContent: "Skip to content",
    primaryNav: "Primary",
    home: "home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contact: "TALK TO THE TEAM",
    seeProjects: "SEE PROJECTS",
    statusLive: "live",
    statusBuilding: "in progress",
    kindClient: "for a client",
    kindOwn: "our own",
    usualWay: "How it usually goes",
    ourWay: "With",
    switchTo: "Português",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
  ],
  hero: {
    eyebrow: "Software done right",
    titleLead: "Software built to fit, written by the people who",
    titleAccent: "read it afterwards.",
    body: [
      "We build products for companies and small businesses.",
      "Modern architecture, end to end type safety and automated tests.",
    ],
    bodyStrong: "No noise, just raw code.",
  },
  sections: {
    services: {
      eyebrow: "Services",
      title: "What we deliver",
      lead: "Four lines of work. Every project uses one or several, as the problem demands.",
    },
    process: {
      eyebrow: "Process",
      title: "How we work",
      lead: "Three phases, from the first call to the product in production. On one side the usual way, on the other ours.",
    },
    projects: {
      eyebrow: "Projects",
      title: "What is already running",
      lead: "Products we built and still maintain. Some for clients, some our own.",
    },
    team: {
      eyebrow: "Team",
      title: "Who is behind it",
      lead: "Two engineers with more than twenty combined years of code in production. You talk straight to the people who write it.",
    },
  },
  services: [
    {
      name: "Tailored products",
      summary:
        "From the first sketch to production. We find the problem, cut the scope to what matters and ship in short cycles.",
      bullets: ["Discovery and scope", "Product design", "Continuous delivery"],
    },
    {
      name: "Backend and integrations",
      summary:
        "APIs, queues and integrations that hold real load. End to end type safety, automated tests and observability from day one.",
      bullets: [
        "APIs and event driven architecture",
        "Integrations and payments",
        "Tests and monitoring",
      ],
    },
    {
      name: "AI automation",
      summary:
        "Document classification, data extraction and flows that take repetitive work off the hands of the people who produce.",
      bullets: [
        "Document classification",
        "Automated flows",
        "Onboarding and KYC",
      ],
    },
    {
      name: "System rescue",
      summary:
        "We take on the code nobody wants to touch. We cover it with tests, measure what breaks and ship again without fear.",
      bullets: ["Technical audit", "Test coverage", "Gradual migration"],
    },
  ],
  phases: [
    {
      call: "init()",
      title: "Before the first line",
      usual:
        "A guessed quote and a scope that only exists in conversation. The price shifts halfway and nobody can say when it ends.",
      ours: "A written scope, with what is in and what is out. Price and deadline agreed before we start.",
    },
    {
      call: "build()",
      title: "While the product grows",
      usual:
        "Weeks of silence and a report you have no way to verify. By the time there is something to see, changing it costs a lot.",
      ours: "A live environment from the first week. You use what is ready and correct the course while it is still cheap.",
    },
    {
      call: "ship()",
      title: "After it goes live",
      usual:
        "The code is handed over and the problem becomes yours. With no tests and no monitoring, the failure arrives through your customer.",
      ours: "Automated tests and error monitoring from day one. We find the failure before you do.",
    },
  ],
  projects: [
    {
      name: "Lojinha da Carlota",
      summary:
        "A cosmetics shop that sells without a checkout. The customer fills a cart from the catalogue and closes the order over WhatsApp, so the seller never has to run online payments or reconcile receipts.",
      tags: ["Astro", "React", "Tailwind", "Cloudflare Pages"],
      href: "https://lojinhadacarlota.app/",
      live: true,
      kind: "client",
    },
    {
      name: "Sunshine Contabilidade",
      summary:
        "The digital presence of an accounting firm with more than 500 clients. It presents the services and captures leads, with a content structure built to rank in local search.",
      tags: ["Astro", "TypeScript", "SEO"],
      href: "https://www.sunshinecontabilidade.com/",
      live: true,
      kind: "client",
    },
    {
      name: "Gramo.studio",
      summary:
        "It studies what works in short-form video on Instagram, TikTok and YouTube, proposes ideas adapted to the brand behind the account and delivers the asset ready to publish. The method ran on ten feeds before it became a platform.",
      tags: ["Svelte", "TypeScript", "Python", "PostgreSQL", "Multi-tenant"],
      live: false,
      kind: "own",
    },
    {
      name: "A Mente do Tatame",
      summary:
        "It turns motor learning research into a practical method for Brazilian jiu-jitsu. It sells digital books with card and PIX, and delivers the file through a signed link that expires. A repeated charge never produces a second delivery.",
      tags: ["Next.js", "Cloudflare", "Stripe", "PIX", "D1"],
      href: "https://amentedotatame.com/",
      live: true,
      kind: "own",
    },
    {
      name: "Lumoki",
      summary:
        "Mental health tracking with a virtual companion that grows alongside the care someone gives themselves. Crisis access, accessibility and language that does not judge went in as requirements, not as a later fix.",
      tags: [
        "React Native",
        "Hono",
        "PostgreSQL",
        "Cloudflare Workers",
        "Queues",
      ],
      href: "https://lumoki.app/",
      live: false,
      kind: "own",
    },
  ],
  team: [
    {
      name: "Simão Júnior",
      role: "Software engineer, partner",
      github: "simaojunior",
      avatar: "https://avatars.githubusercontent.com/u/29005352?v=4&s=160",
      bio: [
        "Senior backend engineer in São Paulo. Works with TypeScript, Node.js, Elixir and PostgreSQL for more than five years.",
        "Focused on onboarding and KYC, document classification with AI and event driven architecture. Self-taught, still training.",
      ],
      links: [
        { label: "Site", href: "https://simaojunior.dev/" },
        { label: "GitHub", href: "https://github.com/simaojunior" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/simaojunior" },
      ],
    },
    {
      name: "Fabiano Leite",
      role: "Software engineer, partner",
      github: "fabianoleittes",
      avatar: "https://avatars.githubusercontent.com/u/279344?v=4&s=160",
      bio: [
        "Software engineer with more than fifteen years on the road, focused on systems architecture.",
        "Jiu-jitsu black belt and author of A Mente do Tatame, where he applies the neuroscience of learning to training. The same discipline he uses to debug code.",
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
    title: "Shall we talk about your product?",
    body: "Tell us the problem. We answer with the scope, the deadline and the price.",
  },
  footer: {
    site: "Site",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  logosPage: {
    title: "Raw Code Brothers — Logo versions",
    description: "A comparison of the logo versions.",
    eyebrow: "Brand",
    heading: "Logo versions",
    lead: "Every version is cropped to its artwork, without the empty margin of the original square.",
    inUse: "in use",
    sizes: ["Bar, 34px", "Tall bar, 48px", "Footer, 64px", "Hero, 112px"],
  },
};
