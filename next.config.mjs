import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root (a lockfile exists higher up the tree, which otherwise
  // confuses Next's file tracing and breaks page-data collection for some routes).
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  images: {
    remotePatterns: [],
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
    return map.flatMap(([from, to]) => [
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
    ]);
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
