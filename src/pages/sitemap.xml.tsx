import { GetServerSideProps } from "next";

import { ApiStory } from "@/models/api.models";

import { SEO_DEFAULTS } from "@/constants/common.constants";

import { requestApi } from "@/services/api/server";
import { endpoints } from "@/services/endpoint";

function generateSitemap(slugs: string[]) {
  const base = SEO_DEFAULTS.baseUrl.replace(/\/$/, "");
  const staticPaths = ["", "/products"];
  const urls = [
    ...staticPaths.map(
      path =>
        `  <url><loc>${base}${path || "/"}</loc><changefreq>hourly</changefreq></url>`
    ),
    ...slugs.map(
      slug =>
        `  <url><loc>${base}/${slug}</loc><changefreq>daily</changefreq></url>`
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const stories = await requestApi<ApiStory[]>(endpoints.stories.LIST, {
    take: 200,
    skip: 0,
  });
  const xml = generateSitemap((stories ?? []).map(s => s.slug));

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
