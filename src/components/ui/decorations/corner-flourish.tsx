
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps } from '@/types/ui/decorations/types';
import { adaptIconSize, adaptIconColor } from '@/utils/iconTypeAdapter';

const CornerFlourish: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className
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
  
  return (
    <div className={cn(
      'relative',
      sizeClass.container,
      className
    )}>
      <div className={cn(
        'absolute border-t-2 border-l-2',
        sizeClass.border,
        color === 'gold' ? 'border-royal-gold/30' : 
        color === 'royal' ? 'border-royal-purple/30' : 'border-white/20'
      )}></div>
      <div className={cn(
        'absolute',
        sizeClass.container,
        animate ? 'animate-pulse-slow' : ''
      )} style={{ transform: 'rotate(-45deg)', opacity: 0.2 }}>
        <MedievalIcon 
          name="scroll" 
          size={adaptIconSize(sizeClass.icon)} 
          color={adaptIconColor(color)} 
        />
      </div>
    </div>
  );
};

export default CornerFlourish;
