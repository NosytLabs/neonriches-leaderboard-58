
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { 
  Award, 
  Crown, 
  ThumbsDown, 
  Egg, 
  Target, 
  Shield, 
  Coffee, 
  Laugh,
  AlarmClock, 
  MessageSquare, 
  Flame, 
  Heart, 
  Skull,
  AlertTriangle,
  Bell,
  Scroll
} from 'lucide-react';

// Export action icons for use in components
export const mockeryActionIcons: Record<string, any> = {
  tomato: Target,
  egg: Egg,
  putridEgg: Egg,
  rotten_egg: Egg,
  crown: Crown,
  thumbs_down: ThumbsDown,
  thumbsDown: ThumbsDown,
  mock: MessageSquare,
  stocks: AlarmClock,
  jester: Laugh,
  courtJester: Award,
  silence: Coffee,
  taunt: ThumbsDown,
  smokeBomb: Coffee,
  protection: Shield,
  shame: AlertTriangle,
  challenge: Bell,
  joust: Shield,
  duel: Shield,
  royal_decree: Scroll,
  flame: Flame,
  heart: Heart,
  skull: Skull,
  laugh: Laugh
};

// Get human-readable name for mockery action
export const getMockeryActionName = (action: MockeryAction): string => {
  const actionNames: Record<string, string> = {
    tomato: "Throw Tomato",
    egg: "Throw Egg",
    putridEgg: "Throw Putrid Egg",
    rotten_egg: "Throw Rotten Egg",
    crown: "Award Crown",
    thumbs_down: "Thumbs Down",
    thumbsDown: "Thumbs Down",
    mock: "Mock",
    stocks: "Put in Stocks",
    jester: "Make a Jester",
    courtJester: "Make Court Jester",
    silence: "Silence",
    taunt: "Taunt",
    smokeBomb: "Throw Smoke Bomb",
    protection: "Grant Protection",
    shame: "Public Shame",
    challenge: "Challenge",
    joust: "Challenge to Joust",
    duel: "Challenge to Duel",
    royal_decree: "Royal Decree",
    flame: "Flame",
    heart: "Heart",
    skull: "Skull",
    laugh: "Laugh"
  };
  
  return actionNames[action] || "Unknown Action";
};

// Get color for mockery tier
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const tierColors: Record<string, string> = {
    common: 'text-gray-500',
    uncommon: 'text-green-500',
    rare: 'text-blue-500',
    epic: 'text-purple-500',
    legendary: 'text-amber-500',
    gold: 'text-yellow-500',
    silver: 'text-gray-400',
    bronze: 'text-amber-600',
    royal: 'text-indigo-600',
    noble: 'text-violet-500'
  };

  return tierColors[tier] || 'text-gray-500';
};

// Get background color for mockery tier
export const getMockeryTierBgColor = (tier: MockeryTier): string => {
  const tierColors: Record<string, string> = {
    common: 'bg-gray-500',
    uncommon: 'bg-green-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-amber-500',
    gold: 'bg-yellow-500',
    silver: 'bg-gray-400',
    bronze: 'bg-amber-600',
    royal: 'bg-indigo-600',
    noble: 'bg-violet-500'
  };

  return tierColors[tier] || 'bg-gray-500';
};
