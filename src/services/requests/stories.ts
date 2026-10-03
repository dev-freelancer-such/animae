import {
  ApiCategory,
  ApiChapter,
  ApiStory,
  ApiSuccess,
  HomeMenu,
} from "@/models/api.models";

import { unwrapData, unwrapList } from "@/services/api/unwrap";
import { endpoints } from "@/services/endpoint";
import { getRequest } from "@/services/requests/getRequest";

export const getStories = (params?: Record<string, string | number>) =>
  getRequest<ApiSuccess<ApiStory[]>>(endpoints.stories.LIST, { params }).then(
    res => unwrapList<ApiStory>(res)
  );

export const getStoryBySlug = (slug: string) =>
  getRequest<ApiSuccess<ApiStory>>(endpoints.stories.DETAIL(slug)).then(res =>
    unwrapData<ApiStory>(res)
  );

export const getCategories = (params?: Record<string, string>) =>
  getRequest<ApiSuccess<ApiCategory[]>>(endpoints.categories.LIST, {
    params,
  }).then(res => unwrapList<ApiCategory>(res));

export const getChapterBySlug = (slug: string) =>
  getRequest<ApiSuccess<ApiChapter>>(endpoints.chapters.DETAIL(slug)).then(
    res => unwrapData<ApiChapter>(res)
  );

export const getHomeMenu = () =>
  getRequest<ApiSuccess<HomeMenu>>(endpoints.menu.HOME).then(res => {
    const data = unwrapData<HomeMenu>(res);
    return {
      lists: data?.lists ?? [],
      categories: data?.categories ?? [],
    };
  });
