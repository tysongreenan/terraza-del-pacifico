"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type PanelSlide = { src: string; alt: string };

/**
 * In-place fading image carousel sized to fill its parent — used inside the
 * split sections (About story, Restaurant ambiance, Bar intro). Arrows + dots
 * are tinted for either the ocean (default) or amber (warm) palettes.
 */
export function PanelCarousel({
  slides,
  className,
  tint = "ocean",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  slides: PanelSlide[];
  className?: string;
  tint?: "ocean" | "amber";
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  if (slides.length === 0) return null;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const arrowBg = tint === "amber" ? "bg-[rgba(43,30,18,0.32)]" : "bg-[rgba(16,58,77,0.32)]";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {slides.map((slide, i) => (
        <Image
          key={`${slide.src}-${i}`}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes={sizes}
          className={cn(
            "object-cover transition-opacity [transition-duration:800ms]",
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

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
        </>
      )}
    </div>
  );
}
