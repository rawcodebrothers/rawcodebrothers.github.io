export type LogoVersion =
  | "v0"
  | "v1"
  | "v2"
  | "v3"
  | "v4"
  | "v5"
  | "v6"
  | "v7";

export type LogoPart = {
  readonly src: string;
  readonly width: number;
  readonly height: number;
};

export type LogoAsset = {
  readonly stacked: LogoPart;
  readonly icon?: LogoPart;
  readonly note: string;
};

export const logos: Readonly<Record<LogoVersion, LogoAsset>> = {
  v0: {
    stacked: { src: "/logos/v0.svg", width: 628, height: 674 },
    icon: { src: "/logos/v0-icon.svg", width: 626, height: 407 },
    note: "Chaves com olhos. Tem lockup horizontal para a barra.",
  },
  v1: {
    stacked: { src: "/logos/v1.svg", width: 876, height: 548 },
    note: "Monograma sólido, tipografia condensada",
  },
  v2: {
    stacked: { src: "/logos/v2.svg", width: 957, height: 712 },
    note: "R de circuito, empilhado",
  },
  v3: {
    stacked: { src: "/logos/v3.svg", width: 1009, height: 580 },
    note: "Ondas sobre tipografia fina",
  },
  v4: {
    stacked: { src: "/logos/v4.svg", width: 1019, height: 628 },
    note: "Seta em hexágono, empilhado",
  },
  v5: {
    stacked: { src: "/logos/v5.svg", width: 794, height: 545 },
    note: "R vazado em fita",
  },
  v6: {
    stacked: { src: "/logos/v6.svg", width: 523, height: 462 },
    note: "R com rastro de velocidade",
  },
  v7: {
    stacked: { src: "/logos/v7.svg", width: 1137, height: 340 },
    note: "Lockup horizontal nativo",
  },
};

export const logoVersions = Object.keys(logos) as readonly LogoVersion[];

export const activeLogo: LogoVersion = "v0";
