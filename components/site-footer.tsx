import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, MapPin, Instagram, Facebook } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

// Official social profiles (same for both locales).
const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/terrazadelpacificocr/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/TerrazadelPacifico",
    Icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@terrazadelpacifico",
    // lucide has no TikTok glyph — inline brand mark.
    Icon: (props: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className={props.className}
      >
        <path d="M16.5 3c.36 2.3 1.86 4.06 4.5 4.32v2.82c-1.53.15-2.87-.35-4.43-1.29v5.66c0 5.78-6.3 7.59-8.83 3.44-1.62-2.67-.62-7.36 4.6-7.55v2.97c-.4.06-.82.16-1.21.3-1.16.42-1.82 1.16-1.64 2.46.36 2.5 4.94 3.23 4.56-1.65V3h2.45Z" />
      </svg>
    ),
  },
];

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
    { href: p("habitaciones"), label: n.rooms },
    { href: p("restaurante"), label: n.restaurant },
    { href: p("bares"), label: n.bars },
    { href: p("eventos"), label: n.events },
    { href: p("experiencias"), label: n.experiences },
    { href: p("galeria"), label: n.gallery },
    { href: p("blog"), label: n.blog },
  ];

  return (
    <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/images/Logo-nuevo-B86U915-.png"
            alt="Hotel Terraza del Pacífico"
            width={480}
            height={432}
            className="h-20 w-auto"
          />
          <p className="mt-3 text-sm italic text-primary-foreground/70">
            {f.tagline}
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-primary-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            {dict.location.address}
          </p>
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
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Hotel Terraza del Pacífico. {f.rights}
      </div>
    </footer>
  );
}
