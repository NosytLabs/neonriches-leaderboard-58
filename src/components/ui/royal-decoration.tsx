
import React from 'react';
import { cn } from '@/lib/utils';
import { RoyalDecorationProps } from '@/types/ui/decorations/types';

const RoyalDecoration: React.FC<RoyalDecorationProps> = ({
  type = 'flourish',
  size = 'md',
  color = 'gold',
  position,
  className,
  children,
  animate = false,
  variant = 'default'
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'gold': return 'text-royal-gold';
      case 'silver': return 'text-gray-300';
      case 'bronze': return 'text-amber-700';
      case 'red': return 'text-red-500';
      case 'blue': return 'text-blue-500';
      case 'green': return 'text-green-500';
      case 'purple': return 'text-purple-500';
      case 'royal': return 'text-royal-purple';
      default: return 'text-royal-gold';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'xs': return 'h-3 w-3';
      case 'sm': return 'h-4 w-4';
      case 'md': return 'h-6 w-6';
      case 'lg': return 'h-8 w-8';
      case 'xl': return 'h-12 w-12';
      case '2xl': return 'h-16 w-16';
      default: return 'h-6 w-6';
    }
  };

  const getAnimationClass = () => {
    if (!animate) return '';
    
    return 'animate-pulse';
  };

  const getPositionClass = () => {
    if (!position) return '';
    
    switch (position) {
      case 'top-left': return 'absolute top-0 left-0';
      case 'top-right': return 'absolute top-0 right-0';
      case 'bottom-left': return 'absolute bottom-0 left-0';
      case 'bottom-right': return 'absolute bottom-0 right-0';
      case 'center': return 'absolute inset-0 flex items-center justify-center';
      default: return position; // Allow custom positioning via className
    }
  };

  const renderDecoration = () => {
    const decorationClass = cn(
      getColorClass(),
      getSizeClass(),
      getAnimationClass(),
      getPositionClass(),
      className
    );

    switch (type) {
      case 'flourish':
        return (
          <div className={decorationClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </div>
        );
      case 'crest':
        return (
          <div className={decorationClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z" />
            </svg>
          </div>
        );
      case 'banner':
        return (
          <div className={decorationClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 16h10.54l1.73 2.31-1.25 1.67L10 14l-5 6h14l-5-6-1.71-2.29L14 9.33 21 3h-7.58l-5.14 6.87-1.26-1.69L10 4" />
            </svg>
          </div>
        );
      case 'seal':
        return (
          <div className={decorationClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2L12 4M12 20L12 22M2 12L4 12M20 12L22 12M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" />
            </svg>
          </div>
        );
      case 'scroll':
        return (
          <div className={decorationClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        );
      default:
        return (
          <div className={decorationClass}>
            {children || (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            )}
          </div>
        );
    }
  };

  return renderDecoration();
};

export default RoyalDecoration;
