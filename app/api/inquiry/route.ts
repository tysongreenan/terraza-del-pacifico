import { NextResponse } from "next/server";
import { Resend } from "resend";
import { eventsEmail } from "@/lib/site";
import { getPostHogClient } from "@/lib/posthog-server";

export const runtime = "nodejs";

// Lead inbox + sender. Override via env. Until a domain is verified in Resend,
// FROM must stay on the shared onboarding sender (which can only deliver to the
// Resend account owner) — see .env.example. The form's WhatsApp/email fallback
// covers the gap until DNS is done.
const TO = process.env.INQUIRY_TO_EMAIL ?? eventsEmail;
const FROM =
  process.env.INQUIRY_FROM_EMAIL ?? "Terraza del Pacífico <onboarding@resend.dev>";
const BCC = process.env.BCC_EMAIL ?? undefined;

type InquiryPayload = {
  name?: string;
  email?: string;
  message?: string;
  role?: string;
  booked?: string;
  partySize?: string;
  date?: string;
  experienceDate?: string;
  guests?: string;
  pageTitle?: string;
  kind?: "event" | "experience";
  locale?: string;
  company?: string; // honeypot — real users never fill this
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: InquiryPayload;
  try {
    body = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: pretend success, send nothing.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  if (!name || !email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // No key configured yet → tell the client to use its WhatsApp/email fallback.
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, error: "not_configured" });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ...(body.role ? ([["Role", body.role]] as [string, string][]) : []),
    ...(body.booked ? ([["Booked already", body.booked]] as [string, string][]) : []),
    ...(body.partySize ? ([["Party size", body.partySize]] as [string, string][]) : []),
    ...(body.date ? ([["Check-in date", body.date]] as [string, string][]) : []),
    ...(body.experienceDate
      ? ([["Experience date", body.experienceDate]] as [string, string][])
      : []),
    ...(body.guests ? ([["Guests", body.guests]] as [string, string][]) : []),
    ...(body.message ? ([["Message", body.message]] as [string, string][]) : []),
    ["Page", body.pageTitle ?? "—"],
    ["Language", body.locale === "es" ? "Español" : "English"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1a1611">
      <h2 style="color:#103a4d">New ${body.kind === "event" ? "event registration" : "experience inquiry"}</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:6px 16px 6px 0;color:#6f6a62;vertical-align:top"><b>${escapeHtml(
                label
              )}</b></td><td style="padding:6px 0">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      ...(BCC ? { bcc: BCC } : {}),
      replyTo: email,
      subject: `${body.kind === "event" ? "Event registration" : "Experience inquiry"}: ${
        body.pageTitle ?? "Terraza del Pacífico"
      } — ${name}`,
      html,
      text,
    });
    if (error) {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    const ph = getPostHogClient();
    ph.capture({
      distinctId: email,
      event: "server_inquiry_received",
      properties: {
        kind: body.kind,
        page_title: body.pageTitle,
        locale: body.locale,
        has_message: !!body.message,
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
