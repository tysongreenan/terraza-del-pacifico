import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root (a lockfile exists higher up the tree, which otherwise
  // confuses Next's file tracing and breaks page-data collection for some routes).
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  // App Router streams <title>/meta late in the HTML (~100kb+ in). SE Ranking
  // (and some other audit crawlers) only parse the early shell and report
  // "title missing" on every page. Force blocking metadata for bots so <title>
  // lands in the initial <head>. Overrides the Next default list — include the
  // usual Google/Bing/social agents plus SEO audit tools.
  // Docs: https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots
  htmlLimitedBots:
    /Googlebot|Google-InspectionTool|Storebot-Google|GoogleOther|AdsBot-Google|Mediapartners-Google|Google-PageRenderer|bingbot|BingPreview|Slurp|DuckDuckBot|Baiduspider|Yandex|Sogou|facebookexternalhit|Facebot|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|TelegramBot|Applebot|SERanking|SE Ranking|seranking|AhrefsBot|SemrushBot|DotBot|MJ12bot|PetalBot|Bytespider|GPTBot|ClaudeBot|CCBot|ia_archiver/i,
  images: {
    remotePatterns: [],
    // Allow the higher-quality thumbnails (hero slide selectors) alongside the
    // default. Next 15.3+ requires non-default quality values to be allowlisted.
    qualities: [75, 90],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://us-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // 301 the legacy Spanish parent route segments to their new English slugs.
  // Children (slugs, sub-pages) are preserved via the :path* wildcard.
  async redirects() {
    const map = [
      ["experiencias", "experiences"],
      ["eventos", "events"],
      ["habitaciones", "suites"],
      ["bares", "bars"],
      ["galeria", "gallery"],
      ["restaurante", "restaurant"],
      ["panaderia", "bakery"],
      ["politicas", "policies"],
      ["sobre-nosotros", "about"],
    ];
    // Child slugs renamed Spanish->English (the parent wildcard above maps the
    // old /habitaciones/<child> to /suites/<child>; these catch the second hop).
    const childMap = [
      ["suites/estandar", "suites/standard"],
      ["suites/comparar", "suites/compare"],
    ];
    return [
      ...map.flatMap(([from, to]) => [
        {
          source: `/:locale(es|en)/${from}/:path*`,
          destination: `/:locale/${to}/:path*`,
          permanent: true,
        },
        {
          source: `/:locale(es|en)/${from}`,
          destination: `/:locale/${to}`,
          permanent: true,
        },
      ]),
      ...childMap.map(([from, to]) => ({
        source: `/:locale(es|en)/${from}`,
        destination: `/:locale/${to}`,
        permanent: true,
      })),
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
