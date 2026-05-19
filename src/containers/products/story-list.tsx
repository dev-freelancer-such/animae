import React, { useEffect, useRef } from "react";

import { Eye, ThumbsUp } from "lucide-react";

import { StoryInterface } from "@/models/home.models";

import { cn } from "@/lib/utils";

import { Image, Typography } from "@/components/ui";

import icHeart from "@/assets/icons/common/ic-heart.svg";

interface StoryListProps {
  stories: StoryInterface[];
  isLoading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

function StoryCard({
  title,
  description,
  thumbnail,
  altText,
  views,
  likes,
  isLiked,
  author,
}: StoryInterface) {
  return (
    <article className="relative group cursor-pointer select-none rounded-lg overflow-hidden">
      <div
        className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center absolute top-2 right-2 z-20 cursor-pointer transition-all duration-300",
          isLiked ? "bg-secondary" : "bg-secondary/70 hover:bg-secondary"
        )}
      >
        <Image src={icHeart} alt="icon heart" />
      </div>

      <Image
        src={thumbnail}
        alt={altText}
        className="h-60 w-full object-cover transition-all duration-300 group-hover:blur-sm"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3 group-hover:opacity-0 transition-opacity duration-300">
        <Typography color="white" className="uppercase line-clamp-1">
          {title || "--/--"}
        </Typography>
        <Typography color="white" variant="caption" className="line-clamp-1">
          {author}
        </Typography>
      </div>

      <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4 z-10">
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
    </article>
  );
}

export default function StoryList({
  stories,
  isLoading,
  hasMore,
  onLoadMore,
}: StoryListProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const onLoadMoreRef = useRef(onLoadMore);
  onLoadMoreRef.current = onLoadMore;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onLoadMoreRef.current) {
          onLoadMoreRef.current();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  if (!stories.length && !isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Typography color="default">No stories found.</Typography>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {stories.map((story, idx) => (
          <StoryCard key={`${story.key}-${idx}`} {...story} />
        ))}
      </div>
      <div ref={sentinelRef} className="h-4" />
      {isLoading && (
        <div className="flex justify-center py-6">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      {!hasMore && !isLoading && stories.length > 0 && (
        <div className="flex justify-center py-4">
          <Typography variant="caption" color="default">
            — End of list —
          </Typography>
        </div>
      )}
    </>
  );
}
