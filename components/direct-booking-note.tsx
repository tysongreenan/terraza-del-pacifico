import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

const COPY: Record<Locale, string> = {
  en: "Best Prices When You Book Direct",
  es: "Mejores Precios al Reservar Directo",
};

/**
 * Small reassurance line shown beneath primary booking-engine CTAs.
 * `surface` flips the text tone: "dark" for hero/photo backgrounds,
 * "light" for cards and pale sections (the gold ◆ reads on both).
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
        "flex items-center gap-2 text-sm font-medium",
        surface === "dark"
          ? "text-white/90 text-shadow-hero"
          : "text-concept-ink-muted",
        className
      )}
    >
      <span className="text-accent" aria-hidden>
        ◆
      </span>
      {COPY[locale]}
    </p>
  );
}
