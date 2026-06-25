import type { Locale } from "@/lib/i18n";

// Bespoke copy for the redesigned About page (Sobre Nosotros).
// The intro statement reuses dict.welcome.body; stats reuse dict.welcome.stats.

type AboutCopy = {
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    description: string;
    meta: string;
    image: string;
  };
  statementEyebrow: string;
  story: {
    eyebrow: string;
    titleLines: [string, string];
    paragraphs: string[];
    slides: { src: string; alt: string }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    items: { year: string; body: string }[];
  };
  values: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string; image: string; alt: string }[];
  };
  pool: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    alt: string;
  };
  location: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: { title: string; body: string }[];
  };
  facilities: {
    eyebrow: string;
    title: string;
    items: { icon: FacilityIcon; title: string; subtitle: string; href?: string }[];
  };
  weddings: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    image: string;
    alt: string;
  };
  cta: { title: string; primary: string; secondary: string };
};

// Icon keys map to lucide-react components in the AboutPage facilities grid.
export type FacilityIcon =
  | "rooms"
  | "pools"
  | "beach"
  | "pet"
  | "wifi"
  | "parking"
  | "ev"
  | "kids"
  | "bakery";

const en: AboutCopy = {
  hero: {
    eyebrow: "About · Sobre Nosotros",
    titleLines: ["Twenty Years on", "the Same Sand"],
    description:
      "A family-run stretch of the Pacific where the welcome is real and the ocean has never moved.",
    meta: "Playa Hermosa, Jacó · est. 2006",
    image: "/images/exp-hero-front-aerial.avif",
  },
  statementEyebrow: "Bienvenidos",
  story: {
    eyebrow: "Our story",
    titleLines: ["A small idea that", "never left the beach"],
    paragraphs: [
      "It began with a handful of rooms and a simple belief: that the best of Costa Rica isn't something you visit, it's something you wake up inside of. Two decades later we've grown, but the idea hasn't moved an inch from the water.",
      "Today the resort is still family-run, still on the sand, and still measured by the same thing — whether you leave already planning to come back.",
    ],
    slides: [
      { src: "/images/exp-villa-balcony-ocean.avif", alt: "Villa balcony with an ocean view at Terraza del Pacífico" },
      { src: "/images/exp-led-pool-aerial.webp", alt: "Aerial view of the LED pool" },
      { src: "/images/exp-pool-day-loungers.avif", alt: "Pool and loungers by day" },
      { src: "/images/exp-beach-grounds.jpg", alt: "Beachfront grounds of the property" },
    ],
  },
  timeline: {
    eyebrow: "The years, in brief",
    title: "How we got here",
    items: [
      { year: "2006", body: "First rooms open on Playa Hermosa — a dozen keys and a dream." },
      { year: "2013", body: "Vivace Beachfront restaurant opens with Chef Luigi at the pass." },
      { year: "2019", body: "The signature LED pool — 1,200 lights — is unveiled." },
      { year: "Today", body: "Four room types, weddings & surf nights — still on the same sand." },
    ],
  },
  values: {
    eyebrow: "What we stand for",
    title: "Three things we won't compromise",
    items: [
      {
        title: "Real hospitality",
        body: "Family-run means the welcome isn't a script. You're a guest in our home.",
        image: "/images/Resort Highlights/Family2.JPG",
        alt: "A family enjoying the beach",
      },
      {
        title: "The coast, protected",
        body: "Turtle nesting, clean sand, low footprint — we keep the beach worth waking to.",
        image: "/images/turtle-nesting-qhRPIRHR.jpg",
        alt: "Sea turtle nesting on the beach",
      },
      {
        title: "Costa Rica, fully",
        body: "Local hands, local flavor, local adventure — pura vida isn't a slogan here.",
        image: "/images/live-music-U-RLRqGX.jpg",
        alt: "Live music at the resort",
      },
    ],
  },
  pool: {
    eyebrow: "A unique pool in Central America",
    title: "A starry sky, just below the surface",
    paragraphs: [
      "Designed by a renowned Italian artist, our main pool is a functional work of art — a meeting of technology and nature you won't find anywhere else on this coast.",
      "1,200 LED lights set into the pool floor evoke a starry sky underwater. Every night the lights come alive, turning an evening swim into a quiet, unforgettable spectacle.",
      "And it's beautiful with a purpose: the low-energy LED technology reflects our commitment to sustainability, without ever asking our guests to settle for less.",
    ],
    image: "/images/pool-starry-night-DUYiQ-e6.jpg",
    alt: "The LED-lit pool glowing like a starry sky at night",
  },
  location: {
    eyebrow: "Privileged location",
    title: "Where the rainforest meets the tide",
    paragraphs: [
      "Surrounded by mountains blanketed in tropical vegetation, the hotel sits inside an exceptional natural setting where Costa Rican biodiversity shows up in full splendor.",
      "Tropical birds, howler monkeys and a cast of local fauna turn every day into a small adventure of discovery. The connection with nature here is constant, and completely real.",
    ],
    highlights: [
      {
        title: "Whale watching",
        body: "From July to October, majestic humpback whales visit our shores — an unforgettable natural spectacle just offshore.",
      },
      {
        title: "Turtle nesting",
        body: "Playa Hermosa is a protected nesting area where sea turtles come ashore to lay their eggs — a rare, living conservation experience.",
      },
    ],
  },
  facilities: {
    eyebrow: "Everything you need",
    title: "Our facilities",
    items: [
      { icon: "rooms", title: "62 Rooms", subtitle: "Variety of options" },
      { icon: "pools", title: "2 Pools", subtitle: "Outdoor" },
      { icon: "beach", title: "Direct Beach Access", subtitle: "Steps to the sand" },
      { icon: "pet", title: "Pet Friendly", subtitle: "Pets welcome" },
      { icon: "wifi", title: "High-Speed WiFi", subtitle: "Throughout the hotel" },
      { icon: "parking", title: "Secure Parking", subtitle: "24h surveillance" },
      { icon: "ev", title: "EV Charger", subtitle: "For electric vehicles" },
      { icon: "kids", title: "Kids Club", subtitle: "Children's activities" },
      {
        icon: "bakery",
        title: "Bakery",
        subtitle: "Fresh bread & specialty coffee",
        href: "/bakery",
      },
    ],
  },
  weddings: {
    eyebrow: "Weddings & beachfront events",
    title: "Celebrate where the sand meets the sea",
    body: "From weddings to milestone celebrations, our beachfront space turns the big moments into something unforgettable. Discover everything we can host for you.",
    cta: "View Events Page",
    image: "/images/Wedding/RLR_86342.JPG",
    alt: "Beachfront wedding and event space at Terraza del Pacífico",
  },
  cta: {
    title: "Come see why people keep coming back",
    primary: "Book Your Escape",
    secondary: "WhatsApp Us",
  },
};

