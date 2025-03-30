
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Crown, Target, Shield, Bell } from 'lucide-react';

// Map of icon names to Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  'crown': Crown,
  'target': Target,
  'shield': Shield,
  'bell': Bell,
  // Add more icons as needed
};

// Render an icon by name
export const renderIcon = (name: string, className = 'h-4 w-4') => {
  const IconComponent = iconMap[name];
  
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  return <span className={className}>🔷</span>;
};

export default renderIcon;
