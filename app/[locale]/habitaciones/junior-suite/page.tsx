import type { Metadata } from "next";
import data from "@/content/habitaciones-junior-suite.json";
import { SuiteDetail } from "@/components/rooms/suite-detail";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "habitaciones/junior-suite";
const slug = "junior-suite";

// Localized title/description for both locales. The shared `pageMetadata`
// helper otherwise reads the English-only values from the room JSON, so the
// Spanish page would ship an English <title> and meta description. We keep the
// same `CapturedSeoContent` shape and pass a localized copy per request.
const seo = {
  es: {
    title: "Junior Suite frente a la piscina | Hotel Terraza del Pacífico",
    desc: "Junior Suite para dos con cama King, balcón privado y vista a la piscina principal en Playa Hermosa. Solo dos suites disponibles.",
  },
  en: {
    title: "Junior Suite with pool view | Hotel Terraza del Pacífico",
    desc: "Junior Suite for two with a King bed, private balcony and main-pool view in Playa Hermosa. Only two suites available.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale === "en" ? "en" : "es";
  return pageMetadata({
    params: Promise.resolve({ locale }),
    path,
    content: { ...data, title: seo[l].title, desc: seo[l].desc },
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

  return (
    <>
      <JsonLd data={breadcrumbJsonLd({ locale: l, path, title: data.h1[0] })} />
      <SuiteDetail slug={slug} locale={l} dict={dict} />
    </>
  );
}
