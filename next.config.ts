import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ["en", "vi", "ja"],
    defaultLocale: "en",
  },
};

export default nextConfig;
