
import React from 'react';
import { IconProps } from '@/types/ui/icon-types';
import MedievalIcon from '@/components/ui/medieval-icon';
import { Icon as IconComponent } from '@/components/ui/icon';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color = 'default', className, animated = false, style = 'default', ...props }, ref) => {
    // Ensure either icon or name is provided
    const iconName = props.icon || name || '';
    
    if (!iconName) {
      console.warn('Icon component must have either icon or name prop');
      return null;
    }
    
    // Check if this is a medieval icon
    if (style === 'medieval') {
      return (
        <MedievalIcon
          name={iconName as any}
          size={size as any}
          color={color as any}
          className={className}
          animated={animated}
        />
      );
    }
    
    // Otherwise use the standard icon component
    return (
      <IconComponent
        ref={ref}
        name={iconName}
        icon={iconName}
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
