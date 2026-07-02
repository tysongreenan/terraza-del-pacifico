import type { Metadata } from "next";
import { VivaceMenu } from "@/components/restaurant/vivace-menu";
import { JsonLd } from "@/components/json-ld";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata, siteUrl } from "@/lib/seo";
import { vivaceMenu } from "@/content/menu-vivace";

const path = "restaurant/menu";

// Menu schema built from the live menu content. Linked to the Restaurant
// entity emitted on /restaurante so search engines can associate the menu
// with the venue. Prices are in Costa Rican colones (taxes included); the
// "+" suffix on some items (e.g. ₡28.000+) is dropped for the numeric offer.
function menuJsonLd(locale: Locale) {
  const toPrice = (price: string) => price.replace(/[^\d]/g, "");
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: locale === "en" ? "Vivace Beachfront Menu" : "Carta de Vivace Beachfront",
    inLanguage: locale === "en" ? "en" : "es",
    hasMenuSection: vivaceMenu.map((cat) => ({
      "@type": "MenuSection",
      name: cat.title[locale],
      hasMenuItem: cat.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name[locale],
        ...(item.desc[locale] ? { description: item.desc[locale] } : {}),
        offers: {
          "@type": "Offer",
          price: toPrice(item.price),
          priceCurrency: "CRC",
        },
      })),
    })),
    isPartOf: { "@id": `${siteUrl}/restaurant#restaurant` },
  };
}

const seo = {
  es: {
    title: "Carta de Vivace · Restaurante italiano en Playa Hermosa, Jacó",
    desc: "Carta de Vivace Beachfront, nuestro restaurante mediterráneo e italiano en Playa Hermosa de Jacó: pastas caseras, pescados del Pacífico, pizzas y postres.",
  },
  en: {
    title: "Vivace Menu · Italian Restaurant in Playa Hermosa de Jacó",
    desc: "The menu at Vivace Beachfront, our Mediterranean and Italian restaurant in Playa Hermosa de Jacó: house-made pastas, Pacific seafood, pizzas and dessert.",
  },
};

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return params.then(({ locale }) =>
    pageMetadata({
      params: Promise.resolve({ locale }),
      path,
      content: seo[locale === "en" ? "en" : "es"],
    })
  );
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ cat?: string }>;
}) {
  const { locale } = await params;
  const { cat } = await searchParams;
  const l = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: l === "en" ? "Menu" : "Menú",
        })}
      />
      <JsonLd data={menuJsonLd(l)} />
      <VivaceMenu locale={l} initialCat={cat} />
    </>
  );
}
