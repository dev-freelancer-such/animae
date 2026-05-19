import { useTranslation } from "next-i18next";
import React, { useState } from "react";

import { ChevronDown, ChevronUp, RotateCcw, Search, Star } from "lucide-react";

import {
  GENRES,
  SORT_OPTIONS,
  SortEnum,
  STATUS_OPTIONS,
  StatusEnum,
  VIEW_MAX,
} from "@/constants/products.constants";

import { cn } from "@/lib/utils";

import { Typography } from "@/components/ui";

export interface FilterState {
  search: string;
  genres: string[];
  status: string;
  sortBy: string;
  viewRange: [number, number];
  starRange: [number, number];
}

interface StarRangeSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  labelAll: string;
  labelFrom: string;
}

function StarRangeSlider({
  value,
  onChange,
  labelAll,
  labelFrom,
}: StarRangeSliderProps) {
  const [minStar] = value;

  return (
    <div className="px-1 flex flex-col gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            onClick={() => onChange([star, 5])}
            className="cursor-pointer transition-transform hover:scale-110"
          >
            <Star
              size={20}
              className="transition-colors duration-150"
              fill={star <= minStar ? "#fdc700" : "transparent"}
              color={star <= minStar ? "#fdc700" : "#b4b2b3"}
            />
          </button>
        ))}
      </div>
      <Typography variant="caption" color="default">
        {minStar === 1 ? labelAll : labelFrom}
      </Typography>
    </div>
  );
}

const VIEW_MAX_LOCAL = VIEW_MAX;

function formatViews(n: number): string {
  if (n >= 1_000_000)
    return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return String(n);
}

interface ViewRangeSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

function ViewRangeSlider({ value, onChange }: ViewRangeSliderProps) {
  const [minVal, maxVal] = value;
  const pctMin = (minVal / VIEW_MAX_LOCAL) * 100;
  const pctMax = (maxVal / VIEW_MAX_LOCAL) * 100;

  return (
    <div className="px-1">
      <div className="flex justify-between mb-3">
        <Typography variant="caption" color="default">
          {formatViews(minVal)}
        </Typography>
        <Typography variant="caption" color="default">
          {formatViews(maxVal)}
        </Typography>
      </div>

      <div className="relative h-5 flex items-center">
        {/* Track background */}
        <div className="absolute w-full h-1 bg-secondary/20 rounded-full" />
        {/* Track fill */}
        <div
          className="absolute h-1 bg-primary rounded-full pointer-events-none"
          style={{ left: `${pctMin}%`, width: `${pctMax - pctMin}%` }}
        />
        {/* Min thumb */}
        <input
          type="range"
          min={0}
          max={VIEW_MAX}
          step={100_000}
          value={minVal}
          onChange={e => {
            const val = Math.min(Number(e.target.value), maxVal - 100_000);
            onChange([val, maxVal]);
          }}
          className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
        />
        {/* Max thumb */}
        <input
          type="range"
          min={0}
          max={VIEW_MAX}
          step={100_000}
          value={maxVal}
          onChange={e => {
            const val = Math.max(Number(e.target.value), minVal + 100_000);
            onChange([minVal, val]);
          }}
          className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
        />
      </div>
    </div>
  );
}

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function FilterSection({
  title,
  isOpen,
  onToggle,
  children,
}: FilterSectionProps) {
  return (
    <div className="border-b border-secondary/20 pb-4 mb-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full mb-3 cursor-pointer"
      >
        <Typography color="white" fontWeight="semibold">
          {title}
        </Typography>
        {isOpen ? (
          <ChevronUp size={16} color="#b4b2b3" />
        ) : (
          <ChevronDown size={16} color="#b4b2b3" />
        )}
      </button>
      {isOpen && <div className="flex flex-col gap-2">{children}</div>}
    </div>
  );
}

interface FilterPanelProps {
  filter: FilterState;
  onChange: (filter: FilterState) => void;
}

