import type { Metadata } from "next";
import { RoomsCompare } from "@/components/rooms/rooms-compare";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  localizedPath,
  pageMetadata,
} from "@/lib/seo";
import { hubRoomOrder } from "@/content/suites-hub";

const path = "suites/compare";

const seo = {
  es: {
    title: "Comparar habitaciones | Hotel Terraza del Pacífico",
    desc: "Compara las cuatro habitaciones frente al mar de Terraza del Pacífico por huéspedes, tamaño, camas y vista, y filtra por lo que necesitas.",
  },
  en: {
    title: "Compare Rooms | Hotel Terraza del Pacífico",
    desc: "Compare all four oceanfront room types at Terraza del Pacífico by guests, size, beds and view, then filter by what matters to you.",
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

  const roomItems = hubRoomOrder
    .map((slug) => dict.suites.items.find((r) => r.slug === slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: l === "en" ? "Oceanfront room types" : "Habitaciones frente al mar",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: roomItems.length,
    itemListElement: roomItems.map((room, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(localizedPath(l, `suites/${room.slug}`)),
      name: room.name,
    })),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: l === "en" ? "Compare Rooms" : "Comparar habitaciones",
        })}
      />
      <JsonLd data={itemListJsonLd} />
      <RoomsCompare locale={l} dict={dict} />
    </>
  );
}
