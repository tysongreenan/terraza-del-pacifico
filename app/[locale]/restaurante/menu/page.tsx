import type { Metadata } from "next";
import { VivaceMenu } from "@/components/restaurant/vivace-menu";
import { JsonLd } from "@/components/json-ld";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "restaurante/menu";

const seo = {
  es: {
    title: "Menú · Vivace Beachfront | Hotel Terraza del Pacífico",
    desc: "El menú de Vivace Beachfront: entradas, pizzas, pastas artesanales, pescado, carnes, bebidas y postres — cocina mediterránea frente al Pacífico.",
  },
  en: {
    title: "Menu · Vivace Beachfront | Hotel Terraza del Pacífico",
    desc: "The Vivace Beachfront menu: appetizers, pizzas, handmade pastas, fish, meat, drinks and dessert — Mediterranean cuisine on the Pacific.",
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
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ cat?: string }>;
}) {
  const { locale } = await params;
  const { cat } = await searchParams;
  const l = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: l === "en" ? "Menu" : "Menú",
        })}
      />
      <VivaceMenu locale={l} initialCat={cat} />
    </>
  );
}
