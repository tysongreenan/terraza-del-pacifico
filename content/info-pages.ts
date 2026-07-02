import type { Locale } from "@/lib/i18n";

export type Localized<T = string> = Record<Locale, T>;
export type InfoPageType = "experience" | "event";

export type InfoFact = {
  label: Localized;
  value: Localized;
};

export type InfoSection = {
  title: Localized;
  body: Localized<string[]>;
};

export type InfoCta = {
  label: Localized;
  href: string;
};

export type InfoImage = {
  src: string;
  alt: Localized;
};

export type InfoPage = {
  id: string;
  type: InfoPageType;
  slugs: Localized;
  title: Localized;
  /** Short label for hub/carousel cards (e.g. "Whale Watching"). Falls back
   * to `title` when omitted. Keeps the geo-keyword-rich `title` intact for
   * the page's own H1/meta while card grids stay uncluttered. */
  cardTitle?: Localized;
  eyebrow: Localized;
  description: Localized;
  heroImage: InfoImage;
  gallery: InfoImage[];
  facts: InfoFact[];
  sections: InfoSection[];
  faq?: { q: Localized; a: Localized }[];
  cta: InfoCta;
  relatedIds: string[];
};

export type HubPage = {
  eyebrow: Localized;
  title: Localized;
  description: Localized;
  heroImage: InfoImage;
  cta: InfoCta;
};

export function pageHref(page: InfoPage, locale: Locale) {
  const base = page.type === "experience" ? "experiences" : "events";
  return `/${locale}/${base}/${page.slugs[locale]}`;
}

export function byLocalizedSlug(
  pages: InfoPage[],
  locale: Locale,
  slug: string
) {
  return pages.find((page) => page.slugs[locale] === slug);
}

export function localizedParams(pages: InfoPage[]) {
  return pages.flatMap((page) =>
    (Object.keys(page.slugs) as Locale[]).map((locale) => ({
      locale,
      slug: page.slugs[locale],
    }))
  );
}
