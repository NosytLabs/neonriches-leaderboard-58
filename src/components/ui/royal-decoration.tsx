
import React from 'react';
import { cn } from '@/lib/utils';
import { DecorationProps, DecorationSize } from '@/types/ui/decorations/types';

const RoyalDecoration: React.FC<DecorationProps> = ({
  size = 'md',
  color = 'gold',
  className = '',
  animate = false,
  position = 'top-left',
  style,
  children,
  type,
  variant,
  ...props
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      case 'center':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      default:
        return 'top-0 left-0';
    }
  };

  const getSizeClasses = () => {
    switch (size as DecorationSize) {
      case 'xs': return 'h-4 w-4';
      case 'sm': return 'h-6 w-6';
      case 'md': return 'h-8 w-8';
      case 'lg': return 'h-10 w-10';
      case 'xl': return 'h-12 w-12';
      case '2xl': return 'h-16 w-16';
      case '3xl': return 'h-20 w-20';
      case '4xl': return 'h-24 w-24';
      default: return 'h-8 w-8';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'gold': return 'text-royal-gold';
      case 'royal': return 'text-royal-purple';
      case 'crimson': return 'text-royal-crimson';
      default: return 'text-white';
    }
  };

  const baseClasses = cn(
    'absolute',
    getPositionClasses(),
    getSizeClasses(),
    getColorClasses(),
    animate && 'animate-float',
    className
  );

  // Return a basic decoration if no specific type is provided
  return (
    <div
      className={baseClasses}
      style={style}
      {...props}
    >
      {children || (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )}
    </div>
  );
};

export default RoyalDecoration;
