"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { bookingHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import {
  roomFacets,
  roomsCompareContent,
  type BedFacet,
  type GuestBucket,
  type ViewFacet,
} from "@/content/rooms-compare";
import { hubRoomOrder, suitesHubContent } from "@/content/suites-hub";

type Room = Dictionary["suites"]["items"][number];

export function RoomsCompare({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = roomsCompareContent[locale];
  const s = dict.suites;
  const heroImage = suitesHubContent[locale].rooms.superior.image;

  const rooms = useMemo(
    () =>
      hubRoomOrder
        .map((slug) => s.items.find((r) => r.slug === slug))
        .filter((r): r is Room => Boolean(r)),
    [s.items]
  );

  const [guests, setGuests] = useState<GuestBucket | null>(null);
  const [views, setViews] = useState<ViewFacet[]>([]);
  const [beds, setBeds] = useState<BedFacet[]>([]);

  const toggle = <T,>(value: T, list: T[], set: (v: T[]) => void) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const filtered = rooms.filter((room) => {
    const f = roomFacets[room.slug];
    if (!f) return true;
    if (guests && f.guests !== guests) return false;
    if (views.length && !views.includes(f.view)) return false;
    if (beds.length && !beds.includes(f.beds)) return false;
    return true;
  });

  const hasFilters = Boolean(guests) || views.length > 0 || beds.length > 0;
  const clearAll = () => {
    setGuests(null);
    setViews([]);
    setBeds([]);
  };

  return (
    <article className="home-concept bg-concept-sand">
      {/* HERO — condensed cinematic band */}
      <section className="relative overflow-hidden text-white">
        <div className="relative min-h-[56svh] md:min-h-[60svh]">
          <Image
            src={heroImage}
            alt={copy.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="container relative flex min-h-[56svh] flex-col justify-end pb-16 pt-28 md:min-h-[60svh] md:pb-20">
            <Reveal>
              <p className="text-eyebrow uppercase text-white text-shadow-hero">{copy.hero.eyebrow}</p>
              <h1 className="mt-4 font-concept text-display font-medium leading-[1.02] text-shadow-hero ">
                {copy.hero.title}
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/88">
                {copy.hero.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BROWSE LAYOUT: filter rail + compare table */}
      <div className="container">
        <div className="flex flex-col gap-0 md:flex-row">
          {/* filter rail */}
          <aside className="flex-none border-b border-border py-10 md:w-[300px] md:self-start md:border-b-0 md:border-r md:py-12 md:pr-9 md:[position:sticky] md:top-24">
            <p className="eyebrow">{copy.refine}</p>

            <Filter label={copy.guests.label}>
              <Pill
                active={guests === null}
                onClick={() => setGuests(null)}
                label={copy.guests.any}
              />
              {copy.guests.options.map((o) => (
                <Pill
                  key={o.value}
                  active={guests === o.value}
                  onClick={() => setGuests(guests === o.value ? null : o.value)}
                  label={o.label}
                />
              ))}
            </Filter>

            <Filter label={copy.view.label}>
              <div className="flex flex-col gap-3">
                {copy.view.options.map((o) => (
                  <CheckRow
                    key={o.value}
                    checked={views.includes(o.value)}
                    onClick={() => toggle(o.value, views, setViews)}
                    label={o.label}
                  />
                ))}
              </div>
            </Filter>

            <Filter label={copy.beds.label}>
              <div className="flex flex-col gap-3">
                {copy.beds.options.map((o) => (
                  <CheckRow
                    key={o.value}
                    checked={beds.includes(o.value)}
                    onClick={() => toggle(o.value, beds, setBeds)}
                    label={o.label}
                  />
                ))}
              </div>
            </Filter>

            <div className="mt-8 border-t border-border pt-6">
              <div role="status" aria-live="polite">
                <p className="text-micro font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {copy.showing}
                </p>
                <p className="mt-1 font-concept text-h3 text-concept-ocean">
                  {copy.roomTypes(filtered.length)}
                </p>
              </div>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-3 min-h-[44px] text-xs font-medium uppercase tracking-[0.1em] text-concept-gold-muted underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {copy.clear}
                </button>
              )}
            </div>
          </aside>

          {/* card grid / table */}
          <div className="flex-1 py-10 md:py-12 md:pl-12">
            <Reveal>
              <div className="mb-7 flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow">{copy.heading.eyebrow}</p>
                  <h2 className="mt-2 font-concept text-h2 font-medium leading-none text-concept-ocean ">
                    {copy.heading.title}
                  </h2>
                </div>
                <p className="hidden text-xs tracking-wide text-muted-foreground sm:block">
                  {copy.heading.note}
                </p>
              </div>
            </Reveal>

            <div role="table" aria-label={copy.heading.title}>
            {/* column header (desktop) */}
            <div
              role="row"
              className="hidden grid-cols-[2.4fr_.8fr_.8fr_1fr_1fr_1.4fr] items-center gap-6 border-b border-concept-ink pb-3 md:grid"
            >
              {[
                copy.columns.room,
                copy.columns.guests,
                copy.columns.size,
                copy.columns.beds,
                copy.columns.view,
              ].map((c) => (
                <div
                  key={c}
                  role="columnheader"
                  className="text-micro font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {c}
                </div>
              ))}
              <div role="columnheader" />
            </div>

            {filtered.length === 0 ? (
              <p className="py-16 text-center text-sm text-muted-foreground">
                {copy.empty}
              </p>
            ) : (
              filtered.map((room) => {
                const f = roomFacets[room.slug];
                return (
                  <div
                    key={room.slug}
                    role="row"
                    className="grid grid-cols-2 items-center gap-x-6 gap-y-4 border-b border-border py-5 md:grid-cols-[2.4fr_.8fr_.8fr_1fr_1fr_1.4fr]"
                  >
                    <div role="cell" className="col-span-2 flex items-center gap-4 md:col-span-1">
                      <div className="relative h-[74px] w-[104px] flex-none overflow-hidden rounded-sm">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          sizes="104px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-micro font-semibold uppercase tracking-[0.16em] text-concept-gold-muted">
                          {f ? copy.kickers[f.kicker] : ""}
                        </div>
                        <div className="mt-1 font-concept text-2xl font-medium leading-none text-concept-ocean">
                          {room.name}
                        </div>
                      </div>
                    </div>

                    <SpecCell label={copy.columns.guests} value={room.guests} />
                    <SpecCell label={copy.columns.size} value={room.size} />
                    <SpecCell label={copy.columns.beds} value={room.beds} />
                    <SpecCell label={copy.columns.view} value={room.view} />

                    <div role="cell" className="col-span-2 flex gap-2.5 md:col-span-1 md:justify-end">
                      <Link
                        href={`/${locale}/habitaciones/${room.slug}`}
                        aria-label={`${s.detailsCta}: ${room.name}`}
                        className="flex min-h-[44px] items-center rounded-sm border border-border px-4 py-2.5 text-micro font-semibold uppercase tracking-[0.1em] text-concept-ocean transition-colors hover:border-concept-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      >
                        {s.detailsCta}
                      </Link>
                      <a
                        href={bookingHref}
                        aria-label={`${s.bookCta}: ${room.name}`}
                        {...(bookingHref.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex min-h-[44px] items-center rounded-sm bg-concept-gold px-4 py-2.5 text-micro font-semibold uppercase tracking-[0.1em] text-concept-ink transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      >
                        {s.bookCta}
                      </a>
                    </div>
                  </div>
                );
              })
            )}
            </div>

            <div className="pt-10">
              <Link
                href={`/${locale}/habitaciones`}
                className="inline-flex min-h-[44px] items-center text-xs font-semibold uppercase tracking-[0.12em] text-concept-ocean transition-colors hover:text-concept-gold-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {copy.backToHub}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 md:h-20" />
    </article>
  );
}

function Filter({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <p className="mb-3.5 text-micro font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Pill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex min-h-[44px] items-center rounded-full px-4 py-2.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        active
          ? "bg-concept-gold font-semibold text-concept-ink"
          : "border border-border text-muted-foreground hover:border-concept-gold-muted"
      )}
    >
      {label}
    </button>
  );
}

function CheckRow({
  checked,
  onClick,
  label,
}: {
  checked: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="checkbox"
      aria-checked={checked}
      className={cn(
        "flex min-h-[44px] items-center gap-2.5 py-1.5 text-left text-caption transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        checked ? "text-concept-ink" : "text-muted-foreground hover:text-concept-ink"
      )}
    >
      <span
        className={cn(
          "flex h-4 w-4 flex-none items-center justify-center rounded-[3px] border transition-colors",
          checked ? "border-concept-ocean bg-concept-ocean text-white" : "border-border"
        )}
      >
        {checked && <Check className="h-3 w-3" aria-hidden />}
      </span>
      {label}
    </button>
  );
}

function SpecCell({ label, value }: { label: string; value: string }) {
  return (
    <div role="cell" className="font-concept text-2xl leading-none text-concept-ocean">
      <span className="mr-2 font-sans text-micro font-semibold uppercase tracking-[0.12em] text-muted-foreground md:hidden">
        {label}
      </span>
      {value}
    </div>
  );
}
