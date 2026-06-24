import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/home/reveal";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export function Restaurant({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const r = dict.restaurant;

  return (
    <section className="flex flex-col bg-concept-ocean md:flex-row">
      <Reveal className="relative min-h-[220px] w-full md:min-h-[520px] md:w-1/2">
        <Image
          src="/images/restaurant-sunset-T7wmiQ85.jpg"
          alt={
            locale === "en"
              ? "Vivace beachfront restaurant at sunset, tables facing the Pacific"
              : "Restaurante Vivace frente al mar al atardecer, mesas de cara al Pacífico"
          }
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </Reveal>

      <Reveal
        delay={100}
        className="flex w-full flex-col justify-center px-8 py-12 md:w-1/2 md:px-16 md:py-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
          {r.eyebrow}
        </p>
        <h2 className="mt-4 font-concept text-3xl font-medium leading-[1.12] text-white md:text-[46px]">
          {r.title}
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#bcd0d8]">
          {r.body}
        </p>
        <Link
          href={`/${locale}/restaurante`}
          className="mt-8 inline-flex w-fit rounded-sm border border-white/45 px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-concept-ocean"
        >
          {r.cta}
        </Link>
      </Reveal>
    </section>
  );
}