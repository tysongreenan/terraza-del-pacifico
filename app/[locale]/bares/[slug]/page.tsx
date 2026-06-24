import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VenuePage } from "@/components/bars/venue-page";
import { JsonLd } from "@/components/json-ld";
import { bars, getVenue } from "@/content/bars";
import { getDictionary } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

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
    path: `bares/${slug}`,
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

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path: `bares/${slug}`,
          title: venue.text[l].hero.title,
        })}
      />
      <VenuePage venue={venue} locale={l} mapHref={dict.location.mapHref} />
    </>
  );
}
