
import React from 'react';
import { ShameAction } from '@/types/mockery';
import { getShameActionIcon } from './shameUtils';

export const ShameIcon: React.FC<{ action: ShameAction; size?: 'sm' | 'md' | 'lg' }> = ({ 
  action, 
  size = 'md' 
}) => {
  const icon = getShameActionIcon(action);
  
  const sizeClass = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  return (
    <span className={sizeClass[size]}>
      {icon}
    </span>
  );
};

export default ShameIcon;
