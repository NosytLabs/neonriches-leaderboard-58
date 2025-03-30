
import React from 'react';
import IconSystem from '@/components/ui/icon-system';
import { toMedievalIconName, toMedievalIconColor, toMedievalIconSize } from '@/utils/iconTypeAdapter';

interface IconWrapperProps {
  icon: string;
  size?: string;
  color?: string;
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
  
  return (
    <IconSystem
      name={medieval ? toMedievalIconName(icon) : icon}
      size={medieval ? toMedievalIconSize(size) : size}
      color={medieval ? toMedievalIconColor(color || 'default') : color}
      className={className}
      style={medieval ? 'medieval' : 'default'}
    />
  );
};

export default IconWrapper;
