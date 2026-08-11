"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

// Sojern Next Generation pixel (cookieless / privacy-first SDK).
// Spec: "Sojern Next Generation Pixel Implementation Guide for Terraza del Pacifico"
//
// One SDK load; page type is derived from the route on each navigation:
//   /{locale}              -> homePage
//   /{locale}/suites...    -> product   (rooms/suites bookable inventory)
//   everything else        -> tracking  (exclude pages that already fire another type)
//
// Gated on NEXT_PUBLIC_SOJERN_PROPERTY_ID (UUID). Falls back to the legacy
// NEXT_PUBLIC_SOJERN_HPID env name so existing Vercel vars keep working after
// the value is updated to the new UUID. Renders nothing when unset.

declare global {
  interface Window {
    sjn?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

const PROPERTY_ID =
  process.env.NEXT_PUBLIC_SOJERN_PROPERTY_ID ||
  process.env.NEXT_PUBLIC_SOJERN_HPID;

/** Container ID from the Sojern onboarding guide (fixed for this property). */
const CONTAINER_ID = "206";

const HOTEL_PARAMS = {
  city: "Jacó",
  country: "CR",
  nearestAirport: "TMU",
  property: "Terraza del Pacifico",
} as const;

type SojernPageType = "homePage" | "product" | "tracking";

function getPageType(pathname: string): SojernPageType {
  const seg = pathname.split("/").filter(Boolean); // ["en"] | ["en","suites","superior"]
  if (seg.length <= 1) return "homePage";
  // Guide: PRODUCT = pages describing bookable services (rooms, suites, tours…)
  if (seg[1] === "suites") return "product";
  return "tracking";
}

/** Human page category for TRACKING pixels (empty on home/product). */
function getPageCategory(pathname: string): string {
  const seg = pathname.split("/").filter(Boolean);
  if (seg.length <= 1) return "";
  // Drop locale; use first content segment (restaurant, contact, events, …)
  return seg[1] ?? "";
}

/** Install the Sojern command queue before the SDK loads (matches their snippet). */
function ensureSjnQueue() {
  if (typeof window === "undefined") return;
  window.sjn =
    window.sjn ||
    function (...args: unknown[]) {
      (window.sjn!.q = window.sjn!.q || []).push(args);
    };
}

export function SojernPixel() {
  const pathname = usePathname();
  const lastFired = useRef<string | null>(null);

  const fire = useCallback((path: string) => {
    if (!PROPERTY_ID || typeof window === "undefined") return;
    // Guard React Strict Mode double-invoke on the same path
    if (lastFired.current === path) return;
    lastFired.current = path;

    ensureSjnQueue();

    const pageType = getPageType(path);
    const params: Record<string, string> = {
      propertyID: PROPERTY_ID,
      ...HOTEL_PARAMS,
    };

    if (pageType === "tracking") {
      params.pageCategory = getPageCategory(path);
    }

    // Queued if SDK not ready yet; processed once sojern.min.js loads.
    window.sjn?.("initAndFire", "container", CONTAINER_ID, pageType, {
      context: { vertical: "hotel" },
      params,
    });
  }, []);

  // Fire on mount + every client-side navigation.
  useEffect(() => {
    if (!PROPERTY_ID || !pathname) return;
    fire(pathname);
  }, [pathname, fire]);

  if (!PROPERTY_ID) return null;

  return (
    <Script
      id="sojern-sdk"
      src="https://static.sojern.com/sdk/latest/sojern.min.js"
      strategy="afterInteractive"
    />
  );
}
