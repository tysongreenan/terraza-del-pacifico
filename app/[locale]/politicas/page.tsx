import type { Metadata } from "next";
import data from "@/content/politicas.json";
import { PageScaffold } from "@/components/page-scaffold";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const path = "politicas";

// `data` (content/politicas.json) carries English-only title/desc, but `es` is
// the primary locale — so the Spanish pages were shipping English metadata + OG
// tags. Localize the SEO content here (faithful translation of the existing
// strings, no new claims); `pageMetadata` derives OG/Twitter from these fields.
const metaContent = {
  es: {
    title: "Políticas | Hotel Terraza del Pacífico",
    desc: "Políticas de reservación, cancelación, mascotas, privacidad y términos del Hotel Terraza del Pacífico.",
  },
  en: {
    title: "Policies | Hotel Terraza del Pacífico",
    desc: "Cancellation, pet, privacy and terms policies of Hotel Terraza del Pacífico.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "en" ? metaContent.en : metaContent.es;
  return pageMetadata({ params, path, content: { ...data, ...content } });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PageScaffold data={data} locale={locale as Locale} path={path} />;
}
