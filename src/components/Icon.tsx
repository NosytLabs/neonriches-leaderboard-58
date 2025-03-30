
import React from 'react';
import IconWrapper from '@/components/ui/icon-wrapper';

// Types
type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color, 
  className, 
  onClick 
}) => {
  return (
    <IconWrapper
      name={name}
      size={size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;
