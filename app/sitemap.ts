import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/lib/i18n";
import {
  absoluteUrl,
  localizedPath,
  staticRoutes,
} from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/blog";

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
  const blogEntries = getAllBlogPosts().flatMap((post) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale as Locale, `blog/${post.slug}`)),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...blogEntries];
}
