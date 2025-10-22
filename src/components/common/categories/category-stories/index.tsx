import React from "react";

import { CategoriesInterface } from "@/models/home.models";

import DragToNextBtn from "@/components/common/collections/collection-stories/drag-to-next-btn";
import { Typography } from "@/components/ui";

import CarouselCategoriesStories from "./carousel-category";

interface CategoryStoriesProps {
  label: string;
  actionNext: string;
  categories: CategoriesInterface[];
}

function CategoryStories({
  label,
  actionNext,
  categories,
}: CategoryStoriesProps) {
  const renderLabel = () => {
    const words = label.split(" ");
    if (words.length >= 2) {
      return (
        <div className="flex flex-col">
          <Typography
            variant="h2"
            color="primary"
            fontWeight="medium"
            className="w-fit uppercase grunge-overlay"
          >
            {words[0]}
          </Typography>
          <Typography
            variant="h2"
            color="primary"
            className="w-fit uppercase grunge-overlay"
            fontWeight="medium"
          >
            {words.slice(1).join(" ")}
          </Typography>
        </div>
      );
    }
    return (
      <Typography
        variant="h2"
        color="primary"
        fontWeight="medium"
        className="w-fit uppercase grunge-overlay"
      >
        {label}
      </Typography>
    );
  };

  function handlePreviewStory(story: CategoriesInterface) {
    // TODO: Handle preview story action
    console.log("Preview story:", story);
  }

  return (
    <section className="mt-20 flex gap-6">
      <div className="w-56 flex flex-col justify-between">
        {renderLabel()}

        <DragToNextBtn label={actionNext} />
      </div>

      <CarouselCategoriesStories
        categories={categories}
        onPreviewStory={handlePreviewStory}
      />
    </section>
  );
}

export default CategoryStories;
