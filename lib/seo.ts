import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { htmlLang, locales } from "@/lib/i18n";

export const siteUrl = "https://terrazadelpacifico.com";
export const siteName = "Hotel Terraza del Pacífico";
export const defaultOgImage = "/images/og-image.jpg";

// A localizable string is either one shared value or a per-locale map. The map
// form lets content/*.json supply { es, en } so each route serves metadata in
// the right language instead of falling back to one hardcoded string.
export type LocalizableText = string | Partial<Record<Locale, string>>;

export type CapturedSeoContent = {
  title: LocalizableText;
  desc: LocalizableText;
  h1?: string[];
};

// Resolve a LocalizableText for one locale: prefer the requested locale, then
// Spanish (primary locale), then any value present, then "".
function resolveLocalized(value: LocalizableText, locale: Locale): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.es ?? Object.values(value).find(Boolean) ?? "";
}

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
  { slug: "panaderia", path: "panaderia", priority: 0.7, changeFrequency: "monthly" },
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
  const title = resolveLocalized(content.title, safeLocale);
  const description = resolveLocalized(content.desc, safeLocale);

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
  "Children's pool",
  "Pet-friendly (dogs)",
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
      absoluteUrl("/images/exp-beach-topdown.jpg"),
      absoluteUrl("/images/restaurant-view-WsRnSUPN.jpg"),
    ],
    email: "info@terrazadelpacifico.com",
    // Main hotel line — matches the Google Business Profile and restaurantJsonLd
    // (the WhatsApp booking line lives in finalCta/footer, not here).
    telephone: "+50626433222",
    // Mirrors the Google Business Profile listing exactly for NAP consistency.
    address: {
      "@type": "PostalAddress",
      streetAddress: "Playa Hermosa, 34",
      addressLocality: "Jacó",
      addressRegion: "Puntarenas",
      postalCode: "04023",
      addressCountry: "CR",
    },
    // Coordinates already used in the live location-section map embed
    // (components/home/location.tsx) — Playa Hermosa, Jacó.
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.580177",
      longitude: "-84.6141703",
    },
    // Daily reception window as published on the Google Business Profile.
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "22:00",
    },
    // Official tourism classification, confirmed on the Google Business Profile.
    starRating: { "@type": "Rating", ratingValue: "3" },
    // Qualitative price tier (kept short per Google guidance; not a fabricated rate).
    priceRange: "$$",
    // Pet policy as published (one dog, ≤10 kg, US$20/pet/day; service animals free).
    petsAllowed: "Dogs up to 10 kg / 22 lb allowed for a fee; service animals free.",
    // NOTE: aggregateRating removed — the only on-page reviews are placeholders
    // (testimonials TODO), and copying Google's review counts into self-serving
    // Hotel markup violates Google's rich-results policy. Re-add ONLY once real,
    // first-party reviews are displayed on-page, reflecting those numbers.
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
    // Google penalty risk): numberOfRooms.
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
      name: locale === "en" ? "Home" : "Inicio",
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

// FAQPage built from the on-page FAQ accordion. NOTE: since 2023 Google only
// shows FAQ rich results for authoritative gov/health sites, so this won't
// render rich snippets — its value is machine-readable Q&A for AI search
// (AI Overviews, ChatGPT, Perplexity), which is the reason the section exists.
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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
    // Published on /restaurante ("You can also call us at +506 2643 3222").
    telephone: "+50626433222",
    // Downloadable menu page linked from /restaurante.
    hasMenu: absoluteUrl("/es/restaurante/menu"),
    // Open daily for three service windows (breakfast / lunch / dinner) as
    // advertised on /restaurante. Each meal is its own OpeningHoursSpecification.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "10:00",
        name: "Breakfast",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "12:00",
        closes: "15:00",
        name: "Lunch",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "18:00",
        closes: "21:00",
        name: "Dinner",
      },
    ],
    // Same physical address as the Hotel — kept identical for NAP consistency.
    address: {
      "@type": "PostalAddress",
      streetAddress: "Playa Hermosa, 34",
      addressLocality: "Jacó",
      addressRegion: "Puntarenas",
      postalCode: "04023",
      addressCountry: "CR",
    },
  };
}

// Minimal shape needed to describe a bar venue as a BarOrPub node. Kept local
// (not imported from content/bars.ts) so this helper is self-contained and the
// caller passes whatever it already has in hand.
export type BarListEntry = {
  slug: string;
  name: string;
  cardImage: string;
  hours?: { opens: string; closes: string };
};

