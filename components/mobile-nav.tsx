"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = { href: string; label: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

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
        <div
          className={cn(
            "fixed inset-x-0 z-40 border-b border-border bg-background shadow-lg",
            overlay ? "top-24 md:top-[11rem]" : "top-[4.5rem] md:top-[5.5rem]"
          )}
        >
          <nav className="container flex flex-col py-4">
            {items.map((item) =>
              "children" in item ? (
                <div
                  key={item.label}
                  className="border-b border-border/50 py-2"
                >
                  <p className="py-1 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[44px] items-center pl-3 text-base text-foreground/90 transition-colors hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center border-b border-border/50 text-base text-foreground/90 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              )
            )}
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
              target="_blank"
              rel="noopener noreferrer"
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
