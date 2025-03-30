
import React from 'react';
import { Trophy as TrophyIcon, Crown } from 'lucide-react';

interface TrophyProps {
  rank: number;
  size?: number;
  className?: string;
}

const Trophy: React.FC<TrophyProps> = ({ rank, size = 16, className = '' }) => {
  if (rank === 1) {
    return <Crown size={size} className={`text-royal-gold animate-crown-glow ${className}`} />;
  }
  
  if (rank === 2) {
    return <TrophyIcon size={size} className={`text-gray-300 ${className}`} />;
  }
  
  if (rank === 3) {
    return <TrophyIcon size={size} className={`text-amber-700 ${className}`} />;
  }
  
  return null;
};

export default Trophy;
