import Link from "next/link";
import React, { useEffect, useState } from "react";

import { StoryInterface } from "@/models/home.models";

import BannerHome from "@/components/common/banner-home";
import { Typography } from "@/components/ui";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Image from "@/components/ui/Image";

interface BannerProps {
  stories: StoryInterface[];
}

function Banner({ stories }: BannerProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [api, setApi] = useState<CarouselApi>();
  const banners = stories.slice(0, 8);
  const activeBanner = banners[activeIndex];

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    api?.scrollTo(index);
  };

  useEffect(() => {
    if (!api || banners.length === 0) return;

    const autoScroll = setInterval(() => {
      const nextIndex = (activeIndex + 1) % banners.length;
      setActiveIndex(nextIndex);
      api.scrollTo(nextIndex);
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [api, activeIndex, banners.length]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!activeBanner) {
    return (
      <section className="mx-auto w-full py-32 text-center">
        <Typography color="white">Chưa có truyện để hiển thị</Typography>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full" aria-label="Truyện nổi bật">
      <div className="relative h-fit overflow-hidden rounded-2xl shadow-2xl flex justify-center">
        <Image
          key={`banner-${activeIndex}`}
          src={activeBanner.thumbnail}
          alt={activeBanner.altText}
          fill
          className="object-cover transition-all duration-500 ease-in-out"
          priority
        />
        <div className="z-2 absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

        <div className="z-10 h-full container flex justify-end flex-col pb-16 md:pb-24 lg:pb-32 space-y-10 mt-60 mb-10">
          <div className="max-w-2xl">
            <Typography className="uppercase" color="white">
              {activeBanner.subtitle}
            </Typography>
            <Typography className="text-primary-foreground mt-5 uppercase">
              {activeBanner.author}
            </Typography>
            <Link href={`/${activeBanner.key}`}>
              <Typography variant="title" color="white">
                {activeBanner.title}
              </Typography>
            </Link>

            <Typography
              className="mt-10 line-clamp-4"
              variant="caption"
              color="white"
            >
              {activeBanner.description}
            </Typography>
          </div>

          <div className="flex items-center justify-end relative">
            <Carousel
              setApi={setApi}
              options={{
                align: "start",
                slidesToScroll: 1,
                containScroll: "trimSnaps",
                loop: true,
              }}
              className="w-full max-w-[60%] static"
            >
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex justify-center items-center" />
              <CarouselNext className="absolute left-12 top-1/2 -translate-y-1/2 z-10 flex justify-center items-center" />

              <CarouselContent className="ml-0">
                {banners.map((banner, index) => (
                  <CarouselItem
                    key={banner.key}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 pl-2 md:pl-4"
                  >
                    <BannerHome
                      banner={banner}
                      index={index}
                      activeIndex={activeIndex}
                      handleThumbnailClick={handleThumbnailClick}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
