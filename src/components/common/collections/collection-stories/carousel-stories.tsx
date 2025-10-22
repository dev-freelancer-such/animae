import React, { useEffect, useState } from "react";

import { StoryInterface } from "@/models/home.models";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

import CardStory from "./card-story";

interface CarouselStoriesProps {
  stories: StoryInterface[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  onPreviewStory: (story: StoryInterface) => void;
  isRanked?: boolean;
}

function CarouselStories({
  stories,
  autoPlay = true,
  autoPlayDelay = 5000,
  onPreviewStory,
  isRanked = false,
}: CarouselStoriesProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!api || !autoPlay || isHovered) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [api, autoPlay, autoPlayDelay, isHovered]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        options={{
          align: "start",
          slidesToScroll: 1,
          containScroll: "keepSnaps",
          dragFree: false,
          loop: true,
          skipSnaps: false,
        }}
        className="w-full overflow-hidden"
      >
        <CarouselPrevious className="z-50 left-2 top-1/2 -translate-y-1/2 flex items-center justify-center" />
        <CarouselNext className="z-50 right-2 top-1/2 -translate-y-1/2 flex items-center justify-center" />

        <CarouselContent className="-ml-2 md:-ml-4">
          {stories.map((story, index) => (
            <CarouselItem
              key={story?.key}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-2 md:pl-4 shrink-0"
              onClick={() => onPreviewStory(story)}
            >
              <CardStory {...story} isRanked={isRanked} indexProp={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselStories;
