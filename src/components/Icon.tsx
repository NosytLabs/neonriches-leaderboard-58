
import React from 'react';
import { IconProps } from '@/types/ui/icon-types';
import { Icon as IconComponent } from '@/components/ui/icon';

const Icon = React.forwardRef<SVGSVGElement, IconProps & { name?: string, icon?: string }>(
  ({ icon, name, size = 'md', color = 'default', className, animated, style = 'default', ...props }, ref) => {
    // Ensure either icon or name is provided
    const iconName = icon || name;
    
    if (!iconName) {
      console.warn('Icon component must have either icon or name prop');
      return null;
    }
    
    return (
      <IconComponent
        ref={ref}
        iconName={iconName} // Changed from icon to iconName to avoid type issues
        size={size}
        color={color}
        className={className}
        animated={animated}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
