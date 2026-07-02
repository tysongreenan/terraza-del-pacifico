import type { Metadata } from "next";
import { notFound } from "next/navigation";
import data from "@/content/home.json";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/home/hero";
import { ResortDiscovery } from "@/components/home/resort-discovery";
import { Welcome } from "@/components/home/welcome";
import { Experiences } from "@/components/home/experiences";
import { Suites } from "@/components/home/suites";
import { Restaurant } from "@/components/home/restaurant";
import { Bars } from "@/components/home/bars";
import { Testimonials } from "@/components/home/testimonials";
import { Instagram } from "@/components/home/instagram";
import { Location } from "@/components/home/location";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";

// Localized home-page SEO. `content/home.json` ships a single (English) title
// and description, which would otherwise serve identical metadata to both
// locales. We resolve a locale-specific title/desc here so es-CR and en-US each
// get unique, translated metadata while keeping the captured English copy as
// the en fallback. Facts (place, amenities) are unchanged.
const homeSeo: Record<Locale, { title: string; desc: string }> = {
  es: {
    title: "Hotel Terraza del Pacífico | Playa Hermosa de Jacó, Costa Rica",
    desc: "Hotel frente al mar en Playa Hermosa de Jacó, Costa Rica. Habitaciones con vista al océano, piscina con luces LED, restaurante mediterráneo y experiencias junto a la playa.",
  },
  en: {
    title: "Hotel Terraza del Pacífico | Playa Hermosa de Jacó, Costa Rica",
    desc: "Beachfront hotel in Playa Hermosa de Jacó, Costa Rica. Ocean-view rooms, an LED-lit pool, a Mediterranean restaurant and experiences by the sea.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = isLocale(locale) ? homeSeo[locale] : homeSeo.es;
  return pageMetadata({
    params,
    path: "",
    content: { ...data, title: seo.title, desc: seo.desc },
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <div className="home-concept">
      <JsonLd data={breadcrumbJsonLd({ locale: l, path: "", title: data.h1[0] })} />
      <Hero locale={l} dict={dict} />
      <ResortDiscovery locale={l} dict={dict} />
      <Experiences locale={l} dict={dict} />
      <Suites locale={l} dict={dict} />
      <Restaurant locale={l} dict={dict} />
      <Bars locale={l} />
      <Testimonials dict={dict} />
      <Welcome dict={dict} />
      <Location dict={dict} />
      <Faq dict={dict} />
      <JsonLd data={faqJsonLd(dict.faq.items)} />
      <Instagram dict={dict} />
      <FinalCta locale={l} dict={dict} />
    </div>
  );
}