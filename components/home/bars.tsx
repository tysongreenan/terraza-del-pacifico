import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { bars, barsIndexCopy } from "@/content/bars";
import type { Locale } from "@/lib/i18n";

// On-resort bars showcase. Copy is sourced from content/bars.ts (same strings
// the /bars hub uses) so the "on the resort" framing stays in one place.
export function Bars({ locale }: { locale: Locale }) {
  const copy = barsIndexCopy[locale];

  return (
    <section className="bg-concept-sand-muted py-section-sm md:py-section">
      <div className="container">
        <Reveal>
          <div className="mb-10 max-w-2xl md:mb-12">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.04] text-concept-ocean">
              {copy.title}
            </h2>
            <p className="mt-4 text-body-sm leading-relaxed text-concept-ink/80 md:text-base">
              {copy.description}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {bars.map((venue, i) => {
            const t = venue.text[locale];
            return (
              <Reveal key={venue.slug} delay={i * 90}>
                <Link
                  href={`/${locale}/bars/${venue.slug}`}
                  className="group relative block h-[420px] overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 md:h-[460px]"
                >
                  <Image
                    src={venue.cardImage}
                    alt={t.hero.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-concept-ocean/95 via-concept-ocean/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-7 text-white">
                    <p className="text-micro font-semibold uppercase tracking-[0.16em] text-white">
                      {t.card.tagline}
                    </p>
                    <h3 className="mt-2 font-concept text-h2 leading-[1.05]">
                      {t.hero.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-white/80">
                      {t.hero.meta[0]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-[0.1em] text-white">
                      {copy.viewCta}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
