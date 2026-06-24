import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  LuxuryCtaBand,
  LuxuryFactsStrip,
  LuxuryHero,
  LuxuryMosaic,
  LuxurySplitBand,
  luxuryButtonOutline,
  type MosaicImage,
} from "@/components/luxury/primitives";
import { LuxuryImageSlider, type SliderSlide } from "@/components/luxury/image-slider";
import { expandInfoPageGallery } from "@/lib/luxury-gallery";
import type { Locale } from "@/lib/i18n";
import type { InfoPage as InfoPageData } from "@/content/info-pages";
import { pageHref } from "@/content/info-pages";

const COPY = {
  es: {
    viewAll: "Todos los eventos",
    galleryEyebrow: "Galería",
    galleryTitle: "El evento en imágenes",
    sliderTitle: "Explora en fotos",
    dragHint: "Desliza para ver más",
    relatedEyebrow: "También te puede interesar",
    relatedTitle: "Más eventos en el resort",
    planEyebrow: "Planifica tu evento",
    planBody:
      "Comparte fecha, número de invitados y el tipo de celebración que imaginas. El equipo de eventos te orientará con los siguientes pasos.",
    explore: "Explorar",
    overviewEyebrow: "Resumen",
  },
  en: {
    viewAll: "All events",
    galleryEyebrow: "Gallery",
    galleryTitle: "The event in pictures",
    sliderTitle: "Explore in photos",
    dragHint: "Swipe to see more",
    relatedEyebrow: "You may also like",
    relatedTitle: "More events at the resort",
    planEyebrow: "Plan your event",
    planBody:
      "Share your date, guest count and the type of celebration you have in mind. The events team will guide you through the next steps.",
    explore: "Explore",
    overviewEyebrow: "Overview",
  },
} as const;

function sectionBody(section: InfoPageData["sections"][number], locale: Locale) {
  return section.body[locale].join(" ");
}

export function EventInfoPage({
  page,
  related,
  locale,
}: {
  page: InfoPageData;
  related: InfoPageData[];
  locale: Locale;
}) {
  const copy = COPY[locale];
  const hubHref = `/${locale}/eventos`;
  const external = page.cta.href.startsWith("http");

  const expandedGallery = expandInfoPageGallery(page, 16);
  const sliderSlides: SliderSlide[] = expandedGallery.map((image) => ({
    src: image.src,
    alt: image.alt[locale],
    caption: image.alt[locale],
  }));

  const galleryMosaic: MosaicImage[] = expandedGallery.map((image) => ({
    src: image.src,
    alt: image.alt[locale],
  }));

  const overview = page.sections[0];
  const detailSections = page.sections.slice(1);

  return (
    <article className="home-concept">
      <LuxuryHero
        eyebrow={page.eyebrow[locale]}
        title={page.title[locale]}
        description={page.description[locale]}
        image={page.heroImage.src}
        imageAlt={page.heroImage.alt[locale]}
      >
        <a
          href={page.cta.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-concept-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1a1611] transition-opacity hover:opacity-90"
        >
          {page.cta.label[locale]}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
        {luxuryButtonOutline(copy.viewAll, hubHref)}
      </LuxuryHero>

      <LuxuryFactsStrip
        facts={page.facts.map((fact) => ({
          label: fact.label[locale],
          value: fact.value[locale],
        }))}
      />

      {overview && (
        <section className="bg-concept-sand py-14 md:py-20">
          <div className="container max-w-3xl">
            <p className="eyebrow">{copy.overviewEyebrow}</p>
            <h2 className="mt-4 font-concept text-3xl font-medium leading-[1.08] text-concept-ocean md:text-[42px]">
              {overview.title[locale]}
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-concept-ink/82 md:text-base">
              {overview.body[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <LuxuryImageSlider
        eyebrow={copy.galleryEyebrow}
        title={copy.sliderTitle}
        slides={sliderSlides}
        dragHint={copy.dragHint}
        background="sand-muted"
      />

      {detailSections.map((section, index) => {
        const image = expandedGallery[(index + 1) % expandedGallery.length];
        return (
          <LuxurySplitBand
            key={section.title[locale]}
            image={image.src}
            imageAlt={image.alt[locale]}
            eyebrow={page.eyebrow[locale]}
            title={section.title[locale]}
            body={sectionBody(section, locale)}
            reverse={index % 2 === 1}
          />
        );
      })}

      <LuxuryMosaic
        eyebrow={copy.galleryEyebrow}
        title={copy.galleryTitle}
        images={galleryMosaic}
        className="bg-concept-sand"
      />

      {related.length > 0 && (
        <section className="bg-concept-sand-muted py-14 md:py-20">
          <div className="container">
            <div className="mb-8 md:mb-10">
              <p className="eyebrow">{copy.relatedEyebrow}</p>
              <h2 className="mt-3 font-concept text-3xl font-medium leading-[1.05] text-concept-ocean md:text-[46px]">
                {copy.relatedTitle}
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3 md:gap-4">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={pageHref(item, locale)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-sm"
                >
                  <Image
                    src={item.heroImage.src}
                    alt={item.heroImage.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,32,42,0.88)] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-concept-gold">
                      {item.eyebrow[locale]}
                    </p>
                    <h3 className="mt-2 font-concept text-2xl leading-tight">
                      {item.title[locale]}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em]">
                      {copy.explore}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <LuxuryCtaBand
        locale={locale}
        eyebrow={copy.planEyebrow}
        title={
          locale === "en"
            ? `Ready to plan ${page.title.en}?`
            : `¿Listo para planear ${page.title.es}?`
        }
        body={copy.planBody}
        primaryLabel={page.cta.label[locale]}
        primaryHref={page.cta.href}
        secondaryLabel="WhatsApp"
        image={page.heroImage.src}
      />
    </article>
  );
}