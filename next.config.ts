import type { NextConfig } from "next";

import nextI18NextConfig from "./next-i18next.config.js";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_API_SERVER:
      process.env.NEXT_PUBLIC_API_SERVER || "https://crawler-be.duckdns.org",
    NEXT_PUBLIC_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  },
  reactStrictMode: true,
  i18n: nextI18NextConfig.i18n,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
