import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { bookingHref } from "@/lib/site";

export function HeroBookingBar({ dict }: { dict: Dictionary }) {
  const b = dict.bookingBar;

  return (
    <div className="relative z-20 mx-auto w-full max-w-[1040px] rounded-sm bg-white/95 shadow-[0_14px_40px_rgba(16,58,77,0.18)] backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="flex flex-1 flex-col border-b border-[#eae4d8] px-6 py-4 text-left md:border-b-0 md:border-r">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9a9282]">
            {b.checkIn}
          </span>
          <span className="mt-1 text-[15px] text-concept-ink">
            {b.checkInPlaceholder}
          </span>
        </div>
        <div className="flex flex-1 flex-col border-b border-[#eae4d8] px-6 py-4 text-left md:border-b-0 md:border-r">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9a9282]">
            {b.checkOut}
          </span>
          <span className="mt-1 text-[15px] text-concept-ink">
            {b.checkOutPlaceholder}
          </span>
        </div>
        <div className="flex flex-1 flex-col border-b border-[#eae4d8] px-6 py-4 text-left md:border-b-0 md:border-r">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9a9282]">
            {b.guests}
          </span>
          <span className="mt-1 text-[15px] text-concept-ink">
            {b.guestsDefault}
          </span>
        </div>
        <div className="flex items-center p-3.5 md:p-3.5">
          {/* SiteMinder embed replaces this link once NEXT_PUBLIC_SITEMINDER_PROPERTY_ID is set. */}
          <Link
            href={bookingHref}
            className="inline-flex w-full items-center justify-center rounded-sm bg-concept-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1a1611] transition-opacity hover:opacity-90 md:w-auto"
          >
            {b.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}