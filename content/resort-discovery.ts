export type DiscoveryHref = string | { es: string; en: string };

export type NavIcon = "bed" | "restaurant" | "bar" | "about" | "gallery";

export type NavTile = {
  id: string;
  href: DiscoveryHref;
  image: string;
  icon: NavIcon;
  alt: { es: string; en: string };
  /** Destination name shown large. */
  title: { es: string; en: string };
  /** Explicit action label, e.g. "View Rooms". */
  cta: { es: string; en: string };
  /** One-line context under the title. */
  subtitle: { es: string; en: string };
  colSpan: 1 | 2;
  rowSpan: 1 | 2;
  /** Marks the primary destination (larger type, gold accent). */
  feature?: boolean;
};

// The first bento grid acts as a navigation hub: one feature tile (Rooms)
// plus four equal destination tiles. Order matters for grid auto-placement —
// the 2x2 feature fills the left block, the four 1x1 tiles fill the right.
export const navTiles: NavTile[] = [
  {
    id: "rooms",
    href: "suites",
    image: "/images/Suit photos/RLR_48512.JPG",
    icon: "bed",
    alt: {
      es: "Suite frente al mar en Terraza del Pacífico, Playa Hermosa",
      en: "Oceanfront suite at Terraza del Pacífico on Playa Hermosa",
    },
    title: { es: "Habitaciones y Suites", en: "Rooms & Suites" },
    cta: { es: "Ver Habitaciones", en: "View Rooms" },
    subtitle: {
      es: "Frente al mar en Playa Hermosa, a pasos de la arena",
      en: "Beachfront on Playa Hermosa, steps from the sand",
    },
    colSpan: 2,
    rowSpan: 2,
    feature: true,
  },
  {
    id: "restaurant",
    href: "restaurant",
    image: "/images/Resturant/DSCF40452.JPG",
    icon: "restaurant",
    alt: {
      es: "Restaurante Vivace Beachfront de noche",
      en: "Vivace Beachfront restaurant at night",
    },
    title: { es: "Restaurante", en: "Restaurant" },
    cta: { es: "Nuestro Restaurante", en: "Our Restaurant" },
    subtitle: {
      es: "Vivace Beachfront · cocina italiana",
      en: "Vivace Beachfront · Italian dining",
    },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "bars",
    href: "bars",
    image: "/images/Resturant/chloemurdochphotography-293.JPG",
    icon: "bar",
    alt: {
      es: "Cócteles en el bar frente al mar",
      en: "Beachfront bar cocktails",
    },
    title: { es: "Bares", en: "Bars" },
    cta: { es: "Ver Bares", en: "View Bars" },
    subtitle: {
      es: "Cócteles al atardecer junto al agua",
      en: "Sunset cocktails by the water",
    },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "about",
    href: "about",
    image: "/images/exp-facade.webp",
    icon: "about",
    alt: {
      es: "Vista aérea del resort frente al mar en Playa Hermosa, cerca de Jacó",
      en: "Aerial view of the beachfront resort on Playa Hermosa, near Jacó",
    },
    title: { es: "Sobre Nosotros", en: "About Us" },
    cta: { es: "Conócenos", en: "Learn About Us" },
    subtitle: {
      es: "20 años en Playa Hermosa",
      en: "20 years on Playa Hermosa",
    },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "gallery",
    href: "gallery",
    image: "/images/New Pool/dji_fly_20241022_013726_0642_1753125646863_photo2.JPG",
    icon: "gallery",
    alt: {
      es: "Piscina LED bajo una noche estrellada",
      en: "LED-lit pool under a starry night",
    },
    title: { es: "Galería", en: "Gallery" },
    cta: { es: "Ver Galería", en: "View Gallery" },
    subtitle: {
      es: "La piscina LED y el resort",
      en: "Inside the LED pool & resort",
    },
    colSpan: 1,
    rowSpan: 1,
  },
];
