import axiosInstance from "@/services/base/axiosInstance";

import { unwrapData } from "@/services/api/unwrap";

export async function requestApi<T>(
  path: string,
  params?: Record<string, string | number | undefined>
): Promise<T | null> {
  try {
    const res = await axiosInstance.get(path, { params });
    return unwrapData<T>(res);
  } catch {
    return null;
  }
}
