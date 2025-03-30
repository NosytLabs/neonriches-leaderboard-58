
import React from 'react';
import { IconName, IconSize } from '@/components/ui/icon';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color, 
  className, 
  onClick 
}) => {
  // Convert size from number to the size format expected by the UI icon
  const getIconSize = (size: number): IconSize => {
    if (size <= 16) return 'xs';
    if (size <= 20) return 'sm';
    if (size <= 24) return 'md';
    if (size <= 32) return 'lg';
    return 'xl';
  };
  
  // Convert kebab-case to PascalCase for Lucide icons
  const formatIconName = (name: string): string => {
    return name
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
  };
  
  // Get the icon component
  const LucideIcon = LucideIcons[formatIconName(name) as keyof typeof LucideIcons] as LucideIcon;
  
  if (!LucideIcon) {
    console.error(`Icon "${name}" not found`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      className={className}
      color={color}
      onClick={onClick}
    />
  );
};

export default Icon;
