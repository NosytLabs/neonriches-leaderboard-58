
import React from 'react';
import { ShieldAlert, Sword, Crown, AlertCircle, ThumbsDown, Laugh, Target, Skull, Map } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';
import { getMockeryActionIconColor } from '@/utils/mockeryUtils';
import { cn } from '@/lib/utils';

interface MockeryIconProps {
  action: MockeryAction;
  className?: string;
  size?: number;
}

const MockeryIconRenderer: React.FC<MockeryIconProps> = ({ action, className, size = 24 }) => {
  const iconColor = getMockeryActionIconColor(action);
  
  // Map action to the corresponding icon component
  const getIconComponent = () => {
    switch(action) {
      case 'shame':
        return <AlertCircle size={size} className={cn(iconColor, className)} />;
      case 'taunt':
        return <ThumbsDown size={size} className={cn(iconColor, className)} />;
      case 'crown':
        return <Crown size={size} className={cn(iconColor, className)} />;
      case 'challenge':
        return <Sword size={size} className={cn(iconColor, className)} />;
      case 'protection':
        return <ShieldAlert size={size} className={cn(iconColor, className)} />;
      case 'jest':
        return <Laugh size={size} className={cn(iconColor, className)} />;
      case 'target':
        return <Target size={size} className={cn(iconColor, className)} />;
      case 'defeat':
        return <Skull size={size} className={cn(iconColor, className)} />;
      case 'expose':
        return <Map size={size} className={cn(iconColor, className)} />;
      default:
        return <Laugh size={size} className={cn(iconColor, className)} />;
    }
  };
  
  return getIconComponent();
};

export default MockeryIconRenderer;
