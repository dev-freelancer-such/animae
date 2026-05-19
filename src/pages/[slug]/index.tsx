import StoryDetailContainer from "@/containers/story-detail";

import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { StoryInterface } from "@/models/home.models";

import { bannerHomeMockup } from "@/helpers/mockups/home";
import { storyDetailMockups } from "@/helpers/mockups/story-detail";

interface StoryDetailPageProps {
  story: StoryInterface;
}

export default function StoryDetailPage({ story }: StoryDetailPageProps) {
  return <StoryDetailContainer story={story} />;
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ["en"] }) => {
  const allStories = [...bannerHomeMockup, ...storyDetailMockups];
  const slugs = [...new Set(allStories.map(s => s.key))];

  const paths = locales.flatMap(locale =>
    slugs.map(slug => ({ params: { slug }, locale }))
  );

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string;

  const allStories = [...storyDetailMockups, ...bannerHomeMockup];
  const story = allStories.find(s => s.key === slug) ?? null;

  if (!story) {
    return { notFound: true };
  }

  return {
    props: {
      story,
      ...(await serverSideTranslations(locale ?? "en", ["common", "layout"])),
    },
    revalidate: 60,
  };
};
