import { useEffect, useState } from "react";

import { HomeMenu } from "@/models/api.models";

import { getHomeMenu } from "@/services/requests/stories";

export function useHomeMenu() {
  const [menu, setMenu] = useState<HomeMenu>({ lists: [], categories: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getHomeMenu()
      .then(data => {
        if (!cancelled) setMenu(data);
      })
      .catch(() => {
        if (!cancelled) setMenu({ lists: [], categories: [] });
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { ...menu, loading };
}

export function useCategories() {
  const { categories, loading } = useHomeMenu();
  return { categories, loading };
}
