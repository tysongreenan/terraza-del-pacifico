export const siteUrl = "https://terrazadelpacifico.com";
export const whatsappHref = "https://wa.me/50684319953";
// Live booking engine (direct-book). All "reserve / check availability" CTAs route here.
// Override with NEXT_PUBLIC_BOOKING_URL if the engine URL changes.
export const bookingHref =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://direct-book.com/properties/hotelterrazadelpacifico?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&trackPage=yes";
export const eventsEmail = "mercadeo1@terrazadelpacifico.com";
