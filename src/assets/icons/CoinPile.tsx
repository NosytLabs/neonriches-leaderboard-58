
import React from 'react';
import { cn } from '@/lib/utils';

interface CoinPileProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const CoinPile: React.FC<CoinPileProps> = ({ 
  className, 
  size = 'md',
  animated = false 
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  return (
    <div className={cn(
      'relative inline-block', 
      sizeClasses[size], 
      animated && 'group',
      className
    )}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Base pile of coins */}
        <ellipse 
          cx="50" 
          cy="80" 
          rx="40" 
          ry="15" 
          fill="#ffd700" 
          stroke="#000" 
          strokeWidth="2"
          className={animated ? "animate-pulse" : ""}
        />
        
        {/* Individual coins */}
        <circle 
          cx="35" 
          cy="55" 
          r="15" 
          fill="#ffc107" 
          stroke="#000" 
          strokeWidth="2"
          className={animated ? "group-hover:translate-y-1 transition-transform duration-300" : ""}
        />
        <circle 
          cx="55" 
          cy="45" 
          r="15" 
          fill="#ffc107" 
          stroke="#000" 
          strokeWidth="2"
          className={animated ? "group-hover:translate-y-1 transition-transform duration-300 delay-100" : ""}
        />
        <circle 
          cx="70" 
          cy="60" 
          r="15" 
          fill="#ffc107" 
          stroke="#000" 
          strokeWidth="2"
          className={animated ? "group-hover:translate-y-1 transition-transform duration-300 delay-200" : ""}
        />
        
        {/* Dollar signs */}
        <text x="35" y="58" fontSize="12" fontWeight="bold" fill="#000" textAnchor="middle">$</text>
        <text x="55" y="48" fontSize="12" fontWeight="bold" fill="#000" textAnchor="middle">$</text>
        <text x="70" y="63" fontSize="12" fontWeight="bold" fill="#000" textAnchor="middle">$</text>
        
        {/* Highlights */}
        <circle cx="30" cy="50" r="3" fill="#fffde7" fillOpacity="0.7" />
        <circle cx="50" cy="40" r="3" fill="#fffde7" fillOpacity="0.7" />
        <circle cx="65" cy="55" r="3" fill="#fffde7" fillOpacity="0.7" />
      </svg>
    </div>
  );
};

export default CoinPile;
