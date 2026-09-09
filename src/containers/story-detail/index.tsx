"use client";

import React, { useRef, useState } from "react";

import { Eye, Heart, Star, ThumbsUp } from "lucide-react";

import { ChapterInterface, StoryInterface } from "@/models/home.models";

import { cn } from "@/utils/cn";

import { Image, Typography } from "@/components/ui";

// ---------------------------------------------------------------------------
// Lazy image with blur-up placeholder (IntersectionObserver)
// ---------------------------------------------------------------------------
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

function LazyImage({ src, alt, className }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden bg-white/5", className)}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-white/10" />
      )}
      {inView && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Chapter row
// ---------------------------------------------------------------------------
function ChapterRow({ chapter }: { chapter: ChapterInterface }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors duration-200 group">
      <div className="flex items-center gap-3">
        <Typography variant="caption" color="default" className="w-12 shrink-0">
          Ch. {chapter.number}
        </Typography>
        <Typography
          color="white"
          className="line-clamp-1 group-hover:text-primary transition-colors"
        >
          {chapter.title}
        </Typography>
      </div>
      <Typography variant="caption" color="default" className="shrink-0 ml-4">
        {chapter.updatedAt}
      </Typography>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Status badge
// ---------------------------------------------------------------------------
const STATUS_COLOR: Record<string, string> = {
  ongoing: "bg-green-500/20 text-green-400",
  completed: "bg-blue-500/20 text-blue-400",
  hiatus: "bg-yellow-500/20 text-yellow-400",
};

// ---------------------------------------------------------------------------
// Main container
// ---------------------------------------------------------------------------
interface StoryDetailContainerProps {
  story: StoryInterface;
}

export default function StoryDetailContainer({
  story,
}: StoryDetailContainerProps) {
  const [liked, setLiked] = useState(story.isLiked ?? false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const statusLabel = story.status
    ? story.status.charAt(0).toUpperCase() + story.status.slice(1)
    : null;

  return (
    <section className="pt-24 pb-16">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Cover */}
        <div className="shrink-0 w-full md:w-56">
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-2/3">
            <Image
              src={story.thumbnail}
              alt={story.altText}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 224px"
              priority
            />
          </div>

          {/* Like button */}
          <button
            onClick={() => setLiked(p => !p)}
            className={cn(
              "mt-4 w-full flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all duration-200",
              liked
                ? "bg-secondary text-white"
                : "bg-white/10 text-white hover:bg-white/15"
            )}
          >
            <Heart size={16} fill={liked ? "white" : "none"} />
            {liked ? "Đã thích" : "Yêu thích"}
          </button>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <Typography variant="h3" color="white" className="mb-1">
            {story.title}
          </Typography>
          <Typography color="default" className="mb-4">
            {story.author}
          </Typography>

          {/* Genres */}
          {story.genres && story.genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {story.genres.map(g => (
                <span
                  key={g}
                  className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/70"
                >
                  {g}
                </span>
              ))}
              {statusLabel && (
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    STATUS_COLOR[story.status!] ?? "bg-white/10 text-white/70"
                  )}
                >
                  {statusLabel}
                </span>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-6 mb-6">
            {story.rating !== undefined && (
              <div className="flex items-center gap-1">
                <Star
                  size={14}
                  className="text-yellow-400"
                  fill="currentColor"
                />
                <Typography variant="caption" color="white">
                  {story.rating.toFixed(1)}
                </Typography>
              </div>
            )}
            {story.views !== undefined && (
              <div className="flex items-center gap-1">
                <Eye size={14} className="text-white/50" />
                <Typography variant="caption" color="default">
                  {story.views.toLocaleString()}
                </Typography>
              </div>
            )}
            {story.likes !== undefined && (
              <div className="flex items-center gap-1">
                <ThumbsUp size={14} className="text-white/50" />
                <Typography variant="caption" color="default">
                  {story.likes.toLocaleString()}
                </Typography>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <Typography
              color="default"
              className={cn(
                "transition-all duration-300 whitespace-pre-line",
                !showFullDesc && "line-clamp-4"
              )}
            >
              {story.description}
            </Typography>
            <button
              onClick={() => setShowFullDesc(p => !p)}
              className="mt-2 text-xs text-primary hover:underline"
            >
              {showFullDesc ? "Thu gọn" : "Xem thêm"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Chapters ─────────────────────────────────────────── */}
      {story.chapters && story.chapters.length > 0 && (
        <div>
          <Typography variant="h5" color="white" className="mb-4">
            Danh sách chương ({story.chapters.length})
          </Typography>
          <div className="rounded-xl border border-white/10 divide-y divide-white/5 overflow-hidden max-h-[500px] overflow-y-auto">
            {story.chapters.map(ch => (
              <ChapterRow key={ch.key} chapter={ch} />
            ))}
          </div>
        </div>
      )}

      {/* ── Chapter pages preview (lazy images) ──────────────── */}
      {/* Uncomment when real chapter pages are available
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {chapterPages.map((page) => (
          <LazyImage key={page.key} src={page.src} alt={page.alt} className="aspect-[2/3] rounded-lg" />
        ))}
      </div>
      */}
    </section>
  );
}

export { LazyImage };
