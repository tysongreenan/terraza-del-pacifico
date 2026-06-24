import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Mail, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  LuxuryCtaBand,
  LuxuryHero,
  LuxuryIntro,
  LuxuryMosaic,
  LuxurySplitBand,
  luxuryButtonPrimary,
  type MosaicImage,
} from "@/components/luxury/primitives";
import { GallerySections } from "@/components/luxury/gallery-sections";
import { cn } from "@/lib/utils";
import { bookingHref, whatsappHref } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import type { Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, restaurantJsonLd } from "@/lib/seo";

type Captured = {
  url: string;
  title: string;
  desc: string;
  h1: string[];
  outline: string[];
  imgs?: string[];
  text: string;
};

type ContentSection = {
  title: string;
  body: string[];
};

const footerStarts = new Set(["Contact", "Stay Connected"]);
const navLabels = new Set([
  "Home",
  "Rooms",
  "About Us",
  "Restaurant",
  "Newsletter",
  "Events",
  "🇺🇸",
  "Book Your Escape",
]);

function local(src: string) {
  // Already a local image path (incl. subfolders like "/images/Wedding/x.jpg") — keep as-is.
  if (src.startsWith("/images/")) return src;
  const base = src.split("/").pop()?.split("?")[0] ?? "";
  return `/images/${base}`;
}

function imageList(data: Captured) {
  return (data.imgs ?? [])
    .filter((src) => !/logo/i.test(src))
    .filter((src) => /\.(jpg|jpeg|png|webp)$/i.test(src.split("?")[0]))
    .map(local);
}

// Hand-picked "best of" photos from the real property shoots
// (public/images/{Resort Highlights,New Pool,Resturant,Wedding,Suit photos}).
// These are PREPENDED so they lead the hero + mosaic on each luxury page,
// ahead of the older scraped/stock-named assets in the page JSON.
const FEATURED_IMAGES: Record<string, string[]> = {
  galeria: [
    "/images/New Pool/dji_fly_20241022_013922_0645_1753125628421_photo4.JPG",
    "/images/Resort Highlights/DJI_0361(1)2.JPG",
    "/images/New Pool/dji_fly_20241022_014010_0648_1753125627850_photo2.JPG",
    "/images/New Pool/dji_fly_20241022_013636_0636_1753125648022_photo2.JPG",
    "/images/New Pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG",
    "/images/Resort Highlights/IMG_22232.JPG",
    "/images/Resort Highlights/IMG_3170.JPG",
    "/images/Resturant/DSCF40452.JPG",
    "/images/Resturant/chloemurdochphotography-37.JPG",
    "/images/Resturant/RLR_3857.JPG",
    "/images/Wedding/RLR_86342.JPG",
    "/images/Wedding/AM5_96582.JPG",
    "/images/Wedding/AM5_93622.JPG",
    "/images/Suit photos/DSC03703.jpg",
    "/images/Suit photos/RLR_48512.JPG",
    "/images/Resort Highlights/DSC03775.jpg",
    "/images/Resort Highlights/IMG_2542.JPG",
    "/images/Resort Highlights/perfileimage2.JPG",
    "/images/Resort Highlights/IMG_5978.JPG",
    "/images/New Pool/dji_fly_20241111_035710_0766_1754911281185_photo.JPG",
    "/images/Resturant/chloemurdochphotography-255.JPG",
    "/images/Resort Highlights/IMG_61303.JPG",
  ],
  restaurante: [
    "/images/Resturant/DSCF40452.JPG",
    "/images/Resturant/1L6A2626.jpg",
    "/images/Resturant/chloemurdochphotography-37.JPG",
    "/images/Resturant/1L6A2554.jpg",
    "/images/Resturant/chloemurdochphotography-17.JPG",
    "/images/Resturant/1L6A2572.jpg",
    "/images/Resturant/chloemurdochphotography-255.JPG",
    "/images/Resturant/chloemurdochphotography-267.JPG",
    "/images/Resturant/chloemurdochphotography-293.JPG",
    "/images/Resturant/IMG_0964.JPG",
    "/images/Resturant/RLR_37623.JPG",
    "/images/Resturant/RLR_3857.JPG",
    "/images/Resturant/DSCF4078(1).JPG",
    "/images/Resturant/chloemurdochphotography-342.JPG",
  ],
  "sobre-nosotros": [
    "/images/Resort Highlights/DJI_0361(1)2.JPG",
    "/images/Resort Highlights/RLR_0780(1)3.JPG",
    "/images/New Pool/dji_fly_20241022_013922_0645_1753125628421_photo4.JPG",
    "/images/Resort Highlights/IMG_2542.JPG",
    "/images/Resort Highlights/IMG_2559.JPG",
    "/images/Resort Highlights/DSC03681.jpg",
    "/images/Resort Highlights/IMG_3735.JPG",
    "/images/Resort Highlights/IMG_3748.JPG",
    "/images/Resort Highlights/perfileimage2.JPG",
    "/images/Resort Highlights/IMG_22232.JPG",
    "/images/Resort Highlights/IMG_2458_jpg.JPG",
    "/images/Resort Highlights/IMG_61303.JPG",
  ],
};

