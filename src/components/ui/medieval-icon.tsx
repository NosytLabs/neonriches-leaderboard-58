
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

// Define type-safe icon names and colors
export type MedievalIconName = 
  | "Crown" | "Shield" | "Sword" | "Scroll" | "Heart"
  | "Medal" | "Trophy" | "Key" | "Coins" | "Wallet" | "Gem"
  | "Seal";  // Added Seal as it's used in the codebase

export type MedievalIconColor = 
  | "default" | "gold" | "silver" | "crimson";

export type MedievalIconSize = 
  | "xs" | "sm" | "md" | "lg" | "xl";

export interface MedievalIconProps {
  name: MedievalIconName;
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  className?: string;
}

const sizeClasses = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

const colorClasses = {
  default: 'text-white',
  gold: 'text-royal-gold',
  silver: 'text-slate-300',
  crimson: 'text-royal-crimson',
};

/**
 * MedievalIcon component for themed icons with royal style
 */
const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  color = "default",
  size = "md",
  className,
}) => {
  // Get the corresponding Lucide icon
  const IconComponent = LucideIcons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <span className={cn(
      "inline-flex items-center justify-center",
      colorClasses[color],
      className
    )}>
      <IconComponent 
        className={sizeClasses[size]}
        aria-hidden="true"
      />
    </span>
  );
};

export default MedievalIcon;
