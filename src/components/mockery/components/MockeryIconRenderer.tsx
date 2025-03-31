
import React from 'react';
import { 
  Target, Bell, Shield, Crown, AlertCircle, ThumbsDown, 
  Skull, Ghost, Bomb, Feather, Rat, UserX, Zap, Flame
} from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryActionIcon, getMockeryTier } from '@/utils/mockery';
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
  
  // Get appropriate color based on mockery tier
  const tier = getMockeryTier(action);
  const colorClasses = {
    basic: 'text-gray-400',
    premium: 'text-purple-500',
    royal: 'text-royal-gold',
    legendary: 'text-red-500',
    rare: 'text-blue-500',
    epic: 'text-fuchsia-500',
    silver: 'text-gray-300',
    common: 'text-green-500',
    uncommon: 'text-yellow-500'
  };
  
  return (
    <IconComponent className={cn(sizeClasses[size], colorClasses[tier], className)} />
  );
};

export default MockeryIconRenderer;
