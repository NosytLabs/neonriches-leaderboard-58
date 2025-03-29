
import React from 'react';
import { cn } from '@/lib/utils';

interface CrownProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  variant?: 'royal' | 'simple' | 'fancy';
  color?: 'gold' | 'silver' | 'platinum' | 'ruby';
}

const Crown: React.FC<CrownProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  variant = 'royal',
  color = 'gold'
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const colorSchemes = {
    gold: {
      primary: '#ffd700',
      secondary: '#ff9d00',
      highlight: '#fff4cc',
      gem: '#ff5555'
    },
    silver: {
      primary: '#c0c0c0',
      secondary: '#a0a0a0',
      highlight: '#e6e6e6',
      gem: '#5555ff'
    },
    platinum: {
      primary: '#e5e4e2',
      secondary: '#bbbcbc',
      highlight: '#f7f7f7',
      gem: '#55ff55'
    },
    ruby: {
      primary: '#9b2242',
      secondary: '#6d0f24',
      highlight: '#d64c4c',
      gem: '#ffff55'
    }
  };

  const colors = colorSchemes[color];

  // Different crown shapes based on variant
  const getCrownPath = () => {
    switch(variant) {
      case 'simple':
        return "M20,60 L35,30 L50,45 L65,30 L80,60 Z";
      case 'fancy':
        return "M20,60 L30,30 L40,40 L50,20 L60,40 L70,30 L80,60 Z";
      case 'royal':
      default:
        return "M20,60 L30,30 L35,45 L50,25 L65,45 L70,30 L80,60 Z";
    }
  };

  return (
    <div className={cn(
      'relative inline-block', 
      sizeClasses[size], 
      animated && 'group',
      className
    )}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Crown base */}
        <path 
          d={getCrownPath()}
          fill={colors.primary} 
          stroke="#000" 
          strokeWidth="3"
          className={animated ? "transition-all duration-500 group-hover:scale-105" : ""}
        />
        
        {/* Crown band */}
        <path 
          d="M20,60 H80 V70 H20 Z" 
          fill={colors.secondary} 
          stroke="#000" 
          strokeWidth="2"
        />
        
        {/* Crown gems */}
        <circle 
          cx="35" 
          cy="65" 
          r="3" 
          fill={colors.gem} 
          stroke="#000" 
          strokeWidth="1"
          className={animated ? "animate-pulse" : ""}
        />
        <circle 
          cx="50" 
          cy="65" 
          r="3" 
          fill="#55aaff" 
          stroke="#000" 
          strokeWidth="1"
          className={animated ? "animate-pulse animation-delay-200" : ""}
        />
        <circle 
          cx="65" 
          cy="65" 
          r="3" 
          fill="#55ff55" 
          stroke="#000" 
          strokeWidth="1"
          className={animated ? "animate-pulse animation-delay-400" : ""}
        />
        
        {/* Crown center gem */}
        {variant === 'royal' && (
          <circle 
            cx="50" 
            cy="40" 
            r="5" 
            fill={colors.gem} 
            stroke="#000" 
            strokeWidth="1"
            className={animated ? "animate-pulse" : ""}
          />
        )}
        
        {/* Crown shine */}
        <path 
          d="M30,50 Q50,40 70,50" 
          fill="none" 
          stroke={colors.highlight} 
          strokeWidth="1.5"
          opacity="0.7"
        />
        
        {/* Sparkle effects if animated */}
        {animated && (
          <>
            <circle 
              cx="30" 
              cy="35" 
              r="2" 
              fill="white" 
              className="animate-ping-slow" 
            />
            <circle 
              cx="70" 
              cy="35" 
              r="2" 
              fill="white" 
              className="animate-ping-slow animation-delay-300" 
            />
            <path 
              d="M50,30 L52,32 L50,34 L48,32 Z" 
              fill="white" 
              className="animate-pulse-slow" 
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default Crown;
