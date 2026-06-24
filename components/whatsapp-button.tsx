import { MessageCircle } from "lucide-react";

// Floating click-to-chat button, rendered once in the root layout (all pages).
// Number comes from NEXT_PUBLIC_WHATSAPP (digits only, e.g. 50684319953).
export function WhatsAppButton({ label = "WhatsApp" }: { label?: string }) {
  const n = process.env.NEXT_PUBLIC_WHATSAPP;
  if (!n) return null;
  return (
    <a
      href={`https://wa.me/${n}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
