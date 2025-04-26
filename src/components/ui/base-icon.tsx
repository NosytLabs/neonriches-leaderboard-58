
import React from 'react';
import { IconProps } from '@/types/icons';
import { cn } from '@/lib/utils';

export const BaseIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = ({
  size = 'md',
  color = 'primary',
  className,
  ...props
}) => {
  const sizeMap = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16'
  };

  const colorMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    muted: 'text-muted',
    accent: 'text-accent',
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    danger: 'text-red-500',
    royal: 'text-royal-gold',
    gold: 'text-yellow-400',
    silver: 'text-gray-400',
    crimson: 'text-red-600'
  };

  return (
    <svg
      {...props}
      className={cn(
        sizeMap[size],
        colorMap[color],
        'inline-block',
        className
      )}
    />
  );
};

export default BaseIcon;
