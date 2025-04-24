
import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { cn } from '@/lib/utils';
import { Egg, Crown, Target, Shield, Heart, Flame, MessageSquare } from 'lucide-react';

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

  return (
    <IconComponent 
      className={cn("transition-colors", className)} 
      size={iconSize}
    />
  );
};

export default MockeryIconRenderer;
