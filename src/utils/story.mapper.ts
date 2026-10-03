import { ApiCategory, ApiChapter, ApiStory } from "@/models/api.models";
import { CategoriesInterface, ChapterInterface, StoryInterface } from "@/models/home.models";

const CATEGORY_COLORS = [
  "from-red-500 to-orange-500",
  "from-green-500 to-teal-500",
  "from-pink-500 to-rose-500",
  "from-yellow-500 to-amber-500",
  "from-purple-500 to-indigo-500",
  "from-violet-500 to-purple-500",
  "from-gray-600 to-gray-800",
  "from-blue-400 to-cyan-400",
];

const STATUS_MAP: Record<string, StoryInterface["status"]> = {
  ONGOING: "ongoing",
  COMPLETED: "completed",
  DROPPED: "hiatus",
};

export function mapChapter(chapter: ApiChapter): ChapterInterface {
  return {
    key: chapter.slug,
    number: chapter.chapterNumber,
    title: chapter.title,
    updatedAt: chapter.updatedAt
      ? new Date(chapter.updatedAt).toLocaleDateString("vi-VN")
      : "",
    content: chapter.content ?? undefined,
    images: chapter.images,
    storySlug: chapter.story?.slug,
    storyTitle: chapter.story?.title,
  };
}

export function mapStory(story: ApiStory): StoryInterface {
  const genres =
    story.categories?.map(item => item.category?.name).filter(Boolean) ?? [];

  return {
    key: story.slug,
    slug: story.slug,
    title: story.title,
    description: story.description || "",
    thumbnail: story.thumbnail || "/images/og-default.png",
    altText: story.title,
    author: story.author?.name || "Unknown",
    subtitle: story.type || "",
    views: story.viewCount ?? 0,
    genres,
    status: STATUS_MAP[story.storyStatus ?? ""] ?? "ongoing",
    chapters: story.chapters?.map(mapChapter),
  };
}

export function mapCategory(
  category: ApiCategory,
  index = 0
): CategoriesInterface {
  return {
    key: category.slug,
    title: category.name,
    color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
  };
}

export function toApiStoryStatus(status?: string): string | undefined {
  if (!status) return undefined;
  if (status === "ongoing") return "ONGOING";
  if (status === "completed") return "COMPLETED";
  if (status === "hiatus") return "DROPPED";
  return undefined;
}
