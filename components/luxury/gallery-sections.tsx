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
      "/images/resort/pool/exp-pool-day-loungers.avif",
      "/images/resort/pool/pool-aerial-day-BveHvOiS.jpg",
      "/images/resort/pool/g-family-pool-1-g77anSd1.jpg",
      "/images/resort/pool/g-family-pool-2-CMSYuCPg.jpg",
      "/images/resort/pool/pool-lounge-chairs.JPG",
      "/images/resort/beach-aerial/dji_fly_20241010_001758_0453_1752108593145_photo2.JPG",
      "/images/resort/pool/dji_fly_20241111_035710_0766_1754911281185_photo.JPG",
      "/images/resort/pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG",
      "/images/resort/pool/dji_fly_20241111_035540_0759_1755049693551_photo3.JPG",
      "/images/resort/pool/g-pool-night-1-WgdE2JvM.jpg",
      "/images/resort/pool/pool-starry-night-DUYiQ-e6.jpg",
      "/images/resort/pool/g-pool-night-2-Dp4ckmAL.jpg",
      "/images/resort/pool/g-aerial-pool-overview-CCOWXk2j.jpg",
      "/images/resort/pool/g-pool-kids-DrLSuE2_.jpg",
      "/images/suites/general/exp-room-pool-view.webp",
      "/images/resort/grounds/30.PNG",
      "/images/resort/grounds/33.JPG",
      "/images/resort/beach-aerial/DJI_20250526095434_0044_D.JPG",
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
      "/images/resort/weddings/AM5_96762.JPG",
      "/images/resort/weddings/wedding-beach-ceremony-NqUR8iSS.jpg",
      "/images/resort/weddings/wedding-venue-wtXbsJOx.jpg",
      "/images/resort/weddings/AM5_92513.JPG",
      "/images/resort/weddings/AM5_93622.JPG",
      "/images/resort/weddings/AM5_94092.JPG",
      "/images/resort/weddings/689FBDA4-AA9B-466A-9DE2-31DC8B13A9002.JPG",
      "/images/resort/weddings/AM5_92612.JPG",
      "/images/resort/weddings/AM5_92822.JPG",
      "/images/resort/weddings/AM5_93422.JPG",
      "/images/resort/weddings/AM5_92492.JPG",
      "/images/resort/weddings/AM5_92562.JPG",
      "/images/resort/weddings/AM5_92602.JPG",
      "/images/resort/weddings/AM5_96582.JPG",
      "/images/resort/weddings/RLR_86342.JPG",
      "/images/resort/weddings/RLR_8676.JPG",
      "/images/resort/weddings/RLR_88882.JPG",
      "/images/resort/weddings/RLR_89012.JPG",
      "/images/resort/weddings/RLR_89382.JPG",
      "/images/resort/weddings/wedding-ceremony-night-BS1EmGIk.jpg",
      "/images/resort/weddings/wedding-couple-BUFflCio.jpg",
      "/images/resort/weddings/wedding-setup-BpzA9vBd.jpg",
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
      "/images/resort/dining/chloemurdochphotography-95.JPG",
      "/images/resort/dining/chloemurdochphotography-214.JPG",
      "/images/resort/dining/chloemurdochphotography-247.JPG",
      "/images/resort/dining/chloemurdochphotography-320-2.JPG",
      "/images/resort/dining/IMG_1967_jpg2.JPG",
      "/images/resort/dining/RLR_37603.JPG",
      "/images/resort/dining/RLR_3818.JPG",
      "/images/resort/dining/RLR_3851.JPG",
      "/images/resort/dining/RLR_3898.JPG",
      "/images/resort/dining/RLR_3947.JPG",
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
      // Previous suite shoot — commented out for now, may be re-added later.
      // "/images/suites/originals/DSC03703.jpg",
      // "/images/suites/originals/RLR_48512.JPG",
      // "/images/suites/junior/exp-room-junior-hero.avif",
      // "/images/suites/villa/exp-villa-balcony-ocean.avif",
      // "/images/suites/originals/DSC03704.jpg",
      // "/images/suites/originals/IMG_4688.JPG",
      // "/images/suites/villa/exp-villa-hero.avif",
      // "/images/suites/originals/DSC03718.jpg",
      // "/images/suites/originals/34.JPG",
      // "/images/suites/originals/RLR_0643-HDR.JPG",
      // "/images/suites/originals/RLR_0740.JPG",
      // "/images/suites/originals/RLR_4906-2.JPG",
      // "/images/suites/originals/DSC03689.jpg",
      // "/images/suites/originals/IMG_4762.JPG",
      // "/images/suites/originals/IMG_4763.JPG",
      // "/images/suites/originals/IMG_4779.JPG",
      // "/images/suites/general/room-two-beds-D9Pgywgw.jpg",
      // "/images/suites/villa/villa-kitchen-detail-CYiwCD4T.jpg",
      // "/images/suites/villa/villa-living-room-CHkIhyVw.jpg",
      "/images/approve-suite-images/junior-suite.JPG",
      "/images/approve-suite-images/superior.JPG",
      "/images/approve-suite-images/standard-room-1.JPG",
      "/images/approve-suite-images/standard-room-2.JPG",
      "/images/approve-suite-images/villa-1.JPG",
      "/images/approve-suite-images/villa-2.JPG",
      "/images/approve-suite-images/villa-3.JPG",
    ],
  },
  {
    id: "beach",
    eyebrow: { es: "Mar y entorno", en: "Sea & surroundings" },
    title: { es: "Playa y vistas aéreas", en: "Beach & Aerial Views" },
    alt: {
      es: "Playa Hermosa y vistas aéreas del Hotel Terraza del Pacífico",
      en: "Playa Hermosa beach and aerial views of Hotel Terraza del Pacífico",
    },
    images: [
      "/images/resort/beach-aerial/aerial-resort-sunset.JPG",
      "/images/resort/highlights/DJI_0361(1)2.JPG",
      "/images/resort/beach-aerial/exp-beach-topdown.jpg",
      "/images/resort/highlights/DJI_20250526154631_0071_D.JPG",
      "/images/resort/beach-aerial/exp-beach-grounds.jpg",
      "/images/resort/highlights/IMG_61303.JPG",
      "/images/resort/beach-aerial/exp-sunset-drone.jpg",
      "/images/resort/events/events-aerial-sunset-DjFbPbt1.jpg",
      "/images/resort/beach-aerial/beach-lounge-sunset.JPG",
      "/images/experiences/surf-nights/surf-night-lights.JPG",
      "/images/resort/beach-aerial/DJI_02246.JPG",
      "/images/resort/beach-aerial/DJI_0631.JPG",
      "/images/resort/beach-aerial/DJI_0654.JPG",
      "/images/resort/beach-aerial/dji_fly_20241109_231020_0720_1754703763850_photo.JPG",
      "/images/resort/beach-aerial/dji_fly_20241111_035540_0759_1755049693551_photo.JPG",
      "/images/resort/beach-aerial/dji_fly_20241010_001210_0442_1752108665142_photo9.JPG",
      "/images/resort/beach-aerial/dji_fly_20241010_041436_0471_1752108489694_photo2.JPG",
      "/images/resort/beach-aerial/dji_fly_20241010_043240_0497_1752108370054_photo2.JPG",
    ],
  },
  {
    id: "grounds",
    eyebrow: { es: "El resort", en: "The resort" },
    title: { es: "Jardines y exteriores", en: "Gardens & Grounds" },
    alt: {
      es: "Jardines y exteriores del Hotel Terraza del Pacífico en Playa Hermosa",
      en: "Gardens and grounds at Hotel Terraza del Pacífico in Playa Hermosa",
    },
    images: [
      "/images/resort/grounds/grounds-garden-walkpath.JPG",
      "/images/resort/grounds/grounds-resort-flowers.JPG",
      "/images/resort/grounds/grounds-suites-exterior.JPG",
      "/images/resort/grounds/grounds-suites-garden.JPG",
      "/images/resort/grounds/grounds-suites-palmtree.JPG",
      "/images/resort/grounds/resort-sign.JPG",
      "/images/resort/grounds/suite-balcony-garden.JPG",
      "/images/suites/originals/IMG_3695.JPG",
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