const SUPPLEMENT_IMAGES: Record<string, string[]> = {
  "sobre-nosotros": [
    "/images/g-aerial-beach-property-COogc_9W.jpg",
    "/images/pool-aerial-day-BveHvOiS.jpg",
    "/images/wedding-beach-ceremony-NqUR8iSS.jpg",
    "/images/Resort Highlights/DJI_20250526154631_0071_D.JPG",
    "/images/restaurant-sunset-T7wmiQ85.jpg",
    "/images/g-family-beach-DHJPEGnp.jpg",
    "/images/events-pool-aerial-DuNYfspA.jpg",
    "/images/g-aerial-pool-overview-CCOWXk2j.jpg",
  ],
  restaurante: [
    "/images/restaurant-sunset-T7wmiQ85.jpg",
    "/images/restaurant-night-DDkbFUTM.jpg",
    "/images/restaurant-dining-nygPbVtS.jpg",
    "/images/restaurant-cocktails-ITbgxYoM.jpg",
    "/images/golden-beach-bar-qN10cbKY.jpg",
    "/images/iguana-bar-pool-CP3k5v8t.jpg",
    "/images/restaurant-sunset-silhouette-CBBvMTsI.jpg",
  ],
};

function luxuryImages(data: Captured, path: string) {
  const featured = FEATURED_IMAGES[path] ?? [];
  const base = imageList(data);
  const extra = SUPPLEMENT_IMAGES[path] ?? [];
  return [...new Set([...featured, ...base, ...extra])];
}

function sectionSummary(lines: string[]) {
  const body = compactBody(lines);
  return body.find((line) => line.length > 40) ?? body[0] ?? "";
}

const LUXURY_COPY = {
  es: {
    brand: "Hotel Terraza del Pacífico",
    book: "Reservar",
    whatsapp: "WhatsApp",
    galleryEyebrow: "Galería",
    galleryTitle: "La experiencia en imágenes",
    reserveEyebrow: "Reserva directa",
    reserveTitle: "¿Listo para planear tu estancia?",
    reserveBody:
      "Contacta al hotel para disponibilidad, eventos, restaurante o ayuda para elegir la habitación ideal.",
  },
  en: {
    brand: "Hotel Terraza del Pacífico",
    book: "Book Your Escape",
    whatsapp: "WhatsApp",
    galleryEyebrow: "Gallery",
    galleryTitle: "The experience in images",
    reserveEyebrow: "Direct booking",
    reserveTitle: "Ready to plan your stay?",
    reserveBody:
      "Contact the hotel for availability, events, restaurant reservations, or help choosing the right room.",
  },
} as const;

const PAGE_INTRO: Record<
  string,
  Record<Locale, { eyebrow: string; title: string; body?: string }>
> = {
  galeria: {
    es: {
      eyebrow: "Galería visual",
      title: "Playa, piscina, bodas y vida en el resort",
      body: "Desde la primera luz sobre la arena hasta el brillo de la piscina al anochecer: momentos de la vida en Terraza del Pacífico.",
    },
    en: {
      eyebrow: "Visual gallery",
      title: "Beach, pool, weddings and resort life",
      body: "From first light on the sand to the glow of the pool after dark — moments from life at Terraza del Pacífico.",
    },
  },
  restaurante: {
    es: {
      eyebrow: "Vivace Beachfront",
      title: "Mediterráneo frente al Pacífico",
    },
    en: {
      eyebrow: "Vivace Beachfront",
      title: "Mediterranean cuisine on the Pacific",
    },
  },
  "sobre-nosotros": {
    es: {
      eyebrow: "Nuestra historia",
      title: "Más de 20 años frente al mar",
    },
    en: {
      eyebrow: "Our story",
      title: "Over 20 years on the Pacific",
    },
  },
};

function sectionTitles(data: Captured) {
  return data.outline
    .map((line) => line.match(/^H2:\s(.+)$/)?.[1])
    .filter((title): title is string => Boolean(title));
}

