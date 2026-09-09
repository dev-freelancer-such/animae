import { toast } from "sonner";

import { RequestOptionsInterface } from "@/models/request.models";

import axiosInstance from "@/services/base/axiosInstance";

import webStorageClient from "@/utils/webStorageClient";

const postRequest = <T = unknown>(
  url: string,
  options?: RequestOptionsInterface
): Promise<T> => {
  const {
    data,
    isFormData,
    enableFlashMessageSuccess = false,
    enableFlashMessageError = true,
  } = options || {};
  const token = webStorageClient.getToken();

  const config = {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    },
  };

  return axiosInstance
    .post(url, data, config)
    .then((res: T & { message?: string }) => {
      if (enableFlashMessageSuccess && res?.message) {
        toast.success(res.message);
      }
      return res;
    })
    .catch((err: { response?: { data?: { errors?: { detail?: string }[]; message?: string } } }) => {
      if (enableFlashMessageError) {
        const errors = err?.response?.data?.errors;
        if (errors?.length > 0) {
          errors.forEach(item => toast.error(item.detail || "Error"));
        } else {
          toast.error(err?.response?.data?.message || "Something went wrong");
        }
      }
      return Promise.reject(err);
    });
};

export { postRequest };
