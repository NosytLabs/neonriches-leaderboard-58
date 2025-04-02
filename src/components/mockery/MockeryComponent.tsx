
import React from 'react';
import { cn } from '@/lib/utils';
import { MockeryAction } from '@/types/mockery-types';
import { Badge } from '@/components/ui/Badge'; // Fixed casing
import { mockeryActionIcons, getMockeryActionName } from '@/utils/mockeryActionUtils';

interface MockeryComponentProps {
  action: MockeryAction;
  size?: number;
  className?: string;
}

const MockeryComponent: React.FC<MockeryComponentProps> = ({
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

export default MockeryComponent;
