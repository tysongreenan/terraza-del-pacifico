import type { Metadata } from "next";
import Link from "next/link";
import data from "@/content/blog.json";
import { JsonLd } from "@/components/json-ld";
import { isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";

const path = "blog";

const copy = {
  es: {
    heading: "Blog y novedades",
    intro:
      "Noticias, historias y experiencias del Hotel Terraza del Pacífico en Playa Hermosa, Costa Rica.",
    empty: "Todavía no hay entradas. Vuelve pronto.",
    readArticle: "Leer artículo",
  },
  en: {
    heading: "Blog & news",
    intro:
      "News, stories and experiences from Hotel Terraza del Pacífico in Playa Hermosa, Costa Rica.",
    empty: "No posts yet. Check back soon.",
    readArticle: "Read article",
  },
} as const;

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata({ params, path, content: data });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  const posts = getBlogPosts(safeLocale);
  const t = copy[safeLocale];

  return (
    <section className="container py-section-sm">
      <JsonLd
        data={breadcrumbJsonLd({
          locale: safeLocale,
          path,
          title: t.heading,
        })}
      />
      <header className="max-w-2xl">
        <h1 className="font-display text-h1 font-bold tracking-tight text-primary ">
          {t.heading}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {t.intro}
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-8 text-muted-foreground">{t.empty}</p>
      ) : (
        <ul className="mt-8 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-lg border bg-card p-5 transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-ocean"
            >
              <h2 className="font-display text-xl font-semibold tracking-tight">
                <Link
                  href={`/${safeLocale}/blog/${post.slug}`}
                  lang={post.language}
                  className="text-foreground transition-colors hover:text-ocean focus-visible:outline-none focus-visible:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p
                lang={post.language}
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
              >
                {post.excerpt}
              </p>
              <p className="mt-4 text-sm font-medium text-ocean">
                <Link
                  href={`/${safeLocale}/blog/${post.slug}`}
                  className="inline-flex min-h-[44px] items-center transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
                  aria-label={`${t.readArticle}: ${post.title}`}
                >
                  {t.readArticle}
                  <span aria-hidden="true" className="ml-1">
                    &rarr;
                  </span>
                </Link>
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
