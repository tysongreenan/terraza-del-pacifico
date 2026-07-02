import Image from "next/image";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { whatsappHref } from "@/lib/site";

const path = "contact";

const seoCopy: Record<Locale, { title: string; desc: string }> = {
  en: {
    title: "Contact Us | Hotel Terraza del Pacífico",
    desc: "Questions about your stay, reservations, or events? Get in touch with the team at Hotel Terraza del Pacífico on Playa Hermosa, Costa Rica.",
  },
  es: {
    title: "Contáctanos | Hotel Terraza del Pacífico",
    desc: "¿Preguntas sobre tu estadía, reservas o eventos? Escríbenos al equipo del Hotel Terraza del Pacífico en Playa Hermosa, Costa Rica.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (locale === "en" ? "en" : "es") as Locale;
  return pageMetadata({
    params: Promise.resolve({ locale }),
    path,
    content: seoCopy[l],
    image: "/images/resort/beach-aerial/beach-lounge-sunset.JPG",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = getDictionary(l);
  const t = dict.contactPage;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: l === "en" ? "Contact Us" : "Contáctanos",
        })}
      />

      <main className="min-h-screen">
        <div className="grid min-h-screen lg:grid-cols-2">
          {/* Left — full-height photo */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/resort/beach-aerial/beach-lounge-sunset.JPG"
              alt="Terraza del Pacífico beachfront at sunset"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-concept-ocean/60 via-concept-ocean/10 to-transparent" />
            <div className="absolute bottom-12 left-10 right-10">
              <p className="font-concept text-3xl leading-snug text-white drop-shadow-md">
                Playa Hermosa · Costa Rica
              </p>
              <p className="mt-2 text-sm text-white/80 drop-shadow">
                Beachfront resort just south of Jacó
              </p>
            </div>
          </div>

          {/* Mobile hero — short banner */}
          <div className="relative h-56 lg:hidden">
            <Image
              src="/images/resort/beach-aerial/beach-lounge-sunset.JPG"
              alt="Terraza del Pacífico beachfront at sunset"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-concept-ocean/40" />
          </div>

          {/* Right — contact info + form */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 xl:px-20">
            <div className="mx-auto w-full max-w-lg">
              {/* Header */}
              <p className="mb-3 text-micro font-semibold uppercase tracking-[0.16em] text-concept-gold">
                {t.eyebrow}
              </p>
              <h1 className="font-concept text-h2 leading-tight text-concept-ocean">
                {t.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-concept-ink/70">
                {t.subtitle}
              </p>

              {/* Contact info */}
              <div className="mt-8 mb-10 grid gap-4 border-t border-[#d3cab6] pt-8 sm:grid-cols-2">
                <a
                  href={t.phoneHref}
                  className="flex items-start gap-3 text-sm text-concept-ink/80 transition-colors hover:text-concept-ocean"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-concept-gold" aria-hidden />
                  <span>{t.phone}</span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-concept-ink/80 transition-colors hover:text-concept-ocean"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-concept-gold" aria-hidden />
                  <span>{t.whatsappNum}</span>
                </a>
                <a
                  href={`mailto:${t.emailAddress}`}
                  className="flex items-start gap-3 text-sm text-concept-ink/80 transition-colors hover:text-concept-ocean"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-concept-gold" aria-hidden />
                  <span>{t.emailAddress}</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-concept-ink/80">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-concept-gold" aria-hidden />
                  <span>{t.hours}</span>
                </div>
              </div>

              {/* Form */}
              <ContactForm locale={l} t={t} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
