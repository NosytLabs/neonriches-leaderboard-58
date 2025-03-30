
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from "@/lib/utils";

// Define icon name and size types
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
  
  // Get the appropriate Lucide icon component - ensure PascalCase
  const pascalCaseName = name as keyof typeof LucideIcons;
  const LucideIcon = LucideIcons[pascalCaseName];
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <LucideIcon 
      size={pixelSize} 
      className={cn(
        animated && 'transition-all duration-300',
        className
      )}
      color={color}
      onClick={onClick}
    />
  );
};

export default Icon;
