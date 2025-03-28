
import React from 'react';
import { cn } from '@/lib/utils';
import { RoyalDividerVariant } from '@/types/ui-types';

interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  className?: string;
  color?: 'gold' | 'silver' | 'crimson' | 'navy';
  centered?: boolean;
  spacing?: 'sm' | 'md' | 'lg';
  thickness?: 'thin' | 'medium' | 'thick';
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  className = '',
  color = 'gold',
  centered = true,
  spacing = 'md',
  thickness = 'medium'
}) => {
  // Color classes
  const getColorClass = () => {
    switch (color) {
      case 'gold':
        return 'text-royal-gold border-royal-gold/40';
      case 'silver':
        return 'text-gray-300 border-gray-300/40';
      case 'crimson':
        return 'text-royal-crimson border-royal-crimson/40';
      case 'navy':
        return 'text-royal-navy border-royal-navy/40';
      default:
        return 'text-royal-gold border-royal-gold/40';
    }
  };
  
  // Spacing classes
  const getSpacingClass = () => {
    switch (spacing) {
      case 'sm':
        return 'my-2';
      case 'md':
        return 'my-4';
      case 'lg':
        return 'my-8';
      default:
        return 'my-4';
    }
  };
  
  // Thickness classes
  const getThicknessClass = () => {
    switch (thickness) {
      case 'thin':
        return 'border-t-[1px]';
      case 'medium':
        return 'border-t-2';
      case 'thick':
        return 'border-t-4';
      default:
        return 'border-t-2';
    }
  };
  
  // Render based on variant
  const renderDivider = () => {
    const colorClass = getColorClass();
    const spacingClass = getSpacingClass();
    const thicknessClass = getThicknessClass();
    
    switch (variant) {
      case 'line':
        return (
          <div className={cn('relative', spacingClass, className)}>
            <div className={cn('border-t border-opacity-40', colorClass, thicknessClass)}></div>
          </div>
        );
        
      case 'crown':
        return (
          <div className={cn('relative flex items-center', spacingClass, className)}>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass)}></div>
            <div className={`mx-4 ${centered ? '' : 'ml-0'}`}>
              <svg className={cn('h-6 w-6', colorClass)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20H21V22H3V20Z" fill="currentColor"/>
                <path d="M5 17H19L16 11L12 15L8 11L5 17Z" fill="currentColor"/>
                <path d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" fill="currentColor"/>
                <path d="M19 8C20.1046 8 21 7.10457 21 6C21 4.89543 20.1046 4 19 4C17.8954 4 17 4.89543 17 6C17 7.10457 17.8954 8 19 8Z" fill="currentColor"/>
                <path d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z" fill="currentColor"/>
              </svg>
            </div>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass, centered ? '' : 'hidden')}></div>
          </div>
        );
        
      case 'sword':
        return (
          <div className={cn('relative flex items-center', spacingClass, className)}>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass)}></div>
            <div className={`mx-4 ${centered ? '' : 'ml-0'}`}>
              <svg className={cn('h-6 w-6', colorClass)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 17.5L7 10L22 2L14 17.5H14.5Z" fill="currentColor"/>
                <path d="M6 11L9 14L9.9 13.1L7 10.2L6 11Z" fill="currentColor"/>
                <path d="M5 12L2 15L4 17L7 14L5 12Z" fill="currentColor"/>
              </svg>
            </div>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass, centered ? '' : 'hidden')}></div>
          </div>
        );
        
      case 'shield':
        return (
          <div className={cn('relative flex items-center', spacingClass, className)}>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass)}></div>
            <div className={`mx-4 ${centered ? '' : 'ml-0'}`}>
              <svg className={cn('h-6 w-6', colorClass)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="currentColor" fillOpacity="0.4"/>
                <path d="M12 22V2M4 5H20M4 12H20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass, centered ? '' : 'hidden')}></div>
          </div>
        );
        
      case 'scroll':
        return (
          <div className={cn('relative flex items-center', spacingClass, className)}>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass)}></div>
            <div className={`mx-4 ${centered ? '' : 'ml-0'}`}>
              <svg className={cn('h-6 w-6', colorClass)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5V19L18 18L16 19L14 18L12 19L10 18L8 19L6 18L4 19V5L6 6L8 5L10 6L12 5L14 6L16 5L18 6L20 5Z" fill="currentColor" fillOpacity="0.4"/>
                <path d="M7 9H17M7 13H17" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass, centered ? '' : 'hidden')}></div>
          </div>
        );
        
      case 'double':
        return (
          <div className={cn('relative', spacingClass, className)}>
            <div className="flex flex-col space-y-1">
              <div className={cn('border-t border-opacity-40', colorClass, thicknessClass)}></div>
              <div className={cn('border-t border-opacity-40', colorClass, thicknessClass)}></div>
            </div>
          </div>
        );
        
      case 'quill':
        return (
          <div className={cn('relative flex items-center', spacingClass, className)}>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass)}></div>
            <div className={`mx-4 ${centered ? '' : 'ml-0'}`}>
              <svg className={cn('h-6 w-6', colorClass)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.0335 12.8412C5.40049 12.208 4.47432 12.208 3.84131 12.8412C3.20829 13.4743 3.20829 14.4005 3.84131 15.0336L6.0335 17.2261L8.22588 15.0336L6.0335 12.8412Z" fill="currentColor"/>
                <path d="M20.1589 4.48823L19.5118 3.84117C18.8787 3.20807 17.9525 3.20807 17.3194 3.84117L7.0426 14.1183L9.88153 16.9572L20.1589 6.68058C20.792 6.04748 20.792 5.12133 20.1589 4.48823Z" fill="currentColor"/>
              </svg>
            </div>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass, centered ? '' : 'hidden')}></div>
          </div>
        );
        
      case 'treasure':
        return (
          <div className={cn('relative flex items-center', spacingClass, className)}>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass)}></div>
            <div className={`mx-4 ${centered ? '' : 'ml-0'}`}>
              <svg className={cn('h-6 w-6', colorClass)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5H19V19H5V5Z" fill="currentColor" fillOpacity="0.4"/>
                <path d="M19 5H5M5 10H19" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="9" cy="14" r="2" fill="currentColor" />
                <circle cx="15" cy="14" r="2" fill="currentColor" />
              </svg>
            </div>
            <div className={cn('flex-grow border-t border-opacity-40', colorClass, thicknessClass, centered ? '' : 'hidden')}></div>
          </div>
        );
        
      default:
        return (
          <div className={cn('relative', spacingClass, className)}>
            <div className={cn('border-t border-opacity-40', colorClass, thicknessClass)}></div>
          </div>
        );
    }
  };
  
  return renderDivider();
};

export default RoyalDivider;
