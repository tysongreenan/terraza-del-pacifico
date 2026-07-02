import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { actionButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { restaurantAboutContent } from "@/content/restaurant-about";

export function RestaurantAboutPage({ locale }: { locale: Locale }) {
  const copy = restaurantAboutContent[locale];

  return (
    <article className="home-concept bg-concept-sand">
      {/* HERO */}
      <section className="relative overflow-hidden bg-concept-ocean text-white">
        <div className="relative min-h-[68svh] md:min-h-[74svh]">
          <Image
            src={copy.hero.image}
            alt={copy.hero.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.72)_100%)]" />
          <div className="container relative flex min-h-[68svh] flex-col justify-end pb-16 pt-28 md:min-h-[74svh] md:pb-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
                {copy.hero.eyebrow}
              </p>
              <h1 className="mt-5 max-w-3xl font-concept text-display font-medium leading-[1.02] text-shadow-hero">
                {copy.hero.title}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/90 text-shadow-hero md:text-lg">
                {copy.hero.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — centered statement */}
      <section className="py-section md:py-section">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">{copy.philosophy.eyebrow}</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-concept text-h1 font-medium leading-[1.08] text-concept-ocean">
                {copy.philosophy.headline}
              </h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-3">
              {copy.philosophy.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-body-sm leading-[1.8] text-concept-ink-muted"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHEFS — header + two portrait cards */}
      <section className="bg-concept-ocean py-section md:py-section">
        <div className="container">
          <Reveal>
            <div className="mb-12 text-center md:mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
                {copy.chefs.eyebrow}
              </p>
              <h2 className="mt-3 font-concept text-h1 font-medium text-white">
                {copy.chefs.title}
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {copy.chefs.items.map((chef, i) => (
              <Reveal key={chef.name} delay={i * 100}>
                <div className="overflow-hidden rounded-sm border border-white/10">
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={chef.image}
                      alt={chef.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-8 py-8">
                    <p className="font-concept text-h3 text-white">{chef.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-concept-gold">
                      {chef.role}
                    </p>
                    <p className="mt-4 text-body-sm leading-[1.8] text-on-dark-muted">
                      {chef.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PHOTO — full-width banner */}
      <div className="relative h-[420px] w-full overflow-hidden md:h-[520px]">
        <Image
          src="/images/resort/dining/RLR_3947.JPG"
          alt={locale === "en" ? "The Vivace Beachfront kitchen team" : "El equipo de cocina de Vivace Beachfront"}
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      {/* GALLERY — 4-column photo grid */}
      <section className="py-section md:py-section">
        <div className="container">
          <Reveal>
            <div className="mb-10 text-center md:mb-12">
              <p className="eyebrow">{copy.gallery.eyebrow}</p>
              <h2 className="mt-3 font-concept text-h1 font-medium text-concept-ocean">
                {copy.gallery.title}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {copy.gallery.slides.map((slide, i) => (
              <Reveal
                key={slide.src}
                delay={i * 60}
                className={cn(
                  "relative overflow-hidden rounded-sm",
                  i === 0 || i === 6 ? "col-span-2 row-span-2 min-h-[320px] md:min-h-[400px]" : "min-h-[160px] md:min-h-[196px]"
                )}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE CTA */}
      <section className="flex flex-col bg-[#0c2c3a] md:flex-row md:items-stretch">
        <Reveal className="flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:px-[72px] md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
            {copy.reserve.eyebrow}
          </p>
          <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.08] text-white">
            {copy.reserve.title}
          </h2>
          <p className="mt-5 max-w-md text-body-sm leading-[1.7] text-on-dark-muted">
            {copy.reserve.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(actionButtonVariants({ variant: "primary", size: "lg" }), "gap-2.5")}
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {copy.reserve.cta}
            </a>
            <Link
              href={`/${locale}/restaurant/menu`}
              className={actionButtonVariants({ variant: "secondary", surface: "dark", size: "lg" })}
            >
              {locale === "en" ? "See Menu" : "Ver menú"}
            </Link>
          </div>
        </Reveal>
        <div className="relative min-h-[300px] w-full md:min-h-[440px] md:w-1/2">
          <Image
            src={copy.reserve.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>
    </article>
  );
}
