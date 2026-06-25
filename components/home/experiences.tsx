"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/home/reveal";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";

export function Experiences({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const e = dict.experiences;
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    return () => el.removeEventListener("scroll", updateProgress);
  }, [updateProgress]);

  const scrollBy = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section id="experiences" className="scroll-mt-20 bg-concept-sand-muted py-section-sm md:py-section">
      <div className="container">
        <Reveal>
          <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between md:pb-10">
            <div>
              <p className="eyebrow">{e.eyebrow}</p>
              <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.04] text-concept-ocean ">
                {e.title}
              </h2>
            </div>
            <div className="flex items-center gap-4 md:mb-2">
              <span className="text-xs tracking-wide text-concept-ink-muted">
                {e.subtitle}
              </span>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollBy(-1)}
                  aria-label={locale === "en" ? "Previous experience" : "Experiencia anterior"}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbfa6] text-[#b9ac95] transition-colors hover:border-concept-ocean hover:text-concept-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-concept-sand-muted"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBy(1)}
                  aria-label={locale === "en" ? "Next experience" : "Siguiente experiencia"}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-concept-ocean text-concept-ocean transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-concept-sand-muted"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-pl-6 px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-5 md:scroll-pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {e.items.map((item) => (
          <article
            key={item.slug}
            className="relative h-[380px] w-[260px] shrink-0 overflow-hidden rounded-sm md:h-[430px] md:w-[300px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="300px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,32,42,0.9)] via-[rgba(11,32,42,0.2)] to-transparent" />
            <span
              className={cn(
                "absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-micro font-semibold uppercase tracking-[0.12em]",
                item.badge === "Included" || item.badge === "Incluido"
                  ? "bg-concept-gold text-concept-ink-strong"
                  : "border border-white/50 text-white"
              )}
            >
              {item.badge}
            </span>
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
              <h3 className="font-concept text-h3 leading-[1.02]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#cfe0e6]">
                {item.body}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3.5">
                <span className="text-micro tracking-wide text-concept-mist">
                  {item.detail}
                </span>
                <Link
                  href={`/${locale}/${item.slug}`}
                  className={cn(
                    "rounded-sm px-4 py-2 text-micro font-semibold uppercase tracking-[0.08em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(11,32,42,0.9)]",
                    item.cta === "Join" || item.cta === "Unirse"
                      ? "border border-white/50 text-white"
                      : "bg-concept-gold text-concept-ink-strong"
                  )}
                >
                  {item.cta}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container">
        <div className="mt-6 flex items-center gap-4 px-0">
          <div className="relative h-0.5 flex-1 rounded-full bg-[#e2dac9]">
            <div
              className="absolute left-0 top-0 h-0.5 rounded-full bg-concept-ocean transition-all duration-200"
              style={{ width: `${Math.max(12, progress * 100)}%` }}
            />
          </div>
          <span className="text-micro font-medium uppercase tracking-[0.1em] text-concept-gold-muted">
            {e.dragHint}
          </span>
        </div>
      </div>
    </section>
  );
}