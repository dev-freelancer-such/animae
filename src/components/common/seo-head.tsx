import Head from "next/head";

import { SeoMetaInterface } from "@/models/seo.models";

interface SeoHeadProps extends SeoMetaInterface {
  siteName?: string;
}

const DEFAULT_SITE_NAME = "Animae";
const DEFAULT_ROBOTS = "index, follow";
const DEFAULT_OG_TYPE = "website";
const DEFAULT_TWITTER_CARD = "summary_large_image";

export function SeoHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  ogImageWidth,
  ogImageHeight,
  ogUrl,
  ogType = DEFAULT_OG_TYPE,
  ogLocale = "vi_VN",
  twitterCard = DEFAULT_TWITTER_CARD,
  twitterSite,
  twitterCreator,
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  canonicalUrl,
  robots = DEFAULT_ROBOTS,
  noIndex = false,
  siteName = DEFAULT_SITE_NAME,
}: SeoHeadProps) {
  const resolvedRobots = noIndex ? "noindex, nofollow" : robots;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;
  const resolvedTwitterTitle = twitterTitle ?? resolvedOgTitle;
  const resolvedTwitterDescription =
    twitterDescription ?? resolvedOgDescription;
  const resolvedTwitterImage = twitterImage ?? ogImage;
  const resolvedTwitterImageAlt =
    twitterImageAlt ?? ogImageAlt ?? resolvedOgTitle;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={resolvedRobots} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && (
        <meta property="og:image:alt" content={ogImageAlt ?? resolvedOgTitle} />
      )}
      {ogImage && ogImageWidth && (
        <meta property="og:image:width" content={String(ogImageWidth)} />
      )}
      {ogImage && ogImageHeight && (
        <meta property="og:image:height" content={String(ogImageHeight)} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && (
        <meta name="twitter:creator" content={twitterCreator} />
      )}
      <meta name="twitter:title" content={resolvedTwitterTitle} />
      <meta name="twitter:description" content={resolvedTwitterDescription} />
      {resolvedTwitterImage && (
        <meta name="twitter:image" content={resolvedTwitterImage} />
      )}
      {resolvedTwitterImage && (
        <meta name="twitter:image:alt" content={resolvedTwitterImageAlt} />
      )}
    </Head>
  );
}
