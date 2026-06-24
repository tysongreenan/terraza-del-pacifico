import newsletter from "@/content/blog-newsletter-febrero.json";
import type { Locale } from "@/lib/i18n";

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

const posts: BlogPost[] = [
  {
    slug: newsletter.slug,
    title: "February Facing the Pacific",
    excerpt:
      "February news, beachfront stays, day passes, yoga, live music, surf nights and special experiences at Hotel Terraza del Pacifico.",
    publishedAt: "2026-04-23",
    language: "en",
    coverImage: localImage(newsletter.imgs?.[1] ?? "/images/og-image.jpg"),
    content: newsletter,
  },
];

export function getBlogPosts(locale?: Locale) {
  const filtered = posts;
  return [...filtered].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPost(slug: string, locale?: Locale) {
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
