
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { cn } from '@/lib/utils';
import { getMockeryTier, getMockeryTierColorClass, getMockeryActionIcon } from '@/utils/mockeryUtils';

interface MockeryIconProps {
  action: MockeryAction;
  size?: number;
  className?: string;
}

const MockeryIcon: React.FC<MockeryIconProps> = ({
  action,
  size = 16,
  className
}) => {
  const IconComponent = getMockeryActionIcon(action);
  const tier = getMockeryTier(action);
  const colorClass = getMockeryTierColorClass(tier);
  
  return (
    <IconComponent 
      size={size} 
      className={cn(colorClass, className)} 
    />
  );
};

export default MockeryIcon;
