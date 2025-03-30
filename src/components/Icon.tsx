
import React from 'react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

// Types
type IconProps = {
  name: keyof typeof Icons;
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
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist in Lucide icons`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={cn(className)}
      onClick={onClick}
    />
  );
};

export default Icon;

