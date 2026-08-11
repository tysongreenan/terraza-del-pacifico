import Link from "next/link";
import {
  LuxuryCtaBand,
  LuxuryHero,
  luxuryButtonPrimary,
} from "@/components/luxury/primitives";
import { LuxuryImageSlider, type SliderSlide } from "@/components/luxury/image-slider";
import { expandInfoPageGallery } from "@/lib/luxury-gallery";
import type { Locale } from "@/lib/i18n";
import type { HubPage, InfoPage } from "@/content/info-pages";
import { pageHref } from "@/content/info-pages";

const COPY = {
  es: {
    ctaEyebrow: "Planifica",
    ctaTitle: "Cuéntanos qué estás planeando",
    ctaBody:
      "El equipo de eventos puede ayudarte con disponibilidad, espacios, gastronomía y los detalles de tu celebración.",
    explore: "Ver más",
    dragHint: "Desliza para explorar",
    prev: "Imagen anterior",
    next: "Siguiente imagen",
    moreHub: "Ver más tipos de eventos",
  },
  en: {
    ctaEyebrow: "Plan ahead",
    ctaTitle: "Tell us what you are planning",
    ctaBody:
      "The events team can help with availability, spaces, cuisine and the details of your celebration.",
    explore: "See more",
    dragHint: "Swipe to explore",
    prev: "Previous image",
    next: "Next image",
    moreHub: "See more event types",
  },
} as const;

function eventSlides(page: InfoPage, locale: Locale): SliderSlide[] {
  // Alt text only (screen readers); no printed "… — image 3" caption per slide.
  return expandInfoPageGallery(page, 12).map((image) => ({
    src: image.src,
    alt: image.alt[locale],
  }));
}

export function EventsHub({
  hub,
  pages,
  locale,
  /** Optional deep link to a secondary hub (e.g. /events/other-events). */
  moreHubHref,
}: {
  hub: HubPage;
  pages: InfoPage[];
  locale: Locale;
  moreHubHref?: string;
}) {
  const copy = COPY[locale];

  return (
    <article className="home-concept">
      <LuxuryHero
        eyebrow={hub.eyebrow[locale]}
        title={hub.title[locale]}
        description={hub.description[locale]}
        image={hub.heroImage.src}
        imageAlt={hub.heroImage.alt[locale]}
      >
        {luxuryButtonPrimary(hub.cta.label[locale], hub.cta.href)}
      </LuxuryHero>

      {pages.map((page, index) => (
        <LuxuryImageSlider
          key={page.id}
          id={page.id}
          eyebrow={page.eyebrow[locale]}
          title={page.title[locale]}
          subtitle={page.description[locale]}
          slides={eventSlides(page, locale)}
          exploreHref={pageHref(page, locale)}
          exploreLabel={copy.explore}
          dragHint={copy.dragHint}
          prevLabel={copy.prev}
          nextLabel={copy.next}
          background={index % 2 === 0 ? "sand-muted" : "sand"}
        />
      ))}

      {moreHubHref && (
        <div className="border-t border-concept-border/60 bg-concept-sand py-10 text-center">
          <Link
            href={moreHubHref}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-concept-ocean underline-offset-4 transition-colors hover:text-concept-gold hover:underline"
          >
            {copy.moreHub}
          </Link>
        </div>
      )}

      <LuxuryCtaBand
        locale={locale}
        eyebrow={copy.ctaEyebrow}
        title={copy.ctaTitle}
        body={copy.ctaBody}
        primaryLabel={hub.cta.label[locale]}
        primaryHref={hub.cta.href}
        secondaryLabel="WhatsApp"
        image={pages[0]?.heroImage.src ?? hub.heroImage.src}
      />
    </article>
  );
}