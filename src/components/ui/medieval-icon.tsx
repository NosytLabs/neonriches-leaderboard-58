
import React from 'react';
import { cn } from '@/lib/utils';
import {
  MedievalIconProps,
  MedievalIconName,
  MedievalIconColor,
  MedievalIconSize
} from './medieval-icon.d';
import IconSystem from './icon-system';
import { adaptIconName, adaptIconColor, adaptIconSize } from '@/utils/iconTypeAdapter';

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  className
}) => {
  // Convert the name to the IconSystem name format
  const iconName = name === 'Crown' ? 'Crown' : name;
  
  // Size and color classes are handled by IconSystem
  
  return (
    <IconSystem
      name={iconName}
      size={size}
      color={color}
      className={className}
      style="medieval"
    />
  );
};

export default MedievalIcon;
