import { Reveal } from "@/components/home/reveal";
import type { Dictionary } from "@/lib/dictionaries";

export function Location({ dict }: { dict: Dictionary }) {
  const l = dict.location;

  return (
    <section className="flex flex-col md:flex-row">
      <Reveal className="flex w-full flex-col justify-center bg-concept-sand-muted px-8 py-14 md:w-[46%] md:px-16 md:py-20">
        <p className="eyebrow">{l.eyebrow}</p>
        <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.1] text-concept-ocean ">
          {l.title}
        </h2>
        <p className="mt-5 max-w-sm text-body-sm leading-relaxed text-concept-ink-muted">
          {l.distance}
        </p>
        <address className="mt-6 not-italic text-sm leading-relaxed text-concept-ink">
          {l.address}
          <br />
          {l.addressLine2}
          <br />
          {l.addressLine3}
        </address>
      </Reveal>

      <Reveal delay={100} className="relative min-h-[320px] w-full md:w-[54%] md:min-h-[460px]">
        <iframe
          title="Hotel Terraza del Pacífico — Playa Hermosa, Costa Rica"
          src="https://www.google.com/maps?q=9.580177,-84.6141703&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
        />
      </Reveal>
    </section>
  );
}