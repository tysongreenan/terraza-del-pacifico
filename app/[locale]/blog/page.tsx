import type { Metadata } from "next";
import Link from "next/link";
import data from "@/content/blog.json";
import { JsonLd } from "@/components/json-ld";
import { isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";

const path = "blog";

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

  return (
    <section className="container py-12">
      <JsonLd
        data={breadcrumbJsonLd({
          locale: safeLocale,
          path,
          title: data.h1[0] ?? data.title,
        })}
      />
      <h1 className="font-serif text-4xl font-bold text-primary">Blog</h1>

      {posts.length === 0 ? (
        <p className="mt-6 text-muted-foreground">
          No hay entradas todavía.
        </p>
      ) : (
        <ul className="mt-8 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug} className="rounded-lg border bg-card p-5">
              <h2 className="font-serif text-xl font-semibold">
                <Link href={`/${safeLocale}/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
