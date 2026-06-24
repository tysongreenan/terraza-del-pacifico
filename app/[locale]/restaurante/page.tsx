import type { Metadata } from "next";
import data from "@/content/restaurante.json";
import { RestaurantPage } from "@/components/restaurant/restaurant-page";
import { JsonLd } from "@/components/json-ld";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata, restaurantJsonLd } from "@/lib/seo";

const path = "restaurante";

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

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: "Vivace Beachfront",
        })}
      />
      <JsonLd data={restaurantJsonLd()} />
      <RestaurantPage locale={l} />
    </>
  );
}
