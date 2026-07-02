"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import posthog from "posthog-js";
import { ChevronDown, Phone } from "lucide-react";
import { actionButtonVariants } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { locales, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { bookingHref } from "@/lib/site";
import { socials } from "@/lib/socials";
import { cn } from "@/lib/utils";

export type NavLink = { href: string; label: string; external?: boolean };
export type NavChild = NavLink | { label: string; children: NavLink[] };
export type NavEntry = NavLink | { label: string; children: NavChild[] };

// Drop the /es or /en prefix → logical path ("/es/suites/x" → "/suites/x").
function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname || "/";
}

export type HeaderVariant = "overlay" | "overlay-light" | "solid";

// Pages that open on a LIGHT surface (no dark full-bleed hero behind the header)
// need a header that doesn't rely on white text. "overlay-light" keeps the big
// cinematic header + scroll-shrink animation but with the coloured logo and
// gold nav text so it reads on a light background; "solid" is for pages with
// no big top band at all (compact header from the very top).
// Verified visually 2026-06-24 / 2026-07-02. ADD new hero-less routes here as they're built.
function resolveVariant(pathname: string): HeaderVariant {
  const path = stripLocale(pathname);
  // Suite detail pages (/suites/<slug>) open on a light photo mosaic;
  // the /habitaciones hub and the /compare page do have dark heroes.
  const isSuiteDetail =
    path.startsWith("/suites/") && path !== "/suites/compare";
  // Blog list + posts open on a light surface (no dark hero) → solid header.
  const isBlog = path === "/blog" || path.startsWith("/blog/");
  const isContact = path === "/contact";
  // Experiences hub opens on the light sand surface but still wants the big
  // cinematic header treatment, just recoloured for a light background.
  if (path === "/experiences") return "overlay-light";
  if (isSuiteDetail || isBlog || isContact) return "solid";
  return "overlay";
}

