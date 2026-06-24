"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { MobileNav } from "@/components/mobile-nav";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { bookingHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const n = dict.nav;
  const p = (slug: string) => `/${locale}${slug ? `/${slug}` : ""}`;
  const pathname = usePathname();
  const isHome =
    pathname === `/${locale}` || pathname === `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  const nav = [
    { href: p(""), label: n.home },
    { href: p("habitaciones"), label: n.rooms },
    { href: p("restaurante"), label: n.restaurant },
    { href: p("bares"), label: n.bars },
    { href: p("panaderia"), label: n.bakery },
    { href: p("eventos"), label: n.events },
    { href: p("experiencias"), label: n.experiences },
    { href: p("galeria"), label: n.gallery },
    { href: p("sobre-nosotros"), label: n.about },
  ];
  const bookHref = bookingHref;

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300",
        isHome ? "fixed" : "sticky",
        transparent
          ? "border-transparent bg-transparent shadow-none"
          : "border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/90"
      )}
    >
      <div className="container flex h-[4.25rem] items-center justify-between gap-4 md:h-[4.75rem]">
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
              "h-12 w-auto md:h-14",
              transparent && "drop-shadow-md"
            )}
          />
        </Link>

        <nav className="relative z-10 hidden items-center gap-6 xl:flex">
          {nav.map((item) => (
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
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-2 md:gap-4">
          <a
            href={dict.footer.phoneHref}
            aria-label={`${n.callAria}: ${dict.footer.phone}`}
            className={cn(
              "hidden h-9 w-9 items-center justify-center rounded-full transition-colors sm:inline-flex",
              transparent
                ? "text-white/95 drop-shadow-sm hover:bg-white/10 hover:text-white"
                : "text-foreground/75 hover:bg-muted hover:text-foreground"
            )}
          >
            <Phone className="h-[1.05rem] w-[1.05rem]" />
          </a>
          <LanguageToggle
            locale={locale}
            label={n.langLabel}
            aria={n.langSwitchAria}
            overlay={transparent}
          />
          <Link
            href={bookHref}
            className={cn(
              buttonVariants({
                variant: "accent",
                size: "sm",
                className: "hidden sm:inline-flex uppercase tracking-[0.1em]",
              }),
              transparent &&
                "bg-concept-gold text-[#1a1611] hover:bg-concept-gold/90"
            )}
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
    </header>
  );
}