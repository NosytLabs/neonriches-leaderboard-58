
import React from 'react';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface MedievalIconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  color?: string;
  className?: string;
  animated?: boolean;
}

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  className,
  animated = false
}) => {
  return (
    <Icon 
      icon={name} 
      size={size} 
      color={color} 
      className={cn("medieval-icon", className)}
      animated={animated}
      style="medieval"
    />
  );
};

export default MedievalIcon;
