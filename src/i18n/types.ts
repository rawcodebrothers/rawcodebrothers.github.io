export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export type Service = {
  readonly name: string;
  readonly summary: string;
  readonly bullets: readonly string[];
};

export type ProjectKind = "client" | "own";

export type Project = {
  readonly name: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly href?: string;
  readonly live: boolean;
  readonly kind: ProjectKind;
};

export type Person = {
  readonly name: string;
  readonly role: string;
  readonly github: string;
  readonly avatar: string;
  readonly bio: readonly string[];
  readonly links: readonly NavLink[];
};

export type Phase = {
  readonly call: string;
  readonly title: string;
  readonly usual: string;
  readonly ours: string;
};

export type Section = {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
};

export type Content = {
  readonly htmlLang: string;
  readonly label: string;
  readonly meta: {
    readonly title: string;
    readonly description: string;
    readonly ogImage: string;
    readonly ogLocale: string;
  };
  readonly ui: {
    readonly skipToContent: string;
    readonly primaryNav: string;
    readonly home: string;
    readonly openMenu: string;
    readonly closeMenu: string;
    readonly contact: string;
    readonly seeProjects: string;
    readonly statusLive: string;
    readonly statusBuilding: string;
    readonly kindClient: string;
    readonly kindOwn: string;
    readonly usualWay: string;
    readonly ourWay: string;
    readonly switchTo: string;
  };
  readonly nav: readonly NavLink[];
  readonly hero: {
    readonly eyebrow: string;
    readonly titleLead: string;
    readonly titleAccent: string;
    readonly body: readonly string[];
    readonly bodyStrong: string;
  };
  readonly sections: {
    readonly services: Section;
    readonly process: Section;
    readonly projects: Section;
    readonly team: Section;
  };
  readonly services: readonly Service[];
  readonly phases: readonly Phase[];
  readonly projects: readonly Project[];
  readonly team: readonly Person[];
  readonly cta: {
    readonly title: string;
    readonly body: string;
  };
  readonly footer: {
    readonly site: string;
    readonly contact: string;
    readonly rights: string;
  };
  readonly logosPage: {
    readonly title: string;
    readonly description: string;
    readonly eyebrow: string;
    readonly heading: string;
    readonly lead: string;
    readonly inUse: string;
    readonly sizes: readonly string[];
  };
};
