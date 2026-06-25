"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import posthog from "posthog-js";
import {
  LuxuryCtaBand,
  LuxuryFactsStrip,
  LuxuryHero,
  LuxuryImageBand,
  LuxuryMosaic,
  luxuryButtonOutline,
  type MosaicImage,
} from "@/components/luxury/primitives";
import { actionButtonVariants } from "@/components/ui/button";
import { expandInfoPageGallery } from "@/lib/luxury-gallery";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { InfoPage as InfoPageData } from "@/content/info-pages";
import { pageHref } from "@/content/info-pages";

const PAGE_COPY = {
  es: {
    viewAll: "Ver todo",
    galleryEyebrow: "Galería",
    galleryTitle: "Cada momento, en imágenes",
    relatedEyebrow: "Relacionado",
    relatedTitle: "Sigue explorando",
    planEyebrow: "Planifica",
    planBody:
      "Contacta al equipo para confirmar disponibilidad y la mejor forma de incluirlo en tu estadía.",
    explore: "Explorar",
  },
  en: {
    viewAll: "View all",
    galleryEyebrow: "Gallery",
    galleryTitle: "Every moment, in pictures",
    relatedEyebrow: "Related",
    relatedTitle: "Keep exploring",
    planEyebrow: "Plan ahead",
    planBody:
      "Contact the team for availability and the best way to include this in your stay.",
    explore: "Explore",
  },
} as const;

export function InfoPage({
  page,
  related,
  locale,
}: {
  page: InfoPageData;
  related: InfoPageData[];
  locale: Locale;
}) {
  const copy = PAGE_COPY[locale];
  const sectionLabel = page.type === "experience" ? "experiences" : "events";
  const hubHref = `/${locale}/${sectionLabel}`;
  const external = page.cta.href.startsWith("http");

  const expandedGallery = expandInfoPageGallery(page, 16);
  const galleryMosaic: MosaicImage[] = expandedGallery.map((image) => ({
    src: image.src,
    alt: image.alt[locale],
  }));

  const bandImages = expandedGallery.slice(0, Math.max(page.sections.length, 4));

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
          className={cn(actionButtonVariants({ variant: "primary" }))}
          onClick={() =>
            posthog.capture("info_cta_clicked", {
              page_id: page.id,
              page_title: page.title[locale],
              page_type: page.type,
              locale,
            })
          }
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

      {page.sections.map((section, index) => {
        const image = bandImages[index % bandImages.length];
        if (!image) return null;

        const paragraphs = section.body[locale];

        return (
          <div key={section.title[locale]}>
            <LuxuryImageBand
              image={image.src}
              imageAlt={image.alt[locale]}
              eyebrow={page.eyebrow[locale]}
              title={section.title[locale]}
              minHeight={index % 2 === 0 ? "48vh" : "42vh"}
            />
            {paragraphs.length > 0 && (
              <section
                className={
                  index % 2 === 0
                    ? "bg-concept-sand py-12 md:py-16"
                    : "bg-concept-sand-muted py-12 md:py-16"
                }
              >
                <div className="container">
                  <div className="max-w-2xl space-y-4">
                    {paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-body-lg leading-relaxed text-concept-ink/85"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        );
      })}

      <LuxuryMosaic
        eyebrow={copy.galleryEyebrow}
        title={copy.galleryTitle}
        images={galleryMosaic}
        className="bg-concept-sand-muted"
      />

      {related.length > 0 && (
        <section className="bg-concept-sand py-14 md:py-section">
          <div className="container">
            <div className="mb-8 md:mb-10">
              <p className="eyebrow">{copy.relatedEyebrow}</p>
              <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.05] text-concept-ocean ">
                {copy.relatedTitle}
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3 md:gap-4">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={pageHref(item, locale)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-concept-sand"
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
                    <p className="text-micro font-semibold uppercase tracking-[0.14em] text-concept-gold">
                      {item.eyebrow[locale]}
                    </p>
                    <h3 className="mt-2 font-concept text-h3 leading-tight">
                      {item.title[locale]}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-micro font-semibold uppercase tracking-[0.1em]">
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
            ? `Ready for ${page.title.en}?`
            : `¿Listo para ${page.title.es}?`
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
