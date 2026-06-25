import type { Metadata } from "next";
import data from "@/content/habitaciones-estandar.json";
import { SuiteDetail } from "@/components/rooms/suite-detail";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, hotelRoomJsonLd, pageMetadata } from "@/lib/seo";

const path = "suites/estandar";
const slug = "estandar";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return pageMetadata({ params, path, content: data });
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
  // Breadcrumb leaf should match the localized room name shown on the page
  // (es: "Habitación Estándar") rather than the English-only JSON h1.
  const breadcrumbTitle = room?.name ?? data.h1[0];
  // Shared, genuine amenities note ("Free WiFi · A/C · …") split for schema.
  const amenities = dict.suites.amenitiesNote
    .split("·")
    .map((a) => a.trim())
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({ locale: l, path, title: breadcrumbTitle })}
      />
      {room ? (
        <JsonLd
          data={hotelRoomJsonLd({
            locale: l,
            path,
            room,
            description: room.blurb,
            amenities,
          })}
        />
      ) : null}
      <SuiteDetail slug={slug} locale={l} dict={dict} />
    </>
  );
}
