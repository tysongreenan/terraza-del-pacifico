"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import posthog from "posthog-js";
import { actionButtonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { whatsappHref, eventsEmail } from "@/lib/site";

type Status = "idle" | "submitting" | "sent" | "fallback";

const fieldBase =
  "w-full border-0 border-b border-[#d3cab6] bg-transparent py-3 text-sm text-concept-ink outline-none transition-colors placeholder:text-[#aaa394] focus:border-concept-gold";

export function ContactForm({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["contactPage"];
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject") || undefined,
          message: data.get("message"),
          company: data.get("company") || undefined,
          locale,
        }),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as { ok?: boolean };
      if (json.ok) {
        posthog.capture("contact_form_submitted", { locale });
        setStatus("sent");
      } else {
        setStatus("fallback");
      }
    } catch {
      setStatus("fallback");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center text-concept-ink">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-concept-gold text-2xl text-concept-gold">
          ✓
        </div>
        <h4 className="font-concept text-3xl leading-tight text-concept-ocean">
          {t.sentTitle}
        </h4>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-concept-ink/70">
          {t.sentBody}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 border-b border-[#b08a46]/50 pb-0.5 text-micro font-semibold uppercase tracking-[0.12em] text-[#b08a46]"
        >
          {t.again}
        </button>
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div className="text-center text-concept-ink">
        <h4 className="font-concept text-2xl leading-tight text-concept-ocean">
          {t.fallbackTitle}
        </h4>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-concept-ink/70">
          {t.fallbackBody}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButtonVariants({ variant: "primary", size: "sm" })}
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {t.whatsapp}
          </a>
          <a
            href={`mailto:${eventsEmail}`}
            className={cn(actionButtonVariants({ variant: "tertiary", surface: "light" }), "justify-center")}
          >
            {t.emailBtn}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="block">
        <span className="sr-only">{t.namePlaceholder}</span>
        <input name="name" required placeholder={t.namePlaceholder} className={fieldBase} />
      </label>

      <label className="block">
        <span className="sr-only">{t.emailPlaceholder}</span>
        <input
          name="email"
          type="email"
          required
          placeholder={t.emailPlaceholder}
          className={fieldBase}
        />
      </label>

      <label className="block">
        <span className="sr-only">{t.subjectLabel}</span>
        <select name="subject" defaultValue="" className={cn(fieldBase, "text-concept-ink")}>
          <option value="" disabled className="text-concept-ocean">
            {t.subjectLabel}
          </option>
          {t.subjectOptions.map((opt) => (
            <option key={opt} value={opt} className="text-concept-ocean">
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="sr-only">{t.messagePlaceholder}</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={t.messagePlaceholder}
          className={cn(fieldBase, "resize-none")}
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(actionButtonVariants({ variant: "primary" }), "mt-2 w-full")}
      >
        {status === "submitting" ? "…" : t.submit}
      </button>
      <p className="text-center text-micro leading-relaxed text-[#aaa394]">{t.fine}</p>
    </form>
  );
}
