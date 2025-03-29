
import React from 'react';
import { BaseDecorationProps } from '@/types/ui/decorations/types';
import { toMedievalIconColor } from './colorUtils';
import sizeClasses from './sizeClasses';

/**
 * A decorative medieval border pattern
 */
const BorderPattern: React.FC<BaseDecorationProps> = ({ 
  size = 'md', 
  color = 'gold',
  className = '',
  animate,
  icon
}) => {
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const colorClass = toMedievalIconColor(color);
  
  return (
    <div 
      className={`relative ${sizeClass} ${className} ${animate ? 'animate-pulse-slow' : ''}`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path 
          d="M5,5 L95,5 L95,95 L5,95 L5,5 Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          className={`text-${colorClass}`}
        />
        <path 
          d="M10,10 L90,10 L90,90 L10,90 L10,10 Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className={`text-${colorClass} opacity-70`}
        />
        <path 
          d="M5,50 L95,50" 
          stroke="currentColor" 
          strokeWidth="1" 
          className={`text-${colorClass} opacity-50`}
        />
        <path 
          d="M50,5 L50,95" 
          stroke="currentColor" 
          strokeWidth="1" 
          className={`text-${colorClass} opacity-50`}
        />
        <circle 
          cx="50" 
          cy="50" 
          r="3" 
          fill="currentColor" 
          className={`text-${colorClass}`}
        />
        <circle 
          cx="5" 
          cy="5" 
          r="2" 
          fill="currentColor" 
          className={`text-${colorClass}`}
        />
        <circle 
          cx="95" 
          cy="5" 
          r="2" 
          fill="currentColor" 
          className={`text-${colorClass}`}
        />
        <circle 
          cx="5" 
          cy="95" 
          r="2" 
          fill="currentColor" 
          className={`text-${colorClass}`}
        />
        <circle 
          cx="95" 
          cy="95" 
          r="2" 
          fill="currentColor" 
          className={`text-${colorClass}`}
        />
      </svg>
    </div>
  );
};

export default BorderPattern;
