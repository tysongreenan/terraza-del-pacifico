import { siteUrl, whatsappHref, eventsEmail } from "@/lib/site";

// Brand tokens (mirrors app/globals.css). Inline hex only — email clients
// don't support CSS variables.
const OCEAN = "#103a4d";
const GOLD = "#c9a763";
const INK = "#1a1611";
const MUTED = "#6f6a62";
const SAND = "#f5f1e8";
const BORDER = "#e7e0d2";

const LOGO_URL = `${siteUrl}/images/brand/logo-light.png`;

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type BrandedEmailOptions = {
  heading: string;
  rows: [string, string][];
  /** Short line under the heading, e.g. "From the website contact form". */
  preheader?: string;
  locale?: string;
};

/**
 * Wraps a label/value table in the Terraza del Pacífico brand shell:
 * ocean header with the cream logo, a sand card body, and a footer with NAP.
 * Returns both an HTML and a plain-text part for the Resend payload.
 */
export function renderBrandedEmail({
  heading,
  rows,
  preheader,
  locale,
}: BrandedEmailOptions): { html: string; text: string } {
  const es = locale === "es";
  const footerNote = es
    ? "Enviado desde el sitio web de Terraza del Pacífico"
    : "Sent from the Terraza del Pacífico website";

  const rowsHtml = rows
    .map(
      ([label, value], i) =>
        `<tr>
          <td style="padding:12px 16px 12px 0;color:${MUTED};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;vertical-align:top;white-space:nowrap;border-top:${
            i === 0 ? "none" : `1px solid ${BORDER}`
          }">${escapeHtml(label)}</td>
          <td style="padding:12px 0;color:${INK};font-size:15px;line-height:1.5;vertical-align:top;border-top:${
            i === 0 ? "none" : `1px solid ${BORDER}`
          }">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
        </tr>`
    )
    .join("");

  const html = `<!doctype html>
<html lang="${es ? "es" : "en"}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="color-scheme" content="light">
  </head>
  <body style="margin:0;padding:0;background:${SAND};font-family:Georgia,'Times New Roman',serif;">
    <span style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(
      preheader ?? heading
    )}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SAND};padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid ${BORDER};border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:${OCEAN};padding:28px 32px;text-align:center;">
                <img src="${LOGO_URL}" alt="Terraza del Pacífico" width="150" style="display:inline-block;width:150px;max-width:60%;height:auto;" />
              </td>
            </tr>
            <tr>
              <td style="height:4px;background:${GOLD};"></td>
            </tr>
            <tr>
              <td style="padding:32px 32px 28px 32px;">
                <h1 style="margin:0 0 4px 0;color:${OCEAN};font-size:22px;font-weight:normal;">${escapeHtml(
                  heading
                )}</h1>
                ${
                  preheader
                    ? `<p style="margin:0 0 20px 0;color:${MUTED};font-size:14px;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(
                        preheader
                      )}</p>`
                    : `<div style="height:16px;"></div>`
                }
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;">
                  ${rowsHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="background:${SAND};padding:20px 32px;border-top:1px solid ${BORDER};font-family:Arial,Helvetica,sans-serif;">
                <p style="margin:0 0 6px 0;color:${INK};font-size:13px;font-weight:600;">Terraza del Pacífico</p>
                <p style="margin:0;color:${MUTED};font-size:12px;line-height:1.6;">
                  ${footerNote}<br>
                  <a href="${siteUrl}" style="color:${OCEAN};text-decoration:none;">terrazadelpacifico.com</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:${eventsEmail}" style="color:${OCEAN};text-decoration:none;">${eventsEmail}</a>
                  &nbsp;·&nbsp;
                  <a href="${whatsappHref}" style="color:${OCEAN};text-decoration:none;">WhatsApp</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    heading,
    ...(preheader ? [preheader, ""] : [""]),
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "—",
    footerNote,
    siteUrl,
  ].join("\n");

  return { html, text };
}
