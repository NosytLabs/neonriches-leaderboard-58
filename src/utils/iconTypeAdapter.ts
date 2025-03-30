
import { MedievalIconName, MedievalIconColor, MedievalIconSize } from '@/components/ui/medieval-icon';

/**
 * Converts a string to a valid MedievalIconName
 * Handles common cases like lowercase names or hyphenated names
 */
export function toMedievalIconName(iconName: string): MedievalIconName {
  // Convert kebab-case or lowercase to PascalCase
  const formatted = iconName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // Map for special cases and common icon names
  const iconMap: Record<string, MedievalIconName> = {
    // Direct mappings
    "crown": "Crown",
    "shield": "Shield",
    "sword": "Sword",
    "scroll": "Scroll",
    "heart": "Heart",
    "medal": "Medal",
    "trophy": "Trophy",
    "key": "Key",
    "coins": "Coins",
    "wallet": "Wallet",
    "gem": "Gem",
    
    // Fallbacks for unsupported icons
    "seal": "Medal",
    "castle": "Shield",
    "goblet": "Trophy",
    "user": "Crown",
  };
  
  return (iconMap[iconName.toLowerCase()] || formatted) as MedievalIconName;
}

/**
 * Converts a string to a valid MedievalIconSize
 */
export function toMedievalIconSize(size: string): MedievalIconSize {
  const sizeMap: Record<string, MedievalIconSize> = {
    "xs": "xs",
    "sm": "sm",
    "md": "md",
    "lg": "lg",
    "xl": "xl",
    "2xl": "xl" // Map 2xl to xl since it's not supported
  };
  
  return (sizeMap[size] || "md") as MedievalIconSize;
}

/**
 * Converts a string to a valid MedievalIconColor
 */
export function toMedievalIconColor(color: string): MedievalIconColor {
  const colorMap: Record<string, MedievalIconColor> = {
    "default": "default",
    "gold": "gold",
    "silver": "silver",
    "crimson": "crimson",
    
    // Map unsupported colors to supported ones
    "purple": "crimson",
    "blue": "silver",
    "navy": "default",
    "copper": "gold",
    "bronze": "gold"
  };
  
  return (colorMap[color] || "default") as MedievalIconColor;
}
