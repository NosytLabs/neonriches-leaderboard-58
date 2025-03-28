
import { useState, useEffect } from 'react';
import { UserProfile, AnalyticsData } from '@/types/user';

// Export types for use in other components
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

// Mock function to get profile analytics
const getProfileAnalytics = async (userId: string): Promise<AnalyticsData> => {
  // In a real app, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return {
    views: 230 + Math.floor(Math.random() * 100),
    clicks: 45 + Math.floor(Math.random() * 30),
    follows: 12 + Math.floor(Math.random() * 10),
    shareCount: 5 + Math.floor(Math.random() * 8),
    sources: {
      'direct': 120,
      'search': 45,
      'social': 38,
      'referral': 27
    },
    referrers: {
      'twitter.com': 25,
      'facebook.com': 13,
      'instagram.com': 20,
      'discord.com': 12,
      'other': 18
    },
    history: [
      { type: 'view', timestamp: new Date(Date.now() - 3600000 * 24 * 5), source: 'direct' },
      { type: 'view', timestamp: new Date(Date.now() - 3600000 * 24 * 4), source: 'search' },
      { type: 'click', timestamp: new Date(Date.now() - 3600000 * 24 * 3), referrer: 'twitter.com' },
      { type: 'view', timestamp: new Date(Date.now() - 3600000 * 24 * 2), source: 'social' },
      { type: 'click', timestamp: new Date(Date.now() - 3600000 * 24 * 1), referrer: 'discord.com' }
    ],
    viewsOverTime: [
      { date: '2023-11-01', count: 15 },
      { date: '2023-11-02', count: 22 },
      { date: '2023-11-03', count: 18 },
      { date: '2023-11-04', count: 25 },
      { date: '2023-11-05', count: 30 },
      { date: '2023-11-06', count: 28 },
      { date: '2023-11-07', count: 35 }
    ]
  };
};

const useProfileAnalytics = (userId: string) => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) return;
    
    setLoading(true);
    const fetchAnalytics = async () => {
      try {
        const data = await getProfileAnalytics(userId);
        setAnalytics({
          ...data,
          sources: data.sources || {},
          referrers: data.referrers || {},
          history: data.history || []
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch analytics'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchAnalytics();
  }, [userId]);

  // Prepare data for charts
  const prepareViewsData = (): ViewData[] => {
    if (!analytics || !analytics.viewsOverTime) return [];
    return analytics.viewsOverTime;
  };

  const prepareClicksData = (): ClickData[] => {
    if (!analytics || !analytics.viewsOverTime) return [];
    // Transform view data to click data with slightly different numbers
    return analytics.viewsOverTime.map(view => ({
      date: view.date,
      count: Math.floor(view.count * 0.4)
    }));
  };

  const prepareSourcesData = (): SourceData[] => {
    if (!analytics || !analytics.sources) return [];
    return Object.entries(analytics.sources).map(([name, value]) => ({
      name,
      value
    }));
  };

  const prepareReferrersData = (): ReferrerData[] => {
    if (!analytics || !analytics.referrers) return [];
    return Object.entries(analytics.referrers)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  };

  const calculateCTR = (): string => {
    if (!analytics || !analytics.views || analytics.views === 0) return '0%';
    const ctr = (analytics.clicks / analytics.views) * 100;
    return `${ctr.toFixed(1)}%`;
  };

  return {
    analytics,
    loading,
    error,
    prepareViewsData,
    prepareClicksData,
    prepareSourcesData,
    prepareReferrersData,
    calculateCTR
  };
};

export default useProfileAnalytics;
