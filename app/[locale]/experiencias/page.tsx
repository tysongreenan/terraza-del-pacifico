import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { InfoHub } from "@/components/info-page/info-hub";
import { experienceHub, experiences } from "@/content/experiences";
import { events } from "@/content/events";
import { pageHref } from "@/content/info-pages";
import { isLocale, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return {
    title: experienceHub.title[l],
    description: experienceHub.description[l],
    alternates: {
      canonical: `/${l}/experiencias`,
      languages: {
        "es-CR": "/es/experiencias",
        "en-US": "/en/experiencias",
        "x-default": "/es/experiencias",
      },
    },
    openGraph: {
      title: experienceHub.title[l],
      description: experienceHub.description[l],
      images: [experienceHub.heroImage.src],
    },
  };
}

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const surfNights = events.find((page) => page.id === "surf-nights");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: experienceHub.title[l],
    description: experienceHub.description[l],
    itemListElement: experiences.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.title[l],
      url: `${siteUrl}${pageHref(page, l)}`,
    })),
  };

  return (
    <div className="home-concept bg-concept-sand font-concept">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Image
        src={experienceHub.heroImage.src}
        alt={experienceHub.heroImage.alt[l]}
        width={16}
        height={16}
        className="sr-only object-cover"
        aria-hidden
      />
      <InfoHub
        hub={experienceHub}
        pages={experiences}
        locale={l}
        featured={surfNights}
      />
    </div>
  );
}