
import React from 'react';
import { IconProps } from '@/types/ui/icon-types';
import IconSystem from './ui/icon-system';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color = 'default', className, ...props }, ref) => {
    return (
      <IconSystem
        ref={ref}
        name={name}
        size={size}
        color={color}
        className={className}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export { Icon };
export default Icon;
