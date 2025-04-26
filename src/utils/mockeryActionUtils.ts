
import { Crown, Egg, Target, Shield, Heart, Flame, MessageSquare } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';

// Map mockery actions to their corresponding Lucide icons
export const mockeryActionIcons: Record<string, any> = {
  egg: Egg,
  crown: Crown,
  target: Target,
  protection: Shield,
  heart: Heart,
  flame: Flame,
  message: MessageSquare,
  tomato: MessageSquare,
  tomatoes: MessageSquare,
  stocks: MessageSquare,
  shame: MessageSquare,
  jester: MessageSquare,
  mock: MessageSquare,
  putridEgg: Egg,
  rotten_egg: Egg,
  thumbs_down: MessageSquare,
  courtJester: Crown,
  silence: MessageSquare,
  taunt: MessageSquare,
  smokeBomb: MessageSquare,
  challenge: Target,
  joust: Shield,
  duel: Shield,
  royal_decree: Crown,
  skull: MessageSquare,
  laugh: MessageSquare
};

export const getMockeryIcon = (action: MockeryAction) => {
  return mockeryActionIcons[action] || MessageSquare;
};
