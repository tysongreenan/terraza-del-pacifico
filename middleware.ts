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
  if (hasLocale) {
    // Surface the active locale so root layout can set <html lang> to match
    // hreflang (es-CR / en-US). Without this, every page ships lang="es-CR".
    const segment = pathname.split("/")[1] ?? defaultLocale;
    const res = NextResponse.next();
    res.headers.set("x-locale", segment);
    return res;
  }

  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on all app routes (including /es and /en) so we can set x-locale for
  // <html lang>. Static files and internal tooling are excluded.
  // `styleguide` lives outside the [locale] tree and skips the locale redirect.
  matcher: ["/((?!_next|api|ingest|styleguide|.*\\..*).*)"],
};
