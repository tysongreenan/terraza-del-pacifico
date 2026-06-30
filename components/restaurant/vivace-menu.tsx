"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/home/reveal";
import { actionButtonVariants } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import {
  menuPriceNote,
  menuSubhead,
  vivaceMenu,
  type MenuItem,
} from "@/content/menu-vivace";

const heroLabels: Record<Locale, { eyebrow: string; title: string; reserve: string; back: string }> = {
  en: { eyebrow: "Vivace Beachfront", title: "The Menu", reserve: "Reserve a Table", back: "← Back to the restaurant" },
  es: { eyebrow: "Vivace Beachfront", title: "El Menú", reserve: "Reservar una mesa", back: "← Volver al restaurante" },
};

export function VivaceMenu({
  locale,
  initialCat,
}: {
  locale: Locale;
  /** Category id pre-selected via ?cat= (e.g. from the restaurant page). */
  initialCat?: string;
}) {
  // Language pill defaults to the page locale; it's a local override only —
  // the route's locale remains the site's source of truth for language.
  const [lang, setLang] = useState<Locale>(locale);
  const [catId, setCatId] = useState(
    vivaceMenu.some((c) => c.id === initialCat) ? (initialCat as string) : vivaceMenu[0].id
  );
  const labels = heroLabels[locale];

  const cat = useMemo(
    () => vivaceMenu.find((c) => c.id === catId) ?? vivaceMenu[0],
    [catId]
  );

  const half = Math.ceil(cat.items.length / 2);
  const left = cat.items.slice(0, half);
  const right = cat.items.slice(half);

  return (
    <article className="home-concept bg-concept-sand">
      {/* compact hero */}
      <section className="relative overflow-hidden text-white">
        <div className="relative h-[340px] md:h-[400px]">
          <Image
            src="/images/resort/dining/restaurant-dining-nygPbVtS.jpg"
            alt={labels.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,24,37,0.4)_0%,rgba(10,24,37,0.1)_45%,rgba(10,24,37,0.72)_100%)]" />
          <div className="container relative flex h-full flex-col justify-end pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-concept-gold">
              {labels.eyebrow}
            </p>
            <h1 className="mt-3 font-concept text-display font-medium leading-none text-shadow-hero ">
              {labels.title}
            </h1>
          </div>
        </div>
      </section>

      {/* category nav + language pill */}
      <div className="sticky top-[4.25rem] z-30 border-b border-concept-border-soft bg-concept-sand/95 backdrop-blur md:top-[4.75rem]">
        <div className="container relative flex items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-1 py-4 md:pr-28">
            {vivaceMenu.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCatId(c.id)}
                className={cn(
                  "border-b-2 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                  c.id === catId
                    ? "border-concept-gold font-semibold text-concept-ocean"
                    : "border-transparent text-[#6b6559] hover:text-concept-ink"
                )}
              >
                {c.label[lang]}
              </button>
            ))}
          </div>
          <div className="absolute right-0 hidden items-center gap-1 rounded-full bg-[#efe7d8] p-1 md:flex">
            {(["en", "es"] as Locale[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.12em] transition-colors",
                  lang === l ? "bg-concept-gold font-semibold text-concept-ink-strong" : "text-[#5f5a52]"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* menu spread */}
      <section className="pb-20 md:pb-24">
        <Reveal key={cat.id}>
          <div className="container pt-14 text-center">
            <p className="text-micro font-semibold uppercase tracking-[0.3em] text-concept-gold-muted">
              {menuSubhead[lang]}
            </p>
            <h2 className="mt-4 font-concept text-display font-medium italic leading-none text-concept-ocean ">
              {cat.title[lang]}
            </h2>
            <div className="mt-5 flex items-center justify-center gap-3.5">
              <span className="h-px w-11 bg-[#d8c79c]" />
              <span className="text-micro text-concept-gold">◆</span>
              <span className="h-px w-11 bg-[#d8c79c]" />
            </div>
          </div>

          <div className="container mt-10 max-w-4xl">
            <div className="grid gap-x-16 md:grid-cols-2">
              <DishColumn items={left} lang={lang} />
              <DishColumn items={right} lang={lang} />
            </div>

            {cat.note && (
              <p className="mx-auto mt-9 max-w-2xl text-center font-concept text-lg italic leading-relaxed text-[#6b6559]">
                {cat.note[lang]}
              </p>
            )}
            <p className="mt-9 text-center text-micro tracking-[0.08em] text-[#6b6559]">
              {menuPriceNote[lang]}
            </p>
          </div>
        </Reveal>
      </section>

      {/* footer actions */}
      <section className="border-t border-concept-border-soft bg-concept-sand-muted py-section-sm">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            href={`/${locale}/restaurant`}
            className="text-xs font-semibold uppercase tracking-[0.12em] text-concept-ocean transition-colors hover:text-concept-gold-muted"
          >
            {labels.back}
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButtonVariants({ variant: "primary" })}
          >
            {labels.reserve}
          </a>
        </div>
      </section>
    </article>
  );
}

function DishColumn({ items, lang }: { items: MenuItem[]; lang: Locale }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b border-[#ece2d0] py-4">
          <div className="flex items-baseline gap-3">
            <span className="font-concept text-2xl leading-tight text-concept-ink">
              {item.name[lang]}
            </span>
            <span className="flex-1 translate-y-[-5px] border-b border-dotted border-[#d3c4a4]" />
            <span className="whitespace-nowrap font-concept text-h4 text-concept-gold-muted">
              {item.price}
            </span>
          </div>
          {item.desc[lang] && (
            <p className="mt-1.5 max-w-[90%] text-[12.5px] leading-relaxed text-[#6b6559]">
              {item.desc[lang]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
