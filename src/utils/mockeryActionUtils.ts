
import { 
  Egg, 
  Crown, 
  Target, 
  Flame, 
  Heart, 
  Shield, 
  MessageSquare 
} from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';
import { LucideIcon } from 'lucide-react';

// Map of mockery actions to their display names
export const mockeryActionNames: Record<MockeryAction, string> = {
  egg: 'Egg',
  crown: 'Crown',
  target: 'Target',
  flame: 'Flame',
  heart: 'Support',
  protection: 'Shield',
  mock: 'Mock'
};

// Map of mockery actions to their icons
export const mockeryActionIcons: Record<MockeryAction, LucideIcon> = {
  egg: Egg,
  crown: Crown,
  target: Target,
  flame: Flame,
  heart: Heart,
  protection: Shield,
  mock: MessageSquare
};

// Get the display name for a mockery action
export const getMockeryActionName = (action: MockeryAction): string => {
  return mockeryActionNames[action] || 'Unknown';
};

// Get the icon component for a mockery action
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  return mockeryActionIcons[action] || MessageSquare;
};

// Get the CSS effect class for a mockery action
export const getMockeryEffect = (action: MockeryAction): string => {
  const effectMap: Record<MockeryAction, string> = {
    egg: 'animate-bounce text-yellow-200',
    crown: 'animate-pulse text-royal-gold',
    target: 'animate-ping text-red-500',
    flame: 'animate-pulse text-orange-500',
    heart: 'animate-pulse text-pink-500',
    protection: 'animate-pulse text-blue-500',
    mock: 'animate-bounce text-purple-500'
  };
  
  return effectMap[action] || '';
};
