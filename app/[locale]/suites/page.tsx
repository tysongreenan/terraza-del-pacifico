import type { Metadata } from "next";
import data from "@/content/habitaciones.json";
import { SuitesHub } from "@/components/rooms/suites-hub";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "suites";

// Localized title/description so the Spanish route does not inherit the
// English-only strings stored in habitaciones.json. The OG/Twitter/canonical
// and hreflang alternates still come from pageMetadata().
const seoCopy: Record<Locale, { title: string; desc: string }> = {
  es: {
    title: "Habitaciones y villas frente al mar | Hotel Terraza del Pacífico",
    desc: "Habitaciones Superior, Estándar, Junior Suite y villas en Playa Hermosa. Vistas al Pacífico, aire acondicionado, WiFi y acceso a la playa.",
  },
  en: {
    title: "Beachfront rooms and villas | Hotel Terraza del Pacífico",
    desc: "Superior, Standard, Junior Suite rooms and villas in Playa Hermosa. Pacific views, air conditioning, WiFi and direct beach access.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (locale === "en" ? "en" : "es") as Locale;
  return pageMetadata({
    params: Promise.resolve({ locale }),
    path,
    content: { ...data, ...seoCopy[l] },
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
      <JsonLd
        data={breadcrumbJsonLd({ locale: l, path, title: dict.suites.title })}
      />
      <SuitesHub locale={l} dict={dict} />
    </>
  );
}
