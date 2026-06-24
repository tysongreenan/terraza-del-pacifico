import type { InfoPage } from "@/content/info-pages";

type GalleryImage = { src: string; alt: { es: string; en: string } };

const EXPERIENCE_SUPPLEMENTS: Record<string, string[]> = {
  "whale-watching": [
    "/images/whales-aerial-Bx8BrmsB.jpg",
    "/images/Resort Highlights/IMG_3170.JPG",
    "/images/g-aerial-mountains-BjKB5A2t.jpg",
    "/images/Resort Highlights/IMG_2400.JPG",
    "/images/Resort Highlights/AM5_93882.JPG",
    "/images/Resort Highlights/IMG_2398.JPG",
    "/images/New Pool/dji_fly_20241022_013704_0639_1753125647456_photo2.JPG",
    "/images/hero-aerial-beach-QbQLfxOv.jpg",
    "/images/events-aerial-sunset-DjFbPbt1.jpg",
  ],
  "turtle-nesting": [
    "/images/baby-turtle-DGA7PRRL.jpg",
    "/images/Resort Highlights/IMG_22232.JPG",
    "/images/Resort Highlights/IMG_61303.JPG",
    "/images/Resort Highlights/IMG_2406.JPG",
    "/images/Resort Highlights/DSC03681.jpg",
    "/images/Resort Highlights/IMG_2403.JPG",
    "/images/Resort Highlights/IMG_2418.JPG",
    "/images/New Pool/dji_fly_20241022_013640_0637_1753125647848_photo2.JPG",
    "/images/Resort Highlights/IMG_2209.JPG",
    "/images/g-aerial-mountains-BjKB5A2t.jpg",
  ],
  "beachfront-yoga": [
    "/images/yoga-class-1Z8S9ilZ.jpg",
    "/images/Resort Highlights/IMG_5978.JPG",
    "/images/g-family-pool-1-g77anSd1.jpg",
    "/images/New Pool/dji_fly_20241022_013712_0640_1753125647224_photo2.JPG",
    "/images/Resort Highlights/IMG_3712.JPG",
    "/images/New Pool/dji_fly_20241022_013722_0641_1753125647050_photo2.JPG",
    "/images/restaurant-sunset-T7wmiQ85.jpg",
    "/images/Resort Highlights/IMG_2421.JPG",
    "/images/Resort Highlights/DJI_0361(1)2.JPG",
  ],
  "live-music": [
    "/images/live-music-U-RLRqGX.jpg",
    "/images/Resturant/RLR_3857.JPG",
    "/images/Resturant/chloemurdochphotography-293.JPG",
    "/images/surf-nights-C5MPn3sY.jpg",
    "/images/golden-beach-bar-qN10cbKY.jpg",
    "/images/Resturant/chloemurdochphotography-186.JPG",
    "/images/events-pool-night-lights-BcHsd1B9.jpg",
    "/images/iguana-bar-pool-CP3k5v8t.jpg",
    "/images/Resturant/chloemurdochphotography-172.JPG",
    "/images/events-beach-lounge-BX7jVZUA.jpg",
  ],
};