// ItemList of the /bares venues so search and AI answers can read the hub as a
// structured collection of two distinct bars, each tied back to the Hotel.
export function barsItemListJsonLd(locale: Locale, bars: BarListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: bars.map((bar, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BarOrPub",
        name: bar.name,
        url: absoluteUrl(localizedPath(locale, `bares/${bar.slug}`)),
        image: absoluteUrl(bar.cardImage),
        parentOrganization: { "@id": `${siteUrl}/#hotel` },
        ...(bar.hours
          ? {
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: bar.hours.opens,
                closes: bar.hours.closes,
              },
            }
          : {}),
      },
    })),
  };
}

// Minimal shape needed to describe a room/suite as a HotelRoom node. `guests`
// and `size` arrive as on-page display strings (e.g. "4", "32 m²"); we parse a
// number where possible and otherwise omit the field rather than guess.
export type RoomListEntry = {
  slug: string;
  name: string;
  guests?: string;
  size?: string;
  beds?: string;
};

function parseLeadingNumber(value?: string): number | undefined {
  if (!value) return undefined;
  const match = value.match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : undefined;
}

// ItemList of HotelRoom nodes for the /habitaciones hub. Prices are omitted on
// purpose until real values are confirmed (fabricated structured data is a
// Google penalty risk).
export function roomsJsonLd(locale: Locale, rooms: RoomListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: rooms.map((room, index) => {
      const occupancy = parseLeadingNumber(room.guests);
      const floorSize = parseLeadingNumber(room.size);
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "HotelRoom",
          name: room.name,
          url: absoluteUrl(localizedPath(locale, `habitaciones/${room.slug}`)),
          ...(occupancy !== undefined
            ? {
                occupancy: {
                  "@type": "QuantitativeValue",
                  maxValue: occupancy,
                  unitText: "person",
                },
              }
            : {}),
          ...(floorSize !== undefined
            ? {
                floorSize: {
                  "@type": "QuantitativeValue",
                  value: floorSize,
                  unitCode: "MTK",
                },
              }
            : {}),
          ...(room.beds ? { bed: room.beds } : {}),
        },
      };
    }),
  };
}

// Per-room HotelRoom node for a single room detail page. Mirrors the ItemList
// entries in `roomsJsonLd` but stands alone with an @id, description and the
// containing Hotel, so each room page carries verifiable structured data.
//
// Every value is read from the on-page dict entry: occupancy/floorSize are
// parsed from the display strings, the bed string is split into a count + type
// only when a leading number is present (rooms like "Multiple"/"Múltiples"
// emit the raw `bed` string with no fabricated count), and amenities come from
// the shared, genuine amenitiesNote. NO price or rating is emitted.
export function hotelRoomJsonLd({
  locale,
  path,
  room,
  description,
  amenities,
}: {
  locale: Locale;
  path: string;
  room: RoomListEntry & { view?: string };
  description?: string;
  amenities?: string[];
}) {
  const occupancy = parseLeadingNumber(room.guests);
  const floorSize = parseLeadingNumber(room.size);
  const bedCount = parseLeadingNumber(room.beds);
  const bedType = room.beds
    ? room.beds.replace(/^\s*\d+(?:\.\d+)?\s*/, "").trim()
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": ["Accommodation", "HotelRoom"],
    "@id": `${siteUrl}/${path}#room`,
    name: room.name,
    ...(description ? { description } : {}),
    url: absoluteUrl(localizedPath(locale, path)),
    ...(occupancy !== undefined
      ? {
          occupancy: {
            "@type": "QuantitativeValue",
            maxValue: occupancy,
            unitText: locale === "en" ? "person" : "persona",
          },
        }
      : {}),
    ...(floorSize !== undefined
      ? {
          floorSize: {
            "@type": "QuantitativeValue",
            value: floorSize,
            unitCode: "MTK",
          },
        }
      : {}),
    ...(room.beds
      ? {
          bed:
            bedCount !== undefined && bedType
              ? {
                  "@type": "BedDetails",
                  numberOfBeds: bedCount,
                  typeOfBed: bedType,
                }
              : room.beds,
        }
      : {}),
    ...(room.view ? { view: room.view } : {}),
    ...(amenities && amenities.length
      ? {
          amenityFeature: amenities.map((name) => ({
            "@type": "LocationFeatureSpecification",
            name,
            value: true,
          })),
        }
      : {}),
    containedInPlace: { "@id": `${siteUrl}/#hotel` },
  };
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
