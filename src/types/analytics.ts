
export interface AnalyticsData {
  views: number;
  clicks: number;
  follows: number;
  shareCount: number;
  sources: Record<string, number>;
  referrers: Record<string, number>;
  history: any[];
  viewsOverTime: Array<{ date: string; count: number }>;
}
