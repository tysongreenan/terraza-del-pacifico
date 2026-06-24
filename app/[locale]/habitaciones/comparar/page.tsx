import type { Metadata } from "next";
import { RoomsCompare } from "@/components/rooms/rooms-compare";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "habitaciones/comparar";

const seo = {
  es: {
    title: "Comparar habitaciones | Hotel Terraza del Pacífico",
    desc: "Compara las cuatro habitaciones frente al mar de Terraza del Pacífico — huéspedes, tamaño, camas y vista — y filtra por lo que necesitas.",
  },
  en: {
    title: "Compare Rooms | Hotel Terraza del Pacífico",
    desc: "Compare all four oceanfront room types at Terraza del Pacífico — guests, size, beds and view — and filter by what matters to you.",
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

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: l === "en" ? "Compare Rooms" : "Comparar habitaciones",
        })}
      />
      <RoomsCompare locale={l} dict={dict} />
    </>
  );
}
