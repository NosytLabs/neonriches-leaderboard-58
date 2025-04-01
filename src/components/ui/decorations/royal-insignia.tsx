
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from '@/components/ui/medieval-icon';
import { BaseDecorationProps } from '@/types/ui/decorations/types';
import { sizeClasses } from './sizeClasses';

const RoyalInsignia: React.FC<BaseDecorationProps> = ({
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
      <div className="absolute inset-0 flex items-center justify-center">
        <MedievalIcon 
          name="crown" 
          size={sizeClass.icon} 
          color={color as any} 
          animated={animate} 
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className={cn(
          'absolute rounded-full',
          sizeClass.border,
          color === 'gold' ? 'border-royal-gold/30' : 
          color === 'royal' ? 'border-royal-purple/30' : 'border-white/20',
          'border-2'
        )}></div>
      </div>
    </div>
  );
};

export default RoyalInsignia;
