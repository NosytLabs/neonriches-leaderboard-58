
import { useState, useEffect } from 'react';
import { UserProfile, AnalyticsData } from '@/types/user';

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

const useProfileAnalytics = (user: UserProfile) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    views: 0,
    clicks: 0,
    sources: {},
    referrers: {},
    history: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchAnalytics = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const data = await getProfileAnalytics(user.id);
      // Add the required properties to match AnalyticsData type
      setAnalyticsData({
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

  useEffect(() => {
    if (user?.id) {
      fetchAnalytics();
    }
  }, [user?.id]);

  return {
    analyticsData,
    loading,
    error,
    refreshAnalytics: fetchAnalytics
  };
};

export default useProfileAnalytics;
