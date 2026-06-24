"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { cn } from "@/lib/utils";
import {
  MOSAIC_GRID_CLASS,
  MosaicTile,
  mosaicSpan,
  mosaicTileClass,
  type MosaicImage,
} from "@/components/luxury/mosaic-shared";
import { Lightbox } from "@/components/luxury/lightbox";
import type { Locale } from "@/lib/i18n";

const COPY = {
  es: { open: (i: number, n: number) => `Abrir foto ${i} de ${n}` },
  en: { open: (i: number, n: number) => `Open photo ${i} of ${n}` },
} as const;

// Interactive gallery: the static mosaic's tiles become real buttons that open
// the shared accessible Lightbox. Renders identical tiles to LuxuryMosaic via
// the shared MosaicTile, so it stays visually in sync.
export function MosaicGallery({
  images,
  locale,
  eyebrow,
  title,
  className,
}: {
  images: MosaicImage[];
  locale: Locale;
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  const t = COPY[locale];
  const n = images.length;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn("bg-concept-sand py-14 md:py-20", className)}>
      <div className="container">
        {(eyebrow || title) && (
          <Reveal>
            <div className="mb-8 md:mb-10">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && (
                <h2 className="mt-3 font-concept text-3xl font-medium leading-[1.05] text-concept-ocean md:text-[46px]">
                  {title}
                </h2>
              )}
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className={MOSAIC_GRID_CLASS}>
            {images.map((item, index) => {
              const span = item.span ?? mosaicSpan(index);
              return (
                <button
                  key={`${item.src}-${index}`}
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={t.open(index + 1, n)}
                  className={cn(
                    mosaicTileClass(span),
                    "block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-concept-sand"
                  )}
                >
                  <MosaicTile item={item} span={span} />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
          locale={locale}
        />
      )}
    </section>
  );
}
