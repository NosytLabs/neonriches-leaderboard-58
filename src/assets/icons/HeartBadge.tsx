
import React from 'react';
import { cn } from '@/lib/utils';

interface HeartBadgeProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  supporter?: boolean;
}

const HeartBadge: React.FC<HeartBadgeProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  supporter = false
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  // Function to create a heart shape path
  const getHeartPath = () => {
    return "M50,35 C50,20 30,20 25,30 C20,40 30,50 50,65 C70,50 80,40 75,30 C70,20 50,20 50,35 Z";
  };

  return (
    <div className={cn(
      'relative inline-block', 
      sizeClasses[size], 
      animated && 'group',
      className
    )}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Badge background circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill={supporter ? "#e91e63" : "#f48fb1"} 
          stroke={supporter ? "#c2185b" : "#ec407a"} 
          strokeWidth="3"
          className={animated ? "group-hover:scale-105 transition-transform duration-300" : ""}
        />
        
        {/* Heart shape */}
        <path 
          d={getHeartPath()}
          fill="#ffffff" 
          stroke={supporter ? "#c2185b" : "#ec407a"}
          strokeWidth="2"
          className={animated ? "animate-pulse-slow" : ""}
        />
        
        {/* Text for supporter */}
        {supporter && (
          <text
            x="50"
            y="85"
            fontSize="12"
            fontWeight="bold"
            fill="#ffffff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            SUPPORTER
          </text>
        )}
        
        {/* Shine effect */}
        <circle 
          cx="35" 
          cy="35" 
          r="5" 
          fill="#ffffff" 
          opacity="0.7"
          className={animated ? "animate-pulse-slow" : ""}
        />
        
        {/* Decorative sparkle for supporters */}
        {supporter && (
          <>
            <circle 
              cx="25" 
              cy="25" 
              r="3" 
              fill="#ffeb3b" 
              className={animated ? "animate-ping" : ""}
            />
            <circle 
              cx="75" 
              cy="25" 
              r="3" 
              fill="#ffeb3b" 
              className={animated ? "animate-ping animation-delay-300" : ""}
            />
            <circle 
              cx="75" 
              cy="75" 
              r="3" 
              fill="#ffeb3b" 
              className={animated ? "animate-ping animation-delay-600" : ""}
            />
            <circle 
              cx="25" 
              cy="75" 
              r="3" 
              fill="#ffeb3b" 
              className={animated ? "animate-ping animation-delay-900" : ""}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default HeartBadge;
