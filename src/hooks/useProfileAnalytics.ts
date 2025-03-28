
import { useState, useEffect } from 'react';
import { AnalyticsData } from '@/types/user';

// Define chart data interfaces
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
  value: number;
}

interface UseProfileAnalyticsReturn {
  loading: boolean;
  error: Error | null;
  analyticsData: AnalyticsData;
  getViewsData: () => ViewData[];
  getClicksData: () => ClickData[];
  getSourcesData: () => SourceData[];
  getReferrersData: () => ReferrerData[];
}

const useProfileAnalytics = (profileId: string): UseProfileAnalyticsReturn => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    views: 0,
    clicks: 0,
    follows: 0,
    shareCount: 0,
    sources: {},
    referrers: {},
    history: [],
    viewsOverTime: []
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        
        // In a real app, this would be an API call
        // For now, we'll simulate some analytics data
        setTimeout(() => {
          const mockData: AnalyticsData = {
            views: 1248,
            clicks: 387,
            follows: 42,
            shareCount: 18,
            sources: {
              'direct': 524,
              'search': 312,
              'social': 286,
              'referral': 126
            },
            referrers: {
              'twitter.com': 148,
              'discord.com': 73,
              'reddit.com': 65
            },
            history: [
              {
                type: 'view',
                timestamp: new Date(Date.now() - 3600000),
                source: 'direct'
              },
              {
                type: 'click',
                timestamp: new Date(Date.now() - 7200000),
                referrer: 'twitter.com'
              }
            ],
            viewsOverTime: [
              { date: '2023-06-01', count: 42 },
              { date: '2023-06-02', count: 56 },
              { date: '2023-06-03', count: 78 },
              { date: '2023-06-04', count: 93 },
              { date: '2023-06-05', count: 89 },
              { date: '2023-06-06', count: 127 },
              { date: '2023-06-07', count: 142 }
            ]
          };
          
          setAnalyticsData(mockData);
          setLoading(false);
        }, 1000);
        
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };
    
    fetchAnalytics();
  }, [profileId]);

  // Prepare data for charts
  const getViewsData = (): ViewData[] => {
    return analyticsData.viewsOverTime || [];
  };
  
  const getClicksData = (): ClickData[] => {
    // In a real app, this would come from the API
    // For now, generate some mock data
    return [
      { date: '2023-06-01', count: 12 },
      { date: '2023-06-02', count: 18 },
      { date: '2023-06-03', count: 24 },
      { date: '2023-06-04', count: 32 },
      { date: '2023-06-05', count: 28 },
      { date: '2023-06-06', count: 45 },
      { date: '2023-06-07', count: 52 }
    ];
  };
  
  const getSourcesData = (): SourceData[] => {
    return Object.entries(analyticsData.sources || {}).map(([name, value]) => ({
      name,
      value
    }));
  };
  
  const getReferrersData = (): ReferrerData[] => {
    return Object.entries(analyticsData.referrers || {}).map(([name, value]) => ({
      name,
      value
    }));
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
