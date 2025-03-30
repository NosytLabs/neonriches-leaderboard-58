
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

export type IconName = keyof typeof LucideIcons;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  color?: string;
  animated?: boolean;
  onClick?: () => void;
}

const sizeMap = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  className = '',
  color,
  animated = false,
  onClick
}) => {
  // Convert size from string to number if needed
  const pixelSize = typeof size === 'string' ? sizeMap[size] : size;
  
  // Get the appropriate Lucide icon
  const LucideIcon = LucideIcons[name] as React.ComponentType<{ size?: number, className?: string, onClick?: () => void }>;
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <LucideIcon 
      size={pixelSize} 
      className={cn(
        color,
        animated && 'transition-all duration-300',
        className
      )}
      onClick={onClick}
    />
  );
};

export default Icon;

