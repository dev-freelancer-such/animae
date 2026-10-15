const prefixApi = "/api/v1";

const endpoints = {
  stories: {
    LIST: `${prefixApi}/stories`,
    DETAIL: (slug: string) => `${prefixApi}/story/${slug}`,
  },
  categories: {
    LIST: `${prefixApi}/categories`,
  },
  chapters: {
    DETAIL: (slug: string) => `${prefixApi}/chapter/${slug}`,
  },
  menu: {
    HOME: `${prefixApi}/menu`,
  },
};

export { endpoints };
