import { MosaicGallery } from "@/components/luxury/mosaic-gallery";
import { JsonLd } from "@/components/json-ld";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl, siteName } from "@/lib/seo";

// The gallery, separated by the aspects of the resort. Each aspect renders as
// its own titled band (a self-contained MosaicGallery), so a visitor sees the
// full breadth in one scroll and the lightbox stays scoped to the category they
// opened. Photo paths are curated from the real property shoots in
// public/images/{New Pool,Wedding,Resturant,Suit photos,Resort Highlights}.

type Bilingual = { es: string; en: string };

type GalleryCategory = {
  id: string;
  eyebrow: Bilingual;
  title: Bilingual;
  // Localized, descriptive scene used both for screen-reader alt text and the
  // ImageGallery JSON-LD caption (better accessibility + image-search value
  // than a numbered placeholder).
  alt: Bilingual;
  images: string[];
};

const CATEGORIES: GalleryCategory[] = [
  {
    id: "pool",
    eyebrow: { es: "Sol y agua", en: "Sun & water" },
    title: { es: "La piscina", en: "The Pool" },
    alt: {
      es: "Piscina del Hotel Terraza del Pacífico en Playa Hermosa",
      en: "Swimming pool at Hotel Terraza del Pacífico in Playa Hermosa",
    },
    images: [
      "/images/resort/pool/dji_fly_20241022_013922_0645_1753125628421_photo4.JPG",
      "/images/resort/pool/dji_fly_20241022_014010_0648_1753125627850_photo2.JPG",
      "/images/resort/pool/dji_fly_20241022_013636_0636_1753125648022_photo2.JPG",
      "/images/resort/pool/exp-led-pool-aerial.webp",
      "/images/resort/pool/dji_fly_20241111_035710_0766_1754911281185_photo.JPG",
      "/images/resort/pool/exp-pool-day-loungers.avif",
      "/images/resort/pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG",
      "/images/suites/general/exp-room-pool-view.webp",
    ],
  },
  {
    id: "weddings",
    eyebrow: { es: "Celebraciones", en: "Celebrations" },
    title: { es: "Bodas", en: "Weddings" },
    alt: {
      es: "Boda frente al mar en el Hotel Terraza del Pacífico",
      en: "Beachfront wedding at Hotel Terraza del Pacífico",
    },
    images: [
      "/images/resort/weddings/689FBDA4-AA9B-466A-9DE2-31DC8B13A9002.JPG",
      "/images/resort/weddings/AM5_92612.JPG",
      "/images/resort/weddings/AM5_92513.JPG",
      "/images/resort/weddings/AM5_96762.JPG",
      "/images/resort/weddings/AM5_92562.JPG",
      "/images/resort/weddings/AM5_92822.JPG",
      "/images/resort/weddings/AM5_92602.JPG",
      "/images/resort/weddings/AM5_92492.JPG",
    ],
  },
  {
    id: "dining",
    eyebrow: { es: "Vivace Beachfront", en: "Vivace Beachfront" },
    title: { es: "Gastronomía", en: "Dining" },
    alt: {
      es: "Restaurante Vivace Beachfront frente al mar en el Hotel Terraza del Pacífico",
      en: "Vivace Beachfront restaurant by the sea at Hotel Terraza del Pacífico",
    },
    images: [
      "/images/resort/dining/chloemurdochphotography-972.JPG",
      "/images/resort/dining/1L6A2554.jpg",
      "/images/resort/dining/restaurant-sunset-T7wmiQ85.jpg",
      "/images/resort/dining/1L6A2507.jpg",
      "/images/resort/dining/chloemurdochphotography-314.JPG",
      "/images/resort/dining/IMG_09632.JPG",
      "/images/resort/dining/IMG_0964.JPG",
      "/images/resort/dining/DSCF40452.JPG",
    ],
  },
  {
    id: "suites",
    eyebrow: { es: "Dónde te alojas", en: "Where you stay" },
    title: { es: "Suites y habitaciones", en: "Suites & Rooms" },
    alt: {
      es: "Suite y habitación del Hotel Terraza del Pacífico",
      en: "Suite and guest room at Hotel Terraza del Pacífico",
    },
    images: [
      "/images/suites/originals/DSC03703.jpg",
      "/images/suites/originals/RLR_48512.JPG",
      "/images/suites/junior/exp-room-junior-hero.avif",
      "/images/suites/villa/exp-villa-balcony-ocean.avif",
      "/images/suites/originals/DSC03704.jpg",
      "/images/suites/originals/IMG_4688.JPG",
      "/images/suites/villa/exp-villa-hero.avif",
      "/images/suites/originals/DSC03718.jpg",
    ],
  },
  {
    id: "beach",
    eyebrow: { es: "Mar y entorno", en: "Sea & surroundings" },
    title: { es: "Playa y entorno", en: "Beach & Grounds" },
    alt: {
      es: "Playa Hermosa y los alrededores del Hotel Terraza del Pacífico",
      en: "Playa Hermosa beach and grounds around Hotel Terraza del Pacífico",
    },
    images: [
      "/images/resort/highlights/DJI_0361(1)2.JPG",
      "/images/resort/beach-aerial/exp-beach-topdown.jpg",
      "/images/resort/grounds/exp-garden-lawn.avif",
      "/images/resort/highlights/DJI_20250526154631_0071_D.JPG",
      "/images/resort/beach-aerial/exp-beach-grounds.jpg",
      "/images/resort/highlights/IMG_61303.JPG",
      "/images/resort/beach-aerial/exp-sunset-drone.jpg",
      "/images/resort/events/events-aerial-sunset-DjFbPbt1.jpg",
    ],
  },
];

// ImageGallery JSON-LD assembled from CATEGORIES — this is the richest curated
// image source on the site, so emitting structured data here (where the URLs
// and bilingual titles live) helps image search and AI-citation surfaces. Each
// photo becomes an ImageObject with an absolute contentUrl and a localized
// caption. absoluteUrl() runs the path through new URL(), so the spaces in the
// real shoot folder names get percent-encoded.
function galleryJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: locale === "en" ? `Photo gallery — ${siteName}` : `Galería de fotos — ${siteName}`,
    associatedMedia: CATEGORIES.flatMap((category) =>
      category.images.map((src) => ({
        "@type": "ImageObject",
        contentUrl: absoluteUrl(src),
        name: category.title[locale],
        caption: category.alt[locale],
      })),
    ),
  };
}

export function GallerySections({ locale }: { locale: Locale }) {
  return (
    <>
      <JsonLd data={galleryJsonLd(locale)} />
      {CATEGORIES.map((category, index) => (
        <MosaicGallery
          key={category.id}
          locale={locale}
          eyebrow={category.eyebrow[locale]}
          title={category.title[locale]}
          images={category.images.map((src, i) => ({
            src,
            alt:
              category.images.length > 1
                ? `${category.alt[locale]} (${i + 1})`
                : category.alt[locale],
          }))}
          className={index % 2 === 1 ? "bg-concept-sand-muted" : undefined}
        />
      ))}
    </>
  );
}
