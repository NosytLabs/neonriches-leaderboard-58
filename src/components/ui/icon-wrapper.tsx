import React from 'react';
import Icon from '@/components/ui/icon';
import MedievalIcon from '@/components/ui/medieval-icon';
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
 * and automatically converts them to the correct format for both Icon and MedievalIcon
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
  
  // Convert icon name to PascalCase for Lucide icons
  const formattedIconName = icon
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // Use medieval icon if specified
  if (medieval) {
    return (
      <MedievalIcon
        name={toMedievalIconName(icon)}
        size={toMedievalIconSize(size)}
        color={toMedievalIconColor(color || 'default')}
        className={className}
      />
    );
  }
  
  // Otherwise use standard icon
  return (
    <Icon
      name={formattedIconName as any}
      size={size as any}
      color={color}
      className={className}
    />
  );
};

export default IconWrapper;
