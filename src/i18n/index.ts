import { en } from "@/i18n/en";
import { pt } from "@/i18n/pt";
import {
  defaultLocale,
  locales,
  type Content,
  type Locale,
} from "@/i18n/types";

export { defaultLocale, locales } from "@/i18n/types";
export type {
  Content,
  Locale,
  NavLink,
  Person,
  Phase,
  Project,
  Section,
  Service,
} from "@/i18n/types";

const content: Readonly<Record<Locale, Content>> = { pt, en };

export const site = {
  name: "Raw Code Brothers",
  tagline:
    "Building clean, efficient, and robust software. No noise, just raw code.",
  email: "simao.msjr@gmail.com",
  github: "https://github.com/rawcodebrothers",
} as const;

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const getContent = (locale: Locale): Content => content[locale];

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split("/");
  return segment !== undefined && isLocale(segment) ? segment : defaultLocale;
}

export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean}`;
}

export const otherLocale = (locale: Locale): Locale =>
  locale === "pt" ? "en" : "pt";
