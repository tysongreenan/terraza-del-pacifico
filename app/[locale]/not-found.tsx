import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { actionButtonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container flex min-h-screen items-center py-20">
      <section className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-h1 font-bold text-primary ">
          Page not found
        </h1>
        <p className="mt-5 text-lg leading-8 text-foreground/75">
          This page may have moved. Continue exploring the hotel, rooms,
          restaurant, events, or contact us directly on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/es" className={actionButtonVariants({ variant: "primary" })}>
            Go home
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/es/suites"
            className={actionButtonVariants({ variant: "secondary", surface: "light" })}
          >
            Rooms
          </Link>
          <Link
            href="/es/restaurant"
            className={actionButtonVariants({ variant: "secondary", surface: "light" })}
          >
            Restaurant
          </Link>
          <Link
            href="https://wa.me/50684319953"
            className={actionButtonVariants({ variant: "secondary", surface: "light" })}
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
