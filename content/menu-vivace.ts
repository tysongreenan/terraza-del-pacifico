import type { Locale } from "@/lib/i18n";

// Vivace Beachfront menu — transcribed from the restaurant's EN/ES menus.
// Prices in Costa Rican colones (₡), taxes included. Edit prices here.

type Bi = Record<Locale, string>;

export type MenuItem = {
  name: Bi;
  /** Optional supporting description; empty string hides it. */
  desc: Bi;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: Bi;
  title: Bi;
  /** Optional note shown under the category (e.g. side-dish rules). */
  note?: Bi;
  items: MenuItem[];
};

const t = (en: string, es: string): Bi => ({ en, es });

export const vivaceMenu: MenuCategory[] = [
  {
    id: "appetizers",
    label: t("Appetizers", "Entradas"),
    title: t("Appetizers", "Entradas"),
    items: [
      { name: t("Tuna Carpaccio", "Carpaccio de atún"), desc: t("with lemon and strawberries gel", "con gel de limón y fresas"), price: "₡10.000" },
      { name: t("Fresh Salmon Carpaccio", "Carpaccio de salmón fresco"), desc: t("with lettuce", "con lechuga"), price: "₡10.000" },
      { name: t("Salmon Tartare", "Tartar de salmón"), desc: t("with coconut milk and pistachio", "con leche de coco y pistacho"), price: "₡10.000" },
      { name: t("Beef Carpaccio", "Carpaccio de res"), desc: t("with green apple and Parmigiano cheese", "con manzana verde y queso parmigiano"), price: "₡9.000" },
      { name: t("Tuna Tartare", "Tartar de atún"), desc: t("with mango, avocado, sesame seeds, and soy sauce", "con mango, aguacate, ajonjolí, salsa de soya"), price: "₡9.000" },
      { name: t("Chicken Caesar Salad", "Ensalada César con pollo"), desc: t("with lettuce, chicken breast, bacon, croutons, and Parmigiano cheese", "con lechuga, pechuga de pollo, tocineta, crotones, queso parmigiano"), price: "₡9.000" },
      { name: t("Mixed Ceviche", "Ceviche mixto"), desc: t("", ""), price: "₡8.000" },
      { name: t("Shrimp Ceviche", "Ceviche de camarones"), desc: t("", ""), price: "₡7.000" },
      { name: t("Fish Ceviche", "Ceviche de pescado"), desc: t("", ""), price: "₡7.000" },
      { name: t("Shrimp Tacos", "Tacos de camarones"), desc: t("", ""), price: "₡7.000" },
      { name: t("Fried Calamari", "Calamares fritos"), desc: t("with country-style potatoes", "con papas country"), price: "₡6.500" },
      { name: t("Caprese Salad", "Ensalada Caprese"), desc: t("", ""), price: "₡6.500" },
      { name: t("Terraza Salad", "Ensalada Terraza"), desc: t("with mixed greens, avocado, mango, and passion fruit dressing", "con ensalada mixta, aguacate, mango, aderezo de maracuyá"), price: "₡6.500" },
    ],
  },
  {
    id: "pizzas",
    label: t("Pizzas", "Pizzas"),
    title: t("Pizzas", "Pizzas"),
    items: [
      { name: t("Margherita", "Margherita"), desc: t("", ""), price: "₡8.500" },
      { name: t("Prosciutto Crudo", "Prosciutto crudo"), desc: t("", ""), price: "₡10.000" },
      { name: t("Margherita with Shrimp", "Margherita con camarones"), desc: t("", ""), price: "₡12.000" },
      { name: t("Porcini Mushrooms", "Hongos porcini"), desc: t("", ""), price: "₡13.000" },
    ],
  },
  {
    id: "pastas",
    label: t("Pastas", "Pastas"),
    title: t("Pastas", "Pastas"),
    items: [
      { name: t("Fettuccine with Lobster and Cherry Tomatoes", "Fettuccine con langosta y tomate cherry"), desc: t("", ""), price: "₡28.000" },
      { name: t("Fettuccine with Seafood", "Fettuccine con mariscos"), desc: t("", ""), price: "₡18.000" },
      { name: t("Spaghetti with Salmon, Shrimp and Cherry Tomatoes", "Spaghetti con salmón, camarones y tomate cherry"), desc: t("", ""), price: "₡14.000" },
      { name: t("Spaghetti with Mussels and Shrimp", "Spaghetti con mejillones y camarones"), desc: t("", ""), price: "₡14.000" },
      { name: t("Fettuccine with Porcini Mushrooms", "Fettuccine con hongos porcini"), desc: t("", ""), price: "₡14.000" },
      { name: t("Spaghetti with Basil Pesto and Chicken or Shrimp", "Spaghetti con pesto de albahaca y pollo o camarones"), desc: t("", ""), price: "₡12.000" },
      { name: t("Fettuccine alla Bolognese", "Fettuccine alla Bolognese"), desc: t("", ""), price: "₡10.000" },
      { name: t("Rigatoni alla Norma", "Rigatoni norma"), desc: t("with fried eggplant, tomato sauce, Parmigiano cheese, and basil", "berenjena frita, salsa de tomate, queso parmigiano, albahaca"), price: "₡10.000" },
      { name: t("Ricotta and Spinach Ravioli in Bolognese Sauce", "Ravioli de ricotta y espinacas en salsa bolognese"), desc: t("", ""), price: "₡12.000" },
      { name: t("Ricotta and Spinach Ravioli in Tomato Sauce", "Ravioli de ricotta y espinacas en salsa de tomate"), desc: t("", ""), price: "₡10.000" },
      { name: t("Ricotta and Spinach Ravioli in White Sauce", "Ravioli de ricotta y espinacas en salsa blanca"), desc: t("", ""), price: "₡10.000" },
      { name: t("Gnocchi in Bolognese Sauce", "Gnocchi en salsa bolognese"), desc: t("", ""), price: "₡12.000" },
      { name: t("Gnocchi with Basil Pesto", "Gnocchi con pesto de albahaca"), desc: t("", ""), price: "₡10.000" },
    ],
  },
  {
    id: "fish",
    label: t("Fish", "Pescado"),
    title: t("Fish", "Pescado"),
    note: t(
      "You can choose 2 side dishes from vegetables, mashed potatoes, country-style potatoes, french fries, or mixed salad.",
      "Eliges 2 acompañamientos entre vegetales, puré de papas, papas country, papas a la francesa o ensalada mixta."
    ),
    items: [
      { name: t("Seafood Platter for Two", "Mariscada para dos personas"), desc: t("", ""), price: "₡46.000" },
      { name: t("Grilled Lobster", "Langosta a la parrilla"), desc: t("", ""), price: "₡30.000" },
      { name: t("Grilled Octopus Tentacles", "Tentáculos de pulpo a la parrilla"), desc: t("sous vide", "sous vide"), price: "₡20.000" },
      { name: t("Sea Bass in Shrimp Sauce", "Corvina en salsa de camarones"), desc: t("", ""), price: "₡14.000" },
      { name: t("Sicilian-style Sea Bream", "Dorado a la Siciliana"), desc: t("with onion, cherry tomatoes, and capers", "con cebolla, tomate cherry, alcaparras"), price: "₡14.000" },
      { name: t("Sesame-crusted Tuna", "Atún empanizado con ajonjolí"), desc: t("with red onion marmalade", "con mermelada de cebolla morada"), price: "₡14.000" },
      { name: t("Salmon in Yogurt and Lemon Sauce", "Salmón en salsa de yogurt y limón"), desc: t("", ""), price: "₡14.000" },
      { name: t("Tempura Sea Bream", "Dorado en tempura"), desc: t("", ""), price: "₡12.000" },
      { name: t("Fried Red Snapper", "Pargo frito"), desc: t("", ""), price: "₡11.000" },
      { name: t("Fried Calamari", "Calamares fritos"), desc: t("with country-style potatoes and mixed salad", "con papas country y ensalada mixta"), price: "₡10.000" },
      { name: t("Shrimp Rice", "Arroz con camarones"), desc: t("", ""), price: "₡7.000" },
      { name: t("Fish Fingers", "Dedos de pescado"), desc: t("", ""), price: "₡7.000" },
    ],
  },
  {
    id: "meat",
    label: t("Meat", "Carne"),
    title: t("Meat", "Carne"),
    note: t(
      "You can choose 2 side dishes from vegetables, mashed potatoes, country-style potatoes, French fries, or mixed salad.",
      "Eliges 2 acompañamientos entre vegetales, puré de papas, papas country, papas a la francesa o ensalada mixta."
    ),
    items: [
      { name: t("Ossobuco", "Ossobuco"), desc: t("sous vide", "sous vide"), price: "₡20.000" },
      { name: t("Pork Tenderloin with Bacon and Honey Mustard Sauce", "Lomito de cerdo con tocineta y salsa de mostaza miel"), desc: t("sous vide", "sous vide"), price: "₡16.000" },
      { name: t("Cordon Bleu with Parmigiano Cheese Cream Sauce", "Cordon bleu con crema de queso parmigiano"), desc: t("", ""), price: "₡12.000" },
      { name: t("Chicken Escalopes with Crimini Mushrooms in White Sauce", "Escalopes de pollo con hongos crimini en salsa blanca"), desc: t("", ""), price: "₡10.000" },
      { name: t("Angus Beef Burger", "Hamburguesa Angus"), desc: t("", ""), price: "₡10.000" },
      { name: t("Pizzaiola Chicken", "Pollo a la pizzaiola"), desc: t("breaded chicken breast with tomato sauce and mozzarella", "pechuga empanizada, salsa de tomate, mozzarella"), price: "₡10.000" },
      { name: t("Grilled Chicken Breast", "Pechuga de pollo a la parrilla"), desc: t("", ""), price: "₡8.000" },
      { name: t("Chicken Rice", "Arroz con pollo"), desc: t("", ""), price: "₡7.000" },
      { name: t("Chicken Fingers", "Dedos de pollo"), desc: t("", ""), price: "₡7.000" },
    ],
  },
  {
    id: "drinks",
    label: t("Drinks", "Bebidas"),
    title: t("Drinks", "Bebidas"),
    items: [
      { name: t("Fresh-squeezed Juice", "Jugo natural"), desc: t("orange, watermelon, passion fruit, pineapple", "naranja, sandía, maracuyá, piña"), price: "₡2.500" },
      { name: t("Natural Smoothie", "Batido natural"), desc: t("mango, banana or strawberry · milk or water", "mango, banano o fresa · leche o agua"), price: "₡3.500" },
      { name: t("Soft Drinks", "Refrescos"), desc: t("Coca-Cola, Sprite, Fanta", "Coca-Cola, Sprite, Fanta"), price: "₡2.000" },
      { name: t("Imperial · local draft", "Imperial · cerveza nacional"), desc: t("", ""), price: "₡2.500" },
      { name: t("Imported Beer", "Cerveza importada"), desc: t("", ""), price: "₡4.000" },
      { name: t("House Wine · Glass", "Vino de la casa · copa"), desc: t("white or red", "blanco o tinto"), price: "₡5.000" },
      { name: t("Bottle of Wine", "Botella de vino"), desc: t("selection changes weekly", "selección varía semanalmente"), price: "₡28.000+" },
      { name: t("Cocktails", "Cócteles"), desc: t("ask your server for today's selection", "consulta a tu mesero la selección del día"), price: "₡6.500" },
      { name: t("Coffee & Espresso", "Café y espresso"), desc: t("espresso, americano, cappuccino, latte", "espresso, americano, capuchino, latte"), price: "₡2.000" },
      { name: t("Water", "Agua"), desc: t("still or sparkling", "sin gas o con gas"), price: "₡1.500" },
    ],
  },
  {
    id: "dessert",
    label: t("Dessert", "Postres"),
    title: t("Dessert", "Postres"),
    items: [
      { name: t("Desserts of the Day Display", "Postres del día de nuestra vitrina"), desc: t("", ""), price: "₡4.600" },
      { name: t("Carrot Cake", "Queque de zanahoria"), desc: t("", ""), price: "₡4.600" },
      { name: t("Chocolate Cake", "Queque de chocolate"), desc: t("", ""), price: "₡4.600" },
      { name: t("Tiramisù", "Tiramisú"), desc: t("", ""), price: "₡4.600" },
      { name: t("Panna Cotta", "Panna Cotta"), desc: t("", ""), price: "₡4.600" },
      { name: t("Gelato Cup 6oz", "Tarrina de gelato 6oz"), desc: t("", ""), price: "₡4.000" },
      { name: t("Gelato Cup 3oz", "Tarrina de gelato 3oz"), desc: t("", ""), price: "₡2.500" },
    ],
  },
];

export const menuPriceNote: Record<Locale, string> = {
  en: "Prices in Costa Rican colones (₡) · taxes included",
  es: "Precios en colones costarricenses (₡) · impuestos incluidos",
};

export const menuSubhead: Record<Locale, string> = {
  en: "Vivace Beachfront · The Menu",
  es: "Vivace Beachfront · La Carta",
};
