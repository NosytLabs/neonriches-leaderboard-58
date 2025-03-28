
import React from 'react';
import { Coins } from 'lucide-react';

interface WishStatsProps {
  currentPool: number;
}

const WishStats: React.FC<WishStatsProps> = ({ currentPool }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
      <div className="flex items-center">
        <Coins className="h-5 w-5 text-royal-gold mr-2" />
        <span className="text-sm text-white/70">Current Pool</span>
      </div>
      <span className="text-xl font-bold text-royal-gold font-mono">${currentPool.toLocaleString()}</span>
    </div>
  );
};

export default WishStats;
