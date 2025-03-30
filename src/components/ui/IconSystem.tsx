
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Crown } from '@/assets/icons/Crown';
import { cn } from '@/lib/utils';

// Import any custom icons we need
// This is where you would import your own custom icons

// Define the icon styles
const iconSizeStyles = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
};

const iconColorStyles = {
  'default': 'text-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'muted': 'text-muted-foreground',
  'accent': 'text-accent',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'crimson': 'text-royal-crimson',
};

export type IconName = keyof typeof LucideIcons | 'Crown';
export type IconSize = keyof typeof iconSizeStyles;
export type IconColor = keyof typeof iconColorStyles;
export type IconStyle = 'default' | 'medieval';

export interface IconSystemProps {
  name: string;
  size?: string;
  color?: string;
  className?: string;
  style?: IconStyle;
}

const IconSystem: React.FC<IconSystemProps> = ({
  name,
  size = 'md',
  color = 'default',
  className,
  style = 'default'
}) => {
  // Safely access the size style
  const sizeClass = iconSizeStyles[size as IconSize] || iconSizeStyles.md;
  
  // Safely access the color style
  const colorClass = iconColorStyles[color as IconColor] || iconColorStyles.default;
  
  // Combine classes
  const combinedClassName = cn(sizeClass, colorClass, className);
  
  // Handle custom icons first
  if (name === 'Crown') {
    return <Crown className={combinedClassName} />;
  }
  
  // Then try to find a Lucide icon
  const LucideIcon = (LucideIcons as any)[name];
  
  if (LucideIcon) {
    return <LucideIcon className={combinedClassName} />;
  }
  
  // Fallback to a default icon if the requested one doesn't exist
  console.warn(`Icon "${name}" not found, using default`);
  return <LucideIcons.HelpCircle className={combinedClassName} />;
};

export default IconSystem;
