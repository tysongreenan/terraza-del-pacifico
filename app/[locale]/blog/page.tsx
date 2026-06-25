import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import data from "@/content/blog.json";
import { JsonLd } from "@/components/json-ld";
import { isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";

const path = "blog";

const copy = {
  es: {
    eyebrow: "Diario",
    heading: "Blog y novedades",
    intro:
      "Noticias, historias y experiencias del Hotel Terraza del Pacífico en Playa Hermosa, Costa Rica.",
    empty: "Todavía no hay entradas. Vuelve pronto.",
    readArticle: "Leer artículo",
  },
  en: {
    eyebrow: "Journal",
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
    <section className="container pb-section-sm pt-section-top">
      <JsonLd
        data={breadcrumbJsonLd({
          locale: safeLocale,
          path,
          title: t.heading,
        })}
      />
      <header className="max-w-2xl">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="mt-3 font-concept text-h1 font-medium leading-[1.04] text-concept-ocean">
          {t.heading}
        </h1>
        <p className="mt-4 text-body leading-relaxed text-concept-ink/80">
          {t.intro}
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-8 text-body text-concept-ink/60">{t.empty}</p>
      ) : (
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug} className="group">
              <Link
                href={`/${safeLocale}/blog/${post.slug}`}
                lang={post.language}
                aria-label={`${t.readArticle}: ${post.title}`}
                className="flex h-full flex-col rounded-sm border border-concept-border bg-white p-6 transition-shadow hover:shadow-[0_14px_40px_rgba(16,58,77,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2"
              >
                <h2 className="font-concept text-h3 leading-tight text-concept-ocean transition-colors group-hover:text-concept-gold-muted">
                  {post.title}
                </h2>
                <p className="mt-3 text-body-sm leading-relaxed text-concept-ink/70">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-[0.1em] text-concept-gold-muted">
                  {t.readArticle}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
