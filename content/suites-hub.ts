import type { Locale } from "@/lib/i18n";

// Bespoke copy for the cinematic Suites/Rooms hub (Direction A).
// Room names, specs and base blurbs come from `dict.suites.items` — this
// module only adds the editorial-only fields the hub layout needs.

export type RoomEditorial = {
  /** Small caption above the room title in the cinematic frame. */
  kicker: string;
  /** Optional badge pinned to the frame (e.g. "Featured · Most booked"). */
  badge?: string;
  /** Longer, narrative description for the floating spec panel. */
  description: string;
  /** Secondary CTA label ("View Suite →"). */
  viewCta: string;
  /** Photo count shown on the frame ("gallery · 6 photos →"); 0 hides it. */
  photoCount: number;
  /** Hero/frame image for this room. */
  image: string;
};

type IncludedItem = { title: string; body: string };

/**
 * A run of the intro paragraph. Plain strings render as text; objects render
 * as an inline {@link LinkPreview} — hovering the phrase reveals `image` and
 * the phrase links to `href`.
 */
export type IntroSegment =
  | string
  | { text: string; href: string; image: string };

type HubCopy = {
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  switcher: { reserve: string; fromLabel: string };
  /** Eyebrow + the body split into segments so room previews can be woven in. */
  intro: { eyebrow: string; body: IntroSegment[] };
  galleryLabel: (n: number) => string;
  rooms: Record<string, RoomEditorial>;
  included: {
    eyebrow: string;
    title: string;
    body: string;
    items: IncludedItem[];
  };
  compareCta: string;
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
};

/** Display order for the hub (Junior featured first, then by size). */
export const hubRoomOrder = ["junior-suite", "superior", "estandar", "villas"];

const en: HubCopy = {
  hero: {
    eyebrow: "Stay · Oceanfront Rooms",
    titleLines: ["Wake to the Pacific,", "Four Ways"],
    description:
      "Each room sits a few barefoot steps from the sand, the pool and the morning light. Pick a couple's hideaway or a full family villa.",
    primaryCta: "Check Availability",
    secondaryCta: "Compare All Rooms",
  },
  switcher: { reserve: "Reserve", fromLabel: "Room type" },
  intro: {
    eyebrow: "Four rooms, one shoreline",
    body: [
      "Every room here is built around the same idea: ",
      {
        text: "the ocean",
        href: "/en/gallery",
        image: "/images/exp-villa-block-lawn.jpg",
      },
      " should be the first thing you see and the last thing you hear. The only choice is ",
      {
        text: "how much space",
        href: "/en/suites/comparar",
        image: "/images/exp-villa-block-lawn.jpg",
      },
      " you want around it.",
    ],
  },
  galleryLabel: (n) => `gallery · ${n} photos →`,
  rooms: {
    "junior-suite": {
      kicker: "Made for couples",
      badge: "Featured · Most booked",
      description:
        "A calm, light-filled retreat for two — wake to the pool and the sound of the surf just beyond your terrace, then drift to sleep with the doors open.",
      viewCta: "View Suite →",
      photoCount: 6,
      image: "/images/exp-room-junior-hero.avif",
    },
    superior: {
      kicker: "For families & friends",
      description:
        "Two double beds and main-pool views, steps from the sand. Room to spread out without ever losing the water from sight.",
      viewCta: "View Room →",
      photoCount: 0,
      image: "/images/exp-room-superior-hero.avif",
    },
    estandar: {
      kicker: "Quiet & serene",
      description:
        "A calm, garden-facing room for up to four — two double beds, your own terrace, and the same short barefoot walk to the sand as every other room.",
      viewCta: "View Room →",
      photoCount: 5,
      image: "/images/exp-room-standard-hero.avif",
    },
    villas: {
      kicker: "Room for everyone",
      badge: "Whole-home",
      description:
        "A whole home on the sand for up to six — full kitchen, living room and a wraparound terrace. The most space we offer, with nothing between you and the Pacific.",
      viewCta: "View Villa →",
      photoCount: 0,
      image: "/images/exp-villa-hero.avif",
    },
  },
  included: {
    eyebrow: "Included in every room",
    title: "The best of Terraza isn't an upgrade",
    body: "Whichever room you book, the essentials of a Terraza morning come standard. Nothing here is reserved for the suite.",
    items: [
      {
        title: "0 m to the sand",
        body: "The resort is on the beach — no road to cross, every room a barefoot walk from the water.",
      },
      {
        title: "The LED pool",
        body: "Swim under 1,200 lights after dark — open to every guest, steps from your door.",
      },
      {
        title: "Beachfront yoga",
        body: "Free sessions at the water's edge — Sun & Wed 8 AM, Sat 4 PM, included with your stay.",
      },
      {
        title: "Private terrace",
        body: "Your own outdoor space opening onto the pool or the gardens — in every category.",
      },
      {
        title: "A/C & fast Wi-Fi",
        body: "Cool, quiet rooms and connection quick enough to work from — standard throughout.",
      },
      {
        title: "Direct-book rate",
        body: "Our best price, guaranteed when you book with us — the same promise on every room.",
      },
    ],
  },
  compareCta: "Compare the suites in more detail →",
  cta: {
    eyebrow: "We're here to help",
    title: "Still deciding? We'll help you choose.",
    body: "Tell us who's coming and how you like to wake up — we'll point you to the right room.",
    primary: "Email Us",
    secondary: "WhatsApp Us",
  },
};

