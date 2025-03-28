
import React from 'react';
import { ReferrerData } from '@/hooks/useProfileAnalytics';

interface TopReferrersProps {
  data: ReferrerData[];
}

const TopReferrers: React.FC<TopReferrersProps> = ({ data }) => {
  return (
    <div className="glass-morphism p-4 rounded-lg border border-white/10">
      <h3 className="text-sm font-medium mb-4">Top Referrers</h3>
      {data.length > 0 ? (
        <div className="space-y-3">
          {data.map((referrer, index) => (
            <div key={index} className="flex justify-between items-center p-2 glass-morphism border-white/10 rounded-lg">
              <span className="text-sm text-white/70">{referrer.name}</span>
              <span className="text-sm font-medium">{referrer.value}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-56 flex items-center justify-center">
          <p className="text-sm text-white/50">No referrer data available yet</p>
        </div>
      )}
    </div>
  );
};

export default TopReferrers;
