
import React from 'react';
import { cn } from '@/lib/utils';

interface VipBadgeProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const VipBadge: React.FC<VipBadgeProps> = ({ 
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
        {/* Badge shape */}
        <path 
          d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z" 
          fill="#9c27b0" 
          stroke="#7b1fa2" 
          strokeWidth="3"
          className={animated ? "group-hover:scale-105 transition-transform duration-300" : ""}
        />
        
        {/* Inner shape */}
        <path 
          d="M50,20 L80,35 L80,65 L50,80 L20,65 L20,35 Z" 
          fill="#ce93d8" 
          stroke="none"
        />
        
        {/* VIP text */}
        <text
          x="50"
          y="55"
          fontSize="28"
          fontWeight="bold"
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
          className={animated ? "animate-pulse-slow" : ""}
        >
          VIP
        </text>
        
        {/* Star decoration */}
        <path 
          d="M50,15 L52,20 L58,20 L53,23 L55,28 L50,25 L45,28 L47,23 L42,20 L48,20 Z" 
          fill="#ffeb3b" 
          stroke="#fbc02d" 
          strokeWidth="1"
          className={animated ? "animate-spin-slow" : ""}
        />
        
        {/* Shine effect */}
        <path 
          d="M60,35 L75,35 L75,40 L60,40 Z" 
          fill="#f3e5f5" 
          opacity="0.6"
          transform="rotate(-15, 67.5, 37.5)"
          className={animated ? "animate-pulse-slow" : ""}
        />
      </svg>
    </div>
  );
};

export default VipBadge;
