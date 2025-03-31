
import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryTier, getMockeryTierColorClass } from '@/utils/mockery';
import { cn } from '@/lib/utils';
// Import specific icons from lucide-react
import { AlertCircle, Egg, Crown, Theater, Target } from 'lucide-react';

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
  const getIconComponent = (actionType: MockeryAction) => {
    switch (actionType) {
      case 'tomatoes': return AlertCircle;
      case 'eggs': return Egg;
      case 'crown': return Crown;
      case 'jester': return Theater;
      case 'stocks': return AlertCircle;
      case 'shame': return AlertCircle;
      case 'protection': return Crown;
      default: return Target;
    }
  };
  
  const IconComponent = getIconComponent(action);
  
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
