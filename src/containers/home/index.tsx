import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

import {
  CategoriesStoryInterface,
  HomeCollectionStoryInterface,
} from "@/models/home.models";

import { bannerHomeMockup, categoriesMockup } from "@/helpers/mockups/home";

const Banner = dynamic(() => import("./banner"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

const CollectionStoriesContainer = dynamic(
  () => import("@/components/common/collections"),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
);

const CategoriesStory = dynamic(
  () => import("@/components/common/categories"),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
);

const NewlyUpdate = dynamic(() => import("./newly-update"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

function HomePage() {
  const { t } = useTranslation("home");
  const collectionLatestReleaseProps: HomeCollectionStoryInterface = {
    label: t("latest-release"),
    actionNext: t("drag-to-next"),
    stories: Array(10).fill(bannerHomeMockup?.[0]),
  };

  const collectionTopTrendingProps: HomeCollectionStoryInterface = {
    label: t("top-trending"),
    actionNext: t("drag-to-next"),
    stories: Array(10).fill(bannerHomeMockup?.[3]),
  };

  const categoriesStoryProps: CategoriesStoryInterface = {
    label: t("categories"),
    actionNext: t("drag-to-next"),
    categories: categoriesMockup,
  };

  const forYouProps: HomeCollectionStoryInterface = {
    label: t("for-you"),
    actionNext: t("drag-to-next"),
    stories: Array(10).fill(bannerHomeMockup?.[0]),
  };

  const randomStoryProps: HomeCollectionStoryInterface = {
    label: t("random-story"),
    actionNext: t("drag-to-next"),
    stories: Array(10).fill(bannerHomeMockup?.[0]),
  };

  return (
    <section>
      <div id="latest-release" className="scroll-mt-24">
        <Banner />

        <CollectionStoriesContainer
          collectionStoriesProps={collectionLatestReleaseProps}
        />
      </div>

      <div id="top-trending" className="scroll-mt-24">
        <CollectionStoriesContainer
          collectionStoriesProps={collectionTopTrendingProps}
          isRanked
        />
      </div>

      <div id="category-story" className="scroll-mt-24">
        <CategoriesStory categoriesProps={categoriesStoryProps} />
      </div>

      <div id="newly-update" className="scroll-mt-24">
        <NewlyUpdate />
      </div>

      <div id="for-you" className="scroll-mt-24">
        <CollectionStoriesContainer collectionStoriesProps={forYouProps} />
      </div>

      <div id="random-story" className="scroll-mt-24 pb-20">
        <CollectionStoriesContainer collectionStoriesProps={randomStoryProps} />
      </div>
    </section>
  );
}

export default HomePage;
