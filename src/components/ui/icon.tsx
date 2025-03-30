
import React from 'react';
import IconSystem from './icon-system';
import { IconProps } from '@/types/ui/icon-types';

/**
 * Icon component for using Lucide icons with consistent styling
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color = 'default', className, style = 'default', ...props }, ref) => {
    return (
      <IconSystem
        ref={ref}
        name={name}
        size={size}
        color={color}
        className={className}
        style={style}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export { Icon };
export default Icon;
