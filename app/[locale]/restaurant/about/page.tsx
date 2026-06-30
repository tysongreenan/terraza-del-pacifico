import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { RestaurantAboutPage } from "@/components/restaurant/restaurant-about-page";

const path = "restaurant/about";

const seoByLocale: Record<Locale, { title: string; desc: string }> = {
  en: {
    title: "Our Story | Vivace Beachfront Restaurant",
    desc: "Meet Chef Luigi Tumminello and the team behind Vivace Beachfront — a Sicilian kitchen at the edge of the Pacific on Playa Hermosa, Costa Rica.",
  },
  es: {
    title: "Nuestra Historia | Restaurante Vivace Beachfront",
    desc: "Conoce al Chef Luigi Tumminello y al equipo detrás de Vivace Beachfront — una cocina siciliana a la orilla del Pacífico en Playa Hermosa, Costa Rica.",
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
          title: seoByLocale[l].title,
        })}
      />
      <RestaurantAboutPage locale={l} />
    </>
  );
}
