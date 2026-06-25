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
    image: string;
  };
};

const en: RestaurantCopy = {
  hero: {
    eyebrow: "Vivace Beachfront",
    titleLines: ["Mediterranean Soul,", "Pacific Setting"],
    description:
      "Sicilian Chef Luigi brings southern Italy to the water's edge — fresh catch, handmade pasta, sand beneath your table.",
    reserveCta: "WhatsApp Us",
    whatsappCta: "See Menu",
    image: "/images/Resturant/1L6A2551.jpg",
    meta: ["Open daily · Breakfast, Lunch & Dinner", "Breakfast 7–10 AM · Lunch 12–3 PM · Dinner 6–9 PM", "Walk-ins & reservations"],
  },
  chef: {
    eyebrow: "The chef",
    titleLines: ["A Sicilian table at", "the edge of the surf"],
    body: "Chef Luigi cooks the way his grandmother did — slowly, generously, and with whatever the boats brought in that morning. Handmade pasta, wood-fire fish, and a wine list that knows its way around the Mediterranean.",
    menuCta: "Explore the Menu",
    bioCta: "Read Chef Luigi's story →",
    image: "/images/chef-luigi-BOxS8-8w.jpg",
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
      { src: "/images/Photos from Expedia/Expedia photos/b7f96664.jpg", alt: "Open-air beachfront restaurant dining room" },
      { src: "/images/Photos from Expedia/Common areas/Breakfast lunch and dinner spot.webp", alt: "Restaurant terrace and lawn beside the Pacific" },
      { src: "/images/restaurant-dining-nygPbVtS.jpg", alt: "Beachfront dining by day" },
      { src: "/images/restaurant-view-2-Cv55rCA1.jpg", alt: "The restaurant open to the Pacific" },
      { src: "/images/Resturant/1L6A2507.jpg", alt: "Soup served at a restaurant table" },
      { src: "/images/Resturant/1L6A2511.jpg", alt: "Tomato soup with croutons" },
      { src: "/images/Resturant/1L6A2515.jpg", alt: "Fresh appetizer and tropical drink" },
      { src: "/images/Resturant/1L6A2526.jpg", alt: "Tuna appetizer at the table" },
      { src: "/images/Resturant/1L6A2529.jpg", alt: "Guest dining with tuna appetizer" },
      { src: "/images/Resturant/1L6A2547.jpg", alt: "Plated steak with vegetables" },
      { src: "/images/Resturant/1L6A2550.jpg", alt: "Steak entree with salad" },
      { src: "/images/Resturant/1L6A2551.jpg", alt: "Steak entree with tropical drink" },
      { src: "/images/Resturant/1L6A2555.jpg", alt: "Entree viewed from above" },
      { src: "/images/Resturant/1L6A2560.jpg", alt: "Skewer over quinoa salad" },
      { src: "/images/Resturant/1L6A2563.jpg", alt: "Quinoa salad with skewer" },
      { src: "/images/Resturant/1L6A2576.jpg", alt: "Fish with vegetables and sauce" },
      { src: "/images/Resturant/chloemurdochphotography-207.JPG", alt: "Two pizzas on serving boards" },
      { src: "/images/Resturant/chloemurdochphotography-312.JPG", alt: "Dressing poured over a seafood salad" },
      { src: "/images/Resturant/chloemurdochphotography-320.JPG", alt: "Steak dinner with red wine" },
      { src: "/images/Resturant/chloemurdochphotography-973.JPG", alt: "Lobster dish with wine by the pool" },
      { src: "/images/Resturant/chloemurdochphotography-2932.JPG", alt: "Cocktails at the bar" },
      { src: "/images/Resturant/chloemurdochphotography-602.JPG", alt: "Tacos and beer" },
      { src: "/images/Resturant/chloemurdochphotography-2252.JPG", alt: "Latte served at the restaurant" },
      { src: "/images/restaurant-sunset-silhouette-CBBvMTsI.jpg", alt: "Sunset drinks by the ocean" },
      { src: "/images/restaurant-night-DDkbFUTM.jpg", alt: "Dinner under the string lights" },
    ],
  },
  reserve: {
    eyebrow: "Reserve",
    title: "Book your table by the water",
    body: "Dinner reservations recommended, especially at sunset. Resort guests dine first.",
    primary: "WhatsApp Us",
    image: "/images/Resturant/1L6A2634.jpg",
  },
};

