
import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { cn } from '@/lib/utils';
import { getMockeryActionIcon, getMockeryActionIconColor } from '@/utils/mockery/mockery-icons';

interface MockeryIconRendererProps {
  action: MockeryAction;
  size?: number;
  className?: string;
}

const MockeryIconRenderer: React.FC<MockeryIconRendererProps> = ({
  action,
  size = 16,
  className
}) => {
  const IconComponent = getMockeryActionIcon(action);
  
  return (
    <IconComponent 
      size={size} 
      className={cn(getMockeryActionIconColor(action), className)} 
    />
  );
};

export default MockeryIconRenderer;
