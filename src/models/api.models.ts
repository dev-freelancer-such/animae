export interface ApiSuccess<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiAuthor {
  id: string;
  name: string;
  slug: string;
}

export interface ApiCategory {
  id?: string;
  name: string;
  slug: string;
  href?: string;
  description?: string | null;
  status?: string;
}

export interface HomeMenu {
  lists: ApiCategory[];
  categories: ApiCategory[];
}

export interface ApiStoryCategory {
  storyId: string;
  categoryId: string;
  category: ApiCategory;
}

export interface ApiChapter {
  id: string;
  storyId: string;
  title: string;
  slug: string;
  chapterNumber: number;
  content?: string | null;
  images?: string[];
  viewCount?: number;
  sourceUrl?: string | null;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  story?: {
    id: string;
    title: string;
    slug: string;
    thumbnail?: string | null;
  };
}

export interface ApiStory {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  thumbnail?: string | null;
  type?: string;
  storyStatus?: "ONGOING" | "COMPLETED" | "DROPPED" | string;
  status?: string;
  viewCount?: number;
  sourceUrl?: string | null;
  authorId?: string | null;
  author?: ApiAuthor | null;
  categories?: ApiStoryCategory[];
  chapters?: ApiChapter[];
  createdAt?: string;
  updatedAt?: string;
}
