
import React from 'react';
import { Icon as UIIcon, IconName, IconSize } from '@/components/ui/icon';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color, 
  className, 
  onClick 
}) => {
  // Convert size from number to the size format expected by the UI icon
  const getIconSize = (size: number): IconSize => {
    if (size <= 16) return 'xs';
    if (size <= 20) return 'sm';
    if (size <= 24) return 'md';
    if (size <= 32) return 'lg';
    return 'xl';
  };

  return (
    <UIIcon
      name={name}
      size={getIconSize(size)}
      className={className}
      color={color}
      onClick={onClick}
    />
  );
};

export default Icon;
