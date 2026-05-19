import { useRouter as useNextRouter } from "next/router";
import { useCallback } from "react";

type ParamUpdate = Record<string, string | number | null | undefined>;

export const useRouter = () => {
  const router = useNextRouter();

  /**
   * Cập nhật query params trên URL bằng replace (không thêm history).
   * - Truyền value rỗng (""), null, hoặc undefined → xoá key đó khỏi URL.
   * - Truyền mảng nhiều object → tất cả được merge vào query hiện tại.
   *
   * @example
   * updateParams([{ page: 2 }, { genre: "action" }])
   * updateParams([{ genre: "" }]) // xoá key genre
   */
  const updateParams = useCallback(
    (updates: ParamUpdate[]) => {
      const current = { ...router.query };

      for (const update of updates) {
        for (const [key, value] of Object.entries(update)) {
          if (value === "" || value === null || value === undefined) {
            delete current[key];
          } else {
            current[key] = String(value);
          }
        }
      }

      router.replace({ pathname: router.pathname, query: current }, undefined, {
        shallow: true,
      });
    },
    [router]
  );

  return {
    // State
    pathname: router.pathname,
    query: router.query,
    asPath: router.asPath,
    locale: router.locale,
    locales: router.locales,
    isReady: router.isReady,
    isFallback: router.isFallback,

    // Navigation
    push: router.push,
    replace: router.replace,
    back: router.back,
    forward: router.forward,
    reload: router.reload,
    prefetch: router.prefetch,

    // Custom
    updateParams,
  };
};
