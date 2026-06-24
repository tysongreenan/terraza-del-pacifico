export const siteUrl = "https://terrazadelpacifico.com";
export const whatsappHref = "https://wa.me/50684319953";
// Live booking engine (Orbe). All "reserve / check availability" CTAs route here.
// Override with NEXT_PUBLIC_BOOKING_URL if the engine URL changes.
export const bookingHref =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://reservations.orbebooking.com/Search/Init/P2YSt/en";
export const eventsEmail = "mercadeo1@terrazadelpacifico.com";
