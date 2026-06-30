import type { Locale } from "@/lib/i18n";

type RestaurantAboutCopy = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };
  philosophy: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
  };
  chefs: {
    eyebrow: string;
    title: string;
    items: {
      name: string;
      role: string;
      bio: string;
      image: string;
      alt: string;
    }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    slides: { src: string; alt: string }[];
  };
  reserve: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    image: string;
  };
};

const en: RestaurantAboutCopy = {
  hero: {
    eyebrow: "Vivace Beachfront",
    title: "Our Story",
    description:
      "A Sicilian kitchen at the edge of the Pacific — born from tradition, shaped by the sea.",
    image: "/images/resort/dining/DSCF40452.JPG",
  },
  philosophy: {
    eyebrow: "Our Philosophy",
    headline: "A shared passion for modern Italian cuisine",
    paragraphs: [
      "Vivace is the result of the union between creativity, tradition, and a love for great food. Our team shares a single purpose: to offer a dining experience where every dish reflects the soul of Italy with a contemporary touch.",
      "Fresh ingredients, artisanal technique, and an atmosphere full of warmth combine to create moments enjoyed with all five senses.",
      "Every detail — from the selection of wines to the presentation of each dish — is designed to invite conversation, enjoyment, and connection. At Vivace, eating is not just an act; it is a celebration of life, flavour, and the art of sharing.",
    ],
  },
  chefs: {
    eyebrow: "The kitchen",
    title: "Our Chefs",
    items: [
      {
        name: "Luigi Tumminello",
        role: "Head Chef",
        bio: "Born in Sicily, Luigi learned to cook at his grandmother's table — slowly, generously, and with whatever the fishing boats brought in that morning. He arrived on the Costa Rican coast with a handmade pasta machine and a wood-fire technique refined over decades. Every plate he sends out is a letter from the Mediterranean, written in Pacific ink.",
        image: "/images/resort/dining/chef-luigi-portrait.jpeg",
        alt: "Chef Luigi Tumminello of Vivace Beachfront",
      },
      {
        name: "Douglas Vázquez",
        role: "Sous Chef",
        bio: "Douglas brings a deep knowledge of local Costa Rican produce and a precision that completes Luigi's vision. Together they bridge two culinary worlds — the flavours of Italy and the freshness of the Pacific — into dishes that feel both familiar and entirely new.",
        image: "/images/resort/dining/chef-douglas-portrait.jpg",
        alt: "Sous Chef Douglas Vázquez of Vivace Beachfront",
      },
    ],
  },
  gallery: {
    eyebrow: "Unique moments",
    title: "Gallery",
    slides: [
      { src: "/images/resort/dining/RLR_37603.JPG", alt: "Full house under string lights at Vivace Beachfront" },
      { src: "/images/resort/dining/chloemurdochphotography-207.JPG", alt: "Two artisan pizzas on wooden serving boards" },
      { src: "/images/resort/dining/chloemurdochphotography-320.JPG", alt: "Steak dinner with red wine" },
      { src: "/images/resort/dining/chloemurdochphotography-293.JPG", alt: "Cocktails at the bar" },
      { src: "/images/resort/dining/1L6A2576.jpg", alt: "Fresh fish with vegetables and sauce" },
      { src: "/images/resort/dining/chloemurdochphotography-234.JPG", alt: "Dining at Vivace Beachfront" },
      { src: "/images/resort/dining/RLR_40112.JPG", alt: "Guests dining under the string lights at night" },
      { src: "/images/resort/dining/RLR_3857.JPG", alt: "Plated entree at Vivace Beachfront" },
    ],
  },
  reserve: {
    eyebrow: "Reserve",
    title: "Book your table by the water",
    body: "Dinner reservations recommended, especially at sunset. Resort guests dine first.",
    cta: "WhatsApp Us",
    image: "/images/resort/dining/restaurant-sunset-silhouette-CBBvMTsI.jpg",
  },
};

