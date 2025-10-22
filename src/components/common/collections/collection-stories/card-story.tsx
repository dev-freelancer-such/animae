import React from "react";

import { Eye, ThumbsUp } from "lucide-react";

import { StoryInterface } from "@/models/home.models";

import { cn } from "@/lib/utils";

import { Image, Typography } from "@/components/ui";

import icHeart from "@/assets/icons/common/ic-heart.svg";

function CardStory({
  key,
  title,
  description,
  thumbnail,
  altText,
  views,
  likes,
  isLiked,
  author,
  indexProp,
  isRanked,
}: StoryInterface) {
  return (
    <article className="h-full w-full max-w-52 relative select-none group cursor-pointer">
      <div
        className={cn(
          "w-6 h-6 rounded-full bg-secondary/70 hover:bg-secondary flex items-center justify-center absolute top-2 right-2 z-20 cursor-pointer transition-all duration-300",
          isLiked ? "bg-secondary" : "bg-secondary/70"
        )}
      >
        <Image src={icHeart} alt="icon heart" />
      </div>

      <Image
        src={thumbnail}
        alt={`${altText}-${key}`}
        className="h-60 object-cover w-full rounded-lg transition-all duration-300 group-hover:blur-sm"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3 group-hover:opacity-0 transition-opacity duration-300">
        <Typography color="white" className="uppercase line-clamp-1">
          {title || "--/--"}
        </Typography>
        <Typography color="white" variant="caption" className="line-clamp-1">
          {author}
        </Typography>
      </div>

      <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center p-4 z-10">
        <Typography className="text-center line-clamp-5" color="white">
          {description || "No description available"}
        </Typography>

        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="flex items-center gap-1">
            <Eye size={14} color="white" />
            <Typography variant="caption" color="white" fontWeight="light">
              {views?.toLocaleString() || 0}
            </Typography>
          </div>

          <div className="flex items-center gap-1">
            <ThumbsUp size={14} color="white" />
            <Typography variant="caption" color="white">
              {likes?.toLocaleString() || 0}
            </Typography>
          </div>
        </div>
      </div>

      {isRanked && (
        <Typography
          className="text-9xl opacity-85 absolute -bottom-2 right-0"
          color="white"
        >
          {Number(indexProp) + 1}
        </Typography>
      )}
    </article>
  );
}

export default CardStory;
