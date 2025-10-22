import { StaticImageData } from "next/image";

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
