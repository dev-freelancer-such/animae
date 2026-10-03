import { ApiSuccess } from "@/models/api.models";

export function unwrapData<T>(res: unknown): T | null {
  if (res == null) return null;
  if (typeof res === "object" && res !== null && "data" in res) {
    return ((res as ApiSuccess<T>).data ?? null) as T | null;
  }
  return res as T;
}

export function unwrapList<T>(res: unknown): T[] {
  const data = unwrapData<T[]>(res);
  return Array.isArray(data) ? data : [];
}
