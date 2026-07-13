import type { Dictionary } from "@/lib/dictionaries";
import { actionButtonVariants } from "@/components/ui/button";
import { bookingHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HeroBookingBar({ dict }: { dict: Dictionary }) {
  const b = dict.bookingBar;

  return (
    <div className="relative z-20 mx-auto w-full max-w-[1040px] rounded-sm bg-white/95 shadow-[0_14px_40px_rgba(16,58,77,0.18)] backdrop-blur-md">
      <div className="flex flex-col items-center gap-4 px-6 py-5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">
        <div>
          <p className="text-micro font-semibold uppercase tracking-[0.16em] text-[#9a9282]">
            {b.title}
          </p>
          <p className="mt-1 text-body-sm text-concept-ink">{b.subtitle}</p>
        </div>
        {/* Reservations are handled by the direct-book engine (opens in a new tab). */}
        <a
          href={bookingHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(actionButtonVariants({ variant: "primary", size: "lg" }), "w-full sm:w-auto")}
        >
          {b.cta}
        </a>
      </div>
    </div>
  );
}
