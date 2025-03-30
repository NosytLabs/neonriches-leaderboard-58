
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

export type IconName = keyof typeof LucideIcons;

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
};

/**
 * Icon component for using Lucide icons with consistent styling
 */
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ name, className, size = 'md', color, ...props }, ref) => {
    // Get the icon component dynamically
    const IconComponent = LucideIcons[name as IconName];
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found`);
      return null;
    }

    return (
      <span 
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        {...props}
      >
        {React.createElement(IconComponent, {
          className: cn(sizeClasses[size]),
          color: color,
          'aria-hidden': true
        })}
      </span>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
