import { SeoMetaInterface } from "@/models/seo.models";

import { SEO_DEFAULTS } from "@/constants/common.constants";

interface CreateSeoMetaOptions extends Partial<SeoMetaInterface> {
  /** Page title — sẽ được append " | {siteName}" tự động */
  title: string;
  description: string;
  /** Đường dẫn tương đối, ví dụ: "/truyen/one-piece" */
  path?: string;
  siteName?: string;
}

interface SeoMetaResult extends SeoMetaInterface {
  siteName: string;
}

/**
 * Tạo SEO metadata object đầy đủ để truyền vào <SeoHead />.
 *
 * @example
 * // Trang đơn giản
 * const seo = createSeoMeta({ title: "Trang chủ", description: "Đọc manga online" });
 *
 * @example
 * // Trang chi tiết truyện
 * const seo = createSeoMeta({
 *   title: "One Piece",
 *   description: "Hành trình của Luffy tìm kho báu",
 *   path: "/truyen/one-piece",
 *   ogImage: "https://cdn.animae.vn/one-piece.jpg",
 *   ogType: "article",
 * });
 *
 * // Dùng trong component:
 * <SeoHead {...seo} />
 */
export function createSeoMeta({
  title,
  description,
  path,
  siteName = SEO_DEFAULTS.siteName,
  ogTitle,
  ogDescription,
  ogImage = SEO_DEFAULTS.defaultOgImage,
  ogImageAlt,
  ogImageWidth = SEO_DEFAULTS.defaultOgImageWidth,
  ogImageHeight = SEO_DEFAULTS.defaultOgImageHeight,
  ogUrl,
  ogType = SEO_DEFAULTS.defaultOgType,
  ogLocale = SEO_DEFAULTS.defaultLocale,
  twitterCard = SEO_DEFAULTS.defaultTwitterCard,
  twitterSite = SEO_DEFAULTS.twitterSite || undefined,
  twitterCreator,
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  canonicalUrl,
  robots = SEO_DEFAULTS.defaultRobots,
  noIndex = false,
  keywords,
}: CreateSeoMetaOptions): SeoMetaResult {
  const pageUrl = path
    ? `${SEO_DEFAULTS.baseUrl}${path}`
    : SEO_DEFAULTS.baseUrl;

  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords,
    ogTitle: ogTitle ?? fullTitle,
    ogDescription: ogDescription ?? description,
    ogImage,
    ogImageAlt: ogImageAlt ?? fullTitle,
    ogImageWidth,
    ogImageHeight,
    ogUrl: ogUrl ?? pageUrl,
    ogType,
    ogLocale,
    twitterCard,
    twitterSite,
    twitterCreator,
    twitterTitle: twitterTitle ?? ogTitle ?? fullTitle,
    twitterDescription: twitterDescription ?? ogDescription ?? description,
    twitterImage: twitterImage ?? ogImage,
    twitterImageAlt: twitterImageAlt ?? ogImageAlt ?? fullTitle,
    canonicalUrl: canonicalUrl ?? pageUrl,
    robots,
    noIndex,
    siteName,
  };
}
