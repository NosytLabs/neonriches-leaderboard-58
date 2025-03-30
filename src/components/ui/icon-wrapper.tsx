
import React from 'react';
import IconSystem from '@/components/ui/icon-system';
import { adaptIconName, adaptIconColor, adaptIconSize } from '@/utils/iconTypeAdapter';
import { IconSize, IconColor } from '@/types/ui/icon-types';

interface IconWrapperProps {
  icon: string;
  size?: IconSize | number;
  color?: IconColor | string;
  className?: string;
  medieval?: boolean;
}

/**
 * IconWrapper is a convenience component that handles string-based icon names
 * and automatically converts them to the correct format for our icon system
 */
const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  size = 'md',
  color,
  className,
  medieval = false
}) => {
  // Safety check
  if (!icon) return null;
  
  const iconName = medieval ? adaptIconName(icon) : icon;
  const iconSize = medieval ? adaptIconSize(size) : size;
  const iconColor = medieval ? adaptIconColor(color || 'default') : color;
  
  return (
    <IconSystem
      name={iconName}
      size={iconSize}
      color={iconColor}
      className={className}
      style={medieval ? 'medieval' : 'default'}
    />
  );
};

export default IconWrapper;
