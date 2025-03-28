
import { useState, useEffect } from 'react';
import { getProfileAnalytics } from '@/services/walletService';
import { UserProfile } from '@/types/user';

export interface AnalyticsData {
  views: number;
  clicks: number;
  sources: Record<string, number>;
  referrers: Record<string, number>;
  history: AnalyticsEvent[];
}

export interface AnalyticsEvent {
  type: 'view' | 'click';
  source?: string;
  referrer?: string;
  timestamp: Date;
}

export interface ViewData {
  date: string;
  views: number;
}

export interface ClickData {
  date: string;
  clicks: number;
}

export interface SourceData {
  name: string;
  value: number;
}

export interface ReferrerData {
  name: string;
  value: number;
}

export const useProfileAnalytics = (userId: string) => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchAnalytics = async () => {
      if (userId) {
        setLoading(true);
        try {
          const data = await getProfileAnalytics(userId);
          setAnalytics(data);
        } catch (error) {
          console.error("Error fetching profile analytics:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchAnalytics();
    
    const interval = setInterval(fetchAnalytics, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [userId]);
  
  const prepareViewsData = (): ViewData[] => {
    if (!analytics || !analytics.history) return [];
    
    const viewsByDay: Record<string, number> = {};
    
    analytics.history.forEach((item: any) => {
      if (item.type === 'view') {
        const date = new Date(item.timestamp);
        const dayKey = date.toISOString().split('T')[0];
        
        viewsByDay[dayKey] = (viewsByDay[dayKey] || 0) + 1;
      }
    });
    
    return Object.entries(viewsByDay).map(([date, count]) => ({
      date: date.split('-').slice(1).join('/'),
      views: count
    }));
  };
  
  const prepareClicksData = (): ClickData[] => {
    if (!analytics || !analytics.history) return [];
    
    const clicksByDay: Record<string, number> = {};
    
    analytics.history.forEach((item: any) => {
      if (item.type === 'click') {
        const date = new Date(item.timestamp);
        const dayKey = date.toISOString().split('T')[0];
        
        clicksByDay[dayKey] = (clicksByDay[dayKey] || 0) + 1;
      }
    });
    
    return Object.entries(clicksByDay).map(([date, count]) => ({
      date: date.split('-').slice(1).join('/'),
      clicks: count
    }));
  };
  
  const prepareSourcesData = (): SourceData[] => {
    if (!analytics || !analytics.sources) return [];
    
    return Object.entries(analytics.sources).map(([source, count]) => ({
      name: source,
      value: count
    }));
  };
  
  const prepareReferrersData = (): ReferrerData[] => {
    if (!analytics || !analytics.referrers) return [];
    
    return Object.entries(analytics.referrers)
      .map(([referrer, count]) => ({
        name: referrer || 'Direct',
        value: count
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  };
  
  const calculateCTR = (): string => {
    if (!analytics || analytics.views === 0) return '0%';
    return `${Math.round((analytics.clicks / analytics.views) * 100)}%`;
  };
  
  return {
    analytics,
    loading,
    prepareViewsData,
    prepareClicksData,
    prepareSourcesData,
    prepareReferrersData,
    calculateCTR
  };
};
