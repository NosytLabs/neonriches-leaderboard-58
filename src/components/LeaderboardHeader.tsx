
import React from 'react';
import { Crown } from 'lucide-react';

interface LeaderboardHeaderProps {
  title?: string;
  subtitle?: string;
}

const LeaderboardHeader: React.FC<LeaderboardHeaderProps> = ({ 
  title = "SpendThrone Leaderboard", 
  subtitle = "Where your wallet defines your worth" 
}) => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-2">
        <Crown className="h-8 w-8 mr-2 text-royal-gold animate-pulse" />
        <h1 className="text-3xl md:text-4xl font-bold royal-gradient">{title}</h1>
      </div>
      <p className="text-white/70 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default LeaderboardHeader;
