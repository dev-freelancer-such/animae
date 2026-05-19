import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { StoryInterface } from "@/models/home.models";

import { VIEW_MAX } from "@/constants/products.constants";

import { bannerHomeMockup } from "@/helpers/mockups/home";

import { useRouter } from "@/hooks/useRouter";

import { Typography } from "@/components/ui";

import FilterPanel, { FilterState } from "./filter-panel";

const StoryList = dynamic(() => import("./story-list"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

const PAGE_SIZE = 10;

const ALL_STORIES: StoryInterface[] = Array(20)
  .fill(null)
  .map((_, i) => bannerHomeMockup[i % bannerHomeMockup.length]);

type RawQuery = Record<string, string | string[] | undefined>;

function parseFilter(query: RawQuery): FilterState {
  const str = (key: string) => {
    const v = query[key];
    return typeof v === "string" ? v : "";
  };
  const num = (key: string, fallback: number) => {
    const v = Number(query[key]);
    return isNaN(v) ? fallback : v;
  };

  return {
    search: str("q"),
    genres: str("genres") ? str("genres").split(",") : [],
    status: str("status"),
    sortBy: str("sort") || "latest",
    viewRange: [num("viewMin", 0), num("viewMax", VIEW_MAX)],
    starRange: [num("starMin", 1), num("starMax", 5)],
  };
}

export default function ProductsContainer() {
  const { t } = useTranslation("products");
  const { query, updateParams } = useRouter();

  const filter = useMemo(() => parseFilter(query as RawQuery), [query]);

  const handleFilterChange = (next: FilterState) => {
    updateParams([
      {
        q: next.search || null,
        genres: next.genres.length ? next.genres.join(",") : null,
        status: next.status || null,
        sort: next.sortBy !== "latest" ? next.sortBy : null,
        viewMin: next.viewRange[0] !== 0 ? next.viewRange[0] : null,
        viewMax: next.viewRange[1] !== VIEW_MAX ? next.viewRange[1] : null,
        starMin: next.starRange[0] !== 1 ? next.starRange[0] : null,
        starMax: next.starRange[1] !== 5 ? next.starRange[1] : null,
      },
    ]);
  };

  const filteredStories = useMemo(() => {
    const q = filter.search.trim().toLowerCase();
    const result = [...ALL_STORIES].filter(
      s =>
        (s.views ?? 0) >= filter.viewRange[0] &&
        (s.views ?? 0) <= filter.viewRange[1] &&
        (!q ||
          s.title.toLowerCase().includes(q) ||
          s.author.toLowerCase().includes(q))
    );

    if (filter.sortBy === "views") {
      result.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
    } else if (filter.sortBy === "likes") {
      result.sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0));
    } else if (filter.sortBy === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [filter]);

  const [displayedStories, setDisplayedStories] = useState<StoryInterface[]>(
    []
  );
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  // Reset to first page whenever the filtered list changes
  useEffect(() => {
    setPage(0);
  }, [filteredStories]);

  // Load the slice for the current page
  useEffect(() => {
    const start = page * PAGE_SIZE;

    if (page === 0) {
      setDisplayedStories(filteredStories.slice(0, PAGE_SIZE));
      setHasMore(filteredStories.length > PAGE_SIZE);
      setIsLoading(false);
      loadingRef.current = false;
      return;
    }

    if (start >= filteredStories.length) {
      setHasMore(false);
      return;
    }

    setIsLoading(true);
    loadingRef.current = true;

    const timer = setTimeout(() => {
      setDisplayedStories(prev => [
        ...prev,
        ...filteredStories.slice(start, start + PAGE_SIZE),
      ]);
      setHasMore(start + PAGE_SIZE < filteredStories.length);
      setIsLoading(false);
      loadingRef.current = false;
    }, 600);

    return () => clearTimeout(timer);
  }, [filteredStories, page]);

  const handleLoadMore = useCallback(() => {
    if (!loadingRef.current && hasMoreRef.current) {
      setPage(prev => prev + 1);
    }
  }, []);

  return (
    <section className="pt-30 pb-10">
      <Typography variant="h4" color="white" className="mb-8">
        {t("all-stories")}
      </Typography>

      <div className="flex gap-6 items-start">
        {/* Left: Filter */}
        <div className="w-64 shrink-0 hidden md:block">
          <FilterPanel filter={filter} onChange={handleFilterChange} />
        </div>

        {/* Right: Story list */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <Typography variant="caption" color="default">
              {t("results", { count: filteredStories.length })}
            </Typography>
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh-200px)] pr-1">
            <StoryList
              stories={displayedStories}
              isLoading={isLoading}
              hasMore={hasMore}
              onLoadMore={handleLoadMore}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
