
import React from 'react';
import { cn } from '@/lib/utils';

interface TreasureOpenProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const TreasureOpen: React.FC<TreasureOpenProps> = ({ 
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
        
        {/* Chest top - open */}
        <path 
          d="M15,40 Q15,20 50,15 Q85,20 85,40" 
          fill="none" 
          stroke="#5d4037" 
          strokeWidth="3"
          className="origin-bottom"
        />
        <path 
          d="M15,40 Q15,20 50,15 Q85,20 85,40" 
          fill="#a1887f" 
          strokeWidth="0"
          className="origin-bottom"
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
        
        {/* Gold coins and treasures */}
        <circle 
          cx="35" 
          cy="55" 
          r="7" 
          fill="#ffc107" 
          stroke="#ff8f00" 
          strokeWidth="1"
          className={animated ? "animate-bounce-slow" : ""}
        />
        
        <circle 
          cx="50" 
          cy="60" 
          r="7" 
          fill="#ffc107" 
          stroke="#ff8f00" 
          strokeWidth="1"
          className={animated ? "animate-bounce-slow animation-delay-100" : ""}
        />
        
        <circle 
          cx="65" 
          cy="55" 
          r="7" 
          fill="#ffc107" 
          stroke="#ff8f00" 
          strokeWidth="1"
          className={animated ? "animate-bounce-slow animation-delay-200" : ""}
        />
        
        {/* Gems */}
        <polygon 
          points="43,45 47,40 51,45 47,50" 
          fill="#f06292" 
          stroke="#e91e63" 
          strokeWidth="1"
          className={animated ? "animate-pulse-slow" : ""}
        />
        
        <polygon 
          points="58,47 62,42 66,47 62,52" 
          fill="#64b5f6" 
          stroke="#2196f3" 
          strokeWidth="1"
          className={animated ? "animate-pulse-slow animation-delay-300" : ""}
        />
      </svg>
    </div>
  );
};

export default TreasureOpen;
