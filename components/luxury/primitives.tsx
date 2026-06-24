import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { cn } from "@/lib/utils";
import { bookingHref, whatsappHref } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import {
  MOSAIC_GRID_CLASS,
  MosaicTile,
  mosaicSpan,
  mosaicTileClass,
  type MosaicImage,
  type MosaicSpan,
} from "@/components/luxury/mosaic-shared";

// Re-export the shared mosaic primitives so existing importers (page-scaffold,
// info-page, hubs) keep resolving them from this module.
export { mosaicSpan, MosaicTile };
export type { MosaicImage, MosaicSpan };

export function LuxuryHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative min-h-[72svh] overflow-hidden text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="container relative flex min-h-[72svh] flex-col justify-end pb-16 pt-28 md:pb-20">
        <Reveal>
          <p className="text-eyebrow uppercase text-concept-gold text-shadow-hero">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-concept text-display font-medium leading-[1.02] text-shadow-hero ">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function LuxuryIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="bg-concept-sand py-14 md:py-section">
      <div className="container max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.08] text-concept-ocean ">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body-sm leading-relaxed text-concept-ink/80 md:text-base">
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function LuxuryMosaic({
  eyebrow,
  title,
  images,
  className,
}: {
  eyebrow?: string;
  title?: string;
  images: MosaicImage[];
  className?: string;
}) {
  if (images.length === 0) return null;

  return (
    <section className={cn("bg-concept-sand py-14 md:py-section", className)}>
      <div className="container">
        {(eyebrow || title) && (
          <Reveal>
            <div className="mb-8 md:mb-10">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && (
                <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.05] text-concept-ocean ">
                  {title}
                </h2>
              )}
            </div>
          </Reveal>
        )}

        <div className={MOSAIC_GRID_CLASS}>
          {images.map((item, index) => {
            const span = item.span ?? mosaicSpan(index);
            const inner = <MosaicTile item={item} span={span} />;

            return (
              <Reveal key={`${item.src}-${index}`} className={mosaicTileClass(span)}>
                {item.href ? (
                  <Link href={item.href} className="relative block h-full w-full">
                    {inner}
                  </Link>
                ) : (
                  <div className="relative h-full w-full">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LuxurySplitBand({
  image,
  imageAlt,
  eyebrow,
  title,
  body,
  reverse = false,
  cta,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  body?: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
}) {
  return (
    <section
      className={cn(
        "flex flex-col bg-concept-ocean md:min-h-[420px] md:flex-row",
        reverse && "md:flex-row-reverse"
      )}
    >
      <Reveal className="group relative min-h-[260px] w-full overflow-hidden md:min-h-0 md:w-1/2">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </Reveal>
      <Reveal
        delay={100}
        className="flex w-full flex-col justify-center px-8 py-12 md:w-1/2 md:px-14 md:py-16"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.1] text-white ">
          {title}
        </h2>
        {body && (
          <p className="mt-5 max-w-md text-body-sm leading-relaxed text-[#bcd0d8]">
            {body}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-sm border border-white/45 px-8 py-3.5 text-caption font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </Reveal>
    </section>
  );
}

export function LuxuryImageBand({
  image,
  imageAlt,
  eyebrow,
  title,
  body,
  minHeight = "52vh",
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  minHeight?: string;
}) {
  return (
    <section
      className="group relative overflow-hidden text-white"
      style={{ minHeight }}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,58,77,0.72)] via-[rgba(16,58,77,0.35)] to-transparent" />
      {(eyebrow || title || body) && (
        <div className="container relative flex items-end py-16 md:min-h-[inherit] md:py-20">
          <Reveal className="max-w-xl">
            {eyebrow && <p className="text-eyebrow uppercase text-concept-gold text-shadow-hero">{eyebrow}</p>}
            {title && (
              <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.08] ">
                {title}
              </h2>
            )}
            {body && (
              <p className="mt-4 text-body-sm leading-relaxed text-white/85">{body}</p>
            )}
          </Reveal>
        </div>
      )}
    </section>
  );
}

export function LuxuryFactsStrip({
  facts,
}: {
  facts: { label: string; value: string }[];
}) {
  if (facts.length === 0) return null;

  return (
    <section className="border-y border-[#ece5d8] bg-concept-sand-muted">
      <div className="container">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={cn(
                "flex flex-col px-4 py-8 md:px-6 md:py-10",
                index % 2 === 0 && "border-r border-[#ece5d8]",
                index < 2 && "border-b border-[#ece5d8] md:border-b-0",
                index < facts.length - 1 && "md:border-r md:border-[#ece5d8]"
              )}
            >
              <dd className="font-concept text-h2 font-medium text-concept-ocean ">
                {fact.value}
              </dd>
              <dt className="mt-1.5 text-micro font-semibold uppercase tracking-[0.12em] text-[#6f6a62]">
                {fact.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function LuxuryCtaBand({
  locale,
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryHref = bookingHref,
  secondaryLabel,
  secondaryHref = whatsappHref,
  image = "/images/exp-hero-front-aerial.avif",
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel: string;
  secondaryHref?: string;
  image?: string;
}) {
  return (
    <section
      id="booking"
      className="relative scroll-mt-20 overflow-hidden py-20 text-center text-white md:py-28"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,58,77,0.45)] to-[rgba(16,58,77,0.62)]" />
      <div className="container relative z-10">
        <Reveal>
          <p className="text-eyebrow uppercase text-concept-gold text-shadow-hero">{eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-concept text-h1 font-medium leading-tight text-shadow-hero ">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
            {body}
          </p>
        </Reveal>
        <Reveal
          delay={120}
          className="mx-auto mt-8 flex max-w-lg flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-sm bg-concept-gold px-8 py-4 text-caption font-semibold uppercase tracking-[0.1em] text-[#1a1611]"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/60 px-8 py-4 text-caption font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {secondaryLabel}
          </a>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-[#f3ead6]">
            <span className="text-concept-gold">◆</span>{" "}
            {locale === "en" ? "Best rate guaranteed" : "Mejor tarifa garantizada"}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function luxuryButtonPrimary(label: string, href: string) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-sm bg-concept-gold px-7 py-3.5 text-caption font-semibold uppercase tracking-[0.1em] text-[#1a1611] transition-opacity hover:opacity-90"
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </a>
  );
}

export function luxuryButtonOutline(label: string, href: string) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/55 px-7 py-3.5 text-caption font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
    >
      {label}
    </Link>
  );
}