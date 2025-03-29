
import React from 'react';
import { cn } from '@/lib/utils';

interface StarBadgeProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  level?: 1 | 2 | 3 | 4 | 5;
}

const StarBadge: React.FC<StarBadgeProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  level = 1
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  // Function to draw a star shape
  const getStarPath = (cx: number, cy: number, r: number, points: number = 5) => {
    const outerRadius = r;
    const innerRadius = r / 2;
    let path = `M ${cx},${cy - outerRadius} `;
    
    for (let i = 0; i < points; i++) {
      // Outer point
      const outerAngle = (Math.PI / points) * (2 * i - 0.5);
      const outerX = cx + outerRadius * Math.sin(outerAngle);
      const outerY = cy - outerRadius * Math.cos(outerAngle);
      path += `L ${outerX},${outerY} `;
      
      // Inner point
      const innerAngle = (Math.PI / points) * (2 * i + 0.5);
      const innerX = cx + innerRadius * Math.sin(innerAngle);
      const innerY = cy - innerRadius * Math.cos(innerAngle);
      path += `L ${innerX},${innerY} `;
    }
    
    path += "Z";
    return path;
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
          fill="#ff9800" 
          stroke="#f57c00" 
          strokeWidth="3"
          className={animated ? "group-hover:scale-105 transition-transform duration-300" : ""}
        />
        
        {/* Main star */}
        <path 
          d={getStarPath(50, 50, 35, 5)}
          fill="#ffeb3b" 
          stroke="#fbc02d"
          strokeWidth="2"
          className={animated ? "animate-spin-slow" : ""}
        />
        
        {/* Level indicator stars */}
        {Array.from({ length: Math.min(level, 5) }).map((_, index) => (
          <path 
            key={index}
            d={getStarPath(20 + index * 15, 75, 5, 5)}
            fill="#fff" 
            stroke="#f57c00"
            strokeWidth="0.5"
            className={animated ? `animate-pulse-slow animation-delay-${index * 100}` : ""}
          />
        ))}
        
        {/* Shine effect */}
        <circle 
          cx="35" 
          cy="35" 
          r="5" 
          fill="#fff" 
          opacity="0.7"
          className={animated ? "animate-pulse-slow" : ""}
        />
      </svg>
    </div>
  );
};

export default StarBadge;
