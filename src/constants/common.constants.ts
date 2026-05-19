export const SEO_DEFAULTS = {
  siteName: "Animae",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://animae.vercel.app",
  defaultTitle: "Animae - Manga & Comic Online",
  defaultDescription:
    "Đọc manga, truyện tranh online miễn phí. Cập nhật nhanh nhất, đầy đủ nhất.",
  defaultOgImage: "/images/og-default.png",
  defaultOgImageWidth: 1200,
  defaultOgImageHeight: 630,
  defaultLocale: "vi_VN",
  defaultRobots: "index, follow",
  defaultOgType: "website" as const,
  defaultTwitterCard: "summary_large_image" as const,
  /** @username Twitter của website, ví dụ "@animae_vn" — đặt giá trị thực vào đây */
  twitterSite: "",
};
