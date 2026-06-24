import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EventsHub } from "@/components/info-page/events-hub";
import { JsonLd } from "@/components/json-ld";
import { eventHub, events } from "@/content/events";
import { isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return {
    title: eventHub.title[l],
    description: eventHub.description[l],
    alternates: {
      canonical: `/${l}/eventos`,
      languages: {
        "es-CR": "/es/eventos",
        "en-US": "/en/eventos",
        "x-default": "/es/eventos",
      },
    },
    openGraph: {
      title: eventHub.title[l],
      description: eventHub.description[l],
      images: [eventHub.heroImage.src],
    },
  };
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return (
    <div className="home-concept bg-concept-sand font-concept">
      <JsonLd
        data={breadcrumbJsonLd({ locale: l, path: "eventos", title: eventHub.title[l] })}
      />
      <Image
        src={eventHub.heroImage.src}
        alt={eventHub.heroImage.alt[l]}
        width={16}
        height={16}
        className="sr-only object-cover"
        aria-hidden
      />
      <EventsHub hub={eventHub} pages={events} locale={l} />
    </div>
  );
}