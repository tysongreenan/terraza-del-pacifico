import type { Metadata } from "next";
import data from "@/content/restaurante.json";
import { RestaurantPage } from "@/components/restaurant/restaurant-page";
import { JsonLd } from "@/components/json-ld";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata, restaurantJsonLd } from "@/lib/seo";

const path = "restaurante";

// Locale-aware SEO copy. The captured JSON (`data`) is English-only, so Spanish
// visitors would otherwise receive an English title/description. We select the
// right strings by locale while keeping the same { title, desc } content shape
// that pageMetadata expects.
const seoByLocale: Record<Locale, { title: string; desc: string }> = {
  en: {
    title: data.title,
    desc: data.desc,
  },
  es: {
    title: "Vivace Beachfront | Restaurante mediterráneo en Playa Hermosa",
    desc: "Restaurante frente al mar a cargo del chef siciliano Luigi. Cocina mediterránea e italiana con ingredientes frescos de Costa Rica.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = locale === "en" ? "en" : "es";
  return pageMetadata({
    params: Promise.resolve({ locale }),
    path,
    content: seoByLocale[l],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: "Vivace Beachfront",
        })}
      />
      <JsonLd data={restaurantJsonLd()} />
      <RestaurantPage locale={l} />
    </>
  );
}
