"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { actionButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { HubPage, InfoPage } from "@/content/info-pages";
import { pageHref } from "@/content/info-pages";

const COPY = {
  es: { dragHint: "Desliza para ver más", explore: "Explorar" },
  en: { dragHint: "Swipe to see more", explore: "Explore" },
} as const;

export function ExperiencesCarousel({
  hub,
  pages,
  locale,
}: {
  hub: HubPage;
  pages: InfoPage[];
  locale: Locale;
}) {
  const copy = COPY[locale];
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const external = hub.cta.href.startsWith("http");

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
    <section className="bg-concept-sand pb-section-sm pt-section-top md:pb-section">
      <div className="container">
        <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between md:pb-10">
          <div className="max-w-2xl">
            <p className="eyebrow">{hub.eyebrow[locale]}</p>
            <h1 className="mt-3 font-concept text-h1 font-medium leading-[1.04] text-concept-ocean">
              {hub.title[locale]}
            </h1>
            <p className="mt-5 text-body-sm leading-relaxed text-concept-ink/80 md:text-base">
              {hub.description[locale]}
            </p>
            <a
              href={hub.cta.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={cn(actionButtonVariants({ variant: "primary", size: "lg" }), "mt-7")}
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {hub.cta.label[locale]}
            </a>
          </div>
          <div className="flex items-center gap-2.5 md:mb-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label={locale === "en" ? "Previous experience" : "Experiencia anterior"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbfa6] text-[#b9ac95] transition-colors hover:border-concept-ocean hover:text-concept-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label={locale === "en" ? "Next experience" : "Siguiente experiencia"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-concept-ocean text-concept-ocean transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label={locale === "en" ? "Experiences" : "Experiencias"}
        className="flex gap-4 overflow-x-auto scroll-pl-6 px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-5 md:scroll-pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {pages.map((page) => (
          <Link
            key={page.id}
            href={pageHref(page, locale)}
            className="group relative h-[420px] w-[280px] shrink-0 overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 md:h-[460px] md:w-[320px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <Image
              src={page.heroImage.src}
              alt={page.heroImage.alt[locale]}
              fill
              sizes="320px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-concept-ocean/95 via-concept-ocean/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">
              <p className="text-micro font-semibold uppercase tracking-[0.14em] text-concept-gold">
                {page.eyebrow[locale]}
              </p>
              <h3 className="mt-2 font-concept text-h3 leading-[1.05]">
                {page.title[locale]}
              </h3>
              {/* description was unused before — adds context to each card */}
              <p className="mt-2 line-clamp-2 text-body-sm leading-relaxed text-white/75">
                {page.description[locale]}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-[0.1em] text-concept-gold">
                {copy.explore}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="container">
        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-0.5 flex-1 rounded-full bg-[#e2dac9]">
            <div
              className="absolute left-0 top-0 h-0.5 rounded-full bg-concept-ocean transition-all duration-200"
              style={{ width: `${Math.max(12, progress * 100)}%` }}
            />
          </div>
          <span className="text-micro font-medium uppercase tracking-[0.1em] text-concept-gold-muted">
            {copy.dragHint}
          </span>
        </div>
      </div>
    </section>
  );
}
