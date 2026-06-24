import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { PanelCarousel } from "@/components/luxury/panel-carousel";
import { LuxuryCtaBand, LuxuryFactsStrip } from "@/components/luxury/primitives";
import { bookingHref, whatsappHref } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { aboutContent } from "@/content/about";

export function AboutPage({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = aboutContent[locale];
  const w = dict.welcome;

  return (
    <article className="home-concept bg-concept-sand">
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div className="relative min-h-[68svh] md:min-h-[74svh]">
          <Image
            src={copy.hero.image}
            alt={copy.hero.titleLines.join(" ")}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="container relative flex min-h-[68svh] flex-col justify-end pb-16 pt-28 md:min-h-[74svh] md:pb-20">
            <Reveal>
              <p className="eyebrow text-concept-gold">{copy.hero.eyebrow}</p>
              <h1 className="mt-5 max-w-3xl font-concept text-4xl font-medium leading-[1.02] text-shadow-hero md:text-6xl lg:text-[68px]">
                {copy.hero.titleLines[0]}
                <br />
                {copy.hero.titleLines[1]}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/88 md:text-lg">
                {copy.hero.description}
              </p>
            </Reveal>
          </div>
          <p className="absolute bottom-8 right-6 z-10 hidden font-mono text-[11px] tracking-[0.16em] text-white/80 md:block">
            {copy.hero.meta}
          </p>
        </div>
      </section>

      {/* STATEMENT band */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">{copy.statementEyebrow}</p>
            <p className="mx-auto mt-5 max-w-3xl font-concept text-2xl font-normal leading-[1.34] text-concept-ink md:text-[38px]">
              {w.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY split — text left (sand), carousel right */}
      <section className="flex flex-col md:flex-row md:items-stretch">
        <Reveal className="flex w-full flex-col justify-center bg-concept-sand-muted px-8 py-16 md:w-1/2 md:px-[72px] md:py-24">
          <p className="eyebrow">{copy.story.eyebrow}</p>
          <h2 className="mt-4 font-concept text-3xl font-medium leading-[1.1] text-concept-ocean md:text-[44px]">
            {copy.story.titleLines[0]}
            <br />
            {copy.story.titleLines[1]}
          </h2>
          {copy.story.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mt-5 max-w-md text-[15px] leading-[1.8] text-[#6f6a62]"
            >
              {p}
            </p>
          ))}
        </Reveal>
        <PanelCarousel
          slides={copy.story.slides}
          className="min-h-[360px] w-full md:min-h-[520px] md:w-1/2"
        />
      </section>

      {/* TIMELINE — dark milestone strip */}
      <section className="bg-concept-ocean py-20 md:py-24">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center md:mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
                {copy.timeline.eyebrow}
              </p>
              <h2 className="mt-3 font-concept text-3xl font-medium text-white md:text-[42px]">
                {copy.timeline.title}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 border-t border-[#9fb9c2]/25 sm:grid-cols-2 lg:grid-cols-4">
            {copy.timeline.items.map((item, i) => (
              <Reveal
                key={item.year}
                delay={i * 80}
                className="relative px-1 pt-9 sm:px-6 lg:border-r lg:border-[#9fb9c2]/18 lg:last:border-r-0"
              >
                <span className="absolute -top-[7px] left-1 h-3 w-3 rounded-full bg-concept-gold sm:left-6" />
                <div className="font-concept text-4xl leading-none text-white">
                  {item.year}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#9fb9c2]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES trio */}
      <section className="py-20 md:py-24">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center md:mb-14">
              <p className="eyebrow">{copy.values.eyebrow}</p>
              <h2 className="mt-3 font-concept text-3xl font-medium text-concept-ocean md:text-[42px]">
                {copy.values.title}
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
            {copy.values.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="text-center">
                <div className="relative mb-6 h-52 overflow-hidden rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-concept text-2xl text-concept-ocean">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#6f6a62]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS strip */}
      <LuxuryFactsStrip
        facts={w.stats.map((s) => ({ value: s.value, label: s.label }))}
      />

      {/* CTA band */}
      <LuxuryCtaBand
        locale={locale}
        eyebrow={dict.suites.eyebrow}
        title={copy.cta.title}
        body=""
        primaryLabel={copy.cta.primary}
        primaryHref={bookingHref}
        secondaryLabel={copy.cta.secondary}
        secondaryHref={whatsappHref}
        image="/images/pool-aerial-day-BveHvOiS.jpg"
      />
    </article>
  );
}
