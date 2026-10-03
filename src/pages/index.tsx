import HomePage from "@/containers/home";

import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { ComponentProps } from "react";

import { ApiCategory, ApiStory } from "@/models/api.models";

import { requestApi } from "@/services/api/server";
import { endpoints } from "@/services/endpoint";

import { createSeoMeta } from "@/utils/seo.utils";
import { mapCategory, mapStory } from "@/utils/story.mapper";

export default function Home(props: ComponentProps<typeof HomePage>) {
  return <HomePage {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const [stories, categories] = await Promise.all([
    requestApi<ApiStory[]>(endpoints.stories.LIST, { take: 40, skip: 0 }),
    requestApi<ApiCategory[]>(endpoints.categories.LIST),
  ]);

  const seo = createSeoMeta({
    title: "Đọc truyện online",
    description:
      "Đọc manga, novel online. Cập nhật chương mới, tìm theo thể loại và theo dõi truyện đang ra.",
    path: "/",
    keywords: "manga, novel, đọc truyện, anime",
  });

  return {
    props: {
      stories: (Array.isArray(stories) ? stories : []).map(mapStory),
      categories: (Array.isArray(categories) ? categories : []).map(
        mapCategory
      ),
      seo,
      ...(await serverSideTranslations(locale ?? "vi", [
        "common",
        "layout",
        "home",
      ])),
    },
  };
};
