"use client";

import { useEffect } from "react";
import { bookingHref } from "@/lib/site";
import { trackClick, type ClickEvent } from "@/lib/track-click";

// Delegated listener so every WhatsApp/booking/contact link tracks
// automatically — including ones added later — without wiring an onClick
// into each of the ~20 components that render these links.
const RULES: { event: ClickEvent; test: (href: string) => boolean }[] = [
  { event: "clic_whatsapp", test: (href) => href.includes("wa.me") },
  { event: "book_click", test: (href) => href === bookingHref },
  { event: "contact_click", test: (href) => href.includes("/contact") },
];

export function AnalyticsClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest?.(
        "a[href]"
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const rule = RULES.find((r) => r.test(anchor.href));
      if (!rule) return;
      trackClick(rule.event, { link_url: anchor.href });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
