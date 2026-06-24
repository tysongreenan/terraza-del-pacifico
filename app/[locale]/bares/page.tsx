import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/home/reveal";
import { JsonLd } from "@/components/json-ld";
import { bars, barsIndexCopy } from "@/content/bars";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "bares";

const seo = {
  es: {
    title: "Bares · Golden Beach Bar e Iguana Bar | Hotel Terraza del Pacífico",
    desc: "Dos bares frente al agua en Terraza del Pacífico: Golden Beach Bar sobre la arena e Iguana Bar junto a la piscina. Cócteles, cerveza fría y más.",
  },
  en: {
    title: "Bars · Golden Beach Bar & Iguana Bar | Hotel Terraza del Pacífico",
    desc: "Two waterfront bars at Terraza del Pacífico: Golden Beach Bar on the sand and Iguana Bar by the pool. Cocktails, cold beer and more.",
  },
};

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return params.then(({ locale }) =>
    pageMetadata({
      params: Promise.resolve({ locale }),
      path,
      content: seo[locale === "en" ? "en" : "es"],
    })
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const copy = barsIndexCopy[l];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd({
          locale: l,
          path,
          title: l === "en" ? "Bars" : "Bares",
        })}
      />
      <article className="home-concept bg-concept-sand py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">{copy.eyebrow}</p>
              <h1 className="mt-4 font-concept text-4xl font-medium leading-[1.06] text-concept-ocean md:text-5xl">
                {copy.title}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-concept-ink/80">
                {copy.description}
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
            {bars.map((venue, i) => {
              const t = venue.text[l];
              return (
                <Reveal key={venue.slug} delay={i * 90}>
                  <Link
                    href={`/${l}/bares/${venue.slug}`}
                    aria-label={`${t.hero.title} — ${copy.viewCta}`}
                    className="group block overflow-hidden rounded-sm border border-[#ece5d8] bg-white transition-shadow hover:shadow-[0_18px_44px_rgba(16,58,77,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-concept-gold focus-visible:ring-offset-2 focus-visible:ring-offset-concept-sand"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={venue.cardImage}
                        alt={`${t.hero.title}, ${t.card.tagline}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-[rgba(11,32,42,0.45)] to-transparent"
                      />
                    </div>
                    <div className="p-8">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-concept-gold-muted">
                        {t.card.tagline}
                      </p>
                      <h2 className="mt-2 font-concept text-3xl font-medium leading-none text-concept-ocean">
                        {t.hero.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-[#6f6a62]">
                        {t.hero.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 border-b border-[#d8c79c] pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-concept-ocean transition-colors group-hover:border-concept-gold group-focus-visible:border-concept-gold">
                        {copy.viewCta}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}
