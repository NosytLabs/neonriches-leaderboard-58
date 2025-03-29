
import React from 'react';
import { cn } from '@/lib/utils';

interface TrophyProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  tier?: 'gold' | 'silver' | 'bronze';
  place?: number;
}

const Trophy: React.FC<TrophyProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  tier = 'gold',
  place
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const tierColors = {
    gold: {
      primary: '#ffd700',
      secondary: '#ff9d00',
      highlight: '#fff4cc'
    },
    silver: {
      primary: '#c0c0c0',
      secondary: '#a0a0a0',
      highlight: '#e6e6e6'
    },
    bronze: {
      primary: '#cd7f32',
      secondary: '#a05a2c',
      highlight: '#e5c090'
    }
  };

  const colors = tierColors[tier];

  return (
    <div className={cn(
      'relative inline-block', 
      sizeClasses[size], 
      animated && 'group',
      className
    )}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Trophy cup */}
        <path 
          d="M30,20 H70 V50 C70,65 60,75 50,75 C40,75 30,65 30,50 Z" 
          fill={colors.primary} 
          stroke="#000" 
          strokeWidth="3"
          className={animated ? "transition-all duration-300 group-hover:fill-current group-hover:text-primary" : ""}
        />
        
        {/* Cup shine */}
        <path 
          d="M40,30 Q50,40 60,30" 
          fill="none" 
          stroke={colors.highlight} 
          strokeWidth="2"
          className={animated ? "animate-pulse opacity-70" : "opacity-70"}
        />
        
        {/* Trophy arms */}
        <path 
          d="M30,30 H20 C15,30 10,35 15,45 C20,55 30,45 30,40" 
          fill={colors.secondary} 
          stroke="#000" 
          strokeWidth="2"
        />
        <path 
          d="M70,30 H80 C85,30 90,35 85,45 C80,55 70,45 70,40" 
          fill={colors.secondary} 
          stroke="#000" 
          strokeWidth="2"
        />
        
        {/* Trophy base */}
        <rect 
          x="40" 
          y="75" 
          width="20" 
          height="5" 
          fill={colors.secondary} 
          stroke="#000" 
          strokeWidth="2"
        />
        <rect 
          x="35" 
          y="80" 
          width="30" 
          height="5" 
          fill={colors.secondary} 
          stroke="#000" 
          strokeWidth="2"
        />
        
        {/* Position display */}
        {place && (
          <g>
            <circle 
              cx="50" 
              cy="45" 
              r="15" 
              fill={colors.secondary} 
              stroke="#000" 
              strokeWidth="1"
            />
            <text
              x="50"
              y="50"
              fontSize="18"
              fontWeight="bold"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {place}
            </text>
          </g>
        )}
        
        {/* Sparkle effects if animated */}
        {animated && (
          <>
            <circle 
              cx="25" 
              cy="30" 
              r="2" 
              fill="white" 
              className="animate-ping-slow" 
            />
            <circle 
              cx="75" 
              cy="30" 
              r="2" 
              fill="white" 
              className="animate-ping-slow animation-delay-300" 
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default Trophy;
