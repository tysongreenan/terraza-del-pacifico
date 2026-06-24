import type { Locale } from "@/lib/i18n";

// Bespoke copy for the redesigned Restaurant page (Vivace Beachfront).
// Uses the dark/night palette already in the system.

type RestaurantCopy = {
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    description: string;
    reserveCta: string;
    whatsappCta: string;
    image: string;
    meta: string[];
  };
  chef: {
    eyebrow: string;
    titleLines: [string, string];
    body: string;
    menuCta: string;
    bioCta: string;
    image: string;
    alt: string;
  };
  menus: {
    eyebrow: string;
    title: string;
    cards: { key: "food" | "drinks"; title: string; body: string; cta: string; image: string }[];
  };
  ambiance: {
    eyebrow: string;
    titleLines: [string, string];
    body: string;
    slides: { src: string; alt: string }[];
  };
  reserve: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    image: string;
  };
};

const en: RestaurantCopy = {
  hero: {
    eyebrow: "Vivace Beachfront",
    titleLines: ["Mediterranean Soul,", "Pacific Setting"],
    description:
      "Sicilian Chef Luigi brings southern Italy to the water's edge — fresh catch, handmade pasta, sand beneath your table.",
    reserveCta: "Reserve a Table",
    whatsappCta: "WhatsApp",
    image: "/images/Resturant/IMG_0964.JPG",
    meta: ["Open daily · Breakfast, Lunch & Dinner", "Breakfast 7–10 AM · Lunch 12–3 PM · Dinner 6–9 PM", "Walk-ins & reservations"],
  },
  chef: {
    eyebrow: "The chef",
    titleLines: ["A Sicilian table at", "the edge of the surf"],
    body: "Chef Luigi cooks the way his grandmother did — slowly, generously, and with whatever the boats brought in that morning. Handmade pasta, wood-fire fish, and a wine list that knows its way around the Mediterranean.",
    menuCta: "Explore the Menu",
    bioCta: "Read Chef Luigi's story →",
    image: "/images/Resturant/RLR_3857.JPG",
    alt: "Chef Luigi of Vivace Beachfront",
  },
  menus: {
    eyebrow: "Vivace Beachfront",
    title: "Explore the menus",
    cards: [
      {
        key: "food",
        title: "Food Menu",
        body: "Antipasti, pizzas, handmade pastas, fresh catch & more.",
        cta: "View Food Menu →",
        image: "/images/Resturant/chloemurdochphotography-314.JPG",
      },
      {
        key: "drinks",
        title: "Drink Menu",
        body: "Cocktails, wines, local beers, fresh juices & more.",
        cta: "View Drink Menu →",
        image: "/images/Resturant/chloemurdochphotography-293.JPG",
      },
    ],
  },
  ambiance: {
    eyebrow: "Day to Night",
    titleLines: ["Toes in the sand by day,", "candlelight by night"],
    body: "Breakfast with the surf, long lunches under the palms, and dinners where the only sound is the ocean and the string lights overhead. Live music sets the mood on weekend evenings. Whatever the hour, the table is set a few steps from the water.",
    slides: [
      { src: "/images/Resturant/RLR_37603.JPG", alt: "Beachfront dining by day" },
      { src: "/images/Resturant/RLR_40112.JPG", alt: "A plated dish at Vivace" },
      { src: "/images/exp-dining-sunset-silhouette.jpg", alt: "Cocktails at the bar" },
      { src: "/images/Resturant/DSCF4078(1).JPG", alt: "Dinner under the string lights" },
    ],
  },
  reserve: {
    eyebrow: "Reserve",
    title: "Book your table by the water",
    body: "Dinner reservations recommended, especially at sunset. Resort guests dine first.",
    primary: "Reserve a Table",
    secondary: "WhatsApp Us",
    image: "/images/Resturant/chloemurdochphotography-95.JPG",
  },
};

const es: RestaurantCopy = {
  hero: {
    eyebrow: "Vivace Beachfront",
    titleLines: ["Alma mediterránea,", "escenario Pacífico"],
    description:
      "El chef siciliano Luigi trae el sur de Italia a la orilla del agua — pesca fresca, pasta artesanal y arena bajo tu mesa.",
    reserveCta: "Reservar una mesa",
    whatsappCta: "WhatsApp",
    image: "/images/Resturant/IMG_0964.JPG",
    meta: ["Abierto todos los días · Desayuno, almuerzo y cena", "Desayuno 7–10 AM · Almuerzo 12–3 PM · Cena 6–9 PM", "Con o sin reserva"],
  },
  chef: {
    eyebrow: "El chef",
    titleLines: ["Una mesa siciliana", "a la orilla del mar"],
    body: "El Chef Luigi cocina como lo hacía su abuela — despacio, con generosidad y con lo que trajeron los botes esa mañana. Pasta artesanal, pescado al fuego y una carta de vinos que conoce bien el Mediterráneo.",
    menuCta: "Explorar el menú",
    bioCta: "Conoce la historia del Chef Luigi →",
    image: "/images/Resturant/RLR_3857.JPG",
    alt: "El Chef Luigi de Vivace Beachfront",
  },
  menus: {
    eyebrow: "Vivace Beachfront",
    title: "Explora los menús",
    cards: [
      {
        key: "food",
        title: "Menú de comida",
        body: "Antipasti, pizzas, pastas artesanales, pesca fresca y más.",
        cta: "Ver menú de comida →",
        image: "/images/Resturant/chloemurdochphotography-314.JPG",
      },
      {
        key: "drinks",
        title: "Menú de bebidas",
        body: "Cócteles, vinos, cervezas locales, jugos naturales y más.",
        cta: "Ver menú de bebidas →",
        image: "/images/Resturant/chloemurdochphotography-293.JPG",
      },
    ],
  },
  ambiance: {
    eyebrow: "De día a noche",
    titleLines: ["Pies en la arena de día,", "luz de velas de noche"],
    body: "Desayunos con las olas, almuerzos largos bajo las palmas y cenas donde lo único que se escucha es el océano y las luces de guirnalda. La música en vivo ambienta las noches de fin de semana. A cualquier hora, la mesa está puesta a unos pasos del agua.",
    slides: [
      { src: "/images/Resturant/RLR_37603.JPG", alt: "Comedor frente al mar de día" },
      { src: "/images/Resturant/RLR_40112.JPG", alt: "Un plato emplatado en Vivace" },
      { src: "/images/exp-dining-sunset-silhouette.jpg", alt: "Cócteles en el bar" },
      { src: "/images/Resturant/DSCF4078(1).JPG", alt: "Cena bajo las luces de guirnalda" },
    ],
  },
  reserve: {
    eyebrow: "Reserva",
    title: "Reserva tu mesa junto al agua",
    body: "Recomendamos reservar para la cena, sobre todo al atardecer. Los huéspedes del resort cenan primero.",
    primary: "Reservar una mesa",
    secondary: "WhatsApp",
    image: "/images/Resturant/chloemurdochphotography-95.JPG",
  },
};

export const restaurantPageContent: Record<Locale, RestaurantCopy> = { en, es };
