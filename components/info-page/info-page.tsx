import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  LuxuryCtaBand,
  LuxuryFactsStrip,
  LuxuryHero,
  LuxuryImageBand,
  LuxuryMosaic,
  luxuryButtonOutline,
  type MosaicImage,
} from "@/components/luxury/primitives";
import { expandInfoPageGallery } from "@/lib/luxury-gallery";
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
  const sectionLabel = page.type === "experience" ? "experiencias" : "eventos";
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

      {page.sections.map((section, index) => {
        const image = bandImages[index % bandImages.length];
        if (!image) return null;

        return (
          <LuxuryImageBand
            key={section.title[locale]}
            image={image.src}
            imageAlt={image.alt[locale]}
            eyebrow={page.eyebrow[locale]}
            title={section.title[locale]}
            minHeight={index % 2 === 0 ? "48vh" : "42vh"}
          />
        );
      })}

      <LuxuryMosaic
        eyebrow={copy.galleryEyebrow}
        title={copy.galleryTitle}
        images={galleryMosaic}
        className="bg-concept-sand-muted"
      />

      {related.length > 0 && (
        <section className="bg-concept-sand py-14 md:py-20">
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