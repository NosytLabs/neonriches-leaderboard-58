
import React from 'react';
import { IconProps } from '@/types/ui/icon-types';
import { Icon as IconComponent } from '@/components/ui/icon';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon, name, size = 'md', color = 'default', className, animated, style = 'default', ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        icon={icon || name}
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
