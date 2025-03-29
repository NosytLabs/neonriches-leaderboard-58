
import React from 'react';
import { cn } from '@/lib/utils';

interface DonorBadgeProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  tier?: 'bronze' | 'silver' | 'gold' | 'platinum';
}

const DonorBadge: React.FC<DonorBadgeProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  tier = 'gold'
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const tierColors = {
    bronze: { primary: '#cd7f32', secondary: '#a06023', accent: '#e9c4a0' },
    silver: { primary: '#c0c0c0', secondary: '#a0a0a0', accent: '#e0e0e0' },
    gold: { primary: '#ffd700', secondary: '#b8860b', accent: '#fff9c4' },
    platinum: { primary: '#e5e4e2', secondary: '#89898b', accent: '#f5f5f5' }
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
        {/* Badge background circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill={colors.primary} 
          stroke={colors.secondary} 
          strokeWidth="3"
          className={animated ? "group-hover:scale-105 transition-transform duration-300" : ""}
        />
        
        {/* Inner circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="35" 
          fill={colors.secondary} 
          stroke="none"
        />
        
        {/* Donor text */}
        <text
          x="50"
          y="45"
          fontSize="16"
          fontWeight="bold"
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          DONOR
        </text>
        
        {/* Tier text */}
        <text
          x="50"
          y="65"
          fontSize="14"
          fontWeight="bold"
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
          className={animated ? "animate-pulse-slow" : ""}
        >
          {tier.toUpperCase()}
        </text>
        
        {/* Coin icon */}
        <circle 
          cx="50" 
          cy="25" 
          r="10" 
          fill={colors.primary} 
          stroke="#fff" 
          strokeWidth="1"
          className={animated ? "animate-bounce-slow" : ""}
        />
        <text
          x="50"
          y="28"
          fontSize="14"
          fontWeight="bold"
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          $
        </text>
        
        {/* Shine effect */}
        <path 
          d="M70,30 C80,40 80,60 70,70" 
          fill="none" 
          stroke={colors.accent} 
          strokeWidth="5" 
          opacity="0.5"
          strokeLinecap="round"
          className={animated ? "animate-pulse-slow" : ""}
        />
      </svg>
    </div>
  );
};

export default DonorBadge;
