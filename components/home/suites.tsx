"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import posthog from "posthog-js";
import { defaultRoomSlug, roomGalleries } from "@/content/room-galleries";
import { Reveal } from "@/components/home/reveal";
import { Lightbox } from "@/components/luxury/lightbox";
import { actionButtonVariants } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { bookingHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const ROOM_EXTRA_IMAGES: Record<string, string[]> = {
  superior: [
    "/images/room-king-bed-B58lVEdC.jpg",
    "/images/Suit photos/RLR_4906.JPG",
  ],
  standard: [
    "/images/room-toucan-art-n3cC8Tze.jpg",
    "/images/room-interior-C3-O8UpA.jpg",
  ],
  "junior-suite": [
    "/images/room-toucan-art-n3cC8Tze.jpg",
    "/images/Suit photos/RLR_48512.JPG",
    "/images/room-king-bed-B58lVEdC.jpg",
  ],
  villas: [
    "/images/villa-bedroom-view-_Eb74lE7.jpg",
    "/images/Suit photos/IMG_4757.JPG",
  ],
};

function roomGalleryImages(slug: string, locale: Locale) {
  const base =
    roomGalleries.find((g) => g.slug === slug)?.images ?? roomGalleries[0].images;
  const extras = (ROOM_EXTRA_IMAGES[slug] ?? []).map((src, index) => ({
    src,
    alt: {
      es: `Foto ${index + 1} de la habitación`,
      en: `Room photo ${index + 1}`,
    },
  }));
  const seen = new Set<string>();
  return [...base, ...extras].filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

export function Suites({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const s = dict.suites;
  const [activeSlug, setActiveSlug] = useState(defaultRoomSlug);
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const room = useMemo(
    () => s.items.find((r) => r.slug === activeSlug) ?? s.items[0],
    [activeSlug, s.items]
  );

  const gallery = useMemo(
    () => roomGalleryImages(activeSlug, locale),
    [activeSlug, locale]
  );

  const selectRoom = (slug: string) => {
    setActiveSlug(slug);
    setSlideIndex(0);
    posthog.capture("suite_selected", { suite_slug: slug });
  };

  const nextSlide = () =>
    setSlideIndex((i) => (i + 1) % gallery.length);
  const prevSlide = () =>
    setSlideIndex((i) => (i - 1 + gallery.length) % gallery.length);

  const isJunior = activeSlug === "junior-suite";

  return (
    <section id="suites" className="scroll-mt-20 bg-concept-sand py-section-sm md:py-section">
      <div className="container">
        <Reveal>
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.04] text-concept-ocean ">
                {s.title}
              </h2>
            </div>
            <Link
              href={`/${locale}/suites`}
              className="mb-1 shrink-0 border-b border-concept-gold-muted pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-concept-ocean transition-colors hover:text-concept-gold-muted"
            >
              {s.allRoomsCta}
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-sm shadow-[0_14px_40px_rgba(16,58,77,0.1)] md:flex">
            <div className="relative min-h-[300px] w-full md:min-h-[560px] md:w-[62%]">
              {gallery.map((img, i) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt[locale]}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 62vw"
                  className={cn(
                    "object-cover transition-opacity duration-700",
                    i === slideIndex ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,28,37,0)_70%,rgba(10,28,37,0.45)_100%)]" />
              {/* Click anywhere on the photo to open the full-screen lightbox.
                  z-[5] sits above the images but below the dot/arrow controls (z-10). */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label={locale === "en" ? "Enlarge photo" : "Ampliar foto"}
                className="absolute inset-0 z-[5] cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-concept-gold"
              />
              {isJunior && (
                <span className="absolute left-5 top-5 z-10 rounded-sm bg-concept-gold px-3.5 py-1.5 text-micro font-semibold uppercase tracking-[0.14em] text-concept-ink-strong">
                  {s.mostBooked}
                </span>
              )}
              <div className="absolute bottom-[54px] left-6 z-10 flex gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={
                      locale === "en" ? `Photo ${i + 1}` : `Foto ${i + 1}`
                    }
                    onClick={() => setSlideIndex(i)}
                    className={cn(
                      "h-[3px] w-[22px] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-concept-ocean",
                      i === slideIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
                    )}
                  />
                ))}
              </div>
              <p className="absolute bottom-[22px] left-6 z-10 font-mono text-xs tracking-[0.14em] text-white">
                {String(slideIndex + 1).padStart(2, "0")} /{" "}
                {String(gallery.length).padStart(2, "0")}
              </p>
              <div className="absolute bottom-5 right-5 z-10 flex gap-2.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label={locale === "en" ? "Previous photo" : "Foto anterior"}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-concept-ocean shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-concept-ocean"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label={locale === "en" ? "Next photo" : "Siguiente foto"}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-concept-ocean shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-concept-ocean"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>

            <div className="flex w-full flex-col justify-center bg-concept-sand px-8 py-10 md:w-[38%] md:px-12 md:py-14">
              {room.tagline && (
                <p className="text-micro font-semibold uppercase tracking-[0.22em] text-concept-gold-muted">
                  {room.tagline}
                </p>
              )}
              <h3 className="mt-2 font-concept text-h1 font-medium leading-none text-concept-ocean ">
                {room.name}
              </h3>

              <dl className="mt-7 grid grid-cols-2 border-y border-concept-border">
                {[
                  { label: s.guestsLabel, value: room.guests },
                  { label: s.sizeLabel, value: room.size },
                  { label: s.bedsLabel, value: room.beds },
                  { label: s.viewLabel, value: room.view },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "py-4",
                      i % 2 === 0 && "border-r border-concept-border pr-4",
                      i % 2 === 1 && "pl-5 md:pl-[22px]",
                      i < 2 && "border-b border-concept-border"
                    )}
                  >
                    <dd className="font-concept text-h3 leading-none text-concept-ink">
                      {stat.value}
                    </dd>
                    <dt className="mt-0.5 text-micro font-semibold uppercase tracking-[0.12em] text-concept-ink-subtle">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <p className="mt-5 text-sm leading-[1.7] text-concept-ink-muted">
                {room.blurb}
              </p>
              <p className="mt-4 text-micro tracking-wide text-concept-ink-subtle">
                {s.amenitiesNote}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonVariants({ variant: "primary" })}
                >
                  {s.bookCta}
                </Link>
                <Link
                  href={`/${locale}/suites/${room.slug}`}
                  className={actionButtonVariants({ variant: "secondary", surface: "light" })}
                >
                  {s.detailsCta}
                </Link>
              </div>
              <p className="mt-4 text-micro font-medium uppercase tracking-[0.1em] text-concept-ocean">
                <span className="text-concept-gold-muted">◆</span>{" "}
                {dict.hero.trust}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-4 md:gap-[18px]">
          {s.items.map((item) => {
            const selected = item.slug === activeSlug;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => selectRoom(item.slug)}
                aria-pressed={selected}
                aria-label={
                  locale === "en"
                    ? `View the ${item.name}`
                    : `Ver ${item.name}`
                }
                className="rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-concept-sand"
              >
                <div
                  className={cn(
                    "relative h-[120px] overflow-hidden rounded-sm md:h-[150px]",
                    selected && "outline outline-2 outline-concept-gold outline-offset-2"
                  )}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  {!selected && (
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,58,77,0)_45%,rgba(16,58,77,0.5)_100%)]" />
                  )}
                </div>
                <p
                  className={cn(
                    "mt-3 font-concept text-lg md:text-h4",
                    selected ? "text-concept-ocean" : "text-concept-ink"
                  )}
                >
                  {item.name}
                </p>
                <p
                  className={cn(
                    "mt-1 text-micro",
                    selected ? "text-concept-gold-muted" : "text-concept-ink-subtle"
                  )}
                >
                  {item.guests} · {item.size} · {item.beds}
                  {selected ? ` · ${s.viewingNow}` : ` · ${item.view}`}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={gallery.map((img) => ({
            src: img.src,
            alt: img.alt[locale],
          }))}
          index={slideIndex}
          onIndexChange={setSlideIndex}
          onClose={() => setLightboxOpen(false)}
          locale={locale}
        />
      )}
    </section>
  );
}
