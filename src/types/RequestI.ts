export type PlatformItem = {
  name: string;
  videos: number;
  watchTime: number;
  logo: string;
};

export type WatchTimeMonthly = {
  month: string;
  expanded: number;
  original: number;
};
export type Platform = {
  name: string;
  amount: number;
  data: PlatformItem[];
};

export type AppData = {
  languages: string[];
  flags: string[];
  minutesPublished: number;
  shortsExtractable: number;
  themes: string[];
  watchTimeMonthly: WatchTimeMonthly[];
  platforms: Platform;
};
