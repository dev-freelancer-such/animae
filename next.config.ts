import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_SERVER:
      process.env.NEXT_PUBLIC_API_SERVER || "https://crawler-be.duckdns.org",
    NEXT_PUBLIC_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001",
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "vi", "ja"],
    defaultLocale: "vi",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