const es: AboutCopy = {
  hero: {
    eyebrow: "Sobre Nosotros · About",
    titleLines: ["Veinte años sobre", "la misma arena"],
    description:
      "Un tramo del Pacífico de manejo familiar, donde la bienvenida es de verdad y el océano nunca se ha movido.",
    meta: "Playa Hermosa, Jacó · desde 2006",
    image: "/images/exp-hero-front-aerial.avif",
  },
  statementEyebrow: "Bienvenidos",
  story: {
    eyebrow: "Nuestra historia",
    titleLines: ["Una pequeña idea que", "nunca dejó la playa"],
    paragraphs: [
      "Empezó con un puñado de habitaciones y una creencia sencilla: que lo mejor de Costa Rica no es algo que se visita, es algo en lo que despiertas. Dos décadas después hemos crecido, pero la idea no se ha movido ni un centímetro del agua.",
      "Hoy el resort sigue siendo de manejo familiar, sigue sobre la arena, y se mide por lo mismo de siempre — si te vas ya planeando volver.",
    ],
    slides: [
      { src: "/images/exp-villa-balcony-ocean.avif", alt: "Balcón de la villa con vista al mar en Terraza del Pacífico" },
      { src: "/images/exp-led-pool-aerial.webp", alt: "Vista aérea de la piscina LED" },
      { src: "/images/exp-pool-day-loungers.avif", alt: "Piscina y camastros de día" },
      { src: "/images/exp-beach-grounds.jpg", alt: "Jardines frente al mar de la propiedad" },
    ],
  },
  timeline: {
    eyebrow: "Los años, en breve",
    title: "Cómo llegamos aquí",
    items: [
      { year: "2006", body: "Abren las primeras habitaciones en Playa Hermosa — una docena de llaves y un sueño." },
      { year: "2013", body: "Abre el restaurante Vivace Beachfront con el Chef Luigi al frente." },
      { year: "2019", body: "Se inaugura la piscina LED insignia — 1.200 luces." },
      { year: "Hoy", body: "Cuatro tipos de habitación, bodas y surf nights — sobre la misma arena." },
    ],
  },
  values: {
    eyebrow: "Lo que defendemos",
    title: "Tres cosas que no negociamos",
    items: [
      {
        title: "Hospitalidad real",
        body: "Manejo familiar significa que la bienvenida no es un guion. Eres un huésped en nuestra casa.",
        image: "/images/Resort Highlights/Family2.JPG",
        alt: "Una familia disfrutando de la playa",
      },
      {
        title: "La costa, protegida",
        body: "Anidación de tortugas, arena limpia, baja huella — cuidamos que la playa valga la pena al despertar.",
        image: "/images/turtle-nesting-qhRPIRHR.jpg",
        alt: "Tortuga marina anidando en la playa",
      },
      {
        title: "Costa Rica, de verdad",
        body: "Manos locales, sabor local, aventura local — aquí pura vida no es un eslogan.",
        image: "/images/live-music-U-RLRqGX.jpg",
        alt: "Música en vivo en el resort",
      },
    ],
  },
  pool: {
    eyebrow: "Una piscina única en Centroamérica",
    title: "Un cielo estrellado, justo bajo la superficie",
    paragraphs: [
      "Diseñada por un reconocido artista italiano, nuestra piscina principal es una obra de arte funcional — un encuentro entre tecnología y naturaleza que no encontrarás en ningún otro lugar de esta costa.",
      "1.200 luces LED integradas en el fondo de la piscina evocan un cielo estrellado bajo el agua. Cada noche las luces cobran vida y convierten un baño nocturno en un espectáculo sereno e inolvidable.",
      "Y es hermosa con un propósito: la tecnología LED de bajo consumo refleja nuestro compromiso con la sostenibilidad, sin pedirles nunca a nuestros huéspedes que renuncien a la experiencia.",
    ],
    image: "/images/pool-starry-night-DUYiQ-e6.jpg",
    alt: "La piscina iluminada con LED brillando como un cielo estrellado de noche",
  },
  location: {
    eyebrow: "Ubicación privilegiada",
    title: "Donde la selva se encuentra con la marea",
    paragraphs: [
      "Rodeado de montañas cubiertas de vegetación tropical, el hotel se ubica en un entorno natural excepcional donde la biodiversidad costarricense se manifiesta en todo su esplendor.",
      "Aves tropicales, monos congos y una variedad de fauna local convierten cada día en una pequeña aventura de descubrimiento. La conexión con la naturaleza aquí es constante y completamente auténtica.",
    ],
    highlights: [
      {
        title: "Avistamiento de ballenas",
        body: "De julio a octubre, majestuosas ballenas jorobadas visitan nuestras costas — un espectáculo natural inolvidable frente al mar.",
      },
      {
        title: "Anidación de tortugas",
        body: "Playa Hermosa es un área protegida de anidación donde las tortugas marinas llegan a desovar — una experiencia de conservación única y viva.",
      },
    ],
  },
  facilities: {
    eyebrow: "Todo lo que necesitas",
    title: "Nuestras instalaciones",
    items: [
      { icon: "rooms", title: "62 Habitaciones", subtitle: "Variedad de opciones" },
      { icon: "pools", title: "2 Piscinas", subtitle: "Al aire libre" },
      { icon: "beach", title: "Acceso Directo a la Playa", subtitle: "A pasos de la arena" },
      { icon: "pet", title: "Pet Friendly", subtitle: "Mascotas bienvenidas" },
      { icon: "wifi", title: "WiFi de Alta Velocidad", subtitle: "En todo el hotel" },
      { icon: "parking", title: "Parqueo Seguro", subtitle: "Vigilancia 24h" },
      { icon: "ev", title: "Cargador Eléctrico", subtitle: "Para vehículos eléctricos" },
      { icon: "kids", title: "Kids Club", subtitle: "Actividades para niños" },
      {
        icon: "bakery",
        title: "Panadería",
        subtitle: "Pan fresco y café de especialidad",
        href: "/bakery",
      },
    ],
  },
  weddings: {
    eyebrow: "Bodas y eventos frente al mar",
    title: "Celebra donde la arena se encuentra con el mar",
    body: "Desde bodas hasta celebraciones inolvidables, nuestro espacio frente al mar convierte los grandes momentos en algo memorable. Descubre todo lo que podemos organizar para ti.",
    cta: "Ver Página de Eventos",
    image: "/images/Wedding/RLR_86342.JPG",
    alt: "Espacio para bodas y eventos frente al mar en Terraza del Pacífico",
  },
  cta: {
    title: "Ven a ver por qué la gente siempre vuelve",
    primary: "Reserva tu Escape",
    secondary: "WhatsApp",
  },
};

export const aboutContent: Record<Locale, AboutCopy> = { en, es };
