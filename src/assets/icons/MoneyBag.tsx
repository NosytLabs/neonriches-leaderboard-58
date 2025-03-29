
import React from 'react';
import { cn } from '@/lib/utils';

interface MoneyBagProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const MoneyBag: React.FC<MoneyBagProps> = ({ 
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
        {/* Bag body */}
        <path 
          d="M30,35 Q30,20 50,20 Q70,20 70,35 L70,80 Q70,90 50,90 Q30,90 30,80 Z" 
          fill="#a1887f" 
          stroke="#5d4037" 
          strokeWidth="4"
        />
        
        {/* Bag tied section */}
        <path 
          d="M30,35 Q50,40 70,35" 
          fill="none" 
          stroke="#5d4037" 
          strokeWidth="3"
        />
        
        {/* Dollar sign */}
        <text
          x="50"
          y="60"
          fontSize="30"
          fontWeight="bold"
          fill="#4e342e"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          $
        </text>
        
        {/* Coins spilling out */}
        <circle 
          cx="75" 
          cy="70" 
          r="10" 
          fill="#ffc107" 
          stroke="#5d4037" 
          strokeWidth="2"
          className={animated ? "animate-bounce-slow" : ""}
        />
        <circle 
          cx="85" 
          cy="80" 
          r="8" 
          fill="#ffc107" 
          stroke="#5d4037" 
          strokeWidth="2"
          className={animated ? "animate-bounce-slow animation-delay-100" : ""}
        />
        <circle 
          cx="70" 
          cy="85" 
          r="9" 
          fill="#ffc107" 
          stroke="#5d4037" 
          strokeWidth="2"
          className={animated ? "animate-bounce-slow animation-delay-200" : ""}
        />
      </svg>
    </div>
  );
};

export default MoneyBag;