export default function FilterPanel({ filter, onChange }: FilterPanelProps) {
  const { t } = useTranslation("products");
  const [openSections, setOpenSections] = useState({
    genre: true,
    status: true,
    sort: true,
    views: true,
    stars: true,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleGenre = (genre: string) => {
    const next = filter.genres.includes(genre)
      ? filter.genres.filter(g => g !== genre)
      : [...filter.genres, genre];
    onChange({ ...filter, genres: next });
  };

  const handleReset = () => {
    onChange({
      search: "",
      genres: [],
      status: StatusEnum.All,
      sortBy: SortEnum.Latest,
      viewRange: [0, VIEW_MAX_LOCAL],
      starRange: [1, 5],
    });
  };

  return (
    <aside className="bg-white/5 border border-secondary/20 rounded-xl p-5 sticky top-24 h-fit">
      <div className="flex items-center justify-between mb-5">
        <Typography variant="h6" color="white">
          {t("filter.title")}
        </Typography>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-secondary hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw size={12} />
          <Typography variant="caption" color="default">
            {t("filter.reset")}
          </Typography>
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
        />
        <input
          type="text"
          placeholder={t("filter.search-placeholder")}
          value={filter.search}
          onChange={e => onChange({ ...filter, search: e.target.value })}
          className="w-full bg-white/5 border border-secondary/20 rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder-secondary/50 outline-none focus:border-secondary/60 transition-colors"
        />
      </div>

      {/* Genre */}
      <FilterSection
        title={t("filter.sections.genre")}
        isOpen={openSections.genre}
        onToggle={() => toggleSection("genre")}
      >
        <div className="flex flex-wrap gap-2">
          {GENRES.map(genre => {
            const active = filter.genres.includes(genre);
            return (
              <button
                key={genre}
                onClick={() => toggleGenre(genre)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs border transition-all duration-200 cursor-pointer",
                  active
                    ? "bg-primary border-primary text-white"
                    : "border-secondary/40 text-secondary hover:border-secondary hover:text-white"
                )}
              >
                {t(`filter.genres.${genre}`)}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Status */}
      <FilterSection
        title={t("filter.sections.status")}
        isOpen={openSections.status}
        onToggle={() => toggleSection("status")}
      >
        {STATUS_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange({ ...filter, status: opt.value })}
            className={cn(
              "flex items-center gap-2 w-full px-3 py-2 rounded-lg text-left transition-all duration-200 cursor-pointer",
              filter.status === opt.value
                ? "bg-primary/20 border border-primary"
                : "hover:bg-white/5 border border-transparent"
            )}
          >
            <div
              className={cn(
                "w-3 h-3 rounded-full border-2 transition-all",
                filter.status === opt.value
                  ? "border-primary bg-primary"
                  : "border-secondary/50"
              )}
            />
            <Typography
              variant="caption"
              color={filter.status === opt.value ? "white" : "default"}
            >
              {t(opt.labelKey)}
            </Typography>
          </button>
        ))}
      </FilterSection>

      {/* Star Rating Range */}
      <FilterSection
        title={t("filter.sections.star-rating")}
        isOpen={openSections.stars}
        onToggle={() => toggleSection("stars")}
      >
        <StarRangeSlider
          value={filter.starRange}
          onChange={starRange => onChange({ ...filter, starRange })}
          labelAll={t("filter.star.all")}
          labelFrom={t("filter.star.from", { count: filter.starRange[0] })}
        />
      </FilterSection>

      {/* Views Range */}
      <FilterSection
        title={t("filter.sections.views")}
        isOpen={openSections.views}
        onToggle={() => toggleSection("views")}
      >
        <ViewRangeSlider
          value={filter.viewRange}
          onChange={viewRange => onChange({ ...filter, viewRange })}
        />
      </FilterSection>

      {/* Sort */}
      <FilterSection
        title={t("filter.sections.sort-by")}
        isOpen={openSections.sort}
        onToggle={() => toggleSection("sort")}
      >
        {SORT_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange({ ...filter, sortBy: opt.value })}
            className={cn(
              "flex items-center gap-2 w-full px-3 py-2 rounded-lg text-left transition-all duration-200 cursor-pointer",
              filter.sortBy === opt.value
                ? "bg-primary/20 border border-primary"
                : "hover:bg-white/5 border border-transparent"
            )}
          >
            <div
              className={cn(
                "w-3 h-3 rounded-full border-2 transition-all",
                filter.sortBy === opt.value
                  ? "border-primary bg-primary"
                  : "border-secondary/50"
              )}
            />
            <Typography
              variant="caption"
              color={filter.sortBy === opt.value ? "white" : "default"}
            >
              {t(opt.labelKey)}
            </Typography>
          </button>
        ))}
      </FilterSection>
    </aside>
  );
}
