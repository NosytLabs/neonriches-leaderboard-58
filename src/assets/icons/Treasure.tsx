
import React from 'react';
import { cn } from '@/lib/utils';

interface TreasureProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const Treasure: React.FC<TreasureProps> = ({ 
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
        {/* Chest base */}
        <rect 
          x="20" 
          y="40" 
          width="60" 
          height="40" 
          rx="5" 
          fill="#8d6e63" 
          stroke="#5d4037" 
          strokeWidth="3"
        />
        
        {/* Chest top - closed */}
        <path 
          d="M15,40 Q50,25 85,40" 
          fill="#a1887f" 
          stroke="#5d4037" 
          strokeWidth="3"
          className={animated ? "group-hover:opacity-0 transition-opacity duration-500" : ""}
        />
        
        {/* Lock */}
        <rect 
          x="45" 
          y="35" 
          width="10" 
          height="15" 
          rx="2" 
          fill="#ffc107" 
          stroke="#5d4037" 
          strokeWidth="1"
          className={animated ? "group-hover:opacity-0 transition-opacity duration-500" : ""}
        />
        
        {/* Decorative elements */}
        <rect 
          x="25" 
          y="50" 
          width="50" 
          height="5" 
          rx="2" 
          fill="#5d4037"
        />
        
        <rect 
          x="25" 
          y="65" 
          width="50" 
          height="5" 
          rx="2" 
          fill="#5d4037"
        />
        
        {/* Gold coins (visible when animated) */}
        <circle 
          cx="40" 
          cy="55" 
          r="8" 
          fill="#ffc107" 
          stroke="#ff8f00" 
          strokeWidth="1"
          className={animated ? "opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" : "opacity-0"}
        />
        
        <circle 
          cx="60" 
          cy="55" 
          r="8" 
          fill="#ffc107" 
          stroke="#ff8f00" 
          strokeWidth="1"
          className={animated ? "opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400" : "opacity-0"}
        />
        
        <circle 
          cx="50" 
          cy="45" 
          r="8" 
          fill="#ffc107" 
          stroke="#ff8f00" 
          strokeWidth="1"
          className={animated ? "opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" : "opacity-0"}
        />
      </svg>
    </div>
  );
};

export default Treasure;
