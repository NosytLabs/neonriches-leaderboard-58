
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { cn } from '@/lib/utils';
import { getMockeryTier, getMockeryTierColorClass } from '@/utils/mockeryUtils';
import { getMockeryActionIcon } from '@/utils/mockery/mockery-icons';

interface MockeryIconRendererProps {
  action: MockeryAction;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const MockeryIconRenderer: React.FC<MockeryIconRendererProps> = ({
  action,
  size = 'md',
  className
}) => {
  // Get the appropriate icon based on the action
  const IconComponent = getMockeryActionIcon(action);
  
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };
  
  // Get appropriate color class
  const tier = getMockeryTier(action);
  const colorClass = getMockeryTierColorClass(tier);
  
  return (
    <IconComponent className={cn(sizeClasses[size], colorClass, className)} />
  );
};

export default MockeryIconRenderer;
