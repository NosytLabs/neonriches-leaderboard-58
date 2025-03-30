
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { Crown } from '@/assets/icons/Crown';
import { IconName, IconSize, IconColor, IconStyle } from '@/types/ui/icon-types';

// Size classes map
const iconSizeClasses: Record<IconSize, string> = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
};

// Color classes map
const iconColorClasses: Record<string, string> = {
  'default': 'text-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'muted': 'text-muted-foreground',
  'accent': 'text-accent',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'crimson': 'text-royal-crimson',
  'royal': 'text-royal-purple',
  'navy': 'text-royal-navy',
  'bronze': 'text-amber-700',
  'purple': 'text-purple-600',
};

export interface IconSystemProps extends React.SVGAttributes<SVGElement> {
  name: string;
  size?: IconSize | string;
  color?: IconColor | string;
  className?: string;
  style?: IconStyle;
}

// The main icon system component
const IconSystem = React.forwardRef<SVGSVGElement, IconSystemProps>(
  ({ name, size = 'md', color = 'default', className, style = 'default', ...props }, ref) => {
    // Safety checks for size and color
    const sizeKey = size as IconSize;
    const colorKey = color as string;
    
    // Get the appropriate classes
    const sizeClass = iconSizeClasses[sizeKey] || iconSizeClasses.md;
    const colorClass = iconColorClasses[colorKey] || iconColorClasses.default;
    
    // Combine classes
    const combinedClassName = cn(sizeClass, colorClass, className);
    
    // Handle custom icons first
    if (name === 'Crown') {
      return <Crown className={combinedClassName} {...props} ref={ref} />;
    }
    
    // Then try to find a Lucide icon
    const LucideIcon = (LucideIcons as any)[name];
    
    if (LucideIcon) {
      return <LucideIcon className={combinedClassName} {...props} ref={ref} />;
    }
    
    // Fallback to a default icon
    console.warn(`Icon "${name}" not found, using default`);
    return <LucideIcons.HelpCircle className={combinedClassName} {...props} ref={ref} />;
  }
);

IconSystem.displayName = 'IconSystem';

export default IconSystem;
