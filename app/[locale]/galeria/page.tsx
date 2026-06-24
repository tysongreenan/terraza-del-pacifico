import type { Metadata } from "next";
import Image from "next/image";
import data from "@/content/galeria.json";
import { PageScaffold } from "@/components/page-scaffold";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const path = "galeria";
const pagePeekImage = "/images/hero-aerial-beach-QbQLfxOv.jpg";

// Localized title/desc so the Spanish route ships Spanish SEO metadata instead
// of the English values baked into galeria.json.
const META: Record<Locale, { title: string; desc: string }> = {
  es: {
    title: "Galería | Hotel Terraza del Pacífico",
    desc: "Fotos del hotel, las habitaciones, el restaurante, los eventos y las experiencias en Playa Hermosa, Costa Rica.",
  },
  en: {
    title: "Gallery | Hotel Terraza del Pacífico",
    desc: "Browse photos of the hotel, rooms, restaurant, events, and experiences in Playa Hermosa, Costa Rica.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = META[(locale as Locale)] ?? META.es;
  return pageMetadata({
    params,
    path,
    content,
    image: "/images/Resort Highlights/IMG_2559.JPG",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <div className="home-concept bg-concept-sand font-concept">
      <Image
        src={pagePeekImage}
        alt={l === "en" ? "Gallery at Terraza del Pacífico" : "Galería en Terraza del Pacífico"}
        width={16}
        height={16}
        className="sr-only object-cover"
        aria-hidden
      />
      <PageScaffold
        data={data}
        locale={l}
        path={path}
        variant="luxury"
      />
    </div>
  );
}