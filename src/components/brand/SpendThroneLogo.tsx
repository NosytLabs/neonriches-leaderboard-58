
import React from 'react';
import { cn } from '@/lib/utils';

export interface SpendThroneLogoProps {
  variant?: 'default' | 'compact';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

const SpendThroneLogo: React.FC<SpendThroneLogoProps> = ({ 
  variant = 'default',
  size = 'md',
  className
}) => {
  const sizeClasses = {
    xs: 'h-6',
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
    '2xl': 'h-20'
  };

  return (
    <div className={cn("flex items-center", sizeClasses[size], className)}>
      {variant === 'default' ? (
        <div className="flex flex-col">
          <span className="text-royal-gold font-royal-script tracking-wider">Spend</span>
          <span className="text-white font-royal-heading tracking-wide -mt-1">THRONE</span>
        </div>
      ) : (
        <span className="font-royal-heading text-white">ST</span>
      )}
    </div>
  );
};

export default SpendThroneLogo;
