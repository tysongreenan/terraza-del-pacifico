import Image from "next/image";
import { cn } from "@/lib/utils";

// Shared, hook-free building blocks for the luxury photo mosaic. Kept in their
// own module so both the static server grid (LuxuryMosaic) and the interactive
// client gallery (MosaicGallery) render identical tiles from one source — no
// duplicated markup, no server/client import cycle.

export type MosaicSpan = { colSpan: 1 | 2; rowSpan: 1 | 2 };

export type MosaicImage = {
  src: string;
  alt: string;
  href?: string;
  caption?: string;
  span?: MosaicSpan;
};

const MOSAIC_PATTERN: MosaicSpan[] = [
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
];

export function mosaicSpan(index: number): MosaicSpan {
  return MOSAIC_PATTERN[index % MOSAIC_PATTERN.length];
}

// `grid-auto-flow: dense` backfills the gaps the varied col/row spans would
// otherwise leave (the 8-step pattern never tiles a 4-col grid cleanly), and
// explicit row tracks at every breakpoint keep tile heights deterministic —
// the old layout had no mobile row height, so row-span-2 tiles misaligned.
export const MOSAIC_GRID_CLASS =
  "grid grid-cols-2 gap-2.5 [grid-auto-flow:dense] [grid-auto-rows:44vw] md:grid-cols-4 md:gap-3.5 md:[grid-auto-rows:224px]";

// Tile frame: spans + clipping + rounded corner. `group` lives here so the
// hover/focus affordances inside MosaicTile key off whichever element wraps it
// (a Reveal div for the static grid, a <button> for the interactive one).
export function mosaicTileClass(span: MosaicSpan) {
  return cn(
    "group relative overflow-hidden rounded-sm",
    span.colSpan === 2 ? "col-span-2" : "col-span-1",
    span.rowSpan === 2 ? "row-span-2" : "row-span-1"
  );
}

// Image + overlay + optional caption. The overlay is the fix for "every photo
// looks dimmed": only captioned tiles carry a standing gradient (legibility);
// caption-less photos stay clean and reveal a subtle gradient on hover/focus so
// the zoom still reads as interactive.
export function MosaicTile({ item, span }: { item: MosaicImage; span: MosaicSpan }) {
  return (
    <>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={
          span.colSpan === 2
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 768px) 50vw, 25vw"
        }
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(16,58,77,0.62)] via-transparent to-transparent transition-opacity duration-300 motion-reduce:transition-none",
          item.caption
            ? "opacity-90 group-hover:opacity-100"
            : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        )}
      />
      {item.caption && (
        <p className="absolute bottom-0 left-0 z-10 p-4 font-concept text-lg leading-tight text-white md:p-5 md:text-2xl">
          {item.caption}
        </p>
      )}
    </>
  );
}
