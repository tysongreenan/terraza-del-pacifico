import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import type { Dictionary } from "@/lib/dictionaries";
import { bookingHref } from "@/lib/site";

export function FinalCta({ dict }: { dict: Dictionary }) {
  const c = dict.finalCta;

  return (
    <section
      id="booking"
      className="relative scroll-mt-20 overflow-hidden py-24 text-center text-white md:py-32"
    >
      <Image
        src="/images/exp-dining-sunset-silhouette.jpg"
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
            className="inline-flex items-center justify-center rounded-sm bg-concept-gold px-8 py-4 text-caption font-semibold uppercase tracking-[0.1em] text-[#1a1611]"
          >
            {c.primaryCta}
          </a>
          <a
            href={c.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-white/60 px-8 py-4 text-caption font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
          >
            {c.secondaryCta}
          </a>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-[#f3ead6]">
            <span className="text-concept-gold">◆</span> {dict.hero.trust}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
