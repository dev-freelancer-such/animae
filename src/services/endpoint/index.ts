const prefixApi = "/api/v1";
const prefixAuth = "/api/auth";

const endpoints = {
  auth: {
    LOGIN: `${prefixAuth}/login`,
    LOGOUT: `${prefixAuth}/logout`,
    REFRESH_TOKEN: `${prefixAuth}/refresh-token`,
    ME: `${prefixAuth}/me`,
  },
};

export { endpoints, prefixApi, prefixAuth };
