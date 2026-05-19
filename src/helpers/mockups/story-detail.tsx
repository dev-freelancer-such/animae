import { StoryInterface } from "@/models/home.models";

import { bannerHomeMockup } from "./home";

function makeDetailStory(
  base: StoryInterface,
  genres: string[],
  status: "ongoing" | "completed" | "hiatus",
  rating: number,
  chapterCount: number
): StoryInterface {
  return {
    ...base,
    genres,
    status,
    rating,
    chapters: Array.from({ length: chapterCount }, (_, i) => ({
      key: `${base.key}-ch-${chapterCount - i}`,
      number: chapterCount - i,
      title: `Chapter ${chapterCount - i}: ${["The Beginning", "A New Enemy", "Fire and Water", "Bonds of Blood", "The Final Stand"][i % 5]}`,
      updatedAt: `2024-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
    })),
  };
}

const storyDetailMockups: StoryInterface[] = [
  makeDetailStory(
    bannerHomeMockup[0],
    ["Action", "Adventure", "Supernatural"],
    "completed",
    4.8,
    205
  ),
  makeDetailStory(
    bannerHomeMockup[1],
    ["Action", "Comedy", "Drama"],
    "completed",
    4.9,
    720
  ),
  makeDetailStory(
    bannerHomeMockup[2],
    ["Action", "Adventure", "Comedy"],
    "ongoing",
    4.9,
    1110
  ),
  makeDetailStory(
    bannerHomeMockup[3],
    ["Action", "Supernatural", "Historical"],
    "completed",
    4.7,
    205
  ),
];

export { storyDetailMockups };
