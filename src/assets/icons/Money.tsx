
import React from 'react';
import { cn } from '@/lib/utils';

interface MoneyProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const Money: React.FC<MoneyProps> = ({ 
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
        {/* Dollar bill */}
        <rect 
          x="15" 
          y="30" 
          width="70" 
          height="40" 
          rx="3" 
          fill="#c8e6c9" 
          stroke="#4caf50" 
          strokeWidth="2"
          className={animated ? "group-hover:scale-105 transition-transform duration-300" : ""}
        />
        
        {/* Inner border */}
        <rect 
          x="20" 
          y="35" 
          width="60" 
          height="30" 
          rx="2" 
          fill="none" 
          stroke="#4caf50" 
          strokeWidth="1"
          strokeDasharray="2"
        />
        
        {/* Dollar sign */}
        <text
          x="50"
          y="55"
          fontSize="25"
          fontWeight="bold"
          fill="#388e3c"
          textAnchor="middle"
          dominantBaseline="middle"
          className={animated ? "animate-pulse-slow" : ""}
        >
          $
        </text>
        
        {/* Corner decorations */}
        <circle cx="25" cy="40" r="5" fill="#a5d6a7" />
        <circle cx="75" cy="40" r="5" fill="#a5d6a7" />
        <circle cx="25" cy="60" r="5" fill="#a5d6a7" />
        <circle cx="75" cy="60" r="5" fill="#a5d6a7" />
        
        {/* Additional bill behind */}
        <rect 
          x="10" 
          y="35" 
          width="70" 
          height="40" 
          rx="3" 
          fill="#c8e6c9" 
          stroke="#4caf50" 
          strokeWidth="2"
          className={`-z-10 ${animated ? "group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" : ""}`}
        />
      </svg>
    </div>
  );
};

export default Money;
