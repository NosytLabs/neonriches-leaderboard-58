
import { 
  AlertTriangle, 
  Crown, 
  Egg, 
  Flame, 
  Heart, 
  Skull, 
  ThumbsDown, 
  Trophy, 
  Users, 
  Coffee, 
  UserMinus, 
  Feather, 
  Music, 
  Lightbulb, 
  Ghost, 
  Shield
} from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';

// Icon mapping for mockery actions
export const mockeryActionIcons = {
  tomato: AlertTriangle,
  egg: Egg,
  rotten_egg: Egg,
  flame: Flame,
  heart: Heart,
  thumbs_down: ThumbsDown,
  skull: Skull,
  crown: Crown,
  putridEgg: AlertTriangle,
  stocks: UserMinus,
  jester: Coffee,
  mock: Lightbulb,
  challenge: AlertTriangle,
  joust: AlertTriangle,
  duel: AlertTriangle,
  silence: Ghost,
  laugh: AlertTriangle,
  fish: AlertTriangle,
  taunt: AlertTriangle,
  thumbsDown: ThumbsDown,
  trumpet: Music,
  confetti: AlertTriangle,
  shame: AlertTriangle,
  courtJester: Coffee,
  smokeBomb: AlertTriangle,
  protection: Shield,
  royal_decree: Crown,
  shame_certificate: AlertTriangle,
  insult: AlertTriangle,
  humiliate: AlertTriangle
};

// Get a display name for a mockery action
export const getMockeryActionDisplayName = (action: string): string => {
  // Convert camelCase/snake_case to readable format
  return action
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());
};

// Normalize mockery action names to ensure consistent handling
export const normalizeMockeryAction = (action: string): MockeryAction => {
  // Map of various formats to standardized format
  const normalizationMap: Record<string, MockeryAction> = {
    'putrid_egg': 'putridEgg',
    'putrid-egg': 'putridEgg',
    'putridegg': 'putridEgg',
    'court_jester': 'courtJester',
    'court-jester': 'courtJester',
    'courtjester': 'courtJester',
    'smoke_bomb': 'smokeBomb',
    'smoke-bomb': 'smokeBomb',
    'smokebomb': 'smokeBomb',
    'thumbs_down': 'thumbsDown',
    'thumbs-down': 'thumbsDown',
    'thumbsdown': 'thumbsDown',
    'royal_decree': 'royal_decree',
    'royal-decree': 'royal_decree',
    'royaldecree': 'royal_decree',
    'shame_certificate': 'shame_certificate',
    'shame-certificate': 'shame_certificate',
    'shamecertificate': 'shame_certificate',
    'rotten_egg': 'rotten_egg',
    'rotten-egg': 'rotten_egg',
    'rottenegg': 'rotten_egg'
  };

  // Return the normalized form if it exists, otherwise return as is
  return normalizationMap[action.toLowerCase()] || action as MockeryAction;
};

// Valid mockery actions for components that need a comprehensive list
export const VALID_MOCKERY_ACTIONS: MockeryAction[] = [
  'tomato',
  'egg',
  'rotten_egg',
  'flame',
  'heart',
  'thumbs_down',
  'skull',
  'crown',
  'putridEgg',
  'stocks',
  'jester',
  'mock',
  'challenge',
  'joust',
  'duel',
  'silence',
  'laugh',
  'fish',
  'taunt',
  'thumbsDown',
  'trumpet',
  'confetti',
  'shame',
  'courtJester',
  'smokeBomb',
  'protection',
  'royal_decree',
  'shame_certificate',
  'insult',
  'humiliate'
];

export default {
  mockeryActionIcons,
  getMockeryActionDisplayName,
  normalizeMockeryAction,
  VALID_MOCKERY_ACTIONS
};
