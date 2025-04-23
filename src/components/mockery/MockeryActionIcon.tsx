
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { getMockeryActionIcon } from '@/utils/mockeryActionUtils';

interface MockeryActionIconProps {
  action: MockeryAction;
  size?: number;
  className?: string;
  color?: string;
}

const MockeryActionIcon: React.FC<MockeryActionIconProps> = ({
  action,
  size = 24,
  className = '',
  color
}) => {
  const IconComponent = getMockeryActionIcon(action);
  
  return (
    <IconComponent 
      size={size} 
      className={className}
      color={color}
    />
  );
};

export default MockeryActionIcon;
