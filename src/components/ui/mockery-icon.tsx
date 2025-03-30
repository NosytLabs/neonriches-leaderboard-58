
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

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
  // Import dynamically to avoid circular dependencies
  const { getMockeryActionIcon, getMockeryActionIconColor } = require('@/components/mockery/utils/mockeryUtils');
  
  const IconComponent = getMockeryActionIcon(action);
  const colorClass = getMockeryActionIconColor(action);
  
  return (
    <IconComponent 
      size={size} 
      className={cn(colorClass, className)} 
    />
  );
};

export default MockeryIcon;
