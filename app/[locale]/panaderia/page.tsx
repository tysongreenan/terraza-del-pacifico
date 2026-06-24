import type { Metadata } from "next";
import { VenuePage } from "@/components/bars/venue-page";
import { JsonLd } from "@/components/json-ld";
import { bakery } from "@/content/bakery";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl, breadcrumbJsonLd, localizedPath, pageMetadata, siteUrl } from "@/lib/seo";

const path = "panaderia";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return params.then(({ locale }) => {
    const l = locale === "en" ? "en" : "es";
    const t = bakery.text[l];
    return pageMetadata({
      params: Promise.resolve({ locale }),
      path,
      content: { title: `${t.hero.title} | Hotel Terraza del Pacífico`, desc: t.hero.description },
      image: bakery.heroImage,
    });
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = getDictionary(l);
  const t = bakery.text[l];

  // Bakery structured data. Built only from genuine, on-page facts; the daily
  // opening hour is advertised on the page ("Open daily from 7 AM"), so we emit
  // it. Closing time / geo / priceRange are omitted until confirmed, matching
  // the fabrication-risk discipline in lib/seo.ts.
  const bakeryJsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": `${siteUrl}/${path}#bakery`,
    name: t.hero.title,
    description: t.hero.description,
    image: absoluteUrl(bakery.heroImage),
    url: absoluteUrl(localizedPath(l, path)),
    parentOrganization: { "@id": `${siteUrl}/#hotel` },
    servesCuisine: ["Bakery", "Coffee"],
    ...(bakery.hours
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
            opens: bakery.hours.opens,
            closes: bakery.hours.closes,
          },
        }
      : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Playa Hermosa",
      addressLocality: "Playa Hermosa",
      addressRegion: "Puntarenas",
      addressCountry: "CR",
    },
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: t.hero.title,
        })}
      />
      <JsonLd data={bakeryJsonLd} />
      <VenuePage venue={bakery} locale={l} mapHref={dict.location.mapHref} />
    </>
  );
}
