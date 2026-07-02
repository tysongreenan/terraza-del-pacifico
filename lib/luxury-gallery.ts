import type { InfoPage } from "@/content/info-pages";

type GalleryImage = { src: string; alt: { es: string; en: string } };

const EXPERIENCE_SUPPLEMENTS: Record<string, string[]> = {
  "whale-watching": [
    "/images/experiences/whale-watching/whales-aerial-Bx8BrmsB.jpg",
    "/images/resort/highlights/IMG_3170.JPG",
    "/images/resort/beach-aerial/g-aerial-mountains-BjKB5A2t.jpg",
    "/images/resort/highlights/IMG_2400.JPG",
    "/images/resort/highlights/AM5_93882.JPG",
    "/images/resort/highlights/IMG_2398.JPG",
    "/images/resort/pool/dji_fly_20241022_013704_0639_1753125647456_photo2.JPG",
    "/images/resort/beach-aerial/hero-aerial-beach-QbQLfxOv.jpg",
    "/images/resort/events/events-aerial-sunset-DjFbPbt1.jpg",
  ],
  "turtle-nesting": [
    "/images/experiences/turtle-nesting/baby-turtle-DGA7PRRL.jpg",
    "/images/resort/highlights/Surf 1.JPG",
    "/images/resort/highlights/IMG_61303.JPG",
    "/images/resort/highlights/IMG_2406.JPG",
    "/images/resort/highlights/DSC03681.jpg",
    "/images/resort/highlights/IMG_2403.JPG",
    "/images/resort/highlights/IMG_2418.JPG",
    "/images/resort/pool/dji_fly_20241022_013640_0637_1753125647848_photo2.JPG",
    "/images/resort/highlights/IMG_2209.JPG",
    "/images/resort/beach-aerial/g-aerial-mountains-BjKB5A2t.jpg",
  ],
  "beachfront-yoga": [
    "/images/experiences/yoga/yoga-class-1Z8S9ilZ.jpg",
    "/images/resort/highlights/Family 3.JPG",
    "/images/resort/pool/g-family-pool-1-g77anSd1.jpg",
    "/images/resort/pool/dji_fly_20241022_013712_0640_1753125647224_photo2.JPG",
    "/images/resort/highlights/IMG_3712.JPG",
    "/images/resort/pool/dji_fly_20241022_013722_0641_1753125647050_photo2.JPG",
    "/images/resort/dining/restaurant-sunset-T7wmiQ85.jpg",
    "/images/resort/highlights/IMG_2421.JPG",
    "/images/resort/highlights/DJI_0361(1)2.JPG",
  ],
  "live-music": [
    "/images/resort/bars/live-music-U-RLRqGX.jpg",
    "/images/resort/dining/RLR_3857.JPG",
    "/images/resort/dining/chloemurdochphotography-293.JPG",
    "/images/experiences/surf-nights/surf-nights-C5MPn3sY.jpg",
    "/images/resort/bars/golden-beach-bar-qN10cbKY.jpg",
    "/images/resort/dining/chloemurdochphotography-186.JPG",
    "/images/resort/events/events-pool-night-lights-BcHsd1B9.jpg",
    "/images/resort/bars/iguana-bar-pool-CP3k5v8t.jpg",
    "/images/resort/dining/chloemurdochphotography-172.JPG",
    "/images/resort/events/events-beach-lounge-BX7jVZUA.jpg",
  ],
};

const EVENT_SUPPLEMENTS: Record<string, string[]> = {
  // weddings: intentionally omitted — content/events.ts now hand-orders every
  // wedding photo directly in heroImage + gallery to match the /gallery
  // Weddings section exactly; a supplement list here would just be dead
  // weight (dedupeImages() drops anything already present).
  "surf-nights": [
    "/images/experiences/surf-nights/surf-nights-C5MPn3sY.jpg",
    "/images/experiences/surf-nights/surf-nights-shirt-jqYD2ns3.jpg",
    "/images/resort/events/events-beach-lounge-BX7jVZUA.jpg",
    "/images/resort/highlights/IMG_24142.JPG",
    "/images/resort/events/events-pool-night-lights-BcHsd1B9.jpg",
    "/images/resort/highlights/IMG_24012.JPG",
    "/images/resort/bars/golden-beach-bar-qN10cbKY.jpg",
    "/images/resort/bars/live-music-U-RLRqGX.jpg",
    "/images/experiences/surf-nights/surf-night-hero.png",
    "/images/experiences/surf-nights/surf-night-2.png",
    "/images/experiences/surf-nights/surf-night-3.png",
    "/images/experiences/surf-nights/surf-night-lights.JPG",
  ],
  "corporate-events": [
    "/images/resort/events/events-corporate-CUI1lTmu.jpg",
    "/images/resort/events/events-building-Bvc9tdB1.jpg",
    "/images/resort/events/events-outdoor-dining-DZwFtwJD.jpg",
    "/images/resort/highlights/AM5_93932.JPG",
    "/images/resort/pool/dji_fly_20241022_014302_0655_1753125595160_photo2.JPG",
    "/images/resort/highlights/IMG_25652.JPG",
    "/images/resort/dining/restaurant-view-WsRnSUPN.jpg",
    "/images/resort/events/events-pool-aerial-DuNYfspA.jpg",
  ],
  "family-celebrations": [
    "/images/resort/highlights/IMG_59363.JPG",
    "/images/resort/pool/g-family-pool-1-g77anSd1.jpg",
    "/images/resort/pool/g-family-pool-2-CMSYuCPg.jpg",
    "/images/resort/pool/g-pool-kids-DrLSuE2_.jpg",
    "/images/resort/events/events-pool-party-D_ez1wdr.jpg",
    "/images/resort/pool/dji_fly_20241022_014306_0656_1753125594987_photo3.JPG",
    "/images/resort/events/events-romantic-setup-CdyCZVZj.jpg",
    "/images/resort/highlights/IMG_25682.JPG",
  ],
  "private-dinners": [
    "/images/resort/dining/DSCF40452.JPG",
    "/images/resort/dining/RLR_3857.JPG",
    "/images/resort/dining/1L6A2626.jpg",
    "/images/resort/dining/chloemurdochphotography-37.JPG",
    "/images/resort/dining/chloemurdochphotography-259.JPG",
    "/images/resort/dining/RLR_37623.JPG",
    "/images/resort/dining/DSCF4078(1).JPG",
    "/images/resort/dining/restaurant-sunset-T7wmiQ85.jpg",
  ],
  "parties-and-celebrations": [
    "/images/resort/events/events-pool-party-D_ez1wdr.jpg",
    "/images/resort/events/events-beach-lounge-BX7jVZUA.jpg",
    "/images/resort/events/events-party-IPZcQeS1.jpg",
    "/images/resort/events/events-pool-night-lights-BcHsd1B9.jpg",
    "/images/resort/pool/g-pool-night-1-WgdE2JvM.jpg",
    "/images/resort/pool/g-pool-night-2-Dp4ckmAL.jpg",
    "/images/resort/bars/live-music-U-RLRqGX.jpg",
    "/images/resort/pool/pool-aerial-night-BvFgNxHn.jpg",
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