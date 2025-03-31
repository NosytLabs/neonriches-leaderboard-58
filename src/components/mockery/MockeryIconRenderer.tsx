
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { getMockeryIcon, getMockeryIconColor } from '@/utils/mockery/mockery-icons';
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
  const IconComponent = getMockeryIcon(action);
  
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };
  
  // Get appropriate color class
  const colorClass = getMockeryIconColor(action);
  
  return (
    <IconComponent className={cn(sizeClasses[size], colorClass, className)} />
  );
};

export default MockeryIconRenderer;
