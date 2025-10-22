import React from "react";

import { StoryInterface } from "@/models/home.models";

import { Image, Typography } from "../ui";

type BannerHomeProps = {
  banner: StoryInterface;
  index: number;
  activeIndex: number;
  handleThumbnailClick: (index: number) => void;
};

function BannerHome({
  banner,
  index,
  activeIndex,
  handleThumbnailClick,
}: BannerHomeProps) {
  return (
    <div
      className={`group relative cursor-pointer transition-all h-full duration-300 overflow-hidden w-48 ${
        index === activeIndex
          ? "scale-105 ring-4 ring-primary"
          : "hover:scale-102 "
      }`}
      onClick={() => handleThumbnailClick(index)}
    >
      <Image
        src={banner.thumbnail}
        alt={banner.altText}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          index === activeIndex ? "" : "bg-black/40 group-hover:bg-black/20"
        }`}
      />

      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3">
        <Typography color="white" className="uppercase">
          {banner.title}
        </Typography>
        <Typography color="white" variant="caption">
          {banner.author}
        </Typography>
      </div>

      {index === activeIndex && (
        <div className="absolute right-2 top-2 h-3 w-3 animate-pulse rounded-full bg-primary" />
      )}
    </div>
  );
}

export default BannerHome;
