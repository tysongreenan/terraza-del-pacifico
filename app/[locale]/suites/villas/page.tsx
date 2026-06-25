import type { Metadata } from "next";
import data from "@/content/habitaciones-villas.json";
import { SuiteDetail } from "@/components/rooms/suite-detail";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, hotelRoomJsonLd, pageMetadata } from "@/lib/seo";

const path = "suites/villas";
const slug = "villas";

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
            description: data.desc[l === "en" ? "en" : "es"],
            amenities,
          })}
        />
      ) : null}
      <SuiteDetail slug={slug} locale={l} dict={dict} />
    </>
  );
}
