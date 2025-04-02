
import { MockeryAction, TeamColor, UserTier } from '@/types/mockery-types';

// List of all valid mockery actions
const validMockeryActions: MockeryAction[] = [
  'tomato', 'egg', 'putridEgg', 'crown', 'thumbsDown', 
  'mock', 'stocks', 'jester', 'courtJester', 'silence', 
  'taunt', 'smokeBomb', 'protection', 'shame', 'challenge', 
  'joust', 'duel', 'royal_decree', 'flame', 'heart', 
  'skull', 'thumbs_down', 'laugh', 'rotten_egg'
];

// Convert any string to a valid MockeryAction or default to 'mock'
export function ensureMockeryAction(action: string): MockeryAction {
  return validMockeryActions.includes(action as MockeryAction)
    ? action as MockeryAction
    : 'mock';
}

// Normalize a mockery action string to ensure it's valid
export function normalizeMockeryAction(action: string): MockeryAction {
  return ensureMockeryAction(action);
}

// List of all valid team colors
const validTeamColors: TeamColor[] = [
  'red', 'blue', 'green', 'gold', 'purple', 
  'neutral', 'none', 'silver', 'bronze', 'crimson'
];

// Convert any string to a valid TeamColor or default to 'none'
export function ensureTeamColor(team: string): TeamColor {
  return validTeamColors.includes(team as TeamColor)
    ? team as TeamColor
    : 'none';
}

// List of all valid user tiers
const validUserTiers: UserTier[] = [
  'basic', 'premium', 'royal', 'founder', 'free',
  'pro', 'platinum', 'diamond', 'gold', 'silver',
  'bronze', 'vip', 'whale', 'shark', 'dolphin',
  'noble', 'standard', 'elite', 'legendary'
];

// Convert any string to a valid UserTier or default to 'basic'
export function ensureUserTier(tier: string): UserTier {
  return validUserTiers.includes(tier as UserTier)
    ? tier as UserTier
    : 'basic';
}
