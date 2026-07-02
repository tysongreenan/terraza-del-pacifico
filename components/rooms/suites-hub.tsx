"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Diamond } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { LuxuryCtaBand } from "@/components/luxury/primitives";
import { actionButtonVariants } from "@/components/ui/button";
import { DirectBookingNote } from "@/components/direct-booking-note";
import { bookingHref, whatsappHref, eventsEmail } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { hubRoomOrder, suitesHubContent } from "@/content/suites-hub";
import { LinkPreview } from "@/components/ui/link-preview";

type Room = Dictionary["suites"]["items"][number];

// Distinct, descriptive alt text per room so the hero slide and the editorial
// frame don't reuse the same string. Built from the localized room name + view.
function roomImageAlt(room: Room, locale: Locale) {
  const view = room.view?.toLowerCase();
  if (locale === "es") {
    return view
      ? `${room.name}, vista ${view} en Playa Hermosa, Terraza del Pacífico`
      : `${room.name} frente al mar en Playa Hermosa, Terraza del Pacífico`;
  }
  return view
    ? `${room.name} with ${view} view in Playa Hermosa, Terraza del Pacifico`
    : `${room.name} on the beachfront in Playa Hermosa, Terraza del Pacifico`;
}

// Shared focus ring so keyboard focus is visible on gold and bordered controls.
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
const roomsHeroImage = "/images/resort/grounds/LEd pool view from room .webp";

