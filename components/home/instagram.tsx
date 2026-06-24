import { ElfsightWidget } from "@/components/elfsight-widget";
import { Reveal } from "@/components/home/reveal";
import type { Dictionary } from "@/lib/dictionaries";

export function Instagram({ dict }: { dict: Dictionary }) {
  const appId = process.env.NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_ID;
  if (!appId) return null;

  const ig = dict.instagram;
  return (
    <section className="bg-concept-sand-muted px-6 py-section-sm md:px-12 md:py-section">
      <div className="container">
        <Reveal className="text-center md:text-left">
          <p className="eyebrow">{ig.eyebrow}</p>
          <h2 className="mt-3 font-concept text-h2 font-medium text-concept-ocean ">
            {ig.title}
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <ElfsightWidget appId={appId} />
        </Reveal>
      </div>
    </section>
  );
}