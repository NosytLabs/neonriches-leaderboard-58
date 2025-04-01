
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps } from '@/types/ui/decorations/types';
import { adaptIconSize, adaptIconColor } from '@/utils/iconTypeAdapter';

const CrossedSwords: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className = ''
}) => {
  // Define size classes directly
  const sizeClasses = {
    xs: { container: 'w-6 h-6', border: 'border-1', icon: 'xs' as const },
    sm: { container: 'w-8 h-8', border: 'border-1', icon: 'sm' as const },
    md: { container: 'w-12 h-12', border: 'border-2', icon: 'md' as const },
    lg: { container: 'w-16 h-16', border: 'border-2', icon: 'lg' as const },
    xl: { container: 'w-24 h-24', border: 'border-3', icon: 'xl' as const }
  };
  
  const sizeClass = sizeClasses[size];
  const containerSize = sizeClass.container;
  const animationClass = animate ? 'animate-pulse-slow' : '';
  
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
          size={adaptIconSize(sizeClass.icon)} 
          color={adaptIconColor(color)} 
        />
      </div>
      
      <div className="absolute transform rotate-45 translate-x-1">
        <MedievalIcon 
          name="sword" 
          size={adaptIconSize(sizeClass.icon)} 
          color={adaptIconColor(color)} 
        />
      </div>
    </div>
  );
};

export default CrossedSwords;
