
import React from 'react';
import { IconProps } from '@/types/ui/icon-types';
import IconSystem from './ui/icon-system';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon, name, size = 'md', color = 'default', className, animated, style = 'default', ...props }, ref) => {
    return (
      <IconSystem
        ref={ref}
        icon={icon}
        name={name}
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
