import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EventsHub } from "@/components/info-page/events-hub";
import { EventInfoPage } from "@/components/info-page/event-info-page";
import { InfoDetailTemplate } from "@/components/info-page/detail-template";
import { byLocalizedSlug, localizedParams, pageHref } from "@/content/info-pages";
import {
  events,
  otherEventIds,
  otherEventsHub,
  otherEventSlugs,
} from "@/content/events";
import { isLocale, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

const BREADCRUMB_LABELS = {
  es: { home: "Inicio", events: "Eventos" },
  en: { home: "Home", events: "Events" },
} as const;

function breadcrumbJsonLd(
  locale: Locale,
  pageTitle: string,
  pagePath: string
) {
  const labels = BREADCRUMB_LABELS[locale];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: labels.home,
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: labels.events,
        item: `${siteUrl}/${locale}/eventos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageTitle,
        item: `${siteUrl}${pagePath}`,
      },
    ],
  };
}

function otherEventsParams() {
  return [
    { locale: "es", slug: otherEventSlugs.es },
    { locale: "en", slug: otherEventSlugs.en },
  ];
}

function isOtherEventsSlug(locale: Locale, slug: string) {
  return otherEventSlugs[locale] === slug;
}

function otherEventPages() {
  return otherEventIds
    .map((id) => events.find((page) => page.id === id))
    .filter((page): page is (typeof events)[number] => Boolean(page));
}

export function generateStaticParams() {
  return [...localizedParams(events), ...otherEventsParams()];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  if (isOtherEventsSlug(l, slug)) {
    return {
      title: otherEventsHub.title[l],
      description: otherEventsHub.description[l],
      alternates: {
        canonical: `/${l}/eventos/${otherEventSlugs[l]}`,
        languages: {
          "es-CR": `/es/eventos/${otherEventSlugs.es}`,
          "en-US": `/en/eventos/${otherEventSlugs.en}`,
          "x-default": `/es/eventos/${otherEventSlugs.es}`,
        },
      },
      openGraph: {
        title: otherEventsHub.title[l],
        description: otherEventsHub.description[l],
        images: [otherEventsHub.heroImage.src],
      },
    };
  }

  const page = byLocalizedSlug(events, l, slug);
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

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  if (isOtherEventsSlug(l, slug)) {
    const breadcrumb = breadcrumbJsonLd(
      l,
      otherEventsHub.title[l],
      `/${l}/eventos/${otherEventSlugs[l]}`
    );
    return (
      <div className="home-concept bg-concept-sand font-concept">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
        <Image
          src={otherEventsHub.heroImage.src}
          alt={otherEventsHub.heroImage.alt[l]}
          width={16}
          height={16}
          className="sr-only object-cover"
          aria-hidden
        />
        <EventsHub hub={otherEventsHub} pages={otherEventPages()} locale={l} />
      </div>
    );
  }

  const page = byLocalizedSlug(events, l, slug);
  if (!page) notFound();
  const related = page.relatedIds
    .map((id) => events.find((item) => item.id === id))
    .filter((item): item is (typeof events)[number] => Boolean(item));
  const breadcrumb = breadcrumbJsonLd(l, page.title[l], pageHref(page, l));

  return (
    <div className="home-concept bg-concept-sand font-concept">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Image
        src={page.heroImage.src}
        alt={page.heroImage.alt[l]}
        width={16}
        height={16}
        className="sr-only object-cover"
        aria-hidden
      />
      {page.id === "surf-nights" ? (
        <InfoDetailTemplate page={page} related={related} locale={l} />
      ) : (
        <EventInfoPage page={page} related={related} locale={l} />
      )}
    </div>
  );
}