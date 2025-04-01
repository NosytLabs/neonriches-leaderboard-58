
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps } from '@/types/ui/decorations/types';
import { adaptIconSize, adaptIconColor } from '@/utils/iconTypeAdapter';
import { IconSize } from '@/types/ui/icon-types';

const CrossedSwords: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  animated = false,
  className = ''
}) => {
  const actualAnimate = animated || animate; // Support both prop names
  
  // Define size classes directly
  const sizeClasses = {
    xs: { container: 'w-6 h-6', border: 'border-1', icon: 'xs' as IconSize },
    sm: { container: 'w-8 h-8', border: 'border-1', icon: 'sm' as IconSize },
    md: { container: 'w-12 h-12', border: 'border-2', icon: 'md' as IconSize },
    lg: { container: 'w-16 h-16', border: 'border-2', icon: 'lg' as IconSize },
    xl: { container: 'w-24 h-24', border: 'border-3', icon: 'xl' as IconSize }
  };
  
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses];
  const containerSize = sizeClass.container;
  const animationClass = actualAnimate ? 'animate-pulse-slow' : '';
  
  return (
    <div className={cn(
      'relative flex items-center justify-center',
      containerSize,
      animationClass,
      className
    )}>
      <div className="absolute transform -rotate-45 -translate-x-1">
        <MedievalIcon 
          name="sword" 
          size={sizeClass.icon} 
          color={adaptIconColor(color)} 
        />
      </div>
      
      <div className="absolute transform rotate-45 translate-x-1">
        <MedievalIcon 
          name="sword" 
          size={sizeClass.icon} 
          color={adaptIconColor(color)} 
        />
      </div>
    </div>
  );
};

export default CrossedSwords;
