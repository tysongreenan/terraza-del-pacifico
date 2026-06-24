import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { InfoDetailTemplate } from "@/components/info-page/detail-template";
import { JsonLd } from "@/components/json-ld";
import { byLocalizedSlug, localizedParams, pageHref } from "@/content/info-pages";
import { experiences } from "@/content/experiences";
import { isLocale, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return localizedParams(experiences);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const page = byLocalizedSlug(experiences, l, slug);
  if (!page) notFound();

  return {
    title: page.title[l],
    description: page.description[l],
    alternates: {
      canonical: pageHref(page, l),
      languages: {
        "es-CR": pageHref(page, "es"),
        "en-US": pageHref(page, "en"),
        "x-default": pageHref(page, "es"),
      },
    },
    openGraph: {
      title: page.title[l],
      description: page.description[l],
      images: [page.heroImage.src],
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const page = byLocalizedSlug(experiences, l, slug);
  if (!page) notFound();
  const related = page.relatedIds
    .map((id) => experiences.find((item) => item.id === id))
    .filter((item): item is (typeof experiences)[number] => Boolean(item));

  return (
    <div className="home-concept bg-concept-sand font-concept">
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path: `experiencias/${page.slugs[l]}`,
          title: page.title[l],
        })}
      />
      <Image
        src={page.heroImage.src}
        alt={page.heroImage.alt[l]}
        width={16}
        height={16}
        className="sr-only object-cover"
        aria-hidden
      />
      <InfoDetailTemplate page={page} related={related} locale={l} />
    </div>
  );
}