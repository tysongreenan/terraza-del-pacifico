"use client";

import Image from "next/image";
import posthog from "posthog-js";
import { Reveal } from "@/components/home/reveal";
import { actionButtonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { bookingHref } from "@/lib/site";
import { DirectBookingNote } from "@/components/direct-booking-note";

export function FinalCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.finalCta;

  return (
    <section
      id="booking"
      className="relative scroll-mt-20 overflow-hidden py-24 text-center text-white md:py-32"
    >
      <Image
        src="/images/resort/dining/exp-dining-sunset-silhouette.jpg"
        alt="Sunset beachfront dining with string lights at Terraza del Pacífico"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/65" />

      <div className="container relative z-10">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-concept text-display font-medium leading-tight text-shadow-hero ">
            {c.title}
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="mx-auto mt-8 flex max-w-lg flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButtonVariants({ variant: "primary", size: "lg" })}
            onClick={() => posthog.capture("booking_cta_clicked", { location: "final_cta" })}
          >
            {c.primaryCta}
          </a>
          <a
            href={c.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButtonVariants({ variant: "secondary", surface: "dark", size: "lg" })}
            onClick={() => posthog.capture("whatsapp_cta_clicked", { location: "final_cta" })}
          >
            {c.secondaryCta}
          </a>
        </Reveal>

        <Reveal delay={180} className="mt-6 flex justify-center">
          <DirectBookingNote locale={locale} className="justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
