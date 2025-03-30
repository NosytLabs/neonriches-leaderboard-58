
import React from 'react';
import { IconProps, IconSize } from '@/types/ui/icon-types';
import * as LucideIcons from 'lucide-react';

// Helper function to adapt icon names to match the Lucide icon names
export const adaptIconName = (name: string): string => {
  if (!name) return '';
  
  // Convert kebab case or snake case to camel case
  const camelCase = name.replace(/(-|_)([a-z])/g, (_, __, char) => char.toUpperCase());
  
  // Convert first character to uppercase
  const pascalCase = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  
  return pascalCase;
};

const IconSystem = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const sizeMap: Record<string, number> = {
    'xs': 16,
    'sm': 20,
    'md': 24,
    'lg': 32,
    'xl': 40,
    '2xl': 48,
    '3xl': 64,
    '4xl': 80
  };
  
  const {
    name,
    type,
    size = 'md',
    color = 'currentColor',
    className = '',
    style = 'default',
    ...rest
  } = props;
  
  // Convert size from string to number if it's one of our predefined sizes
  const pixelSize = typeof size === 'string' && size in sizeMap 
    ? sizeMap[size] 
    : (typeof size === 'number' ? size : 24);
  
  // Adapt the icon name to a format that Lucide can use
  const iconName = name || type || '';
  const adaptedName = adaptIconName(iconName);
  
  // Get the Lucide icon component if it exists
  const LucideIconComponent = adaptedName && adaptedName in LucideIcons 
    ? (LucideIcons as any)[adaptedName] 
    : null;
  
  if (!LucideIconComponent) {
    console.warn(`Icon "${name || type}" not found`);
    return null;
  }
  
  return (
    <LucideIconComponent
      ref={ref}
      size={pixelSize}
      color={color}
      className={className}
      {...rest}
    />
  );
});

IconSystem.displayName = 'IconSystem';

export default IconSystem;
