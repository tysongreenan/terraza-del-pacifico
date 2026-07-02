import posthog from "posthog-js";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Names match the events already reported in GA4 under the GTM container
// (book_click / clic_whatsapp / contact_click) — keep these exact strings so
// existing GA4 reports/history aren't fragmented by a rename.
export type ClickEvent = "book_click" | "clic_whatsapp" | "contact_click";

export function trackClick(event: ClickEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  posthog.capture(event, params);
}
