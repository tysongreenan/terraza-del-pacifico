"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import posthog from "posthog-js";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Diamond,
  Expand,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { actionButtonVariants } from "@/components/ui/button";
import { LuxuryCtaBand } from "@/components/luxury/primitives";
import { Lightbox } from "@/components/luxury/lightbox";
import { DirectBookingNote } from "@/components/direct-booking-note";
import { bookingHref, eventsEmail, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { hubRoomOrder, suitesHubContent } from "@/content/suites-hub";
import { suiteDetailContent } from "@/content/suite-detail";
import { roomGalleries } from "@/content/room-galleries";

type Room = Dictionary["suites"]["items"][number];

export function SuiteDetail({
  slug,
  locale,
  dict,
}: {
  slug: string;
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = suiteDetailContent[locale];
  const roomCopy = copy.rooms[slug];
  const editorial = suitesHubContent[locale].rooms[slug];
  const s = dict.suites;
  const room = s.items.find((r) => r.slug === slug);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!room || !roomCopy || !editorial) return null;

  const gallery = roomGalleries.find((g) => g.slug === slug)?.images ?? [];
  const photoAlt = (i: number) => gallery[i]?.alt[locale] ?? room.name;
  const remaining = Math.max(0, gallery.length - 5);
  const lightboxImages = gallery.map((g, i) => ({
    src: g.src,
    alt: photoAlt(i),
  }));

  const specs = [
    { label: s.guestsLabel, value: room.guests },
    { label: s.sizeLabel, value: room.size },
    { label: s.bedsLabel, value: room.beds },
    { label: s.viewLabel, value: room.view },
  ];

  const goodToKnow = [
    { label: copy.checkInLabel, value: copy.checkInTime },
    { label: copy.checkOutLabel, value: copy.checkOutTime },
    ...roomCopy.goodToKnow,
  ];

  const cta = suitesHubContent[locale].cta;

  const others = hubRoomOrder
    .filter((sl) => sl !== slug)
    .map((sl) => {
      const r = s.items.find((it) => it.slug === sl);
      const ed = suitesHubContent[locale].rooms[sl];
      return r && ed ? { room: r, image: ed.image } : null;
    })
    .filter(Boolean) as { room: Room; image: string }[];

  const scrollByCards = (dir: number) =>
    trackRef.current?.scrollBy({ left: dir * 460, behavior: "smooth" });

  return (
    <article className="home-concept bg-concept-sand">
      {/* HERO MOSAIC */}
      <section className="container pt-section-top">
        <div className="grid gap-2 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[300px_300px]">
          {/* lead tile — image is a button; the title sits above, click-through */}
          <div className="group relative col-span-1 h-[340px] overflow-hidden rounded-sm md:row-span-2 md:h-auto">
            <button
              type="button"
              onClick={() => {
                setOpenIndex(0);
                posthog.capture("suite_gallery_opened", { suite_slug: slug, photo_index: 1 });
              }}
              aria-label={copy.enlarge(1, gallery.length)}
              className="absolute inset-0 z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-concept-gold"
            >
              <Image
                src={gallery[0]?.src ?? editorial.image}
                alt={photoAlt(0)}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-concept-ocean/[0.62] via-concept-ocean/[0.05] to-transparent" />
            </button>
            <div className="pointer-events-none absolute bottom-6 left-6 z-20 md:bottom-7 md:left-7">
              <p className="mb-2 text-micro font-medium uppercase tracking-[0.22em] text-concept-cream">
                {editorial.kicker} · {room.view}
              </p>
              <h1 className="font-concept text-display font-medium leading-none text-white ">
                {room.name}
              </h1>
            </div>
            <ZoomBadge />
          </div>

          {/* secondary tiles — desktop mosaic only */}
          {gallery.slice(1, 5).map((img, i) => {
            // Only flag "+N" when 2+ photos stay hidden — "+1" over a real photo
            // is noise, and every tile opens the full lightbox anyway.
            const isLast = i === 3 && remaining > 1;
            return (
              <button
                key={img.src + i}
                type="button"
                onClick={() => setOpenIndex(i + 1)}
                aria-label={copy.enlarge(i + 2, gallery.length)}
                className="group relative hidden overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-concept-gold md:block"
              >
                <Image
                  src={img.src}
                  alt={photoAlt(i + 1)}
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {isLast ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-concept-ocean/55 font-concept text-2xl text-white">
                    {copy.photosOverlay(remaining)}
                  </div>
                ) : (
                  <ZoomBadge />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* BODY: content + sticky booking card */}
      <section className="container py-section-sm md:py-section">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-14">
          {/* left: editorial content */}
          <div className="min-w-0 flex-1">
            <Reveal>
              <h2 className="max-w-xl font-concept text-h1 font-medium leading-[1.1] text-concept-ocean ">
                {roomCopy.headline}
              </h2>
              <p className="mt-5 max-w-2xl text-body-sm leading-[1.8] text-concept-ink-muted">
                {editorial.description}
              </p>
            </Reveal>

            {/* spec row */}
            <dl className="mt-10 grid grid-cols-2 border-y border-concept-border sm:grid-cols-4">
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={cn(
                    "px-1 py-6",
                    i < specs.length - 1 && "sm:border-r sm:border-concept-border",
                    i % 2 === 0 && "border-r border-concept-border sm:border-r",
                    i < 2 && "border-b border-concept-border sm:border-b-0"
                  )}
                >
                  <dd className="font-concept text-h3 leading-none text-concept-ocean">
                    {spec.value}
                  </dd>
                  <dt className="mt-1.5 text-micro font-semibold uppercase tracking-[0.12em] text-[#9a9282]">
                    {spec.label}
                  </dt>
                </div>
              ))}
            </dl>

            {/* amenities */}
            <div className="mt-11">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-concept-gold-muted">
                {copy.inThisRoom}
              </p>
              <ul className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2">
                {roomCopy.amenities.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 text-sm text-concept-ink"
                  >
                    <Diamond
                      className="h-3 w-3 flex-none text-concept-gold"
                      aria-hidden
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* photo carousel */}
            <div className="mt-12">
              <div className="relative">
                <div
                  ref={trackRef}
                  className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {gallery.map((img, i) => (
                    <button
                      key={img.src + i}
                      type="button"
                      onClick={() => setOpenIndex(i)}
                      aria-label={copy.enlarge(i + 1, gallery.length)}
                      className="group relative h-[260px] w-[80%] flex-none snap-start overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-concept-gold sm:w-[440px] md:h-[300px]"
                    >
                      <Image
                        src={img.src}
                        alt={photoAlt(i)}
                        fill
                        sizes="(max-width: 768px) 80vw, 440px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <ZoomBadge />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => scrollByCards(-1)}
                  aria-label={copy.prev}
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-concept-ocean/45 text-white backdrop-blur-sm transition-colors hover:bg-concept-ocean/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCards(1)}
                  aria-label={copy.next}
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-concept-ocean/45 text-white backdrop-blur-sm transition-colors hover:bg-concept-ocean/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>
          </div>

          {/* right: sticky booking card */}
          <aside className="w-full flex-none lg:w-[372px]">
            <div className="lg:sticky lg:top-24">
              {/* reserve card — condensed: Book today / room name / two actions.
                  Primary links out to the direct-book engine; secondary to
                  WhatsApp. Both open in a new tab. */}
              <div className="rounded-sm border border-concept-border bg-white p-7 shadow-[0_14px_40px_rgba(16,58,77,0.1)]">
                <h2 className="font-concept text-h4 font-medium leading-tight text-concept-ocean">
                  {copy.bookToday}
                </h2>
                <p className="mt-1.5 text-body-sm text-concept-ink/60">{room.name}</p>

                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    actionButtonVariants({ variant: "primary", size: "lg" }),
                    "mt-6 w-full"
                  )}
                  onClick={() =>
                    posthog.capture("suite_booking_clicked", { suite_slug: slug })
                  }
                >
                  {dict.bookingBar.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    locale === "es"
                      ? "Pregunta por WhatsApp (abre en una pestaña nueva)"
                      : "Ask on WhatsApp (opens in a new tab)"
                  }
                  className="mt-3 inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-[#1f7a4d] px-7 py-4 text-caption font-semibold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2"
                  onClick={() =>
                    posthog.capture("suite_whatsapp_clicked", { suite_slug: slug })
                  }
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  {copy.askWhatsApp}
                </a>

                <DirectBookingNote
                  locale={locale}
                  surface="light"
                  className="mt-4 text-center"
                />
              </div>

              {/* good to know */}
              <div className="mt-4 rounded-sm bg-concept-sand-muted p-7">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-concept-gold-muted">
                  {copy.goodToKnow}
                </p>
                <dl className="text-sm text-concept-ink">
                  {goodToKnow.map((row, i) => (
                    <div
                      key={row.label + i}
                      className={cn(
                        "flex items-center justify-between gap-4 py-3",
                        i < goodToKnow.length - 1 && "border-b border-[#e6ddcd]"
                      )}
                    >
                      <dt className="text-concept-ink-subtle">{row.label}</dt>
                      <dd className="text-right">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                {/* children policy — a must-keep fact with no slot in the mockup */}
                <div className="mt-5 border-t border-[#e6ddcd] pt-5">
                  <p className="text-micro font-semibold uppercase tracking-[0.14em] text-[#9a9282]">
                    {copy.childrenLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {roomCopy.childrenPolicy.map((line) => (
                      <li
                        key={line}
                        className="text-caption leading-relaxed text-concept-ink"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                {roomCopy.highlight && (
                  <p className="mt-5 font-concept text-lg italic leading-[1.5] text-concept-ocean">
                    “{roomCopy.highlight}”
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* OTHER WAYS TO STAY */}
      <section className="bg-concept-sand-muted py-section-sm md:py-section">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold-muted">
                {copy.keepLooking}
              </p>
              <h2 className="font-concept text-h2 font-medium leading-[1.04] text-concept-ocean ">
                {copy.otherWays}
              </h2>
            </div>
            <Link
              href={`/${locale}/suites`}
              className="flex-none border-b border-concept-gold-muted pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-concept-ocean transition-colors hover:text-concept-gold-muted"
            >
              {copy.allRooms}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map(({ room: r, image }) => (
              <Link
                key={r.slug}
                href={`/${locale}/suites/${r.slug}`}
                className="group block rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold"
              >
                <div className="relative h-[220px] overflow-hidden rounded-sm">
                  <Image
                    src={image}
                    alt={
                      locale === "es"
                        ? `${r.name} en Hotel Terraza del Pacífico`
                        : `${r.name} at Hotel Terraza del Pacífico`
                    }
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-4 font-concept text-h3 text-concept-ocean transition-colors group-hover:text-concept-gold-muted">
                  {r.name}
                </h3>
                <p className="mt-1.5 text-micro font-semibold uppercase tracking-[0.1em] text-concept-gold-muted">
                  {copy.sleeps(r.guests)} · {r.view}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* closing CTA band */}
      <LuxuryCtaBand
        locale={locale}
        eyebrow={cta.eyebrow}
        title={cta.title}
        body={cta.body}
        primaryLabel={cta.primary}
        primaryHref={`mailto:${eventsEmail}`}
        secondaryLabel={cta.secondary}
        secondaryHref={whatsappHref}
        image="/images/resort/highlights/IMG_3170.JPG"
      />

      {openIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
          locale={locale}
        />
      )}
    </article>
  );
}

// Small hover/focus affordance signalling a tile opens the lightbox.
function ZoomBadge() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-2.5 right-2.5 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
    >
      <Expand className="h-4 w-4" />
    </span>
  );
}
