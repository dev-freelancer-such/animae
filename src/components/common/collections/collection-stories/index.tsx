import React from "react";

import { StoryInterface } from "@/models/home.models";

import CarouselStories from "@/components/common/collections/collection-stories/carousel-stories";
import DragToNextBtn from "@/components/common/collections/collection-stories/drag-to-next-btn";
import { Typography } from "@/components/ui";

interface CollectionStoriesProps {
  label: string;
  actionNext: string;
  stories: StoryInterface[];
  isRanked?: boolean;
}

function CollectionStories({
  label,
  actionNext,
  stories,
  isRanked,
}: CollectionStoriesProps) {
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

  function handlePreviewStory(story: StoryInterface) {
    // TODO: Handle preview story action
    console.warn("Preview story:", story);
  }

  return (
    <section className="mt-20 flex gap-6">
      <div className="w-56 flex flex-col justify-between">
        {renderLabel()}

        <DragToNextBtn label={actionNext} />
      </div>

      <CarouselStories
        stories={stories}
        onPreviewStory={handlePreviewStory}
        isRanked={isRanked}
      />
    </section>
  );
}

export default CollectionStories;
