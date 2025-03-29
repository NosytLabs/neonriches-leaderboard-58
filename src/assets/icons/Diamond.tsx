
import React from 'react';
import { cn } from '@/lib/utils';

interface DiamondProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'gold';
}

const Diamond: React.FC<DiamondProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  color = 'blue'
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const colorMap = {
    blue: {
      main: '#29b6f6',
      light: '#81d4fa',
      dark: '#0288d1',
      highlight: '#e1f5fe'
    },
    green: {
      main: '#4caf50',
      light: '#a5d6a7',
      dark: '#2e7d32',
      highlight: '#e8f5e9'
    },
    purple: {
      main: '#9c27b0',
      light: '#ce93d8',
      dark: '#7b1fa2',
      highlight: '#f3e5f5'
    },
    red: {
      main: '#f44336',
      light: '#ef9a9a',
      dark: '#c62828',
      highlight: '#ffebee'
    },
    gold: {
      main: '#ffc107',
      light: '#ffe082',
      dark: '#ffa000',
      highlight: '#fff8e1'
    }
  };

  const colors = colorMap[color];

  return (
    <div className={cn(
      'relative inline-block', 
      sizeClasses[size], 
      animated && 'group',
      className
    )}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Diamond shape */}
        <path 
          d="M50,10 L80,40 L50,90 L20,40 Z" 
          fill={colors.main} 
          stroke="#000" 
          strokeWidth="3"
          className={animated ? "transition-all duration-500 group-hover:fill-current group-hover:text-current" : ""}
        />
        
        {/* Top facet */}
        <path 
          d="M50,10 L80,40 L50,40 Z" 
          fill={colors.light} 
          stroke="none"
        />
        
        {/* Left facet */}
        <path 
          d="M20,40 L50,40 L50,90 Z" 
          fill={colors.dark} 
          stroke="none"
        />
        
        {/* Highlight */}
        <path 
          d="M50,40 L65,25 L55,15 M40,60 L30,50 L35,45" 
          fill="none" 
          stroke={colors.highlight} 
          strokeWidth="2"
          strokeLinecap="round"
          className={animated ? "animate-pulse" : ""}
        />
        
        {/* Sparkle effects */}
        {animated && (
          <>
            <circle 
              cx="35" 
              cy="25" 
              r="2" 
              fill="white" 
              className="animate-ping-slow" 
            />
            <circle 
              cx="70" 
              cy="45" 
              r="2" 
              fill="white" 
              className="animate-ping-slow animation-delay-300" 
            />
            <path 
              d="M45,70 L50,75 L55,70 L50,65 Z" 
              fill="white" 
              className="animate-pulse-slow" 
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default Diamond;
