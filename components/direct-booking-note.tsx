import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

const COPY: Record<Locale, string> = {
  en: "Best Prices When You Book Direct",
  es: "Mejores Precios al Reservar Directo",
};

/**
 * Reassurance line shown beneath primary booking-engine CTAs, styled as a
 * bold gold eyebrow label so it reads on both photo and pale backgrounds.
 * `surface="dark"` adds a text shadow for legibility over hero imagery.
 */
export function DirectBookingNote({
  locale,
  surface = "dark",
  className,
}: {
  locale: Locale;
  surface?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-balance text-sm font-semibold uppercase tracking-[0.1em] text-accent",
        surface === "dark" && "text-shadow-hero",
        className
      )}
    >
      {COPY[locale]}
    </p>
  );
}
