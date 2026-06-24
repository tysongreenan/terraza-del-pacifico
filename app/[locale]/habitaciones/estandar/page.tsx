import type { Metadata } from "next";
import data from "@/content/habitaciones-estandar.json";
import { SuiteDetail } from "@/components/rooms/suite-detail";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "habitaciones/estandar";
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

  return (
    <>
      <JsonLd data={breadcrumbJsonLd({ locale: l, path, title: data.h1[0] })} />
      <SuiteDetail slug={slug} locale={l} dict={dict} />
    </>
  );
}
