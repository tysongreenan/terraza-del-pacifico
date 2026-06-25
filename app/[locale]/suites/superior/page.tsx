import type { Metadata } from "next";
import { SuiteDetail } from "@/components/rooms/suite-detail";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, hotelRoomJsonLd, pageMetadata } from "@/lib/seo";

const path = "suites/superior";
const slug = "superior";

// Localized title/description so the es and en pages do not share one English
// string (the captured JSON only carries the English copy). Facts match the
// on-page room data: 4 guests, 32 m², two double beds, main-pool view.
const seo = {
  es: {
    title: "Habitación Superior | Hotel Terraza del Pacífico",
    desc: "Habitación Superior en Playa Hermosa: dos camas dobles para hasta 4 huéspedes, 32 m², aire acondicionado y WiFi, a pasos de la piscina y la playa.",
  },
  en: {
    title: "Superior Room | Hotel Terraza del Pacífico",
    desc: "Superior Room in Playa Hermosa with two double beds for up to 4 guests, 32 m², air conditioning and WiFi, steps from the pool and the beach.",
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
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = getDictionary(l);
  const room = dict.suites.items.find((r) => r.slug === slug);
  const title = room?.name ?? seo[l === "en" ? "en" : "es"].title;
  // Shared, genuine amenities note ("Free WiFi · A/C · …") split for schema.
  const amenities = dict.suites.amenitiesNote
    .split("·")
    .map((a) => a.trim())
    .filter(Boolean);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd({ locale: l, path, title })} />
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
