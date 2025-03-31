
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { getMockeryActionIcon } from '@/utils/mockery/mockery-icons';
import { getMockeryActionIconColor } from '@/utils/mockery/mockery-icons';
import { cn } from '@/lib/utils';

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
  const IconComponent = getMockeryActionIcon(action);
  
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };
  
  // Get appropriate color class
  const colorClass = getMockeryActionIconColor(action);
  
  return (
    <IconComponent className={cn(sizeClasses[size], colorClass, className)} />
  );
};

export default MockeryIconRenderer;
