import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VenuePage } from "@/components/bars/venue-page";
import { JsonLd } from "@/components/json-ld";
import { bars, getVenue } from "@/content/bars";
import { getDictionary } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/i18n";
import { absoluteUrl, breadcrumbJsonLd, localizedPath, pageMetadata, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    bars.map((venue) => ({ locale, slug: venue.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = locale === "en" ? "en" : "es";
  const venue = getVenue(slug);
  if (!venue) return {};
  const t = venue.text[l];
  return pageMetadata({
    params: Promise.resolve({ locale }),
    path: `bars/${slug}`,
    content: { title: `${t.hero.title} | Hotel Terraza del Pacífico`, desc: t.hero.description },
    image: venue.heroImage,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const venue = getVenue(slug);
  if (!venue) notFound();
  const dict = getDictionary(l);
  const t = venue.text[l];

  // BarOrPub structured data. Built only from genuine, on-page facts; geo,
  // priceRange, and openingHours are intentionally omitted until confirmed,
  // matching the fabrication-risk discipline in lib/seo.ts.
  const barJsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "@id": `${siteUrl}/bars/${slug}#bar`,
    name: t.hero.title,
    description: t.hero.description,
    image: absoluteUrl(venue.heroImage),
    url: absoluteUrl(localizedPath(l, `bars/${slug}`)),
    parentOrganization: { "@id": `${siteUrl}/#hotel` },
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
          path: `bars/${slug}`,
          title: t.hero.title,
        })}
      />
      <JsonLd data={barJsonLd} />
      <VenuePage venue={venue} locale={l} mapHref={dict.location.mapHref} />
    </>
  );
}
