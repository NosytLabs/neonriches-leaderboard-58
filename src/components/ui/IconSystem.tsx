
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

// Define comprehensive types for our unified icon system
export type IconName = keyof typeof LucideIcons;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor = 
  | 'default' | 'primary' | 'secondary' | 'muted' 
  | 'gold' | 'silver' | 'crimson' | 'royal';
export type IconStyle = 'default' | 'medieval' | 'royal';

export interface IconSystemProps {
  name: IconName | string;
  size?: IconSize | string;
  color?: IconColor | string;
  className?: string;
  style?: IconStyle;
  onClick?: () => void;
}

// Define size mappings for consistency across the app
export const iconSizeMap: Record<IconSize, string> = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
};

// Define color mappings for consistency across the app
export const iconColorMap: Record<IconColor, string> = {
  'default': 'text-white',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'muted': 'text-muted-foreground',
  'gold': 'text-royal-gold',
  'silver': 'text-slate-300',
  'crimson': 'text-royal-crimson',
  'royal': 'text-royal-purple',
};

/**
 * Unified IconSystem component for consistent icon usage throughout the app
 */
const IconSystem = React.forwardRef<HTMLSpanElement, IconSystemProps>(
  ({ name, size = 'md', color = 'default', className, style = 'default', onClick }, ref) => {
    // Handle string name input to PascalCase for Lucide
    const formatIconName = (inputName: string): IconName => {
      // Handle different name formats (kebab-case, camelCase, etc.)
      if (typeof inputName !== 'string') return 'HelpCircle' as IconName;
      
      // If name already exists in LucideIcons, return it
      if (inputName in LucideIcons) {
        return inputName as IconName;
      }
      
      // Handle kebab-case
      if (inputName.includes('-')) {
        return inputName
          .split('-')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join('') as IconName;
      }
      
      // Handle camelCase
      if (/[a-z][A-Z]/.test(inputName)) {
        return (inputName.charAt(0).toUpperCase() + inputName.slice(1)) as IconName;
      }
      
      // Default transformation (capitalize first letter)
      return (inputName.charAt(0).toUpperCase() + inputName.slice(1)) as IconName;
    };

    // Get size class based on size prop
    const getSizeClass = (sizeValue: string): string => {
      if (sizeValue in iconSizeMap) {
        return iconSizeMap[sizeValue as IconSize];
      }
      
      // Default to md
      return iconSizeMap.md;
    };
    
    // Get color class based on color prop
    const getColorClass = (colorValue: string): string => {
      if (colorValue in iconColorMap) {
        return iconColorMap[colorValue as IconColor];
      }
      
      // Default to default color
      return iconColorMap.default;
    };

    // Get the icon component
    const formattedName = formatIconName(name);
    const IconComponent = LucideIcons[formattedName];
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found, formatted as "${formattedName}"`);
      const FallbackIcon = LucideIcons.HelpCircle;
      return (
        <span 
          ref={ref}
          className={cn("inline-flex items-center justify-center", getColorClass(color as string), className)}
          onClick={onClick}
        >
          <FallbackIcon className={getSizeClass(size as string)} aria-hidden="true" />
        </span>
      );
    }

    // For medieval/royal style, we wrap the icon in a decorative container
    if (style === 'medieval' || style === 'royal') {
      return (
        <span 
          ref={ref}
          className={cn(
            "inline-flex items-center justify-center",
            style === 'medieval' ? 'royal-frame-sm' : 'royal-badge-sm',
            getColorClass(color as string),
            className
          )}
          onClick={onClick}
        >
          <IconComponent className={getSizeClass(size as string)} aria-hidden="true" />
        </span>
      );
    }

    // Default style
    return (
      <span 
        ref={ref}
        className={cn("inline-flex items-center justify-center", getColorClass(color as string), className)}
        onClick={onClick}
      >
        <IconComponent className={getSizeClass(size as string)} aria-hidden="true" />
      </span>
    );
  }
);

IconSystem.displayName = 'IconSystem';

export default IconSystem;
