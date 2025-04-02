
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { IconProps, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';
import { cn } from '@/lib/utils';

const IconSystem = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon, name, size = 'md', color = 'default', className, animated, style = 'default', ...props }, ref) => {
    // Handle size - can be a string type or a number
    let sizeClass: string;
    if (typeof size === 'string') {
      sizeClass = iconSizeMap[size] || 'w-6 h-6';
    } else {
      sizeClass = `w-${size} h-${size}`;
    }

    // Handle color
    const colorClass = iconColorMap[color as any] || 'text-current';
    
    // Animation class
    const animationClass = animated ? 'animate-pulse' : '';

    const iconName = icon || name;
    
    // Extract the actual component name - try different formats
    let iconComponent: any = null;
    
    if (typeof iconName === 'string') {
      // Try direct lookup
      iconComponent = (LucideIcons as any)[iconName];
      
      if (!iconComponent) {
        // Try with first letter capitalized
        const capitalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
        iconComponent = (LucideIcons as any)[capitalizedName];
      }
      
      if (!iconComponent) {
        // Try with camelCase conversion (kebab-case to CamelCase)
        const camelCaseName = iconName
          .split('-')
          .map((part, index) => 
            index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
          )
          .join('');
        
        iconComponent = (LucideIcons as any)[camelCaseName];
      }
      
      if (!iconComponent) {
        // Try with PascalCase conversion
        const pascalCaseName = iconName
          .split('-')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join('');
        
        iconComponent = (LucideIcons as any)[pascalCaseName];
      }
    }

    // If we couldn't find the icon, use a fallback
    if (!iconComponent) {
      console.warn(`Icon not found: ${iconName}`);
      iconComponent = LucideIcons.HelpCircle;
    }

    return React.createElement(
      iconComponent,
      {
        ref,
        className: cn(sizeClass, colorClass, animationClass, className),
        "aria-hidden": "true",
        ...props
      }
    );
  }
);

IconSystem.displayName = 'IconSystem';

export default IconSystem;
