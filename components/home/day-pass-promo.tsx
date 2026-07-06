import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { actionButtonVariants } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Visiting for the day",
    title: "Spend the day by the pool and the Pacific",
    body: "Day passes are available for guests who want resort access, lunch options, and an easy beachfront day at Terraza del Pacifico.",
    cta: "View Day Passes",
  },
  es: {
    eyebrow: "Visita por el dia",
    title: "Pasa el dia entre la piscina y el Pacifico",
    body: "Los pases de dia ofrecen acceso al resort, opciones con almuerzo y una forma sencilla de disfrutar Terraza del Pacifico frente al mar.",
    cta: "Ver pases de dia",
  },
} as const;

export function DayPassPromo({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="bg-concept-sand py-section-sm">
      <div className="container">
        <Reveal className="grid overflow-hidden rounded-sm bg-concept-ocean text-white md:grid-cols-[0.95fr_1.35fr]">
          <div className="relative min-h-[240px] md:min-h-[320px]">
            <Image
              src="/images/resort/pool/exp-pool-day-loungers.avif"
              alt={
                locale === "en"
                  ? "Pool loungers at Terraza del Pacifico"
                  : "Sillas junto a la piscina en Terraza del Pacifico"
              }
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-concept-ocean/55 to-transparent md:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center px-7 py-9 md:px-12 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl font-concept text-h1 font-medium leading-[1.05] text-white">
              {t.title}
            </h2>
            <p className="mt-4 max-w-xl text-body-sm leading-relaxed text-on-dark-muted">
              {t.body}
            </p>
            <Link
              href={`/${locale}/experiences/${locale === "en" ? "day-passes" : "pases-de-dia"}`}
              className={actionButtonVariants({
                variant: "primary",
                className: "mt-7 w-fit",
              })}
            >
              {t.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
