import StoryDetailContainer from "@/containers/story-detail";

import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ApiStory } from "@/models/api.models";
import { StoryInterface } from "@/models/home.models";
import { SeoMetaInterface } from "@/models/seo.models";

import { JsonLd } from "@/components/common/json-ld";
import { SeoHead } from "@/components/common/seo-head";

import { endpoints } from "@/services/endpoint";
import { requestApi } from "@/services/api/server";

import { createSeoMeta } from "@/utils/seo.utils";
import { mapStory } from "@/utils/story.mapper";

interface StoryDetailPageProps {
  story: StoryInterface;
  seo: SeoMetaInterface;
}

export default function StoryDetailPage({ story, seo }: StoryDetailPageProps) {
  return (
    <>
      <SeoHead {...seo} ogType="book" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Book",
          name: story.title,
          description: story.description,
          image: story.thumbnail,
          author: { "@type": "Person", name: story.author },
          genre: story.genres,
        }}
      />
      <StoryDetailContainer story={story} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stories = await requestApi<ApiStory[]>(endpoints.stories.LIST, {
    take: 50,
    skip: 0,
  });

  const paths = (stories ?? []).map(story => ({
    params: { slug: story.slug },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const data = await requestApi<ApiStory>(endpoints.stories.DETAIL(slug));

  if (!data) {
    return { notFound: true, revalidate: 30 };
  }

  const story = mapStory(data);
  const seo = createSeoMeta({
    title: story.title,
    description:
      story.description?.slice(0, 160) ||
      `Đọc ${story.title} online, tác giả ${story.author}.`,
    path: `/${story.key}`,
    ogImage: typeof story.thumbnail === "string" ? story.thumbnail : undefined,
    ogType: "book",
    keywords: [story.title, story.author, ...(story.genres ?? [])].join(", "),
  });

  return {
    props: {
      story,
      seo,
      ...(await serverSideTranslations(locale ?? "vi", ["common", "layout"])),
    },
    revalidate: 60,
  };
};
