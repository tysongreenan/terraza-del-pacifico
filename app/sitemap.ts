import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/lib/i18n";
import {
  absoluteUrl,
  localizedPath,
  staticRoutes,
} from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/blog";
import { pageHref, type InfoPage } from "@/content/info-pages";
import { events, otherEventSlugs } from "@/content/events";
import { experiences } from "@/content/experiences";

// Priority/frequency for events.ts and experiences.ts entries — pages whose
// slug differs by locale, so they can't go through the same-path staticRoutes
// list above. Falls back to a sane default for any future id we forget here.
const INFO_PAGE_WEIGHT: Record<
  string,
  { priority: number; changeFrequency: "weekly" | "monthly" }
> = {
  weddings: { priority: 0.85, changeFrequency: "monthly" },
  "surf-nights": { priority: 0.8, changeFrequency: "weekly" },
  "live-music": { priority: 0.75, changeFrequency: "weekly" },
};
const DEFAULT_INFO_PAGE_WEIGHT = {
  priority: 0.7,
  changeFrequency: "monthly" as const,
};

function infoPageEntries(pages: InfoPage[], lastModified: Date) {
  return pages.flatMap((page) => {
    const weight = INFO_PAGE_WEIGHT[page.id] ?? DEFAULT_INFO_PAGE_WEIGHT;
    return locales.map((locale) => ({
      url: absoluteUrl(pageHref(page, locale as Locale)),
      lastModified,
      changeFrequency: weight.changeFrequency,
      priority: weight.priority,
      alternates: {
        languages: Object.fromEntries(
          [
            ...locales.map((entryLocale) => [
              entryLocale === "es" ? "es-CR" : "en-US",
              absoluteUrl(pageHref(page, entryLocale as Locale)),
            ]),
            ["x-default", absoluteUrl(pageHref(page, "es"))],
          ]
        ),
      },
    }));
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticEntries = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale as Locale, route.path)),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          [
            ...locales.map((entryLocale) => [
              entryLocale === "es" ? "es-CR" : "en-US",
              absoluteUrl(localizedPath(entryLocale as Locale, route.path)),
            ]),
            ["x-default", absoluteUrl(localizedPath("es", route.path))],
          ]
        ),
      },
    }))
  );

  // Every events.ts entry (weddings, surf-nights, plus the 4 "other event"
  // types) gets its own localized URL via pageHref — its es/en slugs differ
  // (e.g. /es/events/bodas vs /en/events/weddings), so these can't share a
  // single path the way staticRoutes does.
  const eventEntries = infoPageEntries(events, lastModified);

  // The "other events" sub-hub (/events/otros, /events/other-events) that
  // lists the 4 non-headline event types — its own page, not in events.ts.
  const otherEventsHubEntries = locales.map((locale) => ({
    url: absoluteUrl(`/${locale}/events/${otherEventSlugs[locale as Locale]}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        "es-CR": absoluteUrl(`/es/events/${otherEventSlugs.es}`),
        "en-US": absoluteUrl(`/en/events/${otherEventSlugs.en}`),
        "x-default": absoluteUrl(`/es/events/${otherEventSlugs.es}`),
      },
    },
  }));

  const experienceEntries = infoPageEntries(experiences, lastModified);

  const blogEntries = getAllBlogPosts().flatMap((post) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale as Locale, `blog/${post.slug}`)),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    ...staticEntries,
    ...eventEntries,
    ...otherEventsHubEntries,
    ...experienceEntries,
    ...blogEntries,
  ];
}