function contentLines(data: Captured) {
  const h1 = data.h1[0] ?? data.title;
  const raw = data.text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const start = raw.findIndex((line) => line === h1);
  const sliced = start >= 0 ? raw.slice(start + 1) : raw;
  const end = sliced.findIndex((line, index) => index > 8 && footerStarts.has(line));
  return (end >= 0 ? sliced.slice(0, end) : sliced).filter(
    (line) => !navLabels.has(line)
  );
}

function buildSections(data: Captured) {
  const lines = contentLines(data);
  const titles = new Set(sectionTitles(data));
  const intro: string[] = [];
  const sections: ContentSection[] = [];
  let current: ContentSection | null = null;

  for (const line of lines) {
    if (titles.has(line)) {
      current = { title: line, body: [] };
      sections.push(current);
      continue;
    }

    if (current) {
      current.body.push(line);
    } else {
      intro.push(line);
    }
  }

  return {
    intro: intro.filter((line) => !titles.has(line)).slice(0, 4),
    sections: sections.filter((section) => section.body.length > 0),
  };
}

function compactBody(lines: string[]) {
  return lines
    .filter((line) => !["Previous slide", "Next slide"].includes(line))
    .filter((line) => !/^© /.test(line));
}

function LeadStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-accent/70 pl-4">
      <div className="text-lg font-semibold text-primary">{value}</div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function SectionBody({ lines }: { lines: string[] }) {
  const body = compactBody(lines).slice(0, 14);

  return (
    <div className="mt-5 grid gap-3 text-sm leading-7 text-foreground/78 md:text-base">
      {body.map((line, index) => {
        const isShort = line.length < 34 && index > 0;
        return (
          <p
            key={`${line}-${index}`}
            className={cn(
              isShort && "font-semibold text-primary",
              /^\+?\d|^\d/.test(line) && "text-foreground/70"
            )}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  if (images.length === 0) return null;

  return (
    <section className="bg-muted/45 py-16">
      <div className="container">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Gallery
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
              A closer look
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {images.slice(1, 7).map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`${title} photo from Hotel Terraza del Pacifico ${index + 1}`}
              width={900}
              height={675}
              sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
              className={cn(
                "aspect-[4/3] w-full rounded-md object-cover",
                index === 0 && "md:col-span-2 md:row-span-2 md:aspect-auto"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LuxuryPageScaffold({
  data,
  locale,
  path,
  includeRestaurantSchema,
  afterContent,
}: {
  data: Captured;
  locale: Locale;
  path: string;
  includeRestaurantSchema: boolean;
  afterContent?: ReactNode;
}) {
  const copy = LUXURY_COPY[locale];
  const title = data.h1[0] ?? data.title;
  const images = luxuryImages(data, path);
  const hero = images[0] ?? "/images/hero-aerial-beach-QbQLfxOv.jpg";
  const { intro, sections } = buildSections(data);
  const storySections = sections
    .filter((section) => section.body.length > 0)
    .slice(0, path === "galeria" ? 0 : 4);
  const pageIntro = PAGE_INTRO[path]?.[locale];
  const introLine = data.desc;

  const mosaicItems: MosaicImage[] = images
    .slice(0, path === "galeria" ? 20 : 14)
    .map((src, index) => ({
      src,
      alt: `${title} — ${locale === "en" ? "photo" : "foto"} ${index + 1}`,
    }));

  const ctaImage =
    path === "restaurante"
      ? "/images/restaurant-sunset-T7wmiQ85.jpg"
      : path === "sobre-nosotros"
        ? "/images/g-aerial-beach-property-COogc_9W.jpg"
        : "/images/pool-aerial-day-BveHvOiS.jpg";

  return (
    <article className="home-concept">
      <JsonLd data={breadcrumbJsonLd({ locale, path, title })} />
      {includeRestaurantSchema && <JsonLd data={restaurantJsonLd()} />}

      <LuxuryHero
        eyebrow={copy.brand}
        title={title}
        description={data.desc}
        image={hero}
        imageAlt={title}
      >
        {luxuryButtonPrimary(copy.book, bookingHref)}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/55 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          {copy.whatsapp}
        </a>
      </LuxuryHero>

      <LuxuryIntro
        eyebrow={pageIntro?.eyebrow ?? copy.brand}
        title={pageIntro?.title ?? title}
        body={pageIntro?.body ?? introLine}
      />

      {storySections.map((section, index) => {
        const image = images[(index + 1) % images.length] ?? hero;
        return (
          <LuxurySplitBand
            key={section.title}
            image={image}
            imageAlt={section.title}
            eyebrow={pageIntro?.eyebrow ?? copy.brand}
            title={section.title}
            reverse={index % 2 === 1}
            cta={
              path === "restaurante" && index === storySections.length - 1
                ? {
                    label:
                      locale === "en" ? "Reserve your table" : "Reservar mesa",
                    href: whatsappHref,
                  }
                : undefined
            }
          />
        );
      })}

      {path === "galeria" ? (
        // The gallery is separated into resort aspects (pool, weddings, dining,
        // suites, beach) — each a titled band with its own lightbox-enabled
        // mosaic — so the Intro leads straight into the categorized sections.
        <GallerySections locale={locale} />
      ) : (
        <LuxuryMosaic
          eyebrow={copy.galleryEyebrow}
          title={copy.galleryTitle}
          images={mosaicItems}
          className={storySections.length > 0 ? "bg-concept-sand-muted" : undefined}
        />
      )}

      {afterContent}

      <LuxuryCtaBand
        locale={locale}
        eyebrow={copy.reserveEyebrow}
        title={copy.reserveTitle}
        body={copy.reserveBody}
        primaryLabel={copy.book}
        secondaryLabel={copy.whatsapp}
        image={ctaImage}
      />
    </article>
  );
}

export function PageScaffold({
  data,
  locale = "es",
  path = "",
  includeRestaurantSchema = false,
  variant = "default",
  afterContent,
}: {
  data: Captured;
  locale?: Locale;
  path?: string;
  includeRestaurantSchema?: boolean;
  variant?: "default" | "luxury";
  afterContent?: ReactNode;
}) {
  if (variant === "luxury") {
    return (
      <LuxuryPageScaffold
        data={data}
        locale={locale}
        path={path}
        includeRestaurantSchema={includeRestaurantSchema}
        afterContent={afterContent}
      />
    );
  }

  const title = data.h1[0] ?? data.title;
  const images = imageList(data);
  const hero = images[0];
  const { intro, sections } = buildSections(data);
  const primarySections = sections.slice(0, 6);

  return (
    <article>
      <JsonLd data={breadcrumbJsonLd({ locale, path, title })} />
      {includeRestaurantSchema && <JsonLd data={restaurantJsonLd()} />}
      <section className="relative min-h-[58vh] overflow-hidden bg-primary text-primary-foreground">
        {hero && (
          <Image
            src={hero}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/62 to-primary/18" />
        <div className="container relative flex min-h-[58vh] items-end pb-14 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Hotel Terraza del Pacifico
            </p>
            <h1 className="mt-4 text-4xl font-bold md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86">
              {data.desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={bookingHref}
                className={buttonVariants({ variant: "accent", size: "lg" })}
              >
                Book Your Escape
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href={whatsappHref}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-white/50 bg-white/10 text-white hover:bg-white hover:text-primary",
                })}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14 md:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Overview
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              The essentials
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              <LeadStat value="Beachfront" label="Playa Hermosa" />
              <LeadStat value="90 min" label="From San Jose" />
              <LeadStat value="Direct" label="Booking support" />
            </div>
          </div>
          <div className="max-w-3xl space-y-4 text-lg leading-8 text-foreground/78">
            {(intro.length > 0 ? intro : [data.desc]).map((line, index) => (
              <p key={`${line}-${index}`}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      {primarySections.length > 0 && (
        <section className="container pb-16">
          <div className="grid gap-5 md:grid-cols-2">
            {primarySections.map((section) => (
              <section
                key={section.title}
                className="rounded-md border bg-card p-6 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-primary">
                  {section.title}
                </h2>
                <SectionBody lines={section.body} />
              </section>
            ))}
          </div>
        </section>
      )}

      <ImageGallery images={images} title={title} />

      <section id="booking" className="container py-16">
        <div className="grid gap-8 rounded-md bg-primary p-8 text-primary-foreground md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              <CalendarDays className="h-4 w-4" />
              Direct booking
            </p>
            <h2 className="mt-3 text-3xl font-bold">Ready to plan your stay?</h2>
            <p className="mt-3 max-w-2xl text-white/78">
              Contact the hotel directly for availability, event details,
              restaurant reservations, or help choosing the right room.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:info@terrazadelpacifico.com"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-white/50 bg-white/10 text-white hover:bg-white hover:text-primary",
              })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
            <Link
              href={whatsappHref}
              className={buttonVariants({ variant: "accent", size: "lg" })}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
