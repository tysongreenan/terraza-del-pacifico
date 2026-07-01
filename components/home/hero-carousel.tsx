"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/content/hero-slides";
import { actionButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { bookingHref } from "@/lib/site";
import { DirectBookingNote } from "@/components/direct-booking-note";

const AUTO_ADVANCE_MS = 8000;

function SlideThumb({
  slide,
  index,
  active,
  onSelect,
  label,
  size,
}: {
  slide: (typeof heroSlides)[number];
  index: number;
  active: number;
  onSelect: (index: number) => void;
  label: string;
  size: "sm" | "md";
}) {
  const thumb = slide.type === "video" ? slide.poster : slide.src;
  const isActive = index === active;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-label={`${label} ${index + 1}`}
      onClick={() => onSelect(index)}
      className={cn(
        "relative shrink-0 overflow-hidden rounded-md border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40",
        size === "sm"
          ? "h-16 w-16"
          : "h-20 w-20 md:h-24 md:w-24",
        isActive
          ? "scale-105 border-white shadow-lg shadow-black/30"
          : "border-white/35 opacity-80 hover:opacity-100"
      )}
    >
      <Image
        src={thumb}
        alt=""
        fill
        // Thumbnails render small (64–96px) but downscale busy aerial photos,
        // so bump quality above the default 75 to keep edges crisp. Sizes are
        // set to the 2x pixel width so high-DPR screens get a dense candidate.
        sizes={size === "sm" ? "128px" : "192px"}
        quality={90}
        className="object-cover"
      />
    </button>
  );
}

function StarRating({ score }: { score: string }) {
  const value = Number.parseFloat(score);
  const full = Math.floor(value);
  const partial = value - full >= 0.5;

  return (
    <div className="flex items-center gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full || (i === full && partial);
        return (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              filled ? "fill-accent text-accent" : "fill-white/20 text-white/20"
            )}
          />
        );
      })}
    </div>
  );
}

export function HeroCarousel({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const h = dict.hero;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // User-controlled stop, distinct from transient hover/focus pause. Honors
  // prefers-reduced-motion so motion-sensitive users never get auto-advance.
  const [stopped, setStopped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slides = heroSlides;
  const current = slides[active];
  const isVideo = current.type === "video";

  // The first slide's LCP asset (video poster or image). Preloaded at high
  // priority via the hoisted <link> below so the hero paints fast.
  const firstSlide = slides[0];
  const lcpAsset =
    firstSlide.type === "video" ? firstSlide.poster : firstSlide.src;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Stop auto-advance for users who prefer reduced motion.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setStopped(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || stopped) return;
    if (isVideo) return;

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [active, paused, stopped, isVideo, slides.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;

    video.currentTime = 0;
    void video.play().catch(() => {});
  }, [active, isVideo]);

  const selectSlide = useCallback((index: number) => {
    setActive(index);
  }, []);

  return (
    <section className="relative w-full">
      {/* React 19 hoists this to <head>; preloads the hero LCP asset. */}
      <link
        rel="preload"
        as="image"
        href={lcpAsset}
        fetchPriority="high"
      />
      {/* Media + copy — overflow only clips backgrounds, not the booking bar */}
      <div
        className="relative min-h-[92svh] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {slides.map((slide, index) => {
          const isActive = index === active;

          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                isActive ? "opacity-100" : "opacity-0"
              )}
              aria-hidden={!isActive}
            >
              {slide.type === "video" ? (
                isActive && (
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={slide.poster}
                    aria-label={slide.alt[locale]}
                  >
                    {slide.webm && (
                      <source src={slide.webm} type="video/webm" />
                    )}
                    <source
                      src={isMobile ? "/videos/hero-mobile.mp4" : slide.src}
                      type="video/mp4"
                    />
                  </video>
                )
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.alt[locale]}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              )}
            </div>
          );
        })}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

        <div className="container relative z-10 flex min-h-[92svh] w-full items-end pb-36 pt-32 md:pb-44 md:pt-48">
          <div className="max-w-2xl text-white">
            <p className="animate-rise text-sm font-semibold uppercase tracking-[0.22em] text-white text-shadow-hero">
              {h.eyebrow}
            </p>
            <h1
              className="animate-rise mt-4 text-balance font-concept text-display font-medium leading-[1.08] text-shadow-hero lg:text-[3.4rem]"
              style={{ animationDelay: "0.08s" }}
            >
              {h.title}
            </h1>
            <p
              className="animate-rise mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/88 text-shadow-hero sm:text-lg"
              style={{ animationDelay: "0.16s" }}
            >
              {h.subtitle}
            </p>

            <div
              className="animate-rise mt-8 flex flex-col gap-5 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.24s" }}
            >
              <Link
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  actionButtonVariants({ variant: "primary", size: "lg" }),
                  "min-w-[220px] shadow-xl shadow-black/25"
                )}
              >
                {h.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>

              <div className="flex items-center gap-3 text-sm text-white/90">
                <StarRating score={h.rating} />
                <span className="font-semibold">{h.rating}</span>
                <span className="text-white/70">{h.reviews}</span>
              </div>
            </div>

            {/* Direct-booking reassurance — subtle line beneath the CTA */}
            <div
              className="animate-rise mt-4"
              style={{ animationDelay: "0.28s" }}
            >
              <DirectBookingNote locale={locale} />
            </div>

            {/* Mobile + tablet: inline strip below CTA (keeps clear of the
                reviews row; the wide pinned strip only fits at xl) */}
            <div
              className="animate-rise mt-6 flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] xl:hidden [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label={h.slideLabel}
              style={{ animationDelay: "0.32s" }}
            >
              {slides.map((slide, index) => (
                <SlideThumb
                  key={slide.id}
                  slide={slide}
                  index={index}
                  active={active}
                  onSelect={selectSlide}
                  label={h.slideLabel}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Desktop (xl+): pinned bottom-right, level with CTA row */}
          <div
            className="absolute bottom-40 right-0 hidden items-end gap-3 xl:flex"
            role="tablist"
            aria-label={h.slideLabel}
          >
            {slides.map((slide, index) => (
              <SlideThumb
                key={slide.id}
                slide={slide}
                index={index}
                active={active}
                onSelect={selectSlide}
                label={h.slideLabel}
                size="md"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sand bridge into the next section */}
      <div className="relative z-20 bg-concept-sand pb-8 pt-8 md:pb-10 md:pt-10" />
    </section>
  );
}
