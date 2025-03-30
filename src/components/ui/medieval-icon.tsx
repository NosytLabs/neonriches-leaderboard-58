import React from 'react';
import * as LucideIcons from 'lucide-react';
import { IconProps, IconSize, MedievalIconName, MedievalIconColor } from '@/types/ui/icon-types';
import { cn } from '@/lib/utils';

// Map of medieval icon names to their actual component names
const medievalIconMap: Record<string, string> = {
  // Use proper capitalization for the icon names
  "crown": "Crown",
  "shield": "Shield",
  "sword": "Sword",
  "scroll": "Scroll",
  "heart": "Heart",
  "trophy": "Trophy",
  "coins": "Coins",
  "key": "Key",
  "seal": "Seal",
  "medal": "Medal",
  "gem": "Gem",
  "wallet": "Wallet"
};

// Size mapping to pixel values
const sizeMap: Record<IconSize, number> = {
  'xs': 16,
  'sm': 20,
  'md': 24,
  'lg': 32,
  'xl': 40,
  '2xl': 48
};

// Color mapping to CSS classes
const colorMap: Record<MedievalIconColor, string> = {
  'default': 'text-foreground',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'crimson': 'text-royal-crimson',
  'royal': 'text-royal-purple',
  'navy': 'text-royal-navy',
  'bronze': 'text-amber-600',
  'purple': 'text-purple-500'
};

// Function to normalize icon names to proper casing
export const normalizeIconName = (name: string): string => {
  // If the name is already in medievalIconMap, convert to proper case
  if (name.toLowerCase() in medievalIconMap) {
    return medievalIconMap[name.toLowerCase()];
  }
  
  // Otherwise, capitalize first letter for direct Lucide icon usage
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const MedievalIcon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'default',
  className,
  ...props
}) => {
  // Normalize the icon name to ensure proper casing
  const normalizedName = normalizeIconName(name as string);
  const pixelSize = typeof size === 'number' ? size : sizeMap[size as IconSize] || 24;
  const colorClass = typeof color === 'string' ? (colorMap[color as MedievalIconColor] || color) : '';
  
  // Get the icon component from Lucide
  const LucideIcon = (LucideIcons as any)[normalizedName];
  
  if (!LucideIcon) {
    console.warn(`Icon "${normalizedName}" not found in Lucide icons`);
    return null;
  }
  
  return (
    <LucideIcon
      size={pixelSize}
      className={cn(colorClass, className)}
      {...props}
    />
  );
};

export default MedievalIcon;
