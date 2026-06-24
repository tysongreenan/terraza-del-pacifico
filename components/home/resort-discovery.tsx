import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Camera,
  Compass,
  Martini,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import {
  navTiles,
  type DiscoveryHref,
  type NavIcon,
  type NavTile,
} from "@/content/resort-discovery";
import { Reveal } from "@/components/home/reveal";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";

const ICONS: Record<NavIcon, LucideIcon> = {
  bed: BedDouble,
  restaurant: UtensilsCrossed,
  bar: Martini,
  about: Compass,
  gallery: Camera,
};

function discoveryHref(locale: Locale, path: DiscoveryHref) {
  const resolved = typeof path === "string" ? path : path[locale];
  if (resolved.startsWith("#")) return `/${locale}${resolved}`;
  return `/${locale}/${resolved}`;
}

function NavCard({ tile, locale }: { tile: NavTile; locale: Locale }) {
  const Icon = ICONS[tile.icon];
  const isFeature = tile.feature;

  return (
    <Link
      href={discoveryHref(locale, tile.href)}
      className={cn(
        "group relative flex h-full min-h-[152px] flex-col justify-end overflow-hidden rounded-sm",
        "outline-none ring-concept-gold ring-offset-2 ring-offset-concept-sand focus-visible:ring-2",
        tile.rowSpan === 2 && "min-h-[316px] md:min-h-0"
      )}
    >
      <Image
        src={tile.image}
        alt={tile.alt[locale]}
        fill
        sizes={
          tile.colSpan === 2
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 768px) 50vw, 25vw"
        }
        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
      />

      {/* Legibility gradient (ocean-tinted, bottom-up) */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t",
          isFeature
            ? "from-[rgba(11,33,44,0.88)] via-[rgba(11,33,44,0.30)] to-transparent"
            : "from-[rgba(11,33,44,0.84)] via-[rgba(11,33,44,0.22)] to-transparent"
        )}
      />
      {/* Subtle hover deepen */}
      <div className="absolute inset-0 bg-concept-ocean/0 transition-colors duration-500 group-hover:bg-concept-ocean/15" />

      {/* Icon chip */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-4 top-4 z-10 inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm md:left-5 md:top-5",
          isFeature ? "h-11 w-11" : "h-9 w-9"
        )}
      >
        <Icon
          className={isFeature ? "h-5 w-5" : "h-4 w-4"}
          strokeWidth={1.75}
        />
      </span>

      {/* Content */}
      <div className="relative z-10 p-4 text-white md:p-5">
        <p
          className={cn(
            "font-medium uppercase tracking-[0.14em] text-white/80",
            isFeature ? "text-[11px]" : "hidden text-[10px] md:block"
          )}
        >
          {tile.subtitle[locale]}
        </p>
        <p
          className={cn(
            "mt-1 font-concept leading-tight text-white",
            isFeature ? "text-3xl md:text-[40px]" : "text-xl md:text-[26px]"
          )}
        >
          {tile.title[locale]}
        </p>
        <span
          className={cn(
            "mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em]",
            isFeature ? "text-concept-gold" : "text-white"
          )}
        >
          {tile.cta[locale]}
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1"
            strokeWidth={2.25}
          />
        </span>
      </div>
    </Link>
  );
}

export function ResortDiscovery({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const d = dict.discover;

  return (
    <section id="discover" className="scroll-mt-20 bg-concept-sand pb-16 pt-8 md:pb-20 md:pt-10">
      <div className="container">
        <Reveal>
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="eyebrow">{d.eyebrow}</p>
            <h2 className="mt-3 text-balance font-concept text-3xl font-medium leading-[1.05] text-concept-ocean md:text-[46px]">
              {d.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3.5 md:[grid-auto-rows:224px]">
          {navTiles.map((tile) => (
            <Reveal
              key={tile.id}
              className={cn(
                tile.colSpan === 2 ? "col-span-2" : "col-span-1",
                tile.rowSpan === 2 ? "row-span-2" : "row-span-1"
              )}
            >
              <NavCard tile={tile} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
