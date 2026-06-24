import type { Metadata } from "next";
import Image from "next/image";
import data from "@/content/galeria.json";
import { PageScaffold } from "@/components/page-scaffold";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const path = "galeria";
const pagePeekImage = "/images/hero-aerial-beach-QbQLfxOv.jpg";

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