const es: RestaurantCopy = {
  hero: {
    eyebrow: "Vivace Beachfront",
    titleLines: ["Alma mediterránea,", "escenario Pacífico"],
    description:
      "El chef siciliano Luigi trae el sur de Italia a la orilla del agua — pesca fresca, pasta artesanal y arena bajo tu mesa.",
    reserveCta: "WhatsApp",
    whatsappCta: "Ver menú",
    image: "/images/Resturant/1L6A2551.jpg",
    meta: ["Abierto todos los días · Desayuno, almuerzo y cena", "Desayuno 7–10 AM · Almuerzo 12–3 PM · Cena 6–9 PM", "Con o sin reserva"],
  },
  chef: {
    eyebrow: "El chef",
    titleLines: ["Una mesa siciliana", "a la orilla del mar"],
    body: "El Chef Luigi cocina como lo hacía su abuela — despacio, con generosidad y con lo que trajeron los botes esa mañana. Pasta artesanal, pescado al fuego y una carta de vinos que conoce bien el Mediterráneo.",
    menuCta: "Explorar el menú",
    bioCta: "Conoce la historia del Chef Luigi →",
    image: "/images/chef-luigi-BOxS8-8w.jpg",
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
      { src: "/images/Photos from Expedia/Expedia photos/b7f96664.jpg", alt: "Comedor abierto del restaurante frente al mar" },
      { src: "/images/Photos from Expedia/Common areas/Breakfast lunch and dinner spot.webp", alt: "Terraza del restaurante y jardin junto al Pacifico" },
      { src: "/images/restaurant-dining-nygPbVtS.jpg", alt: "Comedor frente al mar de día" },
      { src: "/images/restaurant-view-2-Cv55rCA1.jpg", alt: "El restaurante abierto hacia el Pacífico" },
      { src: "/images/Resturant/1L6A2507.jpg", alt: "Sopa servida en una mesa del restaurante" },
      { src: "/images/Resturant/1L6A2511.jpg", alt: "Sopa de tomate con crutones" },
      { src: "/images/Resturant/1L6A2515.jpg", alt: "Entrada fresca y bebida tropical" },
      { src: "/images/Resturant/1L6A2526.jpg", alt: "Entrada de atun en la mesa" },
      { src: "/images/Resturant/1L6A2529.jpg", alt: "Comensal con entrada de atun" },
      { src: "/images/Resturant/1L6A2547.jpg", alt: "Plato de carne con vegetales" },
      { src: "/images/Resturant/1L6A2550.jpg", alt: "Carne con ensalada" },
      { src: "/images/Resturant/1L6A2551.jpg", alt: "Carne con bebida tropical" },
      { src: "/images/Resturant/1L6A2555.jpg", alt: "Plato principal visto desde arriba" },
      { src: "/images/Resturant/1L6A2560.jpg", alt: "Brocheta sobre ensalada de quinoa" },
      { src: "/images/Resturant/1L6A2563.jpg", alt: "Ensalada de quinoa con brocheta" },
      { src: "/images/Resturant/1L6A2576.jpg", alt: "Pescado con vegetales y salsa" },
      { src: "/images/Resturant/chloemurdochphotography-207.JPG", alt: "Dos pizzas en tablas de servir" },
      { src: "/images/Resturant/chloemurdochphotography-312.JPG", alt: "Aderezo servido sobre ensalada de mariscos" },
      { src: "/images/Resturant/chloemurdochphotography-320.JPG", alt: "Cena de carne con vino tinto" },
      { src: "/images/Resturant/chloemurdochphotography-973.JPG", alt: "Langosta con vino junto a la piscina" },
      { src: "/images/Resturant/chloemurdochphotography-2932.JPG", alt: "Cocteles en el bar" },
      { src: "/images/Resturant/chloemurdochphotography-602.JPG", alt: "Tacos y cerveza" },
      { src: "/images/Resturant/chloemurdochphotography-2252.JPG", alt: "Latte servido en el restaurante" },
      { src: "/images/restaurant-sunset-silhouette-CBBvMTsI.jpg", alt: "Bebidas al atardecer junto al océano" },
      { src: "/images/restaurant-night-DDkbFUTM.jpg", alt: "Cena bajo las luces de guirnalda" },
    ],
  },
  reserve: {
    eyebrow: "Reserva",
    title: "Reserva tu mesa junto al agua",
    body: "Recomendamos reservar para la cena, sobre todo al atardecer. Los huéspedes del resort cenan primero.",
    primary: "WhatsApp",
    image: "/images/Resturant/1L6A2634.jpg",
  },
};

export const restaurantPageContent: Record<Locale, RestaurantCopy> = { en, es };
