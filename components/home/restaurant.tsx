import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { actionButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
          src="/images/resort/dining/1L6A2547.jpg"
          alt={
            locale === "en"
              ? "Vivace beachfront restaurant, open-air tables facing the Pacific"
              : "Restaurante Vivace frente al mar, mesas al aire libre de cara al Pacífico"
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
        <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.12] text-white ">
          {r.title}
        </h2>
        <p className="mt-5 max-w-md text-body-sm leading-relaxed text-on-dark-muted">
          {r.body}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={`/${locale}/restaurant`}
            className={cn(
              actionButtonVariants({ variant: "secondary", surface: "dark" }),
              "w-fit"
            )}
          >
            {r.ctaResort}
          </Link>
          <Link
            href="https://www.ristorantevivace.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              actionButtonVariants({ variant: "secondary", surface: "dark" }),
              "inline-flex w-fit items-center gap-1.5"
            )}
          >
            {r.ctaJaco}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}