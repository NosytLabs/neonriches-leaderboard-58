
import React from 'react';
import { ShameAction, MockeryAction } from '@/types/mockery';
import { getShameActionIcon } from './shameUtils';

export const ShameIcon: React.FC<{ action: ShameAction; size?: 'sm' | 'md' | 'lg' }> = ({ 
  action, 
  size = 'md' 
}) => {
  const IconComponent = getShameActionIcon(action as MockeryAction);
  
  const sizeClass = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  return (
    <span className={sizeClass[size]}>
      {IconComponent && <IconComponent />}
    </span>
  );
};

export default ShameIcon;
