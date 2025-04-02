
import React from 'react';
import IconSystem from '@/components/ui/icon-system';
import { IconProps, IconSize, IconColor, IconStyle } from '@/types/ui/icon-types';

interface IconWrapperProps {
  icon: string;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  medieval?: boolean;
  style?: IconStyle;
  animated?: boolean;
}

/**
 * IconWrapper is a convenience component that handles string-based icon names
 * and automatically converts them to the correct format for our icon system
 */
const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  size = 'md',
  color = 'default',
  className,
  medieval = false,
  style,
  animated = false
}) => {
  // Safety check
  if (!icon) return null;
  
  // Get the style based on whether it's medieval or not
  const iconStyle: IconStyle = style || (medieval ? 'medieval' : 'default');
  
  return (
    <IconSystem
      icon={icon}
      size={size}
      color={color}
      className={className}
      style={iconStyle}
      animated={animated}
    />
  );
};

export default IconWrapper;
