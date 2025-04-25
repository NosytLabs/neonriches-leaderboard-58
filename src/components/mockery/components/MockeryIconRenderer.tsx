
import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { cn } from '@/lib/utils';
import { Egg, Crown, Target, Shield, Heart, Flame, MessageSquare } from 'lucide-react';
import { getMockeryEffect } from '@/utils/mockery-utils';

interface MockeryIconRendererProps {
  action: MockeryAction;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

const MockeryIconRenderer: React.FC<MockeryIconRendererProps> = ({
  action,
  size = 'md',
  className,
  animated = false
}) => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const iconSize = sizeMap[size];

  const getIconComponent = () => {
    switch (action) {
      case 'egg':
        return Egg;
      case 'crown':
        return Crown;
      case 'target':
        return Target;
      case 'protection':
        return Shield;
      case 'heart':
        return Heart;
      case 'flame':
        return Flame;
      default:
        return MessageSquare;
    }
  };

  const IconComponent = getIconComponent();
  const effectClass = animated ? getMockeryEffect(action) : '';

  return (
    <IconComponent 
      className={cn("transition-colors", effectClass, className)} 
      size={iconSize}
    />
  );
};

export default MockeryIconRenderer;
