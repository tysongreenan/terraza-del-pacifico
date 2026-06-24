import type { Metadata } from "next";
import data from "@/content/politicas.json";
import { PageScaffold } from "@/components/page-scaffold";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const path = "politicas";

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
  return <PageScaffold data={data} locale={locale as Locale} path={path} />;
}
