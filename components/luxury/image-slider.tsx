"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Reveal } from "@/components/home/reveal";
import { cn } from "@/lib/utils";

export type SliderSlide = {
  src: string;
  alt: string;
  caption?: string;
};

export function LuxuryImageSlider({
  eyebrow,
  title,
  subtitle,
  slides,
  exploreHref,
  exploreLabel,
  dragHint,
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
  background = "sand-muted",
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  slides: SliderSlide[];
  exploreHref?: string;
  exploreLabel?: string;
  dragHint?: string;
  prevLabel?: string;
  nextLabel?: string;
  background?: "sand" | "sand-muted";
  id?: string;
}) {
  const autoId = useId();
  const sectionId = id ?? `slider-${autoId.replace(/:/g, "")}`;
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const scrollable = max > 8;
    setCanScroll(scrollable);
    setProgress(scrollable ? el.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    const observer = new ResizeObserver(updateProgress);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      observer.disconnect();
    };
  }, [updateProgress, slides.length]);

  const scrollBy = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  if (slides.length === 0) return null;

  return (
    <section
      id={sectionId}
      className={cn(
        "scroll-mt-20 py-14 md:py-20",
        background === "sand" ? "bg-concept-sand" : "bg-concept-sand-muted"
      )}
    >
      <div className="container">
        <Reveal>
          <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between md:pb-10">
            <div className="max-w-2xl">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              <h2 className="mt-3 font-concept text-3xl font-medium leading-[1.04] text-concept-ocean md:text-5xl">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-4 text-sm leading-relaxed text-concept-ink/75 md:text-[15px]">
                  {subtitle}
                </p>
              )}
              {exploreHref && exploreLabel && (
                <Link
                  href={exploreHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-sm border-b border-concept-gold-muted pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-concept-ocean transition-colors hover:text-concept-gold-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2"
                >
                  {exploreLabel} →
                </Link>
              )}
            </div>
            {canScroll && (
              <div className="flex items-center gap-2.5 md:mb-2">
                <button
                  type="button"
                  onClick={() => scrollBy(-1)}
                  aria-label={prevLabel}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbfa6] text-[#b9ac95] transition-colors hover:border-concept-ocean hover:text-concept-ocean focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBy(1)}
                  aria-label={nextLabel}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-concept-ocean text-concept-ocean transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-5 md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {slides.map((slide, index) => (
          <article
            key={`${slide.src}-${index}`}
            data-slide
            className="relative h-[340px] w-[260px] shrink-0 overflow-hidden rounded-sm md:h-[420px] md:w-[320px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="320px"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,32,42,0.75)] via-[rgba(11,32,42,0.12)] to-transparent" />
            {slide.caption && (
              <p className="absolute inset-x-0 bottom-0 z-10 p-5 font-concept text-xl leading-tight text-white md:text-2xl">
                {slide.caption}
              </p>
            )}
          </article>
        ))}
      </div>

      <div className="container">
        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-0.5 flex-1 rounded-full bg-[#e2dac9]">
            <div
              className="absolute left-0 top-0 h-0.5 rounded-full bg-concept-ocean transition-all duration-200"
              style={{ width: `${Math.max(canScroll ? 12 : 100, progress * 100)}%` }}
            />
          </div>
          {dragHint && (
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-concept-gold-muted">
              {dragHint}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}