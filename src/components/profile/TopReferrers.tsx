
import React from 'react';
import { ReferrerData } from '@/hooks/useProfileAnalytics';

interface TopReferrersProps {
  data: ReferrerData[];
}

const TopReferrers: React.FC<TopReferrersProps> = ({ data }) => {
  return (
    <div className="mt-4 p-3 bg-black/20 rounded-lg">
      <h3 className="text-sm font-medium mb-2">Top Referrers</h3>
      {data.length > 0 ? (
        <div className="space-y-2">
          {data.map((referrer, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-white/70">{referrer.name}</span>
              <span className="text-sm font-medium">{referrer.value}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-white/50">No referrer data available yet</p>
      )}
    </div>
  );
};

export default TopReferrers;
