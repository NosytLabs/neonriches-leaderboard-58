
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { IconProps, IconSize } from '@/types/ui/icon-types';
import { cn } from '@/lib/utils';

const sizeMap: Record<IconSize, number> = {
  'xs': 16,
  'sm': 20,
  'md': 24,
  'lg': 32,
  'xl': 40,
  '2xl': 48
};

const colorMap: Record<string, string> = {
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
  'bronze': 'text-amber-600',
  'purple': 'text-purple-500'
};

const IconSystem = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color = 'default', className, style = 'default', ...props }, ref) => {
    const pixelSize = typeof size === 'number' ? size : sizeMap[size] || 24;
    const colorClass = colorMap[color] || color;
    
    // Get the icon component from Lucide
    const LucideIcon = (LucideIcons as any)[name];
    
    if (!LucideIcon) {
      console.warn(`Icon "${name}" not found in Lucide icons`);
      return null;
    }
    
    return (
      <LucideIcon
        ref={ref}
        size={pixelSize}
        className={cn(colorClass, className)}
        {...props}
      />
    );
  }
);

IconSystem.displayName = 'IconSystem';

export default IconSystem;
