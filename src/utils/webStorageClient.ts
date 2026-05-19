import Cookies from "js-cookie";

const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";

const webStorageClient = {
  get: (key: string): string | undefined => {
    return Cookies.get(key);
  },

  set: (key: string, value: string): void => {
    Cookies.set(key, value, { secure: true, sameSite: "strict" });
  },

  setToken: (token: string): void => {
    Cookies.set(ACCESS_TOKEN, token, { secure: true, sameSite: "strict" });
  },

  getToken: (): string | undefined => {
    return Cookies.get(ACCESS_TOKEN);
  },

  remove: (key: string): void => {
    Cookies.remove(key);
  },

  removeAll: (): void => {
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(REFRESH_TOKEN);
  },
};

export { ACCESS_TOKEN, REFRESH_TOKEN };
export default webStorageClient;