const EVENT_SUPPLEMENTS: Record<string, string[]> = {
  weddings: [
    "/images/Wedding/RLR_86342.JPG",
    "/images/Wedding/RLR_88882.JPG",
    "/images/Wedding/RLR_89382.JPG",
    "/images/Wedding/AM5_96582.JPG",
    "/images/Wedding/689FBDA4-AA9B-466A-9DE2-31DC8B13A9002.JPG",
    "/images/Wedding/AM5_93622.JPG",
    "/images/Wedding/AM5_93422.JPG",
    "/images/Wedding/AM5_92612.JPG",
    "/images/Wedding/AM5_94092.JPG",
    "/images/Wedding/RLR_8676.JPG",
    "/images/Wedding/AM5_96762.JPG",
    "/images/Wedding/AM5_92513.JPG",
  ],
  "surf-nights": [
    "/images/surf-nights-C5MPn3sY.jpg",
    "/images/surf-nights-shirt-jqYD2ns3.jpg",
    "/images/events-beach-lounge-BX7jVZUA.jpg",
    "/images/Resort Highlights/IMG_24142.JPG",
    "/images/events-pool-night-lights-BcHsd1B9.jpg",
    "/images/Resort Highlights/IMG_24012.JPG",
    "/images/golden-beach-bar-qN10cbKY.jpg",
    "/images/live-music-U-RLRqGX.jpg",
  ],
  "corporate-events": [
    "/images/events-corporate-CUI1lTmu.jpg",
    "/images/events-building-Bvc9tdB1.jpg",
    "/images/events-outdoor-dining-DZwFtwJD.jpg",
    "/images/Resort Highlights/AM5_93932.JPG",
    "/images/New Pool/dji_fly_20241022_014302_0655_1753125595160_photo2.JPG",
    "/images/Resort Highlights/IMG_25652.JPG",
    "/images/restaurant-view-WsRnSUPN.jpg",
    "/images/events-pool-aerial-DuNYfspA.jpg",
  ],
  "family-celebrations": [
    "/images/Resort Highlights/IMG_59363.JPG",
    "/images/g-family-pool-1-g77anSd1.jpg",
    "/images/g-family-pool-2-CMSYuCPg.jpg",
    "/images/g-pool-kids-DrLSuE2_.jpg",
    "/images/events-pool-party-D_ez1wdr.jpg",
    "/images/New Pool/dji_fly_20241022_014306_0656_1753125594987_photo3.JPG",
    "/images/events-romantic-setup-CdyCZVZj.jpg",
    "/images/Resort Highlights/IMG_25682.JPG",
  ],
  "private-dinners": [
    "/images/Resturant/DSCF40452.JPG",
    "/images/Resturant/RLR_3857.JPG",
    "/images/Resturant/1L6A2626.jpg",
    "/images/Resturant/chloemurdochphotography-37.JPG",
    "/images/Resturant/chloemurdochphotography-259.JPG",
    "/images/Resturant/RLR_37623.JPG",
    "/images/Resturant/DSCF4078(1).JPG",
    "/images/restaurant-sunset-T7wmiQ85.jpg",
  ],
  "parties-and-celebrations": [
    "/images/events-pool-party-D_ez1wdr.jpg",
    "/images/events-beach-lounge-BX7jVZUA.jpg",
    "/images/events-party-IPZcQeS1.jpg",
    "/images/events-pool-night-lights-BcHsd1B9.jpg",
    "/images/g-pool-night-1-WgdE2JvM.jpg",
    "/images/g-pool-night-2-Dp4ckmAL.jpg",
    "/images/live-music-U-RLRqGX.jpg",
    "/images/pool-aerial-night-BvFgNxHn.jpg",
  ],
};

function dedupeImages(images: GalleryImage[]) {
  const seen = new Set<string>();
  return images.filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

export function expandInfoPageGallery(page: InfoPage, limit = 16): GalleryImage[] {
  const base: GalleryImage[] = [
    page.heroImage,
    ...page.gallery,
  ];

  const supplements =
    page.type === "experience"
      ? EXPERIENCE_SUPPLEMENTS[page.id] ?? []
      : EVENT_SUPPLEMENTS[page.id] ?? [];

  const extra: GalleryImage[] = supplements.map((src, index) => ({
    src,
    alt: {
      es: `${page.title.es} — imagen ${index + 1}`,
      en: `${page.title.en} — image ${index + 1}`,
    },
  }));

  return dedupeImages([...base, ...extra]).slice(0, limit);
}

export function countInfoPageImages(page: InfoPage, relatedCount = 0) {
  const gallery = expandInfoPageGallery(page);
  const sectionBands = page.sections.length;
  return 1 + sectionBands + gallery.length + relatedCount + 1;
}