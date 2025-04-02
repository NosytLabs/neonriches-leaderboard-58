
import React from 'react';
import { cn } from '@/lib/utils';
import { MockeryAction } from '@/types/mockery-types';
import { mockeryActionIcons } from '@/utils/mockeryActionUtils';

interface MockeryIconComponentProps {
  action: MockeryAction;
  size?: number;
  className?: string;
}

const MockeryIconComponent: React.FC<MockeryIconComponentProps> = ({
  action,
  size = 24,
  className
}) => {
  const IconComponent = mockeryActionIcons[action] || mockeryActionIcons.mock;

  return (
    <div className={cn("inline-block", className)}>
      <IconComponent size={size} />
    </div>
  );
};

export default MockeryIconComponent;
