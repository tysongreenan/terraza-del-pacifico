import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { actionButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { bookingHref } from "@/lib/site";

const strip = [
  {
    src: "/images/exp-pool-day-loungers.avif",
    alt: "Daytime view of the outdoor pool with sun loungers and tropical foliage",
  },
  {
    src: "/images/New Pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG",
    alt: "Overhead view of the pool washed in vivid purple light",
  },
  {
    src: "/images/New Pool/dji_fly_20241111_035710_0766_1754911281185_photo.JPG",
    alt: "Top-down view of the LED pool glowing emerald-teal at night",
  },
];

export function Pool({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pool = dict.pool;

  return (
    <section
      id="pool"
      className="relative overflow-hidden bg-[#06141a] py-24 text-white md:py-32"
    >
      {/* Full-bleed night-pool backdrop */}
      <Image
        src="/images/New Pool/dji_fly_20241022_013922_0645_1753125628421_photo4.JPG"
        alt="Aerial view of the signature LED pool lit up at night"
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06141a]/85 via-[#06141a]/55 to-[#06141a]/95" />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              <Sparkles className="h-4 w-4" aria-hidden />
              {pool.eyebrow}
            </p>
            <h2 className="mt-4 text-h1 font-bold leading-tight ">
              {pool.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              {pool.body}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {pool.body2}
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10 flex flex-wrap gap-10">
            {[pool.stat1, pool.stat2].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-h1 font-bold text-accent ">
                  {stat.value}
                </p>
                <p className="mt-1 max-w-[12rem] text-sm text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={200} className="mt-10">
            <Link
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(actionButtonVariants({ variant: "primary", size: "lg" }), "shadow-xl shadow-black/30")}
            >
              {pool.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        {/* Supporting gallery strip */}
        <Reveal delay={120} className="mt-14 grid grid-cols-3 gap-3 sm:gap-5">
          {strip.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 33vw, 30vw"
                className="object-cover"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
