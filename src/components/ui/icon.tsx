
import React from 'react';
import IconSystem, { IconName, IconSize, IconColor } from './icon-system';

export type { IconName, IconSize, IconColor } from './icon-system';

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: IconName | string;
  size?: IconSize;
  color?: IconColor | string;
  className?: string;
}

/**
 * Icon component for using Lucide icons with consistent styling
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color, className, ...props }, ref) => {
    return (
      <IconSystem
        ref={ref}
        name={name}
        size={size}
        color={color}
        className={className}
        style="default"
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export { Icon };
export default Icon;
