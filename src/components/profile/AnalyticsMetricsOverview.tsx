
import React from 'react';
import { AnalyticsData } from '@/hooks/useProfileAnalytics';

interface AnalyticsMetricsOverviewProps {
  analytics: AnalyticsData | null;
  ctr: string;
}

const AnalyticsMetricsOverview: React.FC<AnalyticsMetricsOverviewProps> = ({ 
  analytics, 
  ctr 
}) => {
  if (!analytics) return null;
  
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="glass-morphism rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-royal-gold">{analytics.views}</div>
        <div className="text-xs text-white/50">Total Views</div>
      </div>
      <div className="glass-morphism rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-royal-gold">{analytics.clicks}</div>
        <div className="text-xs text-white/50">Total Clicks</div>
      </div>
      <div className="glass-morphism rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-royal-gold">{ctr}</div>
        <div className="text-xs text-white/50">CTR</div>
      </div>
    </div>
  );
};

export default AnalyticsMetricsOverview;
