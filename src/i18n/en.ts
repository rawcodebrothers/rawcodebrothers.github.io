import type { Content } from "@/i18n/types";

export const en: Content = {
  htmlLang: "en",
  label: "English",
  meta: {
    title: "Raw Code Brothers — Applied AI for B2B companies",
    description:
      "We build tailored AI agents and automations for B2B companies. Connected to your systems, with measured results and monitoring in production.",
    ogImage: "/og-en.png",
    ogLocale: "en_US",
  },
  ui: {
    skipToContent: "Skip to content",
    primaryNav: "Primary",
    home: "home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contact: "BOOK A DIAGNOSIS",
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
    eyebrow: "Applied AI for B2B companies",
    titleLead: "Your company already tried AI.",
    titleAccent: "We make it work.",
    body: [
      "We build tailored AI agents and automations for B2B companies.",
      "Connected to your systems, measured in hours and money saved, monitored in production.",
    ],
    bodyStrong: "No hype. AI in production.",
  },
  sections: {
    services: {
      eyebrow: "Services",
      title: "What we deliver",
      lead: "From diagnosis to AI running in your operation. You start at the step that makes sense today.",
    },
    process: {
      eyebrow: "Process",
      title: "How we work",
      lead: "Three phases, from the idea to AI in production. On one side the pilot that never moves, on the other our way.",
    },
    projects: {
      eyebrow: "Projects",
      title: "What is already running",
      lead: "Systems we built and still run in production. Some for clients, some our own.",
    },
    team: {
      eyebrow: "Team",
      title: "Who is behind it",
      lead: "Two engineers with more than twenty combined years of software in production. You talk straight to the people who build your AI.",
    },
  },
  services: [
    {
      name: "AI diagnosis",
      summary:
        "We map the processes in your operation and show where AI pays off. You get the estimated gain, the cost and a plan, at a fixed price.",
      bullets: ["Process map", "Estimated gain and cost", "Rollout plan"],
    },
    {
      name: "Agents and automation",
      summary:
        "Agents that read documents, answer customers and run back office tasks. Your team leaves the repetitive work and reviews only what needs a decision.",
      bullets: [
        "Document reading and extraction",
        "Customer service on WhatsApp",
        "Back office flows",
      ],
    },
    {
      name: "AI connected to your data",
      summary:
        "AI only helps when it sees what the company knows. We connect ERP, CRM, spreadsheets and internal documents, with access control and data protection.",
      bullets: [
        "ERP and CRM integration",
        "Search over internal documents",
        "Access control and LGPD",
      ],
    },
    {
      name: "AI in production",
      summary:
        "After launch, AI needs care. We measure how often the answers are right, monitor errors and control the cost per task. We also take on pilots that stalled halfway.",
      bullets: [
        "Continuous answer evaluation",
        "Monitoring and cost per task",
        "Stalled pilot rescue",
      ],
    },
  ],
  phases: [
    {
      call: "init()",
      title: "Before the first line",
      usual:
        "An AI idea with no measure of success. Nobody can say how much the company will gain or how much it will cost.",
      ours: "A diagnosis with the chosen process, the estimated gain and what is out of scope. Price and deadline agreed before we start.",
    },
    {
      call: "build()",
      title: "While the AI takes shape",
      usual:
        "A polished demo on sample data. When the real data arrives, the AI gets it wrong and the project stops at the pilot.",
      ours: "A pilot on your real data from the first week. You measure how often it is right and correct the course while it is still cheap.",
    },
    {
      call: "ship()",
      title: "After it enters the operation",
      usual:
        "The AI gets it wrong and nobody notices until a customer complains. The usage cost grows with no control.",
      ours: "Automatic answer evaluation, error monitoring and cost per task. We find the failure before you do.",
    },
  ],
  projects: [
    {
      name: "Sunshine Contabilidade",
      summary:
        "A B2B portal for an accounting firm with more than 500 client companies. An AI reads each tax form and fills in the company, due date and amount on its own. Each company sees only its own documents and gets new-document notices and due-date reminders over WhatsApp, with an access audit log and LGPD compliance.",
      tags: ["AI", "WhatsApp", "Hono", "PostgreSQL", "Cloudflare R2", "LGPD"],
      href: "https://www.sunshinecontabilidade.com/",
      live: true,
      kind: "client",
    },
    {
      name: "Gramo.studio",
      summary:
        "It uses AI to study what works in short-form video on Instagram, TikTok and YouTube, propose ideas adapted to the brand behind the account and deliver the asset ready to publish. The method ran on ten feeds before it became a platform.",
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
        "Senior backend engineer in São Paulo. For more than five years he has built systems in TypeScript, Node.js, Elixir and PostgreSQL.",
        "Focused on AI applied to documents, onboarding and KYC, and on event driven architecture.",
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
        "Software engineer with more than fifteen years on the road, focused on the architecture of systems that hold up as they grow.",
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
    title: "Which process do you want to take off your team's hands?",
    body: "Tell us the process. In 30 minutes, we tell you if AI solves it, what it costs and how soon it goes live.",
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
