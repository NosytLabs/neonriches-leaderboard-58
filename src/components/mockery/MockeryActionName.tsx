
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { getMockeryActionName } from '@/utils/mockeryActionUtils';

interface MockeryActionNameProps {
  action: MockeryAction;
  className?: string;
}

const MockeryActionName: React.FC<MockeryActionNameProps> = ({
  action,
  className = ''
}) => {
  return (
    <span className={className}>
      {getMockeryActionName(action)}
    </span>
  );
};

export default MockeryActionName;
