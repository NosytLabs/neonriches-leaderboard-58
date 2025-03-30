
import React from 'react';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

// Map of icon names to Lucide icon components
const iconNameMap: Record<string, string> = {
  'crown': 'Crown',
  'target': 'Target',
  'shield': 'Shield',
  'bell': 'Bell',
  'sword': 'Sword',
  'scroll': 'Scroll',
  'coins': 'Coins',
  'gem': 'Gem',
  'key': 'Key',
  'trophy': 'Trophy',
  'medal': 'Medal',
  'heart': 'Heart',
  // Add more icon mappings as needed
};

// Converts kebab-case or snake_case to PascalCase for Lucide icons
export const formatIconName = (name: string): string => {
  if (!name) return '';
  
  // Handle kebab-case or snake_case - fixed regex
  const camelCase = name.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
  
  // Convert first character to uppercase for PascalCase
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// Get a Lucide icon component by name
export const getIconComponent = (name: string): LucideIcon | null => {
  const formattedName = iconNameMap[name.toLowerCase()] || formatIconName(name);
  return (LucideIcons as any)[formattedName] || null;
};

// Render an icon by name
export const renderIcon = (name: string, className = 'h-4 w-4'): React.ReactNode => {
  const IconComponent = getIconComponent(name);
  
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  return <span className={className}>🔷</span>;
};

export default renderIcon;
