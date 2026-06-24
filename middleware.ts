import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

// Redirect any locale-less path to the default locale (es). Lightweight: we let
// the browser's Accept-Language nudge English speakers to /en, otherwise /es.
function pickLocale(req: NextRequest): string {
  const header = req.headers.get("accept-language") ?? "";
  const prefersEn = header.toLowerCase().startsWith("en");
  return prefersEn && locales.includes("en") ? "en" : defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Only locale-less pages need redirect handling. Localized routes should not
  // invoke middleware in production.
  matcher: ["/((?!_next|api|es(?:/|$)|en(?:/|$)|.*\\..*).*)"],
};
