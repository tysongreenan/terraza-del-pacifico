import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

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
          <Link href="/es" className={buttonVariants({ variant: "accent" })}>
            Go home
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/es/habitaciones"
            className={buttonVariants({ variant: "outline" })}
          >
            Rooms
          </Link>
          <Link
            href="/es/restaurante"
            className={buttonVariants({ variant: "outline" })}
          >
            Restaurant
          </Link>
          <Link
            href="https://wa.me/50684319953"
            className={buttonVariants({ variant: "outline" })}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
