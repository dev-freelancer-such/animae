const prefixApi = "/api/v1";
const prefixAuth = `${prefixApi}/auth`;

const endpoints = {
  auth: {
    LOGIN: `${prefixAuth}/login`,
    REGISTER: `${prefixAuth}/register`,
    ME: `${prefixAuth}/me`,
  },
  stories: {
    LIST: `${prefixApi}/stories`,
    DETAIL: (slug: string) => `${prefixApi}/story/${slug}`,
  },
  categories: {
    LIST: `${prefixApi}/categories`,
    DETAIL: (slug: string) => `${prefixApi}/category/${slug}`,
  },
  chapters: {
    DETAIL: (slug: string) => `${prefixApi}/chapter/${slug}`,
  },
  menu: {
    HOME: `${prefixApi}/menu`,
  },
};

export { endpoints, prefixApi, prefixAuth };
