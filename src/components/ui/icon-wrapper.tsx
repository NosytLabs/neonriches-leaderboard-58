
import React from 'react';
import IconSystem from '@/components/ui/icon-system';
import { adaptIconName, adaptIconSize, adaptIconColor } from '@/utils/iconTypeAdapter';
import { IconSize, IconColor, MedievalIconName, MedievalIconColor } from '@/types/ui/icon-types';

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
  
  // Convert to the appropriate format based on whether it's medieval or not
  const iconName = medieval ? adaptIconName(icon) : icon;
  const iconSize = size;
  const iconColor = medieval ? adaptIconColor(color as string || 'default') : color;
  
  return (
    <IconSystem
      icon={iconName}
      size={iconSize}
      color={iconColor}
      className={className}
      style={medieval ? 'medieval' : 'default'}
    />
  );
};

export default IconWrapper;
