import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { socials } from "@/lib/socials";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const f = dict.footer;
  const n = dict.nav;
  const p = (slug: string) => `/${locale}${slug ? `/${slug}` : ""}`;

  const explore = [
    { href: p("suites"), label: n.rooms },
    { href: p("restaurant"), label: n.restaurant },
    { href: p("bars"), label: n.bars },
    { href: p("bakery"), label: n.bakery },
    { href: p("events"), label: n.events },
    { href: p("experiences"), label: n.experiences },
    { href: p("gallery"), label: n.gallery },
    { href: p("blog"), label: n.blog },
    { href: p("policies"), label: f.policies },
  ];

  return (
    <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/images/logo-light.png"
            alt="Hotel Terraza del Pacífico"
            width={480}
            height={432}
            className="h-20 w-auto"
          />
          <p className="mt-3 text-sm italic text-primary-foreground/70">
            {f.tagline}
          </p>
          {/* Full postal address (NAP) — kept in sync with the Google Business Profile. */}
          <address className="mt-4 flex items-start gap-2 text-sm not-italic text-primary-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span>
              {dict.location.address}
              <br />
              {dict.location.addressLine2}
              <br />
              {dict.location.addressLine3}
            </span>
          </address>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-sm">
          <p className="font-semibold">{f.exploreTitle}</p>
          <ul className="mt-3 space-y-2 text-primary-foreground/80">
            {explore.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold">{f.contactTitle}</p>
          <ul className="mt-3 space-y-2 text-primary-foreground/80">
            <li>
              <a
                href={f.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                {f.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${f.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                {f.email}
              </a>
            </li>
            <li>
              <a
                href={dict.finalCta.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 text-accent" aria-hidden />
                {f.whatsapp}
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold">{f.scheduleTitle}</p>
          <ul className="mt-3 space-y-2 text-primary-foreground/80">
            <li>{f.checkin}</li>
            <li>{f.checkout}</li>
            <li>{f.pools}</li>
            <li>{f.yoga}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Hotel Terraza del Pacífico. {f.rights}
      </div>
    </footer>
  );
}
