import { StaticImageData } from "next/image";

export interface ChapterInterface {
  key: string;
  number: number;
  title: string;
  updatedAt: string;
  thumbnail?: string | StaticImageData;
}

export interface StoryInterface {
  key: string;
  title: string;
  description: string;
  thumbnail: string | StaticImageData;
  altText: string;
  author: string;
  subtitle: string;
  views?: number;
  likes?: number;
  isLiked?: boolean;
  isRanked?: boolean;
  indexProp?: number;
  genres?: string[];
  status?: "ongoing" | "completed" | "hiatus";
  rating?: number;
  chapters?: ChapterInterface[];
}

export interface HomeCollectionStoryInterface {
  label: string;
  actionNext: string;
  stories: StoryInterface[];
}

export interface CategoriesInterface {
  key: string;
  title: string;
  color: string;
}

export interface CategoriesStoryInterface {
  label: string;
  actionNext: string;
  categories: CategoriesInterface[];
}
