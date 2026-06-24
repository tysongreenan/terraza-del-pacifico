"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string };

export function MobileNav({
  items,
  bookHref,
  bookLabel,
  callHref,
  callLabel,
  overlay = false,
}: {
  items: NavItem[];
  bookHref: string;
  bookLabel: string;
  callHref: string;
  callLabel: string;
  overlay?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors",
          overlay
            ? "text-white drop-shadow-sm hover:bg-white/10"
            : "text-foreground hover:bg-muted"
        )}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/98 backdrop-blur shadow-lg">
          <nav className="container flex flex-col py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center border-b border-border/50 text-base text-foreground/90 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={callHref}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-concept-ocean transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden />
              {callLabel}
            </a>
            <Link
              href={bookHref}
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "accent",
                size: "lg",
                className: "mt-3",
              })}
            >
              {bookLabel}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
