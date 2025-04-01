
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

    // If we have a LucideIcon component directly provided
    if (typeof icon === 'function') {
      const IconComponent = icon;
      return <IconComponent ref={ref} className={cn(sizeClass, colorClass, animationClass, className)} {...props} />;
    }

    // If we have an icon name
    if (name) {
      // Try to find it in Lucide icons
      const LucideIcon = (LucideIcons as any)[name];
      if (LucideIcon) {
        return <LucideIcon ref={ref} className={cn(sizeClass, colorClass, animationClass, className)} {...props} />;
      }
    }

    // If we have a string icon name (not a Lucide component)
    if (typeof icon === 'string') {
      // Try to find it in Lucide icons by string name
      const iconName = icon.charAt(0).toUpperCase() + icon.slice(1);
      const LucideIcon = (LucideIcons as any)[iconName];
      
      if (LucideIcon) {
        return <LucideIcon ref={ref} className={cn(sizeClass, colorClass, animationClass, className)} {...props} />;
      }
    }

    // Fallback to a default icon
    return (
      <div 
        className={cn(
          'inline-flex items-center justify-center',
          sizeClass,
          colorClass,
          animationClass,
          className
        )}
        {...props}
      >
        <span className="sr-only">{name || 'Icon'}</span>
        <LucideIcons.HelpCircle />
      </div>
    );
  }
);

IconSystem.displayName = 'IconSystem';

export default IconSystem;
