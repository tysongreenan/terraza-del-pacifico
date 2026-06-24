"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type PanelSlide = { src: string; alt: string };

/**
 * In-place fading image carousel sized to fill its parent — used inside the
 * split sections (About story, Restaurant ambiance, Bar intro). Arrows + dots
 * are tinted for either the ocean (default) or amber (warm) palettes.
 *
 * Pass `autoMs` to gently auto-advance (e.g. on the /bares index cards). It
 * pauses on hover/focus and is disabled for reduced-motion users.
 */
export function PanelCarousel({
  slides,
  className,
  tint = "ocean",
  sizes = "(max-width: 768px) 100vw, 50vw",
  autoMs,
}: {
  slides: PanelSlide[];
  className?: string;
  tint?: "ocean" | "amber";
  sizes?: string;
  autoMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoMs || slides.length < 2 || paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      autoMs
    );
    return () => window.clearInterval(id);
  }, [autoMs, slides.length, paused]);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(slides.length - 1, 0)));
  }, [slides.length]);

  if (slides.length === 0) return null;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const arrowBg = tint === "amber" ? "bg-[rgba(43,30,18,0.32)]" : "bg-[rgba(16,58,77,0.32)]";
  const activeSlide = slides[index];
  const showCompactCounter = slides.length > 8;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={autoMs ? () => setPaused(true) : undefined}
      onMouseLeave={autoMs ? () => setPaused(false) : undefined}
      onFocusCapture={autoMs ? () => setPaused(true) : undefined}
      onBlurCapture={autoMs ? () => setPaused(false) : undefined}
    >
      <Image
        key={`${activeSlide.src}-${index}`}
        src={activeSlide.src}
        alt={activeSlide.alt}
        fill
        sizes={sizes}
        className="object-cover"
      />

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className={cn(
              "absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm transition-colors hover:bg-white/10",
              arrowBg
            )}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className={cn(
              "absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm transition-colors hover:bg-white/10",
              arrowBg
            )}
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
          {showCompactCounter ? (
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center rounded-full border border-white/50 bg-[rgba(10,24,37,0.42)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_1px_8px_rgba(0,0,0,0.28)] backdrop-blur-sm">
              {index + 1} / {slides.length}
            </div>
          ) : (
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Photo ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-[9px] rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.35)] transition-all",
                    i === index ? "w-[22px] bg-concept-gold" : "w-[9px] bg-white/60 hover:bg-white/80"
                  )}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
