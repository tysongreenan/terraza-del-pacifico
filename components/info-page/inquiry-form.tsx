"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { actionButtonVariants } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Tone = "dark" | "light";
type Kind = "event" | "experience";
type Status = "idle" | "submitting" | "sent" | "fallback";

const COPY = {
  es: {
    event: {
      kicker: "Inscríbete",
      title: "Regístrate",
      role: "Soy…",
      roleOptions: ["Competidor", "Espectador", "Marca / patrocinador"],
      partySize: "Número de personas",
      message: "¿Algo que debamos saber? (opcional)",
      submit: "Enviar registro",
      fine: "Sin spam, solo detalles del evento. Respondemos en un par de días.",
      sentTitle: "Estás en la lista",
      sentBody:
        "Gracias. El equipo de eventos te contactará con fechas y próximos pasos.",
    },
    experience: {
      kicker: "Solicitar disponibilidad",
      title: "Solicitar disponibilidad",
      booked: "¿Ya tienes reserva con nosotros?",
      bookedOptions: ["Sí", "No", "Todavía no"],
      date: "Fecha de check-in",
      experienceDate: "Fecha de la experiencia",
      guests: "Huéspedes",
      message: "Cuéntanos qué tienes en mente (opcional)",
      submit: "Enviar consulta",
      fine: "Respondemos en un par de días con opciones según la temporada.",
      sentTitle: "Consulta recibida",
      sentBody:
        "Gracias. Te contactaremos con disponibilidad y opciones para tus fechas.",
    },
    name: "Nombre completo",
    email: "Correo electrónico",
    again: "Enviar otra",
    fallbackTitle: "Escríbenos directamente",
    fallbackBody:
      "No pudimos enviar el formulario en este momento. Contáctanos por WhatsApp o correo y te responderemos enseguida.",
    whatsapp: "Escribir por WhatsApp",
    emailBtn: "Enviar correo",
  },
  en: {
    event: {
      kicker: "Sign up",
      title: "Sign up",
      role: "I'm a…",
      roleOptions: ["Competitor", "Spectator", "Brand / sponsor"],
      partySize: "Party size",
      message: "Anything we should know? (optional)",
      submit: "Submit registration",
      fine: "No spam — just event details. We reply within a couple of days.",
      sentTitle: "You're on the list",
      sentBody:
        "Thanks — the events team will reach out with dates and next steps.",
    },
    experience: {
      kicker: "Request availability",
      title: "Request availability",
      booked: "Are you booked to stay with us already?",
      bookedOptions: ["Yes", "No", "Not yet"],
      date: "Check-in date",
      experienceDate: "Experience date",
      guests: "Guests",
      message: "Tell us what you're hoping for (optional)",
      submit: "Send inquiry",
      fine: "We reply within a couple of days with seasonal options.",
      sentTitle: "Inquiry received",
      sentBody:
        "Thanks — we'll be in touch with availability and options for your dates.",
    },
    name: "Full name",
    email: "Email address",
    again: "Submit another",
    fallbackTitle: "Message us directly",
    fallbackBody:
      "We couldn't submit the form right now. Reach us on WhatsApp or by email and we'll get right back to you.",
    whatsapp: "Message on WhatsApp",
    emailBtn: "Send an email",
  },
} as const;

