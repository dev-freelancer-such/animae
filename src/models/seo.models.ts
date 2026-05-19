export interface SeoMetaInterface {
  title: string;
  description: string;
  keywords?: string;
  // Open Graph
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogUrl?: string;
  ogType?: "website" | "article" | "book" | "profile";
  ogLocale?: string;
  // Twitter Card
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterSite?: string; // @username của website, ví dụ: "@animae_vn"
  twitterCreator?: string; // @username của tác giả bài viết
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  // Misc
  canonicalUrl?: string;
  robots?: string;
  noIndex?: boolean;
}
