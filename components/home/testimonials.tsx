import { ElfsightWidget } from "@/components/elfsight-widget";
import { Reveal } from "@/components/home/reveal";
import type { Dictionary } from "@/lib/dictionaries";

export function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials;
  const reviewsId = process.env.NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID;

  return (
    <section className="bg-concept-sand px-6 py-16 text-center md:px-12 md:py-24">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          {t.title && (
            <h2 className="mt-4 font-concept text-3xl font-medium leading-[1.12] text-concept-ink md:text-[46px]">
              {t.title}
            </h2>
          )}
        </Reveal>

        {reviewsId ? (
          <Reveal className="mt-10">
            <ElfsightWidget appId={reviewsId} />
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
            {t.items.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <figure>
                  <div
                    className="text-lg tracking-[0.3em] text-concept-gold"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>
                  <blockquote className="mt-4 font-concept text-xl italic leading-snug text-concept-ink md:text-[23px]">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-[#8a8478]">
                    {item.author}
                    {item.meta ? ` · ${item.meta}` : ""}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}