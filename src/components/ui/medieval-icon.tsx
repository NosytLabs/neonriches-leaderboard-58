
import React from 'react';
import { MedievalIconProps } from '@/types/ui/icon-types';
import IconSystem from './icon-system';

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  className
}) => {
  return (
    <IconSystem
      name={name}
      size={size}
      color={color}
      className={className}
      style="medieval"
    />
  );
};

export default MedievalIcon;
