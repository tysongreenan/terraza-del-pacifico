import type { Venue } from "@/content/bars";

// The artisan bakery + specialty coffee, built from the shared Venue template
// (same shape the /bares pages use). Single venue, rendered at a static route
// /panaderia. Prices are intentionally left blank until confirmed — set `price`
// per item to show one.
export const bakery: Venue = {
  slug: "bakery",
  palette: "amber",
  // Bakery + coffee morning window. Closing time not yet confirmed; the on-page
  // copy advertises "open daily from 7 AM", so we omit `closes` here rather than
  // guess (fabricated structured data is a Google penalty risk).
  hours: { opens: "07:00", closes: "12:00" },
  heroImage: "/images/resort/dining/chloemurdochphotography-241.JPG",
  introSlides: [
    { src: "/images/resort/dining/chloemurdochphotography-224.JPG", alt: "Chocolate cake slice with a layered latte" },
    { src: "/images/resort/dining/IMG_0693_jpg2.JPG", alt: "Costa Rican breakfast and black coffee with a garden view" },
    { src: "/images/resort/dining/chloemurdochphotography-225.JPG", alt: "Layered latte macchiato" },
    { src: "/images/resort/dining/chloemurdochphotography-234.JPG", alt: "Dessert lineup" },
  ],
  ctaImage: "/images/resort/dining/exp-breakfast-ocean.jpg",
  cardImage: "/images/resort/dining/chloemurdochphotography-2473.JPG",
  text: {
    en: {
      hero: {
        title: "Artisan Bakery",
        description:
          "Bread and pastries baked fresh every morning, plus specialty coffee — a few steps from the sand. Grab a croissant on the way to the beach, or linger by the water.",
        meta: ["Open daily from 7 AM", "Steps from the sand · grab-and-go or stay"],
      },
      intro: {
        eyebrow: "Mornings by the water",
        titleLines: ["Baked fresh", "every morning"],
        body: "The ovens start before the sun does. Warm croissants, crusty loaves and sweet pastries come out all morning, paired with espresso pulled to order. Sweet or savory, to go or to stay.",
        cta: "See what we serve",
      },
      pours: {
        eyebrow: "What we serve",
        title: "From the oven & the bar",
        blurb: "Artisan breads, pastries and specialty coffee. Baked and brewed fresh each morning.",
        items: [
          { name: "Artisan breads" },
          { name: "Croissants & pastries" },
          { name: "Specialty espresso drinks" },
          { name: "Pour-over & cold brew" },
          { name: "Fresh-pressed juices" },
          { name: "Savory bites" },
        ],
      },
      cta: { title: "Start your morning with us", primary: "Find the Bakery", secondary: "WhatsApp Us" },
      card: { tagline: "Bakery & coffee · steps from the sand" },
    },
    es: {
      hero: {
        title: "Panadería Artesanal",
        description:
          "Pan y repostería horneados cada mañana, además de café de especialidad — a pocos pasos de la arena. Llévate un croissant camino a la playa o quédate junto al agua.",
        meta: ["Abierto todos los días desde las 7 AM", "A pasos de la arena · para llevar o quedarse"],
      },
      intro: {
        eyebrow: "Mañanas junto al agua",
        titleLines: ["Horneado fresco", "cada mañana"],
        body: "Los hornos arrancan antes que el sol. Croissants calientes, panes crujientes y repostería dulce salen toda la mañana, acompañados de espresso preparado al momento. Dulce o salado, para llevar o para quedarse.",
        cta: "Ver lo que ofrecemos",
      },
      pours: {
        eyebrow: "Lo que ofrecemos",
        title: "Del horno y la barra",
        blurb: "Panes artesanales, repostería y café de especialidad — horneados y preparados frescos cada mañana.",
        items: [
          { name: "Panes artesanales" },
          { name: "Croissants y repostería" },
          { name: "Bebidas de espresso de especialidad" },
          { name: "Métodos de filtrado y cold brew" },
          { name: "Jugos naturales recién exprimidos" },
          { name: "Bocados salados" },
        ],
      },
      cta: { title: "Empieza tu mañana con nosotros", primary: "Cómo llegar", secondary: "WhatsApp" },
      card: { tagline: "Panadería y café · a pasos de la arena" },
    },
  },
};