const es: RestaurantAboutCopy = {
  hero: {
    eyebrow: "Vivace Beachfront",
    title: "Nuestra Historia",
    description:
      "Una cocina siciliana a la orilla del Pacífico — nacida de la tradición, moldeada por el mar.",
    image: "/images/resort/dining/DSCF40452.JPG",
  },
  philosophy: {
    eyebrow: "Nuestra Filosofía",
    headline: "Una pasión colectiva por la cocina italiana moderna",
    paragraphs: [
      "Vivace es el resultado de la unión entre creatividad, tradición y amor por la buena mesa. Nuestro equipo comparte un mismo propósito: ofrecer una experiencia gastronómica donde cada plato refleje el alma de Italia con un toque contemporáneo.",
      "Ingredientes frescos, técnica artesanal y un ambiente lleno de calidez se combinan para crear momentos que se disfrutan con los cinco sentidos.",
      "Cada detalle, desde la selección de los vinos hasta la presentación de cada plato, está pensado para invitar a la conversación, al disfrute y a la conexión. En Vivace, comer no es solo un acto, es una celebración de la vida, del sabor y del arte de compartir.",
    ],
  },
  chefs: {
    eyebrow: "La cocina",
    title: "Nuestros Chefs",
    items: [
      {
        name: "Luigi Tumminello",
        role: "Chef Principal",
        bio: "Nacido en Sicilia, Luigi aprendió a cocinar en la mesa de su abuela — despacio, con generosidad y con lo que trajeron los botes esa mañana. Llegó a la costa de Costa Rica con una máquina de pasta artesanal y una técnica de fuego de leña perfeccionada durante décadas. Cada plato que envía es una carta del Mediterráneo, escrita con tinta del Pacífico.",
        image: "/images/resort/dining/chef-luigi-portrait.jpeg",
        alt: "Chef Luigi Tumminello de Vivace Beachfront",
      },
      {
        name: "Douglas Vázquez",
        role: "Subchef",
        bio: "Douglas aporta un profundo conocimiento de los productos locales de Costa Rica y una precisión que complementa la visión de Luigi. Juntos unen dos mundos culinarios — los sabores de Italia y la frescura del Pacífico — en platos que se sienten a la vez familiares y completamente nuevos.",
        image: "/images/resort/dining/chef-douglas-portrait.jpg",
        alt: "Subchef Douglas Vázquez de Vivace Beachfront",
      },
    ],
  },
  gallery: {
    eyebrow: "Momentos únicos",
    title: "Galería",
    slides: [
      { src: "/images/resort/dining/RLR_37603.JPG", alt: "Restaurante lleno bajo las luces de guirnalda en Vivace Beachfront" },
      { src: "/images/resort/dining/chloemurdochphotography-207.JPG", alt: "Dos pizzas artesanales en tablas de madera" },
      { src: "/images/resort/dining/chloemurdochphotography-320.JPG", alt: "Cena de carne con vino tinto" },
      { src: "/images/resort/dining/chloemurdochphotography-293.JPG", alt: "Cócteles en el bar" },
      { src: "/images/resort/dining/1L6A2576.jpg", alt: "Pescado fresco con vegetales y salsa" },
      { src: "/images/resort/dining/chloemurdochphotography-234.JPG", alt: "Comedor en Vivace Beachfront" },
      { src: "/images/resort/dining/RLR_40112.JPG", alt: "Comensales bajo las luces de guirnalda de noche" },
      { src: "/images/resort/dining/RLR_3857.JPG", alt: "Plato principal en Vivace Beachfront" },
    ],
  },
  reserve: {
    eyebrow: "Reserva",
    title: "Reserva tu mesa junto al agua",
    body: "Recomendamos reservar para la cena, sobre todo al atardecer. Los huéspedes del resort cenan primero.",
    cta: "WhatsApp",
    image: "/images/resort/dining/restaurant-sunset-silhouette-CBBvMTsI.jpg",
  },
};

export const restaurantAboutContent: Record<Locale, RestaurantAboutCopy> = { en, es };
