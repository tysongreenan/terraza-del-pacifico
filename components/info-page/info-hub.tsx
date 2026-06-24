import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  LuxuryCtaBand,
  LuxuryHero,
  LuxuryImageBand,
  LuxuryMosaic,
  luxuryButtonPrimary,
  mosaicSpan,
  type MosaicImage,
} from "@/components/luxury/primitives";
import type { Locale } from "@/lib/i18n";
import type { HubPage, InfoPage } from "@/content/info-pages";
import { pageHref } from "@/content/info-pages";

const HUB_COPY = {
  es: {
    directoryEyebrow: "Directorio",
    directoryTitle: "Explora en imágenes",
    featuredEyebrow: "Destacado",
    ctaEyebrow: "Planifica",
    ctaTitle: "Cuéntanos qué estás planeando",
    ctaBody:
      "El equipo puede ayudarte con disponibilidad, recomendaciones y la mejor opción para tu estadía o evento.",
    explore: "Explorar",
  },
  en: {
    directoryEyebrow: "Directory",
    directoryTitle: "Explore in pictures",
    featuredEyebrow: "Featured",
    ctaEyebrow: "Plan ahead",
    ctaTitle: "Tell us what you are planning",
    ctaBody:
      "The team can help with availability, recommendations and the best fit for your stay or event.",
    explore: "Explore",
  },
} as const;

export function InfoHub({
  hub,
  pages,
  locale,
  featured,
}: {
  hub: HubPage;
  pages: InfoPage[];
  locale: Locale;
  featured?: InfoPage;
}) {
  const copy = HUB_COPY[locale];

  const directoryMosaic: MosaicImage[] = pages.map((page, index) => {
    const span = mosaicSpan(index);
    return {
      src: page.heroImage.src,
      alt: page.heroImage.alt[locale],
      href: pageHref(page, locale),
      caption: page.title[locale],
      span,
    };
  });

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

      <LuxuryMosaic
        eyebrow={copy.directoryEyebrow}
        title={copy.directoryTitle}
        images={directoryMosaic}
      />

      {featured && (
        <LuxuryImageBand
          image={featured.heroImage.src}
          imageAlt={featured.heroImage.alt[locale]}
          eyebrow={copy.featuredEyebrow}
          title={featured.title[locale]}
          body={featured.description[locale]}
          minHeight="58vh"
        />
      )}

      {featured && (
        <section className="bg-concept-sand py-10 md:py-12">
          <div className="container flex justify-center">
            <Link
              href={pageHref(featured, locale)}
              className="inline-flex items-center gap-2 rounded-sm border border-concept-ocean/25 px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-concept-ocean transition-colors hover:bg-concept-ocean hover:text-white"
            >
              {locale === "en" ? "Explore Surf Nights" : "Explorar Surf Nights"}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      )}

      <section className="bg-concept-sand-muted py-14 md:py-16">
        <div className="container">
          <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-5 [&::-webkit-scrollbar]:hidden">
            {pages.map((page) => (
              <Link
                key={page.id}
                href={pageHref(page, locale)}
                className="group relative h-[360px] w-[240px] shrink-0 overflow-hidden rounded-sm md:h-[400px] md:w-[280px]"
              >
                <Image
                  src={page.heroImage.src}
                  alt={page.heroImage.alt[locale]}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,32,42,0.92)] via-[rgba(11,32,42,0.2)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-concept-gold">
                    {page.eyebrow[locale]}
                  </p>
                  <h3 className="mt-2 font-concept text-2xl leading-tight md:text-3xl">
                    {page.title[locale]}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/90">
                    {copy.explore}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LuxuryCtaBand
        locale={locale}
        eyebrow={copy.ctaEyebrow}
        title={copy.ctaTitle}
        body={copy.ctaBody}
        primaryLabel={hub.cta.label[locale]}
        primaryHref={hub.cta.href}
        secondaryLabel={locale === "en" ? "WhatsApp" : "WhatsApp"}
        image={featured?.heroImage.src ?? hub.heroImage.src}
      />
    </article>
  );
}