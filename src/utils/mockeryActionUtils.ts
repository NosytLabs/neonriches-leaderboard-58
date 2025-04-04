
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Laugh, Egg, Crown, ThumbsDown, MessageSquare, PieChart, Crown as CrownIcon, Flame, Heart, Skull } from 'lucide-react';

export const mockeryActionIcons = {
  tomato: Flame,
  egg: Egg,
  putridEgg: Egg,
  rotten_egg: Egg,
  crown: Crown,
  thumbsDown: ThumbsDown,
  thumbs_down: ThumbsDown,
  mock: MessageSquare,
  stocks: PieChart,
  jester: CrownIcon,
  courtJester: CrownIcon,
  silence: MessageSquare,
  taunt: MessageSquare,
  smokeBomb: Flame,
  protection: Crown,
  flame: Flame,
  heart: Heart,
  skull: Skull,
  laugh: Laugh,
  shame: ThumbsDown,
  rotten_tomato: Flame,
  royal_decree: Crown,
  public_mockery: MessageSquare,
  challenge: Flame,
  joust: Crown,
  duel: Skull
};

export const mockeryTierColors = {
  basic: 'text-gray-400',
  common: 'text-green-500',
  uncommon: 'text-blue-500',
  rare: 'text-purple-500',
  epic: 'text-orange-500',
  legendary: 'text-yellow-400',
  advanced: 'text-blue-600',
  royal: 'text-royal-purple'
};

export const mockeryTierBadgeColors = {
  basic: 'text-gray-500',
  common: 'text-green-500',
  uncommon: 'text-blue-500',
  rare: 'text-purple-500',
  epic: 'text-orange-500',
  legendary: 'text-yellow-500',
  advanced: 'text-blue-600',
  royal: 'text-royal-purple'
};
