import { NextResponse } from "next/server";
import { Resend } from "resend";
import { renderBrandedEmail } from "@/lib/email-template";
import { getPostHogClient } from "@/lib/posthog-server";

export const runtime = "nodejs";

const TO = process.env.INQUIRY_TO_EMAIL ?? "info@terrazadelpacifico.com";
const FROM =
  process.env.INQUIRY_FROM_EMAIL ?? "Terraza del Pacífico <onboarding@resend.dev>";
const BCC = process.env.BCC_EMAIL ?? undefined;

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  locale?: string;
  company?: string; // honeypot
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  if (!name || !email || !/.+@.+\..+/.test(email) || !message) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, error: "not_configured" });
  }

  const subject = body.subject?.trim() || "General inquiry";
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Subject", subject],
    ["Message", message],
    ["Language", body.locale === "es" ? "Español" : "English"],
  ];

  const { html, text } = renderBrandedEmail({
    heading: body.locale === "es" ? "Nuevo mensaje de contacto" : "New contact form message",
    preheader:
      body.locale === "es"
        ? "Desde el formulario de contacto del sitio"
        : "From the website contact form",
    rows,
    locale: body.locale,
  });

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      ...(BCC ? { bcc: BCC } : {}),
      replyTo: email,
      subject: `Contact: ${subject} — ${name}`,
      html,
      text,
    });
    if (error) {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    const ph = getPostHogClient();
    ph.capture({
      distinctId: email,
      event: "contact_form_submitted",
      properties: { subject, locale: body.locale },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
