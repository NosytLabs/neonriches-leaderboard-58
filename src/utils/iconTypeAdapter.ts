
import { MedievalIconName, MedievalIconColor, MedievalIconSize } from '@/components/ui/medieval-icon';
import { toPascalCase, getIconAlias } from './iconNameAdapter';

/**
 * Converts a string to a valid MedievalIconName
 * Handles common cases like lowercase names or hyphenated names
 */
export function toMedievalIconName(iconName: string): MedievalIconName {
  // Try to get a standard Lucide icon name first
  const formattedName = toPascalCase(iconName);
  
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
    "seal": "Seal",
    
    // Fallbacks for unsupported icons
    "castle": "Shield",
    "goblet": "Trophy",
    "user": "Crown",
  };
  
  // First check for direct matches
  if (iconMap[iconName.toLowerCase()]) {
    return iconMap[iconName.toLowerCase()] as MedievalIconName;
  }
  
  // Then check if the formatted name is a valid MedievalIconName
  if (Object.values(iconMap).includes(formattedName as MedievalIconName)) {
    return formattedName as MedievalIconName;
  }
  
  // Default to Crown if no match is found
  return "Crown";
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
