import { constants } from "@/settings";

import axios from "axios";

import webStorageClient from "@/utils/webStorageClient";

const axiosInstance = axios.create({
  baseURL: constants.API_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 600000,
});

axiosInstance.interceptors.request.use(
  config => {
    const token = webStorageClient.getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response?.data,
  async error => {
    const { config, response } = error;
    const originalRequest = config;

    if (response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      const refreshToken = webStorageClient.get(constants.REFRESH_TOKEN);

      if (refreshToken) {
        return axiosInstance
          .post("/core/auth/refresh-token", { refreshToken })
          .then(
            (res: { data: { accessToken: string; refreshToken: string } }) => {
              const accessToken = res?.data?.accessToken;
              axiosInstance.defaults.headers.common["Authorization"] =
                `Bearer ${accessToken}`;
              originalRequest.headers["Authorization"] =
                `Bearer ${accessToken}`;
              webStorageClient.setToken(accessToken);
              webStorageClient.set(
                constants.REFRESH_TOKEN,
                res?.data?.refreshToken
              );
              return axiosInstance(originalRequest);
            }
          )
          .catch(() => {
            webStorageClient.removeAll();
          });
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
