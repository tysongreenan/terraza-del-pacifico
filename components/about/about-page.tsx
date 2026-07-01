import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  Coffee,
  Dog,
  PlugZap,
  ShieldCheck,
  Smile,
  Umbrella,
  Waves,
  Wifi,
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { PanelCarousel } from "@/components/luxury/panel-carousel";
import {
  LuxuryCtaBand,
  LuxuryFactsStrip,
  LuxurySplitBand,
} from "@/components/luxury/primitives";
import { bookingHref, whatsappHref } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { aboutContent, type FacilityIcon } from "@/content/about";

const facilityIcons: Record<FacilityIcon, typeof Waves> = {
  rooms: BedDouble,
  pools: Waves,
  beach: Umbrella,
  pet: Dog,
  wifi: Wifi,
  parking: ShieldCheck,
  ev: PlugZap,
  kids: Smile,
  bakery: Coffee,
};

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
      <section className="relative overflow-hidden bg-concept-ocean text-white">
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
              <p className="text-eyebrow uppercase text-white text-shadow-hero">{copy.hero.eyebrow}</p>
              <h1 className="mt-5 max-w-3xl font-concept text-display font-medium leading-[1.02] text-shadow-hero ">
                {copy.hero.titleLines[0]}
                <br />
                {copy.hero.titleLines[1]}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/88 md:text-lg">
                {copy.hero.description}
              </p>
            </Reveal>
          </div>
          <p className="absolute bottom-8 right-6 z-10 hidden font-mono text-micro tracking-[0.16em] text-white/80 md:block">
            {copy.hero.meta}
          </p>
        </div>
      </section>

      {/* STATEMENT band */}
      <section className="py-section md:py-section">
        <div className="container max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">{copy.statementEyebrow}</p>
            <p className="mx-auto mt-5 max-w-3xl font-concept font-normal leading-[1.34] text-concept-ink text-h2">
              {w.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY split — text left (sand), carousel right */}
      <section className="flex flex-col md:flex-row md:items-stretch">
        <Reveal className="flex w-full flex-col justify-center bg-concept-sand-muted px-8 py-16 md:w-1/2 md:px-[72px] md:py-24">
          <p className="eyebrow">{copy.story.eyebrow}</p>
          <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.1] text-concept-ocean ">
            {copy.story.titleLines[0]}
            <br />
            {copy.story.titleLines[1]}
          </h2>
          {copy.story.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mt-5 max-w-md text-body-sm leading-[1.8] text-concept-ink-muted"
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
      <section className="bg-concept-ocean py-section md:py-section">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center md:mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
                {copy.timeline.eyebrow}
              </p>
              <h2 className="mt-3 font-concept text-h1 font-medium text-white ">
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
                <div className="font-concept text-h2 leading-none text-white">
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
      <section className="py-section md:py-section">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center md:mb-14">
              <p className="eyebrow">{copy.values.eyebrow}</p>
              <h2 className="mt-3 font-concept text-h1 font-medium text-concept-ocean ">
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
                <h3 className="font-concept text-h3 text-concept-ocean">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-concept-ink-muted">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POOL feature — LED pool story */}
      <section className="flex flex-col md:flex-row md:items-stretch">
        <Reveal className="relative min-h-[300px] w-full overflow-hidden md:min-h-[480px] md:w-1/2">
          <Image
            src={copy.pool.image}
            alt={copy.pool.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal
          delay={100}
          className="flex w-full flex-col justify-center bg-concept-ocean px-8 py-16 md:w-1/2 md:px-[72px] md:py-24"
        >
          <p className="text-eyebrow uppercase text-concept-gold">
            {copy.pool.eyebrow}
          </p>
          <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.1] text-white ">
            {copy.pool.title}
          </h2>
          {copy.pool.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mt-5 max-w-md text-body-sm leading-[1.8] text-on-dark-muted"
            >
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      {/* PRIVILEGED LOCATION — wildlife prose + highlights */}
      <section className="py-section md:py-section">
        <div className="container">
          <Reveal>
            <div className="mb-10 max-w-2xl md:mb-14">
              <p className="eyebrow">{copy.location.eyebrow}</p>
              <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.08] text-concept-ocean ">
                {copy.location.title}
              </h2>
              {copy.location.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mt-5 text-body-sm leading-[1.8] text-concept-ink-muted"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {copy.location.highlights.map((h, i) => (
              <Reveal
                key={h.title}
                delay={i * 90}
                className="rounded-sm border border-concept-border bg-concept-sand-muted p-8 md:p-10"
              >
                <h3 className="font-concept text-h3 text-concept-ocean">
                  {h.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-concept-ink-muted">
                  {h.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FACILITIES — amenity grid */}
      <section className="bg-concept-sand-muted py-section md:py-section">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center md:mb-14">
              <p className="eyebrow">{copy.facilities.eyebrow}</p>
              <h2 className="mt-3 font-concept text-h1 font-medium text-concept-ocean ">
                {copy.facilities.title}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-3">
            {copy.facilities.items.map((item, i) => {
              const Icon = facilityIcons[item.icon];
              const inner = (
                <>
                  <Icon
                    className="h-7 w-7 flex-none text-concept-gold"
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-concept text-h4 leading-tight text-concept-ocean">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-concept-ink-muted">
                      {item.subtitle}
                    </p>
                  </div>
                </>
              );

              return (
                <Reveal key={item.title} delay={i * 50}>
                  {item.href ? (
                    <Link
                      href={`/${locale}${item.href}`}
                      className="flex h-full items-start gap-4 rounded-sm border border-concept-border bg-concept-sand p-6 transition-colors hover:border-concept-gold/60 md:p-7"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="flex h-full items-start gap-4 rounded-sm border border-concept-border bg-concept-sand p-6 md:p-7">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEDDINGS & BEACHFRONT EVENTS — split band + CTA */}
      <LuxurySplitBand
        image={copy.weddings.image}
        imageAlt={copy.weddings.alt}
        eyebrow={copy.weddings.eyebrow}
        title={copy.weddings.title}
        body={copy.weddings.body}
        cta={{ label: copy.weddings.cta, href: `/${locale}/events` }}
      />

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
        image="/images/resort/grounds/exp-garden-lawn.avif"
      />
    </article>
  );
}