const es: HubCopy = {
  hero: {
    eyebrow: "Hospedaje · Habitaciones frente al mar",
    titleLines: ["Despierta con el Pacífico,", "de cuatro formas"],
    description:
      "Cada habitación está a unos pasos descalzos de la arena, la piscina y la luz de la mañana. Elige un refugio para dos o una villa para toda la familia.",
    primaryCta: "Ver disponibilidad",
    secondaryCta: "Comparar habitaciones",
  },
  switcher: { reserve: "Reservar", fromLabel: "Tipo de habitación" },
  intro: {
    eyebrow: "Cuatro habitaciones, una misma orilla",
    body: [
      "Cada habitación parte de la misma idea: ",
      {
        text: "el océano",
        href: "/es/gallery",
        image: "/images/exp-villa-block-lawn.jpg",
      },
      " debe ser lo primero que veas y lo último que escuches. Lo único que eliges es ",
      {
        text: "cuánto espacio",
        href: "/es/suites/comparar",
        image: "/images/exp-villa-block-lawn.jpg",
      },
      " quieres a su alrededor.",
    ],
  },
  galleryLabel: (n) => `galería · ${n} fotos →`,
  rooms: {
    "junior-suite": {
      kicker: "Pensada para parejas",
      badge: "Destacada · La más reservada",
      description:
        "Un refugio luminoso y tranquilo para dos — despierta con la piscina y el sonido del mar justo más allá de tu terraza, y duérmete con las puertas abiertas.",
      viewCta: "Ver suite →",
      photoCount: 6,
      image: "/images/exp-room-junior-hero.avif",
    },
    superior: {
      kicker: "Para familias y amigos",
      description:
        "Dos camas dobles y vista a la piscina principal, a pasos de la arena. Espacio para estirarse sin perder nunca el agua de vista.",
      viewCta: "Ver habitación →",
      photoCount: 0,
      image: "/images/exp-room-superior-hero.avif",
    },
    estandar: {
      kicker: "Tranquila y serena",
      description:
        "Una habitación serena frente al jardín para hasta cuatro — dos camas dobles, tu propia terraza y la misma corta caminata descalza a la arena que cualquier otra habitación.",
      viewCta: "Ver habitación →",
      photoCount: 5,
      image: "/images/exp-room-standard-hero.avif",
    },
    villas: {
      kicker: "Espacio para todos",
      badge: "Casa completa",
      description:
        "Una casa entera sobre la arena para hasta seis — cocina completa, sala de estar y una terraza envolvente. El mayor espacio que ofrecemos, sin nada entre tú y el Pacífico.",
      viewCta: "Ver villa →",
      photoCount: 0,
      image: "/images/exp-villa-hero.avif",
    },
  },
  included: {
    eyebrow: "Incluido en cada habitación",
    title: "Lo mejor de Terraza no es un extra",
    body: "Reserves la habitación que reserves, lo esencial de una mañana en Terraza viene de serie. Aquí nada queda reservado solo para la suite.",
    items: [
      {
        title: "0 m a la arena",
        body: "El resort está sobre la playa — sin calle que cruzar, cada habitación a una caminata descalza del agua.",
      },
      {
        title: "La piscina LED",
        body: "Nada bajo 1.200 luces al caer la noche — abierta a todos los huéspedes, a pasos de tu puerta.",
      },
      {
        title: "Yoga frente al mar",
        body: "Sesiones gratuitas a la orilla del agua — Dom y Mié 8 AM, Sáb 4 PM, incluidas con tu estancia.",
      },
      {
        title: "Terraza privada",
        body: "Tu propio espacio al aire libre hacia la piscina o los jardines — en toda categoría.",
      },
      {
        title: "A/C y Wi-Fi rápido",
        body: "Habitaciones frescas y silenciosas, y conexión lo bastante rápida para trabajar — en todas.",
      },
      {
        title: "Tarifa de reserva directa",
        body: "Nuestro mejor precio, garantizado al reservar con nosotros — la misma promesa en cada habitación.",
      },
    ],
  },
  compareCta: "Compara las habitaciones en detalle →",
  cta: {
    eyebrow: "Estamos para ayudarte",
    title: "¿Aún decidiendo? Te ayudamos a elegir.",
    body: "Cuéntanos quién viene y cómo te gusta despertar — te recomendamos la habitación ideal.",
    primary: "Escríbenos",
    secondary: "WhatsApp",
  },
};

export const suitesHubContent: Record<Locale, HubCopy> = { en, es };
