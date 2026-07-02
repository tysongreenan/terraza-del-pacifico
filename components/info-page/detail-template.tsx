import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { LuxurySplitBand } from "@/components/luxury/primitives";
import { InquiryForm } from "@/components/info-page/inquiry-form";
import { actionButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappHref, eventsEmail } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { InfoPage as InfoPageData } from "@/content/info-pages";
import { pageHref } from "@/content/info-pages";

const COPY = {
  es: {
    event: {
      introEyebrow: "El evento",
      introCta: "Todos los eventos",
      railEyebrow: "Los detalles",
      railTitle: "Qué esperar",
      formEyebrow: "Regístrate / Consulta",
      formTitle: "Reserva tu lugar",
      formBody:
        "Comparte tus datos y el equipo de eventos te contactará con fechas, mesas y próximos pasos.",
    },
    experience: {
      introEyebrow: "La experiencia",
      introCta: "Más experiencias",
      railEyebrow: "Para tener en cuenta",
      railTitle: "Planifica tu visita",
      railNote:
        "Las condiciones cambian con la temporada; nuestro equipo te ayuda a coordinar el mejor momento y operadores de confianza.",
      formEyebrow: "Consulta disponibilidad",
      formTitle: "Planifica tu experiencia",
      formBody:
        "Cuéntanos tus fechas y tu grupo, y confirmamos las condiciones de temporada y opciones disponibles.",
    },
    galleryEyebrow: "Galería",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Preguntas frecuentes",
    relatedEyebrow: "También te puede interesar",
    relatedTitleEvent: "Más eventos en el resort",
    relatedTitleExperience: "Más experiencias frente al mar",
    explore: "Explorar",
  },
  en: {
    event: {
      introEyebrow: "The event",
      introCta: "All events",
      railEyebrow: "The details",
      railTitle: "What to expect",
      formEyebrow: "Register / Inquire",
      formTitle: "Save your spot",
      formBody:
        "Send your details and the events team will follow up with dates, tables and next steps.",
    },
    experience: {
      introEyebrow: "The experience",
      introCta: "More experiences",
      railEyebrow: "Good to know",
      railTitle: "Planning your visit",
      railNote:
        "Conditions shift with the season. Our team helps you time it and arranges trusted local operators.",
      formEyebrow: "Ask about availability",
      formTitle: "Plan your experience",
      formBody:
        "Tell us your travel dates and group, and we'll confirm seasonal conditions and available options.",
    },
    galleryEyebrow: "Gallery",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Frequently asked questions",
    relatedEyebrow: "You may also like",
    relatedTitleEvent: "More events at the resort",
    relatedTitleExperience: "More beachfront experiences",
    explore: "Explore",
  },
} as const;

function joinBody(section: InfoPageData["sections"][number], locale: Locale) {
  return section.body[locale].join(" ");
}

