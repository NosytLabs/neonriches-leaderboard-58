
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps } from '@/types/ui/decorations/types';
import { sizeClasses } from './sizeClasses';

const CornerFlourish: React.FC<BaseDecorationProps> = ({
  color = 'gold',
  size = 'md',
  animate = false,
  className
}) => {
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
          size={sizeClass.icon} 
          color={color as any} 
          animated={animate}
        />
      </div>
    </div>
  );
};

export default CornerFlourish;
