import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { htmlLang, locales } from "@/lib/i18n";

export const siteUrl = "https://terrazadelpacifico.com";
export const siteName = "Hotel Terraza del Pacífico";
export const defaultOgImage = "/images/og-image.jpg";

export type CapturedSeoContent = {
  title: string;
  desc: string;
  h1?: string[];
};

export type StaticRoute = {
  slug: string;
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

export const staticRoutes: StaticRoute[] = [
  { slug: "home", path: "", priority: 1, changeFrequency: "weekly" },
  { slug: "habitaciones", path: "habitaciones", priority: 0.9, changeFrequency: "monthly" },
  { slug: "habitaciones-comparar", path: "habitaciones/comparar", priority: 0.7, changeFrequency: "monthly" },
  { slug: "habitaciones-superior", path: "habitaciones/superior", priority: 0.8, changeFrequency: "monthly" },
  { slug: "habitaciones-estandar", path: "habitaciones/estandar", priority: 0.8, changeFrequency: "monthly" },
  { slug: "habitaciones-junior-suite", path: "habitaciones/junior-suite", priority: 0.8, changeFrequency: "monthly" },
  { slug: "habitaciones-villas", path: "habitaciones/villas", priority: 0.8, changeFrequency: "monthly" },
  { slug: "restaurante", path: "restaurante", priority: 0.9, changeFrequency: "weekly" },
  { slug: "restaurante-menu", path: "restaurante/menu", priority: 0.8, changeFrequency: "monthly" },
  { slug: "bares", path: "bares", priority: 0.7, changeFrequency: "monthly" },
  { slug: "bares-golden-beach-bar", path: "bares/golden-beach-bar", priority: 0.65, changeFrequency: "monthly" },
  { slug: "bares-iguana-bar", path: "bares/iguana-bar", priority: 0.65, changeFrequency: "monthly" },
  { slug: "eventos", path: "eventos", priority: 0.85, changeFrequency: "monthly" },
  { slug: "eventos-bodas", path: "eventos/bodas", priority: 0.85, changeFrequency: "monthly" },
  { slug: "eventos-surf-nights", path: "eventos/surf-nights", priority: 0.8, changeFrequency: "weekly" },
  { slug: "eventos-otros", path: "eventos/otros", priority: 0.75, changeFrequency: "monthly" },
  { slug: "experiencias", path: "experiencias", priority: 0.85, changeFrequency: "weekly" },
  { slug: "galeria", path: "galeria", priority: 0.65, changeFrequency: "monthly" },
  { slug: "sobre-nosotros", path: "sobre-nosotros", priority: 0.7, changeFrequency: "monthly" },
  { slug: "politicas", path: "politicas", priority: 0.4, changeFrequency: "monthly" },
  { slug: "blog", path: "blog", priority: 0.7, changeFrequency: "weekly" },
];

export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${path ? `/${path}` : ""}`;
}

export function absoluteUrl(path = "") {
  return new URL(path, siteUrl).toString();
}

export function languageAlternates(path = "") {
  return {
    "es-CR": localizedPath("es", path),
    "en-US": localizedPath("en", path),
    "x-default": localizedPath("es", path),
  };
}

export async function pageMetadata({
  params,
  path,
  content,
  image = defaultOgImage,
}: {
  params: Promise<{ locale: string }>;
  path: string;
  content: CapturedSeoContent;
  image?: string;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale) ? (locale as Locale) : "es";
  const canonical = localizedPath(safeLocale, path);
  const title = content.title;
  const description = content.desc;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url: canonical,
      locale: safeLocale === "en" ? "en_US" : "es_CR",
      alternateLocale: safeLocale === "en" ? ["es_CR"] : ["en_US"],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// Hotel amenities that are genuinely offered (used for amenityFeature). Each
// renders as a LocationFeatureSpecification.
const hotelAmenities = [
  "Beachfront / direct beach access",
  "Outdoor LED swimming pool",
  "Free WiFi",
  "Air conditioning",
  "On-site restaurant",
  "Bar",
  "Beachfront yoga",
  "Event & wedding venue",
];

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Hotel"],
    "@id": `${siteUrl}/#hotel`,
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/images/Logo-nuevo-B86U915-.png"),
    image: [
      absoluteUrl(defaultOgImage),
      absoluteUrl("/images/pool-aerial-day-BveHvOiS.jpg"),
      absoluteUrl("/images/restaurant-view-WsRnSUPN.jpg"),
    ],
    email: "info@terrazadelpacifico.com",
    telephone: "+50684319953",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Playa Hermosa",
      addressLocality: "Playa Hermosa",
      addressRegion: "Puntarenas",
      postalCode: "04023",
      addressCountry: "CR",
    },
    // Genuine on-page values (shown in the hero and footer).
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "42",
      bestRating: "5",
      worstRating: "1",
    },
    checkinTime: "15:00",
    checkoutTime: "13:00",
    amenityFeature: hotelAmenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Hotel+Terraza+del+Pac%C3%ADfico+Playa+Hermosa+Costa+Rica",
    sameAs: [
      "https://www.instagram.com/terrazadelpacificocr/",
      "https://www.facebook.com/TerrazadelPacifico",
      "https://www.tiktok.com/@terrazadelpacifico",
    ],
    // TODO (need real values to add safely — fabricated structured data is a
    // Google penalty risk): geo {latitude, longitude}, priceRange, starRating,
    // numberOfRooms.
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    inLanguage: htmlLang[locale],
    publisher: { "@id": `${siteUrl}/#hotel` },
  };
}

export function breadcrumbJsonLd({
  locale,
  path,
  title,
}: {
  locale: Locale;
  path: string;
  title: string;
}) {
  const pathParts = path.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl(localizedPath(locale)),
    },
    ...pathParts.map((part, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: index === pathParts.length - 1 ? title : titleFromSlug(part),
      item: absoluteUrl(localizedPath(locale, pathParts.slice(0, index + 1).join("/"))),
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}/restaurante#restaurant`,
    name: "Vivace Beachfront",
    url: absoluteUrl("/es/restaurante"),
    image: absoluteUrl("/images/restaurant-view-WsRnSUPN.jpg"),
    servesCuisine: ["Mediterranean", "Italian", "Costa Rican"],
    parentOrganization: { "@id": `${siteUrl}/#hotel` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Playa Hermosa",
      addressLocality: "Playa Hermosa",
      addressRegion: "Puntarenas",
      addressCountry: "CR",
    },
  };
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
