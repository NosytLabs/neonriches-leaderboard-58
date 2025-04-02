
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { 
  Egg, 
  Crown, 
  Flame, 
  Heart, 
  Skull, 
  ThumbsDown,
  ShieldAlert,
  MessageSquareOff,
  PartyPopper,
  Laugh,
  Shirt,
  Eye,
  Sparkles,
  Lock,
  Zap
} from 'lucide-react';

// Get display name for a mockery action
export const getMockeryActionName = (action: MockeryAction | string): string => {
  const names: Record<string, string> = {
    'tomato': 'Tomato',
    'egg': 'Egg',
    'rotten_egg': 'Rotten Egg',
    'flame': 'Flame',
    'heart': 'Heart',
    'thumbs_down': 'Thumbs Down',
    'laugh': 'Laugh',
    'skull': 'Skull',
    'crown': 'Crown',
    'putridEgg': 'Putrid Egg',
    'stocks': 'Stocks',
    'jester': 'Jester',
    'shame': 'Shame',
    'silence': 'Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Protection',
    'taunt': 'Taunt',
    'mock': 'Mock',
    'challenge': 'Challenge',
    'joust': 'Joust',
    'duel': 'Duel',
    'royal_decree': 'Royal Decree',
    'fish': 'Fish',
    'thumbsDown': 'Thumbs Down'
  };
  
  return names[action] || String(action);
};

// Get icon component for mockery action
export const getMockeryActionIcon = (action: MockeryAction): React.FC => {
  switch (action) {
    case 'tomato':
      return PartyPopper;
    case 'egg':
      return Egg;
    case 'crown':
      return Crown;
    case 'flame':
      return Flame;
    case 'heart':
      return Heart;
    case 'skull':
      return Skull;
    case 'thumbs_down':
      return ThumbsDown;
    case 'protection':
      return ShieldAlert;
    case 'silence':
      return MessageSquareOff;
    case 'laugh':
      return Laugh;
    case 'jester':
      return Shirt;
    case 'mock':
      return Eye;
    case 'stocks':
      return Lock;
    case 'challenge':
      return Zap;
    case 'royal_decree':
      return Sparkles;
    default:
      return PartyPopper;
  }
};

// Map of mockery action icons for lookup
export const mockeryActionIcons: Record<string, React.FC> = {
  'tomato': PartyPopper,
  'egg': Egg,
  'crown': Crown,
  'flame': Flame,
  'heart': Heart,
  'skull': Skull,
  'thumbs_down': ThumbsDown,
  'protection': ShieldAlert,
  'silence': MessageSquareOff,
  'laugh': Laugh,
  'jester': Shirt,
  'mock': Eye,
  'stocks': Lock,
  'challenge': Zap,
  'royal_decree': Sparkles,
  'putridEgg': Egg,
  'taunt': Eye,
  'shame': Eye,
  'joust': Zap,
  'duel': Zap,
  'smokeBomb': Lock,
  'courtJester': Shirt,
  'rotten_egg': Egg
};

// Color classes for mockery tiers
export const mockeryTierColors: Record<MockeryTier, string> = {
  'common': 'bg-gray-600 hover:bg-gray-500',
  'uncommon': 'bg-green-700 hover:bg-green-600',
  'rare': 'bg-blue-700 hover:bg-blue-600',
  'epic': 'bg-purple-700 hover:bg-purple-600',
  'legendary': 'bg-yellow-600 hover:bg-yellow-500'
};

// Display labels for mockery tiers
export const mockeryTierLabels: Record<MockeryTier, string> = {
  'common': 'Common',
  'uncommon': 'Uncommon',
  'rare': 'Rare',
  'epic': 'Epic',
  'legendary': 'Legendary'
};

// Get the cost for a mockery action
export const getMockeryActionCost = (action: MockeryAction | string): number => {
  const costs: Record<string, number> = {
    tomato: 5,
    egg: 10,
    rotten_egg: 15,
    flame: 25,
    heart: 15,
    thumbs_down: 5,
    laugh: 5,
    skull: 25,
    crown: 100,
    putridEgg: 20,
    stocks: 50,
    jester: 30,
    shame: 40,
    silence: 50,
    courtJester: 40,
    smokeBomb: 30,
    protection: 75,
    taunt: 15,
    mock: 10,
    challenge: 20,
    joust: 30,
    duel: 40,
    royal_decree: 80
  };
  
  return costs[action] || 10;
};
