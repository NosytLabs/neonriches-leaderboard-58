
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

// Types
type IconProps = {
  name: keyof typeof LucideIcons;
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
  // We need to ensure the component is a valid React component
  const LucideIcon = LucideIcons[name] as React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
  }>;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" does not exist in Lucide icons`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      color={color}
      className={cn(className)}
      onClick={onClick}
    />
  );
};

export default Icon;
