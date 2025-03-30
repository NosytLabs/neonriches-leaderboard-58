
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideIcon, LucideProps } from 'lucide-react';

// Define icon name and size types
export type IconName = keyof typeof LucideIcons;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface IconProps {
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
  // Convert kebab-case to PascalCase for Lucide icons
  const formatIconName = (name: string): IconName => {
    // If name is already PascalCase, return it
    if (name in LucideIcons) {
      return name as IconName;
    }
    
    // Handle kebab-case conversion to PascalCase
    const pascalCase = name
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    
    return pascalCase as IconName;
  };
  
  // Get the icon component
  const formattedName = formatIconName(name);
  const LucideIcon = LucideIcons[formattedName];
  
  if (!LucideIcon) {
    console.error(`Icon "${name}" not found, formatted as "${formattedName}"`);
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
