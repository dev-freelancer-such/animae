import { constants } from "@/settings";

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

import { getVisitorId } from "@/utils/visitorId";
import webStorageClient from "@/utils/webStorageClient";

type RetryConfig = InternalAxiosRequestConfig & { _retry?: boolean };

function readToken() {
  if (typeof window === "undefined") return undefined;
  return webStorageClient.getToken();
}

const axiosInstance = axios.create({
  baseURL: constants.API_SERVER,
  headers: {
    Accept: "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
  config => {
    const method = (config.method || "get").toLowerCase();
    if (method !== "get" && method !== "head") {
      config.headers["Content-Type"] = "application/json";
    }
    const token = readToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    const visitorId = getVisitorId();
    if (visitorId) {
      config.headers[constants.VISITOR_HEADER] = visitorId;
    }
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response.data,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryConfig | undefined;
    const status = error.response?.status;

    if (status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken =
        typeof window !== "undefined"
          ? webStorageClient.get(constants.REFRESH_TOKEN)
          : undefined;

      if (refreshToken && constants.REFRESH_PATH) {
        try {
          const res = (await axiosInstance.post(constants.REFRESH_PATH, {
            refreshToken,
          })) as { data?: { accessToken: string; refreshToken: string } };
          const accessToken = res?.data?.accessToken;
          if (accessToken) {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            webStorageClient.setToken(accessToken);
            if (res.data?.refreshToken) {
              webStorageClient.set(
                constants.REFRESH_TOKEN,
                res.data.refreshToken
              );
            }
            return axiosInstance(originalRequest);
          }
        } catch {
          webStorageClient.removeAll();
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
