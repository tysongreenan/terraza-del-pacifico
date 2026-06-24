import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { PanelCarousel } from "@/components/luxury/panel-carousel";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { Venue } from "@/content/bars";

export function VenuePage({
  venue,
  locale,
  mapHref,
}: {
  venue: Venue;
  locale: Locale;
  mapHref: string;
}) {
  const t = venue.text[locale];
  const amber = venue.palette === "amber";

  // Palette-aware tokens for the dark pour-list and hero scrim.
  const heroScrim = amber
    ? "bg-[linear-gradient(180deg,rgba(43,30,18,0.4)_0%,rgba(43,30,18,0.06)_38%,rgba(28,20,12,0.72)_100%)]"
    : "bg-[linear-gradient(180deg,rgba(16,58,77,0.42)_0%,rgba(16,58,77,0.06)_38%,rgba(10,28,37,0.72)_100%)]";
  const pourBg = amber ? "bg-[#1c140c]" : "bg-concept-ocean";
  const pourBorder = amber ? "border-[rgba(201,167,99,0.25)]" : "border-[rgba(159,185,194,0.25)]";
  const ctaScrim = amber
    ? "bg-[linear-gradient(180deg,rgba(28,20,12,0.5),rgba(28,20,12,0.62))]"
    : "bg-[linear-gradient(180deg,rgba(16,58,77,0.46),rgba(16,58,77,0.6))]";

  return (
    <article className="home-concept bg-concept-sand">
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div className="relative min-h-[64svh] md:min-h-[72svh]">
          <Image
            src={venue.heroImage}
            alt={t.hero.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className={cn("absolute inset-0", heroScrim)} />
          <div className="container relative flex min-h-[64svh] flex-col justify-end pb-8 pt-28 md:min-h-[72svh]">
            <Reveal>
              <h1 className="max-w-3xl font-concept text-4xl font-medium leading-[1.02] text-shadow-hero md:text-6xl lg:text-[70px]">
                {t.hero.title}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/88 md:text-lg">
                {t.hero.description}
              </p>
            </Reveal>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 md:flex-row md:gap-9">
              {t.hero.meta.map((item) => (
                <p key={item} className="text-xs uppercase tracking-[0.12em] text-[#f3ead6]">
                  <span className="mr-1.5 text-concept-gold">◆</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO split — text left (sand), carousel right */}
      <section className="flex flex-col md:flex-row md:items-stretch">
        <Reveal className="flex w-full flex-col justify-center bg-concept-sand-muted px-8 py-16 md:w-1/2 md:px-[72px] md:py-24">
          <p className="eyebrow">{t.intro.eyebrow}</p>
          <h2 className="mt-4 font-concept text-3xl font-medium leading-[1.1] text-concept-ocean md:text-[44px]">
            {t.intro.titleLines[0]}
            <br />
            {t.intro.titleLines[1]}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-[#6f6a62]">
            {t.intro.body}
          </p>
          <a
            href="#pours"
            className="mt-8 inline-flex w-fit items-center rounded-sm border border-[#cdbfa6] px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-concept-ocean transition-colors hover:border-concept-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2"
          >
            {t.intro.cta}
          </a>
        </Reveal>
        <PanelCarousel
          slides={venue.introSlides}
          tint={amber ? "amber" : "ocean"}
          className="min-h-[360px] w-full md:min-h-[520px] md:w-1/2"
        />
      </section>

      {/* POUR LIST — dark */}
      <section id="pours" className={cn("scroll-mt-24 py-20 md:py-24", pourBg)}>
        <div className="container">
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
                  {t.pours.eyebrow}
                </p>
                <h2 className="mt-3 font-concept text-3xl font-medium leading-[1.04] text-white md:text-[42px]">
                  {t.pours.title}
                </h2>
              </div>
              <p
                className={cn(
                  "max-w-xs text-sm leading-relaxed md:mb-1.5",
                  amber ? "text-[#cdbfa6]" : "text-[#bcd0d8]"
                )}
              >
                {t.pours.blurb}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-x-16 md:grid-cols-2">
            {[t.pours.items.slice(0, Math.ceil(t.pours.items.length / 2)), t.pours.items.slice(Math.ceil(t.pours.items.length / 2))].map(
              (col, ci) => (
                <div key={ci}>
                  {col.map((item, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex items-baseline gap-3.5 border-b py-4 last:border-b-0",
                        pourBorder
                      )}
                    >
                      <span className="font-concept text-2xl text-white">{item.name}</span>
                      {item.price && (
                        <>
                          <span
                            className={cn(
                              "mb-1.5 flex-1 border-b border-dotted",
                              amber ? "border-[rgba(201,167,99,0.4)]" : "border-[rgba(159,185,194,0.4)]"
                            )}
                          />
                          <span className="font-concept text-[22px] text-concept-gold">
                            {item.price}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden py-24 text-center text-white md:py-28">
        <Image src={venue.ctaImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className={cn("absolute inset-0", ctaScrim)} />
        <div className="container relative z-10">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-concept text-3xl font-medium leading-tight text-shadow-hero md:text-[48px]">
              {t.cta.title}
            </h2>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-concept-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1a1611] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                {t.cta.primary}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/60 px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {t.cta.secondary}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
