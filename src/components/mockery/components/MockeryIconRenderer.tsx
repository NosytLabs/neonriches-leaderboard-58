
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { getMockeryIcon } from '@/utils/mockery/mockery-icons';

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
  const IconComponent = getMockeryIcon(action);
  
  return (
    <div className={className}>
      {IconComponent}
    </div>
  );
};

export default MockeryIconRenderer;
