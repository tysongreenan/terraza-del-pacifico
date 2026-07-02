import type { Metadata } from "next";
import data from "@/content/habitaciones-junior-suite.json";
import { SuiteDetail } from "@/components/rooms/suite-detail";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, hotelRoomJsonLd, pageMetadata } from "@/lib/seo";

const path = "suites/junior-suite";
const slug = "junior-suite";

// Localized title/description for both locales. The shared `pageMetadata`
// helper otherwise reads the English-only values from the room JSON, so the
// Spanish page would ship an English <title> and meta description. We keep the
// same `CapturedSeoContent` shape and pass a localized copy per request.
const seo = {
  es: {
    title: "Junior Suite frente a la piscina en Playa Hermosa de Jacó",
    desc: "Junior Suite para dos con cama King, balcón privado y vista a la piscina principal en Playa Hermosa. Solo dos suites disponibles.",
  },
  en: {
    title: "Junior Suite with Pool View in Playa Hermosa de Jacó",
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

  const room = dict.suites.items.find((r) => r.slug === slug);
  // Shared, genuine amenities note ("Free WiFi · A/C · …") split for schema.
  const amenities = dict.suites.amenitiesNote
    .split("·")
    .map((a) => a.trim())
    .filter(Boolean);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd({ locale: l, path, title: data.h1[0] })} />
      {room ? (
        <JsonLd
          data={hotelRoomJsonLd({
            locale: l,
            path,
            room,
            description: seo[l === "en" ? "en" : "es"].desc,
            amenities,
          })}
        />
      ) : null}
      <SuiteDetail slug={slug} locale={l} dict={dict} />
    </>
  );
}
