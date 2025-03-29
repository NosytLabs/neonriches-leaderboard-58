
import React from 'react';
import { cn } from '@/lib/utils';

interface CoinStackProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  count?: number;
}

const CoinStack: React.FC<CoinStackProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  count = 3
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  // Limit count to a reasonable number
  const safeCount = Math.min(Math.max(1, count), 5);

  return (
    <div className={cn(
      'relative inline-block', 
      sizeClasses[size], 
      animated && 'group',
      className
    )}>
      <svg viewBox="0 0 100 120" className="w-full h-full">
        {/* Render each coin in the stack */}
        {Array.from({ length: safeCount }).map((_, i) => (
          <React.Fragment key={i}>
            <ellipse 
              cx="50" 
              cy={90 - (i * 15)} 
              rx="30" 
              ry="10" 
              fill="#ffc107" 
              stroke="#000" 
              strokeWidth="3"
              className={animated ? `transition-transform duration-300 group-hover:translate-y-${i}` : ""}
            />
            <ellipse 
              cx="50" 
              cy={90 - (i * 15)} 
              rx="24" 
              ry="7" 
              fill="#ff9800" 
              stroke="none"
            />
            {/* Dollar sign on top coin */}
            {i === safeCount - 1 && (
              <text
                x="50"
                y={90 - (i * 15)}
                fontSize="14"
                fontWeight="bold"
                fill="#8d6e63"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                $
              </text>
            )}
          </React.Fragment>
        ))}
        
        {/* Shine effect on top coin */}
        <ellipse 
          cx="40" 
          cy={90 - ((safeCount - 1) * 15)} 
          rx="8" 
          ry="3" 
          fill="#ffe082" 
          opacity="0.6"
          className={animated ? "animate-pulse" : ""}
        />
      </svg>
    </div>
  );
};

export default CoinStack;
