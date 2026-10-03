import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

import {
  CategoriesInterface,
  CategoriesStoryInterface,
  HomeCollectionStoryInterface,
  StoryInterface,
} from "@/models/home.models";
import { SeoMetaInterface } from "@/models/seo.models";

import { getCategories, getStories } from "@/services/requests/stories";

import { mapCategory, mapStory } from "@/utils/story.mapper";

import { JsonLd } from "@/components/common/json-ld";
import { SeoHead } from "@/components/common/seo-head";
import CategoriesStory from "@/components/common/categories";
import CollectionStoriesContainer from "@/components/common/collections";

import Banner from "./banner";
import NewlyUpdate from "./newly-update";

interface HomePageProps {
  stories: StoryInterface[];
  categories: CategoriesInterface[];
  seo: SeoMetaInterface;
}

function pickStories(list: StoryInterface[], start: number, size: number) {
  if (list.length === 0) return [];
  return Array.from({ length: Math.min(size, list.length) }, (_, i) => {
    return list[(start + i) % list.length];
  });
}

function HomePage({
  stories: initialStories = [],
  categories: initialCategories = [],
  seo,
}: HomePageProps) {
  const { t } = useTranslation("home");
  const [stories, setStories] = useState<StoryInterface[]>(
    Array.isArray(initialStories) ? initialStories : []
  );
  const [categories, setCategories] = useState<CategoriesInterface[]>(
    Array.isArray(initialCategories) ? initialCategories : []
  );

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      getStories({ take: 40, skip: 0 }),
      getCategories(),
    ])
      .then(([apiStories, apiCategories]) => {
        if (cancelled) return;
        if (apiStories.length) setStories(apiStories.map(mapStory));
        if (apiCategories.length) setCategories(apiCategories.map(mapCategory));
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  const trending = [...stories].sort((a, b) => (b.views ?? 0) - (a.views ?? 0));

  const collectionLatestReleaseProps: HomeCollectionStoryInterface = {
    label: t("latest-release"),
    actionNext: t("drag-to-next"),
    stories: pickStories(stories, 0, 12),
  };

  const collectionTopTrendingProps: HomeCollectionStoryInterface = {
    label: t("top-trending"),
    actionNext: t("drag-to-next"),
    stories: pickStories(trending, 0, 12),
  };

  const categoriesStoryProps: CategoriesStoryInterface = {
    label: t("categories"),
    actionNext: t("drag-to-next"),
    categories,
  };

  const forYouProps: HomeCollectionStoryInterface = {
    label: t("for-you"),
    actionNext: t("drag-to-next"),
    stories: pickStories(stories, 3, 12),
  };

  const randomStoryProps: HomeCollectionStoryInterface = {
    label: t("random-story"),
    actionNext: t("drag-to-next"),
    stories: pickStories(stories, 5, 12),
  };

  return (
    <section>
      <SeoHead {...seo} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: seo.title,
          description: seo.description,
          url: seo.canonicalUrl ?? seo.ogUrl,
        }}
      />

      <div id="latest-release" className="scroll-mt-24">
        <Banner stories={stories} />

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
        <NewlyUpdate stories={pickStories(stories, 0, 14)} />
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
