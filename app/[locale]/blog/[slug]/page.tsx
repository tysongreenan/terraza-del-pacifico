import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";
import {
  blogBodyLines,
  getAllBlogPosts,
  getBlogPost,
} from "@/lib/blog";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  defaultOgImage,
  languageAlternates,
  localizedPath,
  siteName,
} from "@/lib/seo";

export function generateStaticParams() {
  return getAllBlogPosts().flatMap((post) =>
    locales.map((locale) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  const post = getBlogPost(slug, safeLocale);
  const title = post?.title ?? "Entrada";
  const description = post?.excerpt ?? undefined;
  const image = post?.coverImage ?? defaultOgImage;
  const path = `blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath(safeLocale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "article",
      siteName,
      title,
      description,
      url: localizedPath(safeLocale, path),
      locale: safeLocale === "en" ? "en_US" : "es_CR",
      alternateLocale: safeLocale === "en" ? ["es_CR"] : ["en_US"],
      images: [image],
      publishedTime: post?.publishedAt ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  const post = getBlogPost(slug, safeLocale);
  if (!post) notFound();
  const path = `blog/${slug}`;
  const body = blogBodyLines(post);

  return (
    <article className="container max-w-2xl py-12">
      <JsonLd
        data={breadcrumbJsonLd({
          locale: safeLocale,
          path,
          title: post.title,
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt ?? undefined,
          image: absoluteUrl(post.coverImage ?? defaultOgImage),
          datePublished: post.publishedAt,
          inLanguage: htmlLang[safeLocale],
          mainEntityOfPage: absoluteUrl(localizedPath(safeLocale, path)),
          publisher: { "@id": "https://terrazadelpacifico.com/#hotel" },
        }}
      />
      <h1 className="font-serif text-4xl font-bold text-primary">{post.title}</h1>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        {new Intl.DateTimeFormat(safeLocale === "es" ? "es-CR" : "en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(new Date(post.publishedAt))}
      </p>
      <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
      <div className="mt-10 space-y-4 text-base leading-8 text-foreground/78">
        {body.map((line, index) => {
          const isHeading = line === line.toUpperCase() && line.length > 8;
          return isHeading ? (
            <h2
              key={`${line}-${index}`}
              className="pt-6 text-2xl font-bold text-primary"
            >
              {line}
            </h2>
          ) : (
            <p key={`${line}-${index}`}>{line}</p>
          );
        })}
      </div>
    </article>
  );
}
