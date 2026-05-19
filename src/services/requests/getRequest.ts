import { toast } from "sonner";

import { RequestOptionsInterface } from "@/models/request.models";

import axiosInstance from "@/services/base/axiosInstance";

import webStorageClient from "@/utils/webStorageClient";

const getRequest = <T = any>(
  url: string,
  options?: RequestOptionsInterface
): Promise<T> => {
  const {
    params,
    enableFlashMessageSuccess = false,
    enableFlashMessageError = false,
  } = options || {};
  const token = webStorageClient.getToken();

  const config = {
    params,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

  return axiosInstance
    .get(url, config)
    .then((res: any) => {
      if (enableFlashMessageSuccess && res?.message) {
        toast.success(res.message);
      }
      return res;
    })
    .catch((err: any) => {
      if (enableFlashMessageError) {
        const errors = err?.response?.data?.errors;
        if (errors?.length > 0) {
          errors.forEach((item: any) => toast.error(item.detail || "Error"));
        } else {
          toast.error(err?.response?.data?.message || "Something went wrong");
        }
      }
      return Promise.reject(err);
    });
};

export { getRequest };