export function SuitesHub({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = suitesHubContent[locale];
  const s = dict.suites;

  // Rooms in the hub's editorial order, joined with their editorial copy.
  const rooms = hubRoomOrder
    .map((slug) => {
      const room = s.items.find((r) => r.slug === slug);
      const editorial = copy.rooms[slug];
      return room && editorial ? { room, editorial } : null;
    })
    .filter(Boolean) as { room: Room; editorial: (typeof copy.rooms)[string] }[];

  const [active, setActive] = useState(0);
  const activeRoom = rooms[active] ?? rooms[0];

  const go = (dir: number) =>
    setActive((i) => (i + dir + rooms.length) % rooms.length);

  return (
    <article className="home-concept bg-concept-sand">
      {/* HERO — cinematic carousel cycling all rooms, switcher docked below */}
      <section className="relative overflow-hidden bg-concept-ocean text-white">
        <div className="relative min-h-[78svh] md:min-h-[88svh]">
          <Image
            src={roomsHeroImage}
            alt={
              locale === "es"
                ? "Vista desde una habitacion hacia la piscina, jardines y Playa Hermosa"
                : "View from a room toward the pool, gardens and Playa Hermosa"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-scrim absolute inset-0" />

          <div className="container relative flex min-h-[78svh] flex-col justify-end pb-44 pt-28 md:min-h-[88svh] md:pb-48 md:pt-48">
            <Reveal>
              <p className="text-eyebrow uppercase text-white text-shadow-hero">{copy.hero.eyebrow}</p>
              <h1 className="mt-4 max-w-3xl font-concept text-display font-medium leading-[1.02] text-shadow-hero ">
                {copy.hero.titleLines[0]}
                <br />
                {copy.hero.titleLines[1]}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 text-shadow-hero md:text-lg">
                {copy.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    actionButtonVariants({ variant: "primary", size: "lg" }),
                    focusRing
                  )}
                >
                  {copy.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <Link
                  href={`/${locale}/suites/compare`}
                  className={cn(
                    actionButtonVariants({ variant: "secondary", surface: "dark", size: "lg" }),
                    focusRing
                  )}
                >
                  {copy.hero.secondaryCta}
                </Link>
              </div>
              <DirectBookingNote locale={locale} className="mt-5" />
            </Reveal>

            {/* carousel arrows */}
            <div className="absolute bottom-44 right-6 z-10 flex gap-2.5 md:bottom-48">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={locale === "es" ? "Habitación anterior" : "Previous room"}
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm transition-colors hover:bg-white/10",
                  focusRing
                )}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={locale === "es" ? "Habitación siguiente" : "Next room"}
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20",
                  focusRing
                )}
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        {/* Announce the active room to screen readers as the carousel changes. */}
        <p aria-live="polite" className="sr-only">
          {locale === "es"
            ? `Mostrando ${activeRoom.room.name}`
            : `Showing ${activeRoom.room.name}`}
        </p>
      </section>

      {/* INTRO band */}
      <section className="py-section-sm md:py-section">
        <div className="container max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">{copy.intro.eyebrow}</p>
            <p className="mx-auto mt-5 max-w-3xl font-concept font-normal leading-[1.34] text-concept-ink text-h2">
              {copy.intro.body.map((seg, i) =>
                typeof seg === "string" ? (
                  <span key={i}>{seg}</span>
                ) : (
                  <LinkPreview
                    key={i}
                    url={seg.href}
                    isStatic
                    imageSrc={seg.image}
                    ctaLabel={seg.ctaLabel}
                    width={300}
                    height={188}
                    quality={75}
                    className="font-semibold text-concept-ocean underline decoration-dotted decoration-concept-gold/70 decoration-2 underline-offset-[6px] transition-colors hover:text-concept-gold"
                  >
                    {seg.text}
                  </LinkPreview>
                )
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* EDITORIAL ROOM FEATURES — alternating frames + overlapping spec panel */}
      {rooms.map(({ room, editorial }, i) => (
        <RoomFeature
          key={room.slug}
          locale={locale}
          dict={dict}
          room={room}
          editorial={editorial}
          reverse={i % 2 === 1}
        />
      ))}

      {/* compare CTA — own section, sits clear below the last villa spec card */}
      <section className="relative z-20 pb-10 pt-20 text-center md:pb-14 md:pt-24">
        <div className="container">
          <Link
            href={`/${locale}/suites/compare`}
            className={cn(
              actionButtonVariants({ variant: "secondary", surface: "light", size: "lg" }),
              focusRing
            )}
          >
            {copy.compareCta}
          </Link>
        </div>
      </section>

      {/* INCLUDED IN EVERY ROOM */}
      <section className="bg-concept-sand py-section-sm md:py-section">
        <div className="container">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
              <p className="eyebrow">{copy.included.eyebrow}</p>
              <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.06] text-concept-ocean ">
                {copy.included.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-body-sm leading-relaxed text-concept-ink/80">
                {copy.included.body}
              </p>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-concept-border-soft bg-concept-border-soft sm:grid-cols-2 lg:grid-cols-3">
            {copy.included.items.map((item) => (
              <div key={item.title} className="bg-concept-sand p-8 md:p-9">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-concept-gold text-concept-gold">
                  <Diamond className="h-3.5 w-3.5" aria-hidden />
                </span>
                <h3 className="font-concept text-h3 text-concept-ocean">
                  {item.title}
                </h3>
                <p className="mt-2 text-caption leading-relaxed text-[#5f5a52]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <LuxuryCtaBand
        locale={locale}
        eyebrow={copy.cta.eyebrow}
        title={copy.cta.title}
        body={copy.cta.body}
        primaryLabel={copy.cta.primary}
        primaryHref={`mailto:${eventsEmail}`}
        secondaryLabel={copy.cta.secondary}
        secondaryHref={whatsappHref}
        image="/images/suites/general/exp-room-pool-view.webp"
      />
    </article>
  );
}

function RoomFeature({
  locale,
  dict,
  room,
  editorial,
  reverse,
}: {
  locale: Locale;
  dict: Dictionary;
  room: Room;
  editorial: { kicker: string; badge?: string; description: string; viewCta: string; photoCount: number; image: string };
  reverse: boolean;
}) {
  const s = dict.suites;
  const stats = [
    { label: s.guestsLabel, value: room.guests },
    { label: s.sizeLabel, value: room.size },
    { label: s.bedsLabel, value: room.beds },
    { label: s.viewLabel, value: room.view },
  ];

  return (
    <section className="container relative py-8 md:py-section-sm">
      <div
        className={cn(
          "relative flex flex-col gap-0 md:block",
          // Reserve height for the absolutely-positioned spec panel (top-20 +
          // its content) so a tall panel never bleeds down over the next room's
          // image on desktop.
          "md:min-h-[640px]",
          // give the floating panel room to overlap on desktop
          reverse ? "md:pl-[300px]" : "md:pr-[300px]"
        )}
      >
        {/* cinematic frame */}
        <Reveal className="group relative block overflow-hidden rounded-sm">
          <div className="relative h-[360px] md:h-[540px]">
            <Image
              src={editorial.image}
              alt={roomImageAlt(room, locale)}
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              className={cn(
                "absolute inset-0",
                reverse
                  ? "bg-gradient-to-l from-[rgba(10,28,37,0.5)] via-[rgba(10,28,37,0.08)] to-transparent"
                  : "bg-gradient-to-r from-[rgba(10,28,37,0.5)] via-[rgba(10,28,37,0.08)] to-transparent"
              )}
            />
            {editorial.badge && (
              <span
                className={cn(
                  "absolute top-6 text-micro font-semibold uppercase tracking-[0.16em]",
                  room.slug === "villas"
                    ? "left-6 bg-concept-gold px-3 py-1.5 text-concept-ink-strong"
                    : "left-6 rounded-full border border-white/55 px-4 py-2 text-white"
                )}
              >
                {editorial.badge}
              </span>
            )}
            <div
              className={cn(
                "absolute bottom-7 z-10",
                reverse ? "right-7 text-right" : "left-7"
              )}
            >
              <p className="mb-2.5 text-micro font-medium uppercase tracking-[0.22em] text-concept-cream">
                {editorial.kicker}
              </p>
              <h2 className="font-concept text-h1 font-medium leading-none text-white ">
                {room.name}
              </h2>
            </div>
            {editorial.photoCount > 0 && (
              <p className="absolute bottom-6 right-7 z-10 hidden font-mono text-micro tracking-[0.14em] text-white/80 md:block">
                {suitesHubContent[locale].galleryLabel(editorial.photoCount)}
              </p>
            )}
          </div>
        </Reveal>

        {/* floating sand spec panel */}
        <Reveal
          delay={120}
          className={cn(
            "relative z-10 -mt-10 w-full bg-concept-sand p-8 shadow-[0_30px_60px_rgba(16,58,77,0.18)] md:absolute md:top-20 md:-mt-0 md:w-[400px] md:p-11",
            reverse ? "md:left-0" : "md:right-0"
          )}
        >
          <h3 className="font-concept text-h3 font-medium leading-none text-concept-ocean">
            {room.name}
          </h3>
          <p className="mt-4 text-sm leading-[1.7] text-concept-ink-muted">
            {editorial.description}
          </p>
          <dl className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-y border-concept-border-soft py-5">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="h-7 w-px bg-[#d8c79c]" aria-hidden />
                )}
                <div>
                  <dd className="font-concept text-2xl leading-none text-concept-ocean">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-micro font-semibold uppercase tracking-[0.12em] text-[#6b6559]">
                    {stat.label}
                  </dt>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                actionButtonVariants({ variant: "primary" }),
                focusRing
              )}
            >
              {s.bookCta}
            </a>
            <Link
              href={`/${locale}/suites/${room.slug}`}
              className={cn(
                actionButtonVariants({ variant: "secondary", surface: "light" }),
                focusRing
              )}
            >
              {editorial.viewCta}
            </Link>
          </div>
          <DirectBookingNote locale={locale} surface="light" className="mt-4" />
        </Reveal>
      </div>
    </section>
  );
}