export function InquiryForm({
  locale,
  kind,
  tone,
  pageTitle,
  whatsappHref,
  emailHref,
}: {
  locale: Locale;
  kind: Kind;
  tone: Tone;
  pageTitle: string;
  whatsappHref: string;
  emailHref: string;
}) {
  const t = COPY[locale];
  const k = kind === "event" ? t.event : t.experience;
  const [status, setStatus] = useState<Status>("idle");
  const dark = tone === "dark";

  const fieldClass = cn(
    "w-full border-0 border-b bg-transparent py-3 text-sm outline-none transition-colors focus:border-concept-gold",
    dark
      ? "border-white/25 text-white placeholder:text-white/45 [color-scheme:dark]"
      : "border-[#d3cab6] text-concept-ink placeholder:text-[#aaa394]"
  );
  const fieldLabelClass = cn(
    "block text-[11px] uppercase tracking-[0.12em]",
    dark ? "text-white/50" : "text-[#aaa394]"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          role: data.get("role") || undefined,
          booked: data.get("booked") || undefined,
          partySize: data.get("partySize") || undefined,
          date: data.get("date") || undefined,
          experienceDate: data.get("experienceDate") || undefined,
          guests: data.get("guests") || undefined,
          message: data.get("message") || undefined,
          company: data.get("company") || undefined,
          pageTitle,
          kind,
          locale,
        }),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as {
        ok?: boolean;
      };
      setStatus(json.ok ? "sent" : "fallback");
    } catch {
      setStatus("fallback");
    }
  }

  const accent = dark ? "text-concept-gold" : "text-[#b08a46]";

  if (status === "sent") {
    return (
      <div className={cn("text-center", dark ? "text-white" : "text-concept-ink")}>
        <div
          className={cn(
            "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border text-2xl",
            dark ? "border-concept-gold text-concept-gold" : "border-concept-gold text-[#b08a46]"
          )}
          aria-hidden
        >
          ✓
        </div>
        <h4 className="font-concept text-3xl leading-tight text-concept-ocean">
          {k.sentTitle}
        </h4>
        <p
          className={cn(
            "mx-auto mt-3 max-w-xs text-sm leading-relaxed",
            dark ? "text-[#bcd0d8]" : "text-concept-ink/70"
          )}
        >
          {k.sentBody}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={cn(
            "mt-6 border-b pb-0.5 text-micro font-semibold uppercase tracking-[0.12em]",
            accent,
            dark ? "border-concept-gold/50" : "border-[#b08a46]/50"
          )}
        >
          {t.again}
        </button>
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div className={cn("text-center", dark ? "text-white" : "text-concept-ink")}>
        <h4 className="font-concept text-2xl leading-tight text-concept-ocean">
          {t.fallbackTitle}
        </h4>
        <p
          className={cn(
            "mx-auto mt-3 max-w-xs text-sm leading-relaxed",
            dark ? "text-[#bcd0d8]" : "text-concept-ink/70"
          )}
        >
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
            href={emailHref}
            className={cn(
              actionButtonVariants({ variant: "tertiary", surface: dark ? "dark" : "light" }),
              "justify-center"
            )}
          >
            {t.emailBtn}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={cn("mb-6 text-micro font-semibold uppercase tracking-[0.16em]", accent)}>
        {k.kicker}
      </div>
      {/* Honeypot — hidden from users, bots fill it. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-5">
        <label className="block">
          <span className="sr-only">{t.name}</span>
          <input name="name" required placeholder={t.name} className={fieldClass} />
        </label>
        <label className="block">
          <span className="sr-only">{t.email}</span>
          <input
            name="email"
            type="email"
            required
            placeholder={t.email}
            className={fieldClass}
          />
        </label>

        <div className={cn("grid gap-5", kind === "event" ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2")}>
          {kind === "event" ? (
            <>
              <label className="block">
                <span className="sr-only">{t.event.role}</span>
                <select name="role" required className={cn(fieldClass, dark && "text-white")}
                  defaultValue="">
                  <option value="" disabled className="text-concept-ocean">
                    {t.event.role}
                  </option>
                  {t.event.roleOptions.map((opt) => (
                    <option key={opt} value={opt} className="text-concept-ocean">
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="sr-only">{t.event.partySize}</span>
                <input
                  name="partySize"
                  type="number"
                  min={1}
                  placeholder={t.event.partySize}
                  className={fieldClass}
                />
              </label>
            </>
          ) : (
            <>
              <label className="block">
                <span className="sr-only">{t.experience.booked}</span>
                <select name="booked" required className={cn(fieldClass, dark && "text-white")}
                  defaultValue="">
                  <option value="" disabled className="text-concept-ocean">
                    {t.experience.booked}
                  </option>
                  {t.experience.bookedOptions.map((opt) => (
                    <option key={opt} value={opt} className="text-concept-ocean">
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className={fieldLabelClass}>{t.experience.date}</span>
                <input
                  name="date"
                  type="date"
                  aria-label={t.experience.date}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className={fieldLabelClass}>{t.experience.experienceDate}</span>
                <input
                  name="experienceDate"
                  type="date"
                  aria-label={t.experience.experienceDate}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="sr-only">{t.experience.guests}</span>
                <input
                  name="guests"
                  type="number"
                  min={1}
                  placeholder={t.experience.guests}
                  className={fieldClass}
                />
              </label>
            </>
          )}
        </div>

        <label className="block">
          <span className="sr-only">{k.message}</span>
          <textarea
            name="message"
            rows={2}
            placeholder={k.message}
            className={cn(fieldClass, "resize-none")}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(actionButtonVariants({ variant: "primary" }), "mt-8 w-full")}
      >
        {status === "submitting" ? "…" : k.submit}
      </button>
      <p
        className={cn(
          "mt-4 text-center text-[11px] leading-relaxed",
          dark ? "text-[#7f99a3]" : "text-[#aaa394]"
        )}
      >
        {k.fine}
      </p>
    </form>
  );
}
