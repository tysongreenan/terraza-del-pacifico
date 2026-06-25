import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { PanelCarousel } from "@/components/luxury/panel-carousel";
import { actionButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { restaurantPageContent } from "@/content/restaurant-page";

export function RestaurantPage({ locale }: { locale: Locale }) {
  const copy = restaurantPageContent[locale];
  const menuHref = (cat?: string) =>
    `/${locale}/restaurant/menu${cat ? `?cat=${cat}` : ""}`;

  return (
    <article className="home-concept bg-concept-sand">
      {/* HERO — night palette */}
      <section className="relative overflow-hidden text-white">
        <div className="relative min-h-[72svh] md:min-h-[80svh]">
          <Image
            src={copy.hero.image}
            alt={copy.hero.titleLines.join(" ")}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.2)_38%,rgba(0,0,0,0.74)_100%)]" />
          <div className="container relative flex min-h-[72svh] flex-col justify-end pb-8 pt-28 md:min-h-[80svh]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
                {copy.hero.eyebrow}
              </p>
              <h1 className="mt-5 max-w-3xl font-concept text-display font-medium leading-[1.02] text-shadow-hero ">
                {copy.hero.titleLines[0]}
                <br />
                {copy.hero.titleLines[1]}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/88 md:text-lg">
                {copy.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonVariants({ variant: "primary", size: "lg" })}
                >
                  {copy.hero.reserveCta}
                </a>
                <Link
                  href={menuHref()}
                  className={actionButtonVariants({ variant: "secondary", surface: "dark", size: "lg" })}
                >
                  {copy.hero.whatsappCta}
                </Link>
              </div>
            </Reveal>

            {/* hours meta bar */}
            <div className="mt-9 flex flex-col gap-3 border-t border-white/15 pt-6 md:flex-row md:gap-9">
              {copy.hero.meta.map((item) => (
                <p
                  key={item}
                  className="text-xs uppercase tracking-[0.12em] text-concept-cream"
                >
                  <span className="mr-1.5 text-concept-gold">◆</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMBIANCE split — carousel left, ocean text right */}
      <section className="flex flex-col md:flex-row md:items-stretch">
        <PanelCarousel
          slides={copy.ambiance.slides}
          className="min-h-[360px] w-full md:min-h-[540px] md:w-1/2"
        />
        <Reveal className="flex w-full flex-col justify-center bg-concept-ocean px-8 py-16 md:w-1/2 md:px-[72px] md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
            {copy.ambiance.eyebrow}
          </p>
          <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.08] text-white ">
            {copy.ambiance.titleLines[0]}
            <br />
            {copy.ambiance.titleLines[1]}
          </h2>
          <p className="mt-5 max-w-md text-body-sm leading-[1.8] text-on-dark-muted">
            {copy.ambiance.body}
          </p>
        </Reveal>
      </section>

      {/* MENU ENTRY CARDS */}
      <section className="py-section md:py-section">
        <div className="container max-w-5xl">
          <Reveal>
            <div className="mb-10 md:mb-12">
              <p className="eyebrow">{copy.menus.eyebrow}</p>
              <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.04] text-concept-ocean ">
                {copy.menus.title}
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {copy.menus.cards.map((card, i) => (
              <Reveal key={card.key} delay={i * 90}>
                <Link
                  href={menuHref(card.key === "drinks" ? "drinks" : undefined)}
                  className="group flex h-full flex-col overflow-hidden rounded-sm border border-concept-border bg-white transition-shadow hover:shadow-[0_18px_44px_rgba(16,58,77,0.14)]"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-concept text-h3 font-medium leading-none text-concept-ocean">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-concept-ink-muted">
                      {card.body}
                    </p>
                    <span className="mt-6 inline-flex w-fit items-center gap-1 border-b border-[#d8c79c] pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-concept-ocean">
                      {card.cta}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHEF split — image left, ocean panel right */}
      <section className="flex flex-col bg-concept-ocean md:flex-row md:items-stretch">
        <div className="relative min-h-[360px] w-full md:min-h-[560px] md:w-1/2">
          <Image
            src={copy.chef.image}
            alt={copy.chef.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-[center_top]"
          />
        </div>
        <Reveal className="flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:px-[72px] md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
            {copy.chef.eyebrow}
          </p>
          <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.1] text-white ">
            {copy.chef.titleLines[0]}
            <br />
            {copy.chef.titleLines[1]}
          </h2>
          <p className="mt-5 max-w-md text-body-sm leading-[1.8] text-on-dark-muted">
            {copy.chef.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={menuHref()}
              className={actionButtonVariants({ variant: "primary", size: "lg" })}
            >
              {copy.chef.menuCta}
            </Link>
            <Link
              href={menuHref()}
              className={actionButtonVariants({ variant: "secondary", surface: "dark", size: "lg" })}
            >
              {copy.chef.bioCta}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* RESERVE CTA split */}
      <section className="flex flex-col bg-[#0c2c3a] md:flex-row md:items-stretch">
        <Reveal className="flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:px-[72px] md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
            {copy.reserve.eyebrow}
          </p>
          <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.08] text-white ">
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
              {copy.reserve.primary}
            </a>
          </div>
        </Reveal>
        <div className="relative min-h-[320px] w-full md:min-h-[440px] md:w-1/2">
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
