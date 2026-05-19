export enum GenreEnum {
  Action = "action",
  Adventure = "adventure",
  Comedy = "comedy",
  Drama = "drama",
  Fantasy = "fantasy",
  Horror = "horror",
  Mystery = "mystery",
  Romance = "romance",
  SciFi = "sci-fi",
  SliceOfLife = "slice-of-life",
  Sports = "sports",
  Thriller = "thriller",
}

export enum StatusEnum {
  All = "",
  Ongoing = "ongoing",
  Completed = "completed",
  Hiatus = "hiatus",
}

export enum SortEnum {
  Latest = "latest",
  Views = "views",
  Likes = "likes",
  AZ = "az",
}

export interface SelectOption<T extends string> {
  labelKey: string;
  value: T;
}

export const GENRES = Object.values(GenreEnum);

export const STATUS_OPTIONS: SelectOption<StatusEnum>[] = [
  { labelKey: "filter.status.all", value: StatusEnum.All },
  { labelKey: "filter.status.ongoing", value: StatusEnum.Ongoing },
  { labelKey: "filter.status.completed", value: StatusEnum.Completed },
  { labelKey: "filter.status.hiatus", value: StatusEnum.Hiatus },
];

export const SORT_OPTIONS: SelectOption<SortEnum>[] = [
  { labelKey: "filter.sort.latest", value: SortEnum.Latest },
  { labelKey: "filter.sort.views", value: SortEnum.Views },
  { labelKey: "filter.sort.likes", value: SortEnum.Likes },
  { labelKey: "filter.sort.az", value: SortEnum.AZ },
];

export const VIEW_MAX = 5_000_000;
