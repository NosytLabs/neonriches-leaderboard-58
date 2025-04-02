
import React from 'react';
import { IconProps } from '@/types/ui/icon-types';
import { Icon as IconComponent } from '@/components/ui/icon';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
        iconName={iconName}
        size={size}
        color={color}
        className={className}
        animated={animated}
        style={style}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
