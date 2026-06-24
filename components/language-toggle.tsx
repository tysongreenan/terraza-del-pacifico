"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// Swaps the leading /es or /en segment of the current path, preserving the rest.
export function LanguageToggle({
  locale,
  label,
  aria,
  overlay = false,
}: {
  locale: Locale;
  label: string;
  aria: string;
  overlay?: boolean;
}) {
  const pathname = usePathname() || `/${locale}`;
  const other = locales.find((l) => l !== locale) ?? locale;
  const segments = pathname.split("/");
  segments[1] = other; // index 0 is "" (leading slash)
  const href = segments.join("/") || `/${other}`;

  return (
    <Link
      href={href}
      aria-label={aria}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm font-medium transition-colors",
        overlay
          ? "border-white/45 text-white/90 hover:border-white hover:text-white"
          : "border-border text-foreground/80 hover:border-accent hover:text-foreground"
      )}
    >
      <Globe className="h-4 w-4" aria-hidden />
      {label}
    </Link>
  );
}
