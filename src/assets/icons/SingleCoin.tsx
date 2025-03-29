
import React from 'react';
import { cn } from '@/lib/utils';

interface SingleCoinProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const SingleCoin: React.FC<SingleCoinProps> = ({ 
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
      animated && 'transition-transform hover:scale-110',
      className
    )}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Coin outline */}
        <circle cx="50" cy="50" r="45" fill="#ffc107" stroke="#000" strokeWidth="4" />
        
        {/* Inner shading */}
        <circle cx="50" cy="50" r="35" fill="#ff9800" stroke="none" />
        
        {/* Highlight */}
        <circle cx="35" cy="35" r="8" fill="#ffe082" stroke="none" opacity="0.6" />
        
        {/* Dollar sign */}
        <text
          x="50"
          y="65"
          fontSize="45"
          fontWeight="bold"
          fill="#8d6e63"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          $
        </text>
        
        {/* Bottom shine effect */}
        <ellipse 
          cx="50" 
          cy="75" 
          rx="15" 
          ry="5" 
          fill="#ffe082" 
          opacity="0.3"
          className={animated ? "animate-pulse" : ""} 
        />
      </svg>
    </div>
  );
};

export default SingleCoin;
