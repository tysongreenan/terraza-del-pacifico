"use client";

import { Plus } from "lucide-react";
import posthog from "posthog-js";
import { Reveal } from "@/components/home/reveal";
import type { Dictionary } from "@/lib/dictionaries";

export function Faq({ dict }: { dict: Dictionary }) {
  const f = dict.faq;

  return (
    <section className="bg-background py-section">
      <div className="container max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow">{f.eyebrow}</p>
          <h2 className="mt-4 font-concept text-h1 font-medium leading-[1.1] text-concept-ocean">
            {f.title}
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 divide-y divide-border/70 border-y border-border/70">
          {f.items.map((item) => (
            <details
              key={item.q}
              className="group"
              onToggle={(e) => {
                if ((e.currentTarget as HTMLDetailsElement).open) {
                  posthog.capture("faq_expanded", { question: item.q });
                }
              }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-body font-medium text-concept-ink transition-colors hover:text-concept-ocean [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="pb-5 pr-9 text-body-sm leading-relaxed text-concept-ink-muted">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
