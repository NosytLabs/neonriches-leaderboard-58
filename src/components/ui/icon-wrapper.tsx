
import React from 'react';
import Icon from '@/components/ui/icon';
import { IconName } from '@/components/ui/icon';

// This component wraps the ui/icon component for backward compatibility
// with code that expects the old Icon component from src/components/Icon.tsx
interface IconWrapperProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  name,
  size = 24,
  color,
  className,
  onClick
}) => {
  // Convert size from number to the IconSize type expected by the ui/icon component
  const getIconSize = (size: number) => {
    if (size <= 16) return 'xs';
    if (size <= 20) return 'sm';
    if (size <= 24) return 'md';
    if (size <= 32) return 'lg';
    return 'xl';
  };

  return (
    <Icon
      name={name as IconName}
      size={getIconSize(size)}
      className={className}
      color={color}
      onClick={onClick}
    />
  );
};

export default IconWrapper;
