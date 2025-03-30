
import React from 'react';
import IconSystem, { IconName, IconSize } from './IconSystem';

export type { IconName } from './IconSystem';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string;
}

/**
 * Icon component for using Lucide icons with consistent styling
 */
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ name, className, size = 'md', color, ...props }, ref) => {
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

export default Icon;