// Nested submenu (e.g. "Restaurants" → Resort / Jacó) rendered as a flyout
// to the right of its parent dropdown panel. Stays open while the pointer is
// over the trigger or the flyout itself — both live inside the parent
// NavDropdown's wrapper, so hovering between them never trips the parent's
// own close timer.
function NavSubmenu({ label, children }: { label: string; children: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 rounded-sm px-3 py-2 text-caption tracking-wide text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 -rotate-90" aria-hidden />
      </button>
      {open && (
        <div className="absolute left-full top-0 pl-2">
          <div className="min-w-[14rem] overflow-hidden rounded-sm border border-border bg-background p-1.5 shadow-lg">
            {children.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="block rounded-sm px-3 py-2 text-caption tracking-wide text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NavDropdown({
  label,
  children,
  tone,
}: {
  label: string;
  children: NavChild[];
  tone: "dark" | "light" | "solid";
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1 text-caption tracking-wide transition-colors",
          tone === "dark" && "text-white/95 drop-shadow-sm hover:text-white",
          tone === "light" && "text-concept-gold drop-shadow-sm hover:text-concept-ocean",
          tone === "solid" && "text-foreground/75 hover:text-foreground"
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
          <div className="min-w-[12rem] rounded-sm border border-border bg-background p-1.5 shadow-lg">
            {children.map((c) =>
              "children" in c ? (
                <NavSubmenu key={c.label} label={c.label} children={c.children} />
              ) : (
                <Link
                  key={c.href}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-2 text-caption tracking-wide text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {c.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteHeader({
  locale,
  dict,
  variant,
}: {
  locale: Locale;
  dict: Dictionary;
  // "overlay" = transparent over a dark hero, solidifies on scroll (home,
  // restaurant, about…). "overlay-light" = same big header + scroll-shrink
  // animation, but recoloured for a light background: coloured logo, gold nav
  // text instead of white (experiences hub). "solid" = always-solid surface
  // from the top, for hero-less / light pages (suite detail, contact) with no
  // big top band at all. When omitted, the variant is resolved from the route
  // (see resolveVariant); pass it explicitly only to force a variant (e.g. the
  // /styleguide previews).
  variant?: HeaderVariant;
}) {
  const n = dict.nav;
  const p = (slug: string) => `/${locale}${slug ? `/${slug}` : ""}`;
  const pathname = usePathname();
  const resolved = variant ?? resolveVariant(pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid pages never get the big header; overlay/overlay-light pages are big
  // (transparent bg, large logo, utility bar) until the user scrolls.
  const bigHeader = resolved !== "solid" && !scrolled;
  // Only meaningful while bigHeader is true — which colour scheme to apply.
  const heroStyle: "dark" | "light" = resolved === "overlay-light" ? "light" : "dark";
  const tone: "dark" | "light" | "solid" = bigHeader ? heroStyle : "solid";

  const nav: NavEntry[] = [
    { href: p("suites"), label: n.rooms },
    {
      label: n.eatDrink,
      children: [
        {
          label: n.restaurants,
          children: [
            { href: p("restaurant"), label: n.vivaceResort },
            {
              href: "https://www.ristorantevivace.com/",
              label: n.vivaceJaco,
              external: true,
            },
          ],
        },
        { href: p("bars"), label: n.bars },
        { href: p("bakery"), label: n.bakery },
      ],
    },
    { href: p("events"), label: n.events },
    { href: p("experiences"), label: n.experiences },
    { href: p("gallery"), label: n.gallery },
    { href: p("about"), label: n.about },
    { href: p("contact"), label: n.contact },
  ];
  const bookHref = bookingHref;

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300",
        "fixed",
        bigHeader
          ? "border-transparent bg-transparent shadow-none"
          : "border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/90"
      )}
    >
      {/* Utility bar — contact + social, right-aligned. Only at the top of the page. */}
      <div className={cn(bigHeader ? "hidden md:block" : "hidden")}>
        <div className="mx-auto flex h-10 w-full max-w-[1600px] items-center justify-end gap-5 px-6 lg:px-10">
          <a
            href={dict.footer.phoneHref}
            aria-label={`${n.callAria}: ${dict.footer.phone}`}
            className={cn(
              "inline-flex items-center gap-2 text-caption tracking-wide transition-colors",
              heroStyle === "light"
                ? "text-concept-ocean/80 hover:text-concept-ocean"
                : "text-white/90 drop-shadow-sm hover:text-white"
            )}
          >
            <Phone
              className={cn(
                "h-[0.95rem] w-[0.95rem]",
                heroStyle === "light" ? "text-concept-gold" : "text-accent"
              )}
              aria-hidden
            />
            {dict.footer.phone}
          </a>
          <div className="flex items-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                  heroStyle === "light"
                    ? "text-concept-ocean/80 hover:bg-concept-ocean/10 hover:text-concept-ocean"
                    : "text-white/90 drop-shadow-sm hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main bar — logo + primary nav */}
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-6 transition-[height] duration-300 lg:px-10",
          bigHeader ? "h-24 md:h-[8.5rem]" : "h-[4.5rem] md:h-[5.5rem]"
        )}
      >
        <Link
          href={p("")}
          aria-label="Terraza del Pacífico"
          className="relative z-10 inline-flex items-center"
        >
          <Image
            src="/images/brand/Logo-nuevo-B86U915-.png"
            alt="Terraza del Pacífico"
            width={480}
            height={432}
            priority
            className={cn(
              "max-w-[30vw] transition-[width,filter] duration-300",
              bigHeader
                ? heroStyle === "dark"
                  ? "w-[5.5rem] brightness-0 invert drop-shadow-md md:w-[8.5rem]"
                  : "w-[5.5rem] drop-shadow-md md:w-[8.5rem]"
                : "w-[3.25rem] md:w-[4.25rem]"
            )}
          />
        </Link>

        <div className="relative z-10 flex items-center gap-6 xl:gap-8">
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((item) =>
            "children" in item ? (
              <NavDropdown
                key={item.label}
                label={item.label}
                children={item.children}
                tone={tone}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-caption tracking-wide transition-colors",
                  tone === "dark" && "text-white/95 drop-shadow-sm hover:text-white",
                  tone === "light" && "text-concept-gold drop-shadow-sm hover:text-concept-ocean",
                  tone === "solid" && "text-foreground/75 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageToggle
            locale={locale}
            label={n.langLabel}
            aria={n.langSwitchAria}
            overlay={tone === "dark"}
          />
          <Link
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              actionButtonVariants({ variant: "primary", size: "sm" }),
              "hidden sm:inline-flex"
            )}
            onClick={() => posthog.capture("nav_booking_clicked")}
          >
            {n.book}
          </Link>
          <MobileNav
            items={nav}
            bookHref={bookHref}
            bookLabel={n.book}
            callHref={dict.footer.phoneHref}
            callLabel={dict.footer.phone}
            overlay={tone === "dark"}
            raised={bigHeader}
          />
        </div>
        </div>
      </div>
    </header>
  );
}
