"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

// Sojern Travel Platform container pixel (cp_v3_js). One container tag serves
// every page; only the page-type (pt) changes, derived here from the route:
//   /{locale}            -> HOME_PAGE
//   /{locale}/suites...  -> PRODUCT   (room pages)
//   everything else      -> TRACKING
// (The booking-engine CONVERSION pixel is separate — it lives in Orbe, pending
// the booking Property ID, not on the website.)
//
// DISABLED until NEXT_PUBLIC_SOJERN_HPID is set (Property ID "6483"). Leave the
// env var blank to keep it dropped; set it to go live. Renders nothing when
// unset, matching the Meta Pixel / GTM convention.

const HPID = process.env.NEXT_PUBLIC_SOJERN_HPID;
const HPR = "Terraza del Pacifico"; // Hotel property name (hpr)

// Sojern's "event type" lookup — kept verbatim from their snippet so HOME_PAGE
// and TRACKING resolve to an empty et, PRODUCT to "hpr", etc.
const ET_BY_PAGE_TYPE: Record<string, string | null> = {
  HOME_PAGE: null,
  SEARCH: "hs",
  PRODUCT: "hpr",
  SHOPPING_CART: "hcart",
  CONVERSION: "hc",
  TRACKING: null,
};

function getPageType(pathname: string): "HOME_PAGE" | "PRODUCT" | "TRACKING" {
  const seg = pathname.split("/").filter(Boolean); // ["en"] | ["en","suites","superior"]
  if (seg.length <= 1) return "HOME_PAGE";
  if (seg[1] === "suites") return "PRODUCT";
  return "TRACKING";
}

export function SojernPixel() {
  const pathname = usePathname();
  const autocxReady = useRef(false);
  const lastFired = useRef<string | null>(null);

  const fire = useCallback((path: string) => {
    if (!HPID) return;
    if (lastFired.current === path) return; // guard the landing double-fire
    lastFired.current = path;

    const params: Record<string, string | null> = {
      hpr: HPR,
      hpid: HPID,
      sha256_eml: "", // hashed email — not collected on the marketing site
      sha1_eml: "",
      md5_eml: "",
      ccid: "", // 1st-party cookie user id — not collected
      pt: getPageType(path),
    };
    params.et = ET_BY_PAGE_TYPE[params.pt as string] ?? "";

    // Merge in the cookieless auto-context that sjrn_autocx.js exposes on
    // window.sjrn_params (skipped silently if it hasn't loaded yet).
    let merged: Record<string, unknown> = params;
    try {
      merged = Object.assign(
        {},
        (window as unknown as { sjrn_params?: Record<string, unknown> })
          .sjrn_params,
        params,
      );
    } catch {
      /* sjrn_params unavailable — fall back to params only */
    }

    const query = Object.keys(merged)
      .map((key) => `${key}=${encodeURIComponent(String(merged[key] ?? ""))}`)
      .join("&");

    const frame = document.createElement("iframe");
    frame.setAttribute("style", "height:0; width:0; display:none;");
    frame.setAttribute("aria-hidden", "true");
    frame.title = "Sojern";
    frame.src = `https://static.sojern.com/cip/c/59.html?f_v=cp_v3_js&p_v=1&${query}`;
    (document.head || document.body).appendChild(frame);
  }, []);

  // Fire on every client-side navigation, once autocx is loaded. The very first
  // (landing) hit is fired from the Script onLoad below so it carries the
  // auto-context — the attribution-critical pageview for the campaign.
  useEffect(() => {
    if (!HPID || !pathname) return;
    if (autocxReady.current) fire(pathname);
  }, [pathname, fire]);

  if (!HPID) return null;

  return (
    <Script
      src="https://static.sojern.com/utils/sjrn_autocx.js"
      strategy="afterInteractive"
      onLoad={() => {
        autocxReady.current = true;
        if (pathname) fire(pathname);
      }}
    />
  );
}
