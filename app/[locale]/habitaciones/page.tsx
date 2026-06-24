import type { Metadata } from "next";
import data from "@/content/habitaciones.json";
import { SuitesHub } from "@/components/rooms/suites-hub";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "habitaciones";

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
      <JsonLd
        data={breadcrumbJsonLd({ locale: l, path, title: dict.suites.title })}
      />
      <SuitesHub locale={l} dict={dict} />
    </>
  );
}
