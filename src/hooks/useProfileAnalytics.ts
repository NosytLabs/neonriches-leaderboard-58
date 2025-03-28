
import { useState, useEffect } from 'react';

export interface AnalyticsData {
  views: number;
  clicks: number;
  follows: number;
  shareCount: number;
  sources: Record<string, number>;
  referrers: Record<string, number>;
  history: Array<{
    type: string;
    timestamp: Date;
    source?: string;
    referrer?: string;
  }>;
  viewsOverTime: Array<{
    date: string;
    count: number;
  }>;
}

export interface ViewData {
  date: string;
  count: number;
}

export interface ClickData {
  date: string;
  count: number;
}

export interface SourceData {
  name: string;
  value: number;
}

export interface ReferrerData {
  name: string;
  visits: number;
  percentage: number;
}

export const useProfileAnalytics = (userId: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        // For now, we'll mock the data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
        
        // Mock data
        const mockData: AnalyticsData = {
          views: 1254,
          clicks: 326,
          follows: 87,
          shareCount: 42,
          sources: {
            'direct': 456,
            'google': 312,
            'twitter': 198,
            'instagram': 143,
            'facebook': 98,
            'reddit': 47
          },
          referrers: {
            'twitter.com': 198,
            'instagram.com': 143,
            'facebook.com': 98,
            'reddit.com': 47,
            't.co': 28,
            'linkedin.com': 19
          },
          history: [
            { type: 'view', timestamp: new Date(Date.now() - 86400000 * 1), source: 'direct' },
            { type: 'click', timestamp: new Date(Date.now() - 86400000 * 1.5), referrer: 'twitter.com' },
            { type: 'view', timestamp: new Date(Date.now() - 86400000 * 2), source: 'google' },
            { type: 'follow', timestamp: new Date(Date.now() - 86400000 * 3), source: 'direct' },
            { type: 'share', timestamp: new Date(Date.now() - 86400000 * 4), referrer: 'facebook.com' }
          ],
          viewsOverTime: [
            { date: '2023-09-20', count: 45 },
            { date: '2023-09-21', count: 52 },
            { date: '2023-09-22', count: 49 },
            { date: '2023-09-23', count: 68 },
            { date: '2023-09-24', count: 75 },
            { date: '2023-09-25', count: 89 },
            { date: '2023-09-26', count: 95 }
          ]
        };
        
        setAnalyticsData(mockData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch analytics'));
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchAnalytics();
    }
  }, [userId]);

  // Helper function to get formatted view data for charts
  const getViewsData = (): ViewData[] => {
    return analyticsData?.viewsOverTime || [];
  };

  // Helper function to get formatted click data for charts
  const getClicksData = (): ClickData[] => {
    // In a real app, you would have clicks over time
    // For now, we'll generate some mock data based on the views
    if (!analyticsData?.viewsOverTime) return [];
    
    return analyticsData.viewsOverTime.map(item => ({
      date: item.date,
      count: Math.floor(item.count * 0.3) // Assume 30% of views result in clicks
    }));
  };

  // Helper function to get formatted source data for charts
  const getSourcesData = (): SourceData[] => {
    if (!analyticsData?.sources) return [];
    
    return Object.entries(analyticsData.sources).map(([name, value]) => ({
      name,
      value
    }));
  };

  // Helper function to get formatted referrer data
  const getReferrersData = (): ReferrerData[] => {
    if (!analyticsData?.referrers) return [];
    
    const total = Object.values(analyticsData.referrers).reduce((sum, val) => sum + val, 0);
    
    return Object.entries(analyticsData.referrers)
      .map(([name, visits]) => ({
        name,
        visits,
        percentage: (visits / total) * 100
      }))
      .sort((a, b) => b.visits - a.visits);
  };

  return {
    loading,
    error,
    analyticsData,
    getViewsData,
    getClicksData,
    getSourcesData,
    getReferrersData
  };
};

export default useProfileAnalytics;
