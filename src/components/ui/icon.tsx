
import React from 'react';
import IconSystem from './icon-system';
import { IconProps } from '@/types/ui/icon-types';

/**
 * Icon component for using Lucide icons with consistent styling
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, icon, size = 'md', color = 'default', className, animated, style = 'default', ...props }, ref) => {
    return (
      <IconSystem
        ref={ref}
        name={name}
        icon={icon}
        size={size}
        color={color}
        animated={animated}
        style={style}
        className={className}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export { Icon };
export default Icon;
