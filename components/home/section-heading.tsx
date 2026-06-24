import { cn } from "@/lib/utils";
import { Reveal } from "@/components/home/reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.18em]",
            dark ? "text-accent" : "text-accent"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-h2 font-bold leading-tight md:text-[2.75rem]",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-foreground/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
