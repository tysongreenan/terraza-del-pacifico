import { Reveal } from "@/components/home/reveal";
import type { Dictionary } from "@/lib/dictionaries";

export function Welcome({ dict }: { dict: Dictionary }) {
  const w = dict.welcome;

  return (
    <section id="welcome" className="scroll-mt-20 bg-concept-sand px-6 py-16 text-center md:px-12 md:py-24">
      <div className="container max-w-4xl">
        <Reveal>
          <p className="eyebrow">{w.eyebrow}</p>
          {w.title && <h2 className="sr-only">{w.title}</h2>}
          <p className="mx-auto mt-5 font-concept text-2xl font-normal leading-[1.32] text-concept-ink md:text-4xl">
            {w.body}
          </p>

          <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 border border-[#ece5d8] md:grid-cols-4">
            {w.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col border-[#ece5d8] px-4 py-7 [&:not(:nth-child(2n))]:border-r [&:nth-child(-n+2)]:border-b md:border-b-0 md:px-6 md:[&:not(:last-child)]:border-r"
              >
                <dd className="font-concept text-4xl font-medium text-concept-ocean md:text-[42px]">
                  {stat.value}
                </dd>
                <dt className="mt-1.5 text-xs font-medium uppercase tracking-[0.1em] text-[#6f6a62]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}