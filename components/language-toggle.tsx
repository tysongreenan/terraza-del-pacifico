"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// Flag + endonym for each locale. The name is always shown alongside the flag
// so the control stays legible where emoji flags don't render (e.g. Windows,
// which falls back to "CR"/"US" letters).
const LANG_META: Record<Locale, { flag: string; name: string; short: string }> = {
  es: { flag: "🇨🇷", name: "Español", short: "ES" },
  en: { flag: "🇺🇸", name: "English", short: "EN" },
};

// Swap the leading /es or /en segment of a path, preserving the rest.
function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  segments[1] = target; // index 0 is "" (leading slash)
  return segments.join("/") || `/${target}`;
}

export function LanguageToggle({
  locale,
  aria,
  overlay = false,
}: {
  locale: Locale;
  /** Kept for compatibility; unused by the dropdown. */
  label?: string;
  aria: string;
  overlay?: boolean;
}) {
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const current = LANG_META[locale];

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        aria-label={aria}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm font-medium transition-colors",
          overlay
            ? "border-white/45 text-white/90 hover:border-white hover:text-white"
            : "border-border text-foreground/80 hover:border-accent hover:text-foreground"
        )}
      >
        <span className="text-base leading-none" aria-hidden>
          {current.flag}
        </span>
        <span>{current.short}</span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-[10rem] overflow-hidden rounded-sm border border-border bg-background p-1.5 shadow-lg"
        >
          {locales.map((l) => {
            const meta = LANG_META[l];
            const isCurrent = l === locale;
            return (
              <Link
                key={l}
                href={swapLocale(pathname, l)}
                hrefLang={l}
                role="menuitem"
                aria-current={isCurrent ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2.5 rounded-sm px-3 py-2 text-caption tracking-wide transition-colors",
                  isCurrent
                    ? "text-foreground"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                )}
              >
                <span className="text-base leading-none" aria-hidden>
                  {meta.flag}
                </span>
                <span className="flex-1">{meta.name}</span>
                {isCurrent && <Check className="h-3.5 w-3.5 text-accent" aria-hidden />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
