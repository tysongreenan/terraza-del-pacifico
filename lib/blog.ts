import newsletter from "@/content/blog-newsletter-febrero.json";
import { defaultLocale, type Locale } from "@/lib/i18n";

type BlogContent = {
  title: string;
  desc: string;
  h1: string[];
  imgs?: string[];
  text: string;
  slug: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  language: Locale;
  coverImage: string;
  content: BlogContent;
};

const footerStarts = new Set(["Contact", "Stay Connected"]);
const navLabels = new Set([
  "Home",
  "Rooms",
  "About Us",
  "Restaurant",
  "Newsletter",
  "Events",
  "🇺🇸",
  "Book Your Escape",
  "Back to blog",
]);

// Localized card/meta copy for each post. The article body lives in the source
// JSON (English for now); titles and excerpts are translated here so the
// Spanish hub and /es/blog/[slug] no longer surface English chrome.
type LocalizedCopy = { title: string; excerpt: string };

const postCopy: Record<string, Record<Locale, LocalizedCopy>> = {
  [newsletter.slug]: {
    es: {
      title: "Febrero frente al Pacífico",
      excerpt:
        "Novedades de febrero en el Hotel Terraza del Pacífico: estancias frente al mar, pases de día, yoga gratis, música en vivo y noches de surf.",
    },
    en: {
      title: "February Facing the Pacific",
      excerpt:
        "February news from Hotel Terraza del Pacífico: beachfront stays, day passes, free yoga, live music and surf nights.",
    },
  },
};

const posts: BlogPost[] = [
  {
    slug: newsletter.slug,
    title: postCopy[newsletter.slug].en.title,
    excerpt: postCopy[newsletter.slug].en.excerpt,
    publishedAt: "2026-04-23",
    language: "en",
    coverImage: localImage(newsletter.imgs?.[1] ?? "/images/og-image.jpg"),
    content: newsletter,
  },
];

function localizePost(post: BlogPost, locale: Locale): BlogPost {
  const copy = postCopy[post.slug]?.[locale];
  if (!copy) return post;
  return { ...post, title: copy.title, excerpt: copy.excerpt, language: locale };
}

export function getBlogPosts(locale: Locale = defaultLocale) {
  return [...posts]
    .map((post) => localizePost(post, locale))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPost(slug: string, locale: Locale = defaultLocale) {
  return getBlogPosts(locale).find((post) => post.slug === slug) ?? null;
}

export function getAllBlogPosts() {
  return posts;
}

export function blogBodyLines(post: BlogPost) {
  const raw = post.content.text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const h1 = post.content.h1[0] ?? post.title;
  const start = raw.findIndex((line) => line === h1 || line === "Test");
  const sliced = start >= 0 ? raw.slice(start + 1) : raw;
  const end = sliced.findIndex((line, index) => index > 8 && footerStarts.has(line));

  return (end >= 0 ? sliced.slice(0, end) : sliced).filter(
    (line) => !navLabels.has(line) && line !== "Read in:" && line !== "ES"
  );
}

function localImage(src: string) {
  if (src.startsWith("/images/")) return src;
  const base = src.split("/").pop()?.split("?")[0];
  return base ? `/images/${base}` : "/images/og-image.jpg";
}
