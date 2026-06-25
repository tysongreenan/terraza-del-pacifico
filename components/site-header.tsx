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

export type NavLink = { href: string; label: string };
export type NavEntry = NavLink | { label: string; children: NavLink[] };

// Drop the /es or /en prefix → logical path ("/es/suites/x" → "/suites/x").
function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname || "/";
}

// Pages that open on a LIGHT surface (no dark full-bleed hero behind the header)
// must use the solid header — otherwise the transparent white nav is invisible.
// Verified visually 2026-06-24. ADD new hero-less routes here as they're built.
function resolveVariant(pathname: string): "overlay" | "solid" {
  const path = stripLocale(pathname);
  // Suite detail pages (/suites/<slug>) open on a light photo mosaic;
  // the /habitaciones hub and the /compare page do have dark heroes.
  const isSuiteDetail =
    path.startsWith("/suites/") && path !== "/suites/compare";
  // Blog list + posts open on a light surface (no dark hero) → solid header.
  const isBlog = path === "/blog" || path.startsWith("/blog/");
  if (path === "/experiences" || isSuiteDetail || isBlog) return "solid";
  return "overlay";
}

function NavDropdown({
  label,
  children,
  transparent,
}: {
  label: string;
  children: NavLink[];
  transparent: boolean;
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
          transparent
            ? "text-white/95 drop-shadow-sm hover:text-white"
            : "text-foreground/75 hover:text-foreground"
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
          <div className="min-w-[12rem] overflow-hidden rounded-sm border border-border bg-background p-1.5 shadow-lg">
            {children.map((c) => (
              <Link
                key={c.href}
                href={c.href}
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

export function SiteHeader({
  locale,
  dict,
  variant,
}: {
  locale: Locale;
  dict: Dictionary;
  // "overlay" = transparent over a dark hero, solidifies on scroll (home,
  // restaurant, about…). "solid" = always-solid surface from the top, for
  // hero-less / light pages (suite detail, experiences hub) where a transparent
  // white nav would be invisible. When omitted, the variant is resolved from
  // the route (see resolveVariant); pass it explicitly only to force a variant
  // (e.g. the /styleguide previews).
  variant?: "overlay" | "solid";
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

  // Solid pages never go transparent; overlay pages are transparent until scroll.
  const transparent = resolved === "overlay" ? !scrolled : false;

  const nav: NavEntry[] = [
    { href: p("suites"), label: n.rooms },
    {
      label: n.eatDrink,
      children: [
        { href: p("restaurant"), label: n.restaurant },
        { href: p("bars"), label: n.bars },
        { href: p("bakery"), label: n.bakery },
      ],
    },
    { href: p("events"), label: n.events },
    { href: p("experiences"), label: n.experiences },
    { href: p("gallery"), label: n.gallery },
    { href: p("about"), label: n.about },
  ];
  const bookHref = bookingHref;

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300",
        "fixed",
        transparent
          ? "border-transparent bg-transparent shadow-none"
          : "border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/90"
      )}
    >
      {/* Utility bar — contact + social, right-aligned. Only at the top of the page. */}
      <div className={cn(transparent ? "hidden md:block" : "hidden")}>
        <div className="mx-auto flex h-10 w-full max-w-[1600px] items-center justify-end gap-5 px-6 lg:px-10">
          <a
            href={dict.footer.phoneHref}
            aria-label={`${n.callAria}: ${dict.footer.phone}`}
            className="inline-flex items-center gap-2 text-caption tracking-wide text-white/90 drop-shadow-sm transition-colors hover:text-white"
          >
            <Phone className="h-[0.95rem] w-[0.95rem] text-accent" aria-hidden />
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
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/90 drop-shadow-sm transition-colors hover:bg-white/10 hover:text-white"
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
          transparent ? "h-24 md:h-[8.5rem]" : "h-[4.5rem] md:h-[5.5rem]"
        )}
      >
        <Link
          href={p("")}
          aria-label="Terraza del Pacífico"
          className="relative z-10 inline-flex items-center"
        >
          <Image
            src="/images/Logo-nuevo-B86U915-.png"
            alt="Terraza del Pacífico"
            width={480}
            height={432}
            priority
            className={cn(
              "max-w-[30vw] transition-[width,filter] duration-300",
              transparent
                ? "w-[5.5rem] brightness-0 invert drop-shadow-md md:w-[8.5rem]"
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
                transparent={transparent}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-caption tracking-wide transition-colors",
                  transparent
                    ? "text-white/95 drop-shadow-sm hover:text-white"
                    : "text-foreground/75 hover:text-foreground"
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
            overlay={transparent}
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
            overlay={transparent}
          />
        </div>
        </div>
      </div>
    </header>
  );
}
