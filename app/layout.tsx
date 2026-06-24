import { Cormorant, Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-CR"
      className={`${manrope.variable} ${cormorant.variable} ${inter.variable}`}
      // The inline script below adds a `js` class to <html> before paint, so the
      // client markup intentionally differs from the server's. Suppress the
      // expected hydration mismatch on this element only.
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        {/* Progressive enhancement: scroll-reveal hides content with CSS, then
            JS reveals it on scroll. Add `js` before paint so the hidden state
            only applies when JS can reveal it — no-JS clients and non-JS
            scrapers get fully visible content. See `.js .reveal` in globals.css. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
