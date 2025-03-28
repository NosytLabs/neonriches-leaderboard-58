
export interface ProfileImage {
  id: number;
  url: string;
  caption: string;
}

export interface ProfileCustomization {
  theme?: string;
  font?: string;
  borderStyle?: string;
  colorScheme?: string;
  backgroundImage?: string;
  effects?: string[];
}

export interface ProfileStats {
  views: number;
  clicks: number;
  followers: number;
  following: number;
  shareCount: number;
}

export interface ProfileAnalytics {
  viewsOverTime: Array<{ date: string; count: number }>;
  clicksOverTime: Array<{ date: string; count: number }>;
  sources: Record<string, number>;
  referrers: Record<string, number>;
}
