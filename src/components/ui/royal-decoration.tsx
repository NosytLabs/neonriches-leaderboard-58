
import React from 'react';
import { cn } from '@/lib/utils';
import { BaseDecorationProps } from '@/types/ui/decorations/types';
import sizeClasses from './decorations/sizeClasses';

export type RoyalDecorationProps = BaseDecorationProps;

const RoyalDecoration: React.FC<RoyalDecorationProps> = ({
  size = 'md',
  color = 'royal',
  className,
  style,
  children,
  ...props
}) => {
  const sizeClass = sizeClasses[size];
  
  return (
    <div 
      className={cn(
        'royal-decoration relative flex items-center justify-center',
        sizeClass,
        `royal-decoration-${color}`,
        className
      )}
      style={style}
      {...props}
    >
      <div className="container flex items-center justify-center relative">
        {color === 'royal' && (
          <div className="border absolute inset-0 border-gold/30 rounded-full" />
        )}
        
        <div className="icon relative z-10 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RoyalDecoration;
