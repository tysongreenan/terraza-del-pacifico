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
};

export default nextConfig;