export function InfoDetailTemplate({
  page,
  related,
  locale,
}: {
  page: InfoPageData;
  related: InfoPageData[];
  locale: Locale;
}) {
  const isEvent = page.type === "event";
  const t = COPY[locale];
  const k = isEvent ? t.event : t.experience;
  const hubHref = `/${locale}/${isEvent ? "events" : "experiences"}`;

  const facts = page.facts.map((f) => ({
    label: f.label[locale],
    value: f.value[locale],
  }));

  const overview = page.sections[0];
  const restSections = page.sections.slice(1);
  const railSections = restSections.slice(0, 3);
  const overflowSections = restSections.slice(3);

  const gallery = page.gallery.length >= 4 ? page.gallery.slice(0, 4) : page.gallery;
  const introImage = page.gallery[0] ?? page.heroImage;

  // Event hero leans warm/dark; experience hero leans ocean.
  const heroGradient = isEvent
    ? "linear-gradient(180deg,rgba(10,24,37,.42) 0%,rgba(10,24,37,.08) 40%,rgba(8,20,30,.82) 100%)"
    : "linear-gradient(180deg,rgba(16,58,77,.4) 0%,rgba(16,58,77,.06) 42%,rgba(12,44,58,.82) 100%)";

  return (
    <article className="home-concept">
      {/* HERO + overlaid facts meta-bar */}
      <section className="relative min-h-[86svh] overflow-hidden bg-concept-ocean text-white">
        <Image
          src={page.heroImage.src}
          alt={page.heroImage.alt[locale]}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: heroGradient }} />
        <div
          className={cn(
            "container relative flex min-h-[86svh] flex-col justify-end pt-28 md:pt-48",
            facts.length > 0 ? "pb-24 md:pb-20" : "pb-10"
          )}
        >
          <Reveal className="max-w-3xl">
            <p className="text-eyebrow uppercase text-concept-cream text-shadow-hero">
              {page.eyebrow[locale]}
            </p>
            <h1 className="mt-5 font-concept text-display font-medium leading-[1.0] text-shadow-hero">
              {page.title[locale]}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 text-shadow-hero md:text-lg">
              {page.description[locale]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={page.cta.href}
                target={page.cta.href.startsWith("http") ? "_blank" : undefined}
                rel={page.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={actionButtonVariants({ variant: "primary" })}
              >
                {page.cta.label[locale]}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                href={hubHref}
                className={actionButtonVariants({ variant: "secondary", surface: "dark" })}
              >
                {k.introCta}
              </Link>
            </div>
          </Reveal>
        </div>
        {facts.length > 0 && (
          <div className="absolute inset-x-0 bottom-0">
            <div className="container flex flex-wrap gap-x-10 gap-y-3 pb-8">
              {facts.map((fact) => (
                <span
                  key={fact.label}
                  className="text-micro font-medium uppercase tracking-[0.1em] text-[#e7eef0]"
                >
                  <span className="text-concept-gold">◆</span> {fact.value}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* INTRO SPLIT — image flips by type */}
      {overview && (
        <section
          className={cn(
            "flex flex-col bg-concept-sand-muted md:min-h-[520px] md:flex-row",
            isEvent ? "md:flex-row" : "md:flex-row-reverse"
          )}
        >
          <Reveal className="group relative min-h-[280px] w-full overflow-hidden md:min-h-0 md:w-1/2">
            <Image
              src={introImage.src}
              alt={introImage.alt[locale]}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </Reveal>
          <Reveal
            delay={100}
            className="flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:px-16 md:py-20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold-muted">
              {k.introEyebrow}
            </p>
            <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.1] text-concept-ocean">
              {overview.title[locale]}
            </h2>
            <div className="mt-6 max-w-md space-y-4 text-body-sm leading-relaxed text-concept-ink/80">
              {overview.body[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={hubHref}
              className={cn(actionButtonVariants({ variant: "tertiary" }), "mt-8 w-fit")}
            >
              {k.introCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </section>
      )}

      {/* DETAIL RAIL — 3-up; light for events, ocean for experiences */}
      {railSections.length > 0 && (
        <section
          className={cn(
            "py-16 md:py-section",
            isEvent ? "bg-concept-sand" : "bg-concept-ocean"
          )}
        >
          <div className="container">
            {isEvent ? (
              <Reveal className="mb-10 text-center md:mb-12">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold-muted">
                  {k.railEyebrow}
                </p>
                <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.04] text-concept-ocean">
                  {k.railTitle}
                </h2>
              </Reveal>
            ) : (
              <Reveal className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold">
                    {k.railEyebrow}
                  </p>
                  <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.04] text-white">
                    {k.railTitle}
                  </h2>
                </div>
                <p className="max-w-sm text-body-sm leading-relaxed text-on-dark-muted">
                  {t.experience.railNote}
                </p>
              </Reveal>
            )}

            <div
              className={cn(
                "grid border-t md:grid-cols-3",
                isEvent ? "border-concept-border-soft" : "border-white/20"
              )}
            >
              {railSections.map((section, index) => (
                <Reveal
                  key={section.title[locale]}
                  delay={index * 80}
                  className={cn(
                    "px-2 py-8 md:px-8",
                    isEvent
                      ? index < railSections.length - 1 && "md:border-r md:border-concept-border-soft"
                      : index < railSections.length - 1 && "md:border-r md:border-white/15"
                  )}
                >
                  <h3
                    className={cn(
                      "font-concept text-2xl italic md:text-[1.6rem]",
                      isEvent ? "text-concept-ocean" : "text-white"
                    )}
                  >
                    {section.title[locale]}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-body-sm leading-relaxed",
                      isEvent ? "text-concept-ink/72" : "text-concept-mist"
                    )}
                  >
                    {joinBody(section, locale)}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OVERFLOW SECTIONS — preserved as alternating split bands */}
      {overflowSections.map((section, index) => {
        const image = page.gallery[(index + 1) % page.gallery.length] ?? page.heroImage;
        return (
          <LuxurySplitBand
            key={section.title[locale]}
            image={image.src}
            imageAlt={image.alt[locale]}
            eyebrow={page.eyebrow[locale]}
            title={section.title[locale]}
            body={joinBody(section, locale)}
            reverse={index % 2 === 0}
          />
        );
      })}

      {/* GALLERY STRIP */}
      {gallery.length > 0 && (
        <section className="grid grid-cols-2 gap-px bg-concept-border-soft md:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={`${image.src}-${index}`} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt[locale]}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.05]"
              />
            </div>
          ))}
        </section>
      )}

      {/* FAQ */}
      {page.faq?.length ? (
        <section className="bg-concept-sand py-14 md:py-section-sm">
          <div className="container max-w-3xl">
            <Reveal className="mb-8 md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold-muted">
                {t.faqEyebrow}
              </p>
              <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.05] text-concept-ocean">
                {t.faqTitle}
              </h2>
            </Reveal>
            <dl className="divide-y divide-concept-border-soft border-t border-concept-border-soft">
              {page.faq.map((item) => (
                <div key={item.q[locale]} className="py-6">
                  <dt className="font-concept text-h3 leading-snug text-concept-ocean">
                    {item.q[locale]}
                  </dt>
                  <dd className="mt-3 text-body-sm leading-relaxed text-concept-ink/80">
                    {item.a[locale]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-concept-sand-muted py-14 md:py-section-sm">
          <div className="container">
            <Reveal className="mb-8 md:mb-10">
              <p className="eyebrow">{t.relatedEyebrow}</p>
              <h2 className="mt-3 font-concept text-h1 font-medium leading-[1.05] text-concept-ocean">
                {isEvent ? t.relatedTitleEvent : t.relatedTitleExperience}
              </h2>
            </Reveal>
            <div className="grid gap-3 md:grid-cols-3 md:gap-4">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={pageHref(item, locale)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2"
                >
                  <Image
                    src={item.heroImage.src}
                    alt={item.heroImage.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,32,42,0.9)] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-micro font-semibold uppercase tracking-[0.14em] text-white">
                      {item.eyebrow[locale]}
                    </p>
                    <h3 className="mt-2 font-concept text-h3 leading-tight">
                      {(item.cardTitle ?? item.title)[locale]}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-micro font-semibold uppercase tracking-[0.1em]">
                      {t.explore}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FORM BAND */}
      {isEvent ? (
        <section id="inquire" className="relative scroll-mt-20 overflow-hidden py-20 md:py-section">
          <Image
            src={page.heroImage.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,20,30,.85)] to-[rgba(8,20,30,.93)]" />
          <div className="container relative grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">
                {k.formEyebrow}
              </p>
              <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.06] text-white">
                {k.formTitle}
              </h2>
              <p className="mt-5 max-w-md text-body-sm leading-relaxed text-on-dark-muted">
                {k.formBody}
              </p>
            </Reveal>
            <Reveal delay={120} className="rounded-sm border border-white/12 bg-white/[0.04] p-8 md:p-10">
              <InquiryForm
                locale={locale}
                kind="event"
                tone="dark"
                pageTitle={page.title[locale]}
                whatsappHref={whatsappHref}
                emailHref={`mailto:${eventsEmail}`}
              />
            </Reveal>
          </div>
        </section>
      ) : (
        <section id="inquire" className="scroll-mt-20 bg-concept-sand py-20 md:py-section">
          <div className="container grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-concept-gold-muted">
                {k.formEyebrow}
              </p>
              <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.06] text-concept-ocean">
                {k.formTitle}
              </h2>
              <p className="mt-5 max-w-md text-body-sm leading-relaxed text-concept-ink/80">
                {k.formBody}
              </p>
            </Reveal>
            <Reveal
              delay={120}
              className="rounded-sm border border-[#ece4d4] bg-white p-8 shadow-[0_16px_40px_rgba(16,58,77,0.08)] md:p-10"
            >
              <InquiryForm
                locale={locale}
                kind="experience"
                tone="light"
                pageTitle={page.title[locale]}
                whatsappHref={whatsappHref}
                emailHref={`mailto:${eventsEmail}`}
              />
            </Reveal>
          </div>
        </section>
      )}
    </article>
  );
}
