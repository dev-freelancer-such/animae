import React, { useEffect, useState } from "react";

import { CategoriesInterface, StoryInterface } from "@/models/home.models";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

import CardStory from "./card-category";

interface CarouselCategoriesProps {
  categories: CategoriesInterface[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  onPreviewStory: (story: CategoriesInterface) => void;
}

function CarouselCategoriesStories({
  categories,
  autoPlay = true,
  autoPlayDelay = 5000,
  onPreviewStory,
}: CarouselCategoriesProps) {
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
          containScroll: "trimSnaps",
          dragFree: true,
          loop: true,
        }}
        className="w-full"
      >
        <CarouselPrevious className="z-50 left-2 top-1/2 -translate-y-1/2 flex items-center justify-center" />
        <CarouselNext className="z-50 right-2 top-1/2 -translate-y-1/2 flex items-center justify-center" />

        <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
          {categories.map(category => (
            <CarouselItem
              key={category?.key}
              className="basis-full xs-min:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-1 sm:pl-2 md:pl-4 shrink-0"
              onClick={() => onPreviewStory(category)}
            >
              <CardStory {...category} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselCategoriesStories;
