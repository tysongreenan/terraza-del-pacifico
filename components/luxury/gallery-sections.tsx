import { MosaicGallery } from "@/components/luxury/mosaic-gallery";
import type { Locale } from "@/lib/i18n";

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
  images: string[];
};

const CATEGORIES: GalleryCategory[] = [
  {
    id: "pool",
    eyebrow: { es: "Sol y agua", en: "Sun & water" },
    title: { es: "La piscina", en: "The Pool" },
    images: [
      "/images/New Pool/dji_fly_20241022_013922_0645_1753125628421_photo4.JPG",
      "/images/New Pool/dji_fly_20241022_014010_0648_1753125627850_photo2.JPG",
      "/images/New Pool/dji_fly_20241022_013636_0636_1753125648022_photo2.JPG",
      "/images/pool-aerial-night-BvFgNxHn.jpg",
      "/images/New Pool/dji_fly_20241111_035710_0766_1754911281185_photo.JPG",
      "/images/g-aerial-pool-overview-CCOWXk2j.jpg",
      "/images/New Pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG",
      "/images/pool-starry-night-DUYiQ-e6.jpg",
    ],
  },
  {
    id: "weddings",
    eyebrow: { es: "Celebraciones", en: "Celebrations" },
    title: { es: "Bodas", en: "Weddings" },
    images: [
      "/images/Wedding/689FBDA4-AA9B-466A-9DE2-31DC8B13A9002.JPG",
      "/images/Wedding/AM5_92612.JPG",
      "/images/Wedding/AM5_92513.JPG",
      "/images/Wedding/AM5_92742.JPG",
      "/images/Wedding/AM5_92562.JPG",
      "/images/Wedding/AM5_92822.JPG",
      "/images/Wedding/AM5_92602.JPG",
      "/images/Wedding/AM5_92492.JPG",
    ],
  },
  {
    id: "dining",
    eyebrow: { es: "Vivace Beachfront", en: "Vivace Beachfront" },
    title: { es: "Gastronomía", en: "Dining" },
    images: [
      "/images/Resturant/1L6A2526.jpg",
      "/images/Resturant/1L6A2554.jpg",
      "/images/restaurant-sunset-T7wmiQ85.jpg",
      "/images/Resturant/1L6A2507.jpg",
      "/images/restaurant-night-DDkbFUTM.jpg",
      "/images/Resturant/1L6A2544.jpg",
      "/images/golden-beach-bar-qN10cbKY.jpg",
      "/images/restaurant-dining-nygPbVtS.jpg",
    ],
  },
  {
    id: "suites",
    eyebrow: { es: "Dónde te alojas", en: "Where you stay" },
    title: { es: "Suites y habitaciones", en: "Suites & Rooms" },
    images: [
      "/images/Suit photos/DSC03703.jpg",
      "/images/Suit photos/RLR_48512.JPG",
      "/images/room-king-bed-B58lVEdC.jpg",
      "/images/Suit photos/DSC03813.jpg",
      "/images/room-toucan-art-n3cC8Tze.jpg",
      "/images/Suit photos/IMG_4688.JPG",
      "/images/villa-living-room-CHkIhyVw.jpg",
      "/images/Suit photos/DSC03718.jpg",
    ],
  },
  {
    id: "beach",
    eyebrow: { es: "Mar y entorno", en: "Sea & surroundings" },
    title: { es: "Playa y entorno", en: "Beach & Grounds" },
    images: [
      "/images/Resort Highlights/DJI_0361(1)2.JPG",
      "/images/hero-aerial-beach-QbQLfxOv.jpg",
      "/images/g-aerial-beach-property-COogc_9W.jpg",
      "/images/Resort Highlights/DJI_20250526154631_0071_D.JPG",
      "/images/g-aerial-mountains-BjKB5A2t.jpg",
      "/images/Resort Highlights/AM5_93882.JPG",
      "/images/g-family-beach-DHJPEGnp.jpg",
      "/images/events-aerial-sunset-DjFbPbt1.jpg",
    ],
  },
];

export function GallerySections({ locale }: { locale: Locale }) {
  return (
    <>
      {CATEGORIES.map((category, index) => (
        <MosaicGallery
          key={category.id}
          locale={locale}
          eyebrow={category.eyebrow[locale]}
          title={category.title[locale]}
          images={category.images.map((src, i) => ({
            src,
            alt: `${category.title[locale]} — Terraza del Pacífico (${i + 1})`,
          }))}
          className={index % 2 === 1 ? "bg-concept-sand-muted" : undefined}
        />
      ))}
    </>
  );
}
