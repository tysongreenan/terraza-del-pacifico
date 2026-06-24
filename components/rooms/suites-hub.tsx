"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Diamond } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { LuxuryCtaBand } from "@/components/luxury/primitives";
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
      <section className="relative overflow-hidden text-white">
        <div className="relative min-h-[78svh] md:min-h-[88svh]">
          {rooms.map(({ room, editorial }, i) => (
            <Image
              key={room.slug}
              src={editorial.image}
              alt={roomImageAlt(room, locale)}
              fill
              priority={i === 0}
              sizes="100vw"
              className={cn(
                "object-cover transition-opacity [transition-duration:900ms]",
                i === active ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          <div className="hero-scrim absolute inset-0" />

          <div className="container relative flex min-h-[78svh] flex-col justify-end pb-44 pt-28 md:min-h-[88svh] md:pb-48">
            <Reveal>
              <p className="eyebrow text-concept-gold">{copy.hero.eyebrow}</p>
              <h1 className="mt-4 max-w-3xl font-concept text-4xl font-medium leading-[1.02] text-shadow-hero md:text-6xl lg:text-[68px]">
                {copy.hero.titleLines[0]}
                <br />
                {copy.hero.titleLines[1]}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/88 md:text-lg">
                {copy.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={bookingHref}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-sm bg-concept-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1a1611] transition-opacity hover:opacity-90",
                    focusRing
                  )}
                >
                  {copy.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <Link
                  href={`/${locale}/habitaciones/comparar`}
                  className={cn(
                    "inline-flex items-center justify-center rounded-sm border border-white/60 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10",
                    focusRing
                  )}
                >
                  {copy.hero.secondaryCta}
                </Link>
              </div>
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

        {/* room-type switcher bar — overlaps hero bottom */}
        <div className="container relative z-10 -mt-24 pb-px md:-mt-20">
          <div className="flex flex-col overflow-hidden rounded-sm bg-white/95 shadow-[0_14px_40px_rgba(16,58,77,0.2)] backdrop-blur md:flex-row md:items-stretch">
            {rooms.map(({ room }, i) => (
              <button
                key={room.slug}
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active ? "true" : undefined}
                className={cn(
                  "flex-1 border-b border-[#eae4d8] px-6 py-4 text-left transition-colors last:border-b-0 md:border-b-0 md:border-r",
                  focusRing,
                  i === active && "border-b-2 border-b-concept-gold md:border-b-0 md:border-t-2 md:border-t-concept-gold"
                )}
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6b6559]">
                  {room.guests} · {room.size}
                </div>
                <div
                  className={cn(
                    "mt-1 font-concept text-[17px]",
                    i === active ? "text-concept-ocean" : "text-concept-ink"
                  )}
                >
                  {room.name}
                </div>
              </button>
            ))}
            <div className="flex items-center justify-center p-3">
              <a
                href={bookingHref}
                className={cn(
                  "inline-flex w-full items-center justify-center rounded-sm bg-concept-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1a1611] transition-opacity hover:opacity-90 md:w-auto",
                  focusRing
                )}
              >
                {copy.switcher.reserve}
              </a>
            </div>
          </div>

          {/* Announce the active room to screen readers as the carousel changes. */}
          <p aria-live="polite" className="sr-only">
            {locale === "es"
              ? `Mostrando ${activeRoom.room.name}`
              : `Showing ${activeRoom.room.name}`}
          </p>
        </div>
      </section>

      {/* INTRO band */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">{copy.intro.eyebrow}</p>
            <p className="mx-auto mt-5 max-w-3xl font-concept text-2xl font-normal leading-[1.34] text-concept-ink md:text-[34px]">
              {copy.intro.body.map((seg, i) =>
                typeof seg === "string" ? (
                  <span key={i}>{seg}</span>
                ) : (
                  <LinkPreview
                    key={i}
                    url={seg.href}
                    isStatic
                    imageSrc={seg.image}
                    width={300}
                    height={188}
                    quality={60}
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
      <div className="pb-4">
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
      </div>

      {/* compare CTA */}
      <div className="container pb-20 text-center md:pb-24">
        <Link
          href={`/${locale}/habitaciones/comparar`}
          className={cn(
            "inline-flex items-center gap-2 rounded-sm border border-[#cdbfa6] px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-concept-ocean transition-colors hover:border-concept-ocean",
            focusRing
          )}
        >
          {copy.compareCta}
        </Link>
      </div>

      {/* INCLUDED IN EVERY ROOM */}
      <section className="bg-concept-sand py-16 md:py-24">
        <div className="container">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
              <p className="eyebrow">{copy.included.eyebrow}</p>
              <h2 className="mt-4 font-concept text-3xl font-medium leading-[1.06] text-concept-ocean md:text-[44px]">
                {copy.included.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-concept-ink/80">
                {copy.included.body}
              </p>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-[#e7dfcf] bg-[#e7dfcf] sm:grid-cols-2 lg:grid-cols-3">
            {copy.included.items.map((item) => (
              <div key={item.title} className="bg-concept-sand p-8 md:p-9">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-concept-gold text-concept-gold">
                  <Diamond className="h-3.5 w-3.5" aria-hidden />
                </span>
                <h3 className="font-concept text-2xl text-concept-ocean">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5f5a52]">
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
        image="/images/pool-aerial-day-BveHvOiS.jpg"
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
    <section className="container relative py-8 md:py-12">
      <div
        className={cn(
          "relative flex flex-col gap-0 md:block",
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
                  "absolute top-6 text-[10px] font-semibold uppercase tracking-[0.16em]",
                  room.slug === "villas"
                    ? "left-6 bg-concept-gold px-3 py-1.5 text-[#1a1611]"
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
              <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#f3ead6]">
                {editorial.kicker}
              </p>
              <h2 className="font-concept text-4xl font-medium leading-none text-white md:text-5xl">
                {room.name}
              </h2>
            </div>
            {editorial.photoCount > 0 && (
              <p className="absolute bottom-6 right-7 z-10 hidden font-mono text-[11px] tracking-[0.14em] text-white/80 md:block">
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
          <h3 className="font-concept text-3xl font-medium leading-none text-concept-ocean">
            {room.name}
          </h3>
          <p className="mt-4 text-sm leading-[1.7] text-[#6f6a62]">
            {editorial.description}
          </p>
          <dl className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-y border-[#e7dfcf] py-5">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="h-7 w-px bg-[#d8c79c]" aria-hidden />
                )}
                <div>
                  <dd className="font-concept text-2xl leading-none text-concept-ocean">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6b6559]">
                    {stat.label}
                  </dt>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={bookingHref}
              className={cn(
                "rounded-sm bg-concept-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#1a1611] transition-opacity hover:opacity-90",
                focusRing
              )}
            >
              {s.bookCta}
            </a>
            <Link
              href={`/${locale}/habitaciones/${room.slug}`}
              className={cn(
                "rounded-sm border border-[#cdbfa6] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-concept-ocean transition-colors hover:border-concept-ocean",
                focusRing
              )}
            >
              {editorial.viewCta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
