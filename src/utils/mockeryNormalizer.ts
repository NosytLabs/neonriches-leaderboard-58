
import { MockeryAction, TeamColor, UserTier } from '@/types/mockery-types';

/**
 * Normalize mockery action strings to match the expected MockeryAction type
 * This helps handle inconsistent casing and naming in the codebase
 */
export const normalizeMockeryAction = (action: string | MockeryAction): MockeryAction => {
  if (!action) return 'mock';
  
  const normalizedAction = String(action).toLowerCase();
  
  // Map of normalized strings to proper MockeryAction values
  const actionMap: Record<string, MockeryAction> = {
    'tomato': 'tomato',
    'egg': 'egg',
    'putrid_egg': 'putridEgg',
    'putrid-egg': 'putridEgg',
    'putridegg': 'putridEgg',
    'rotten_egg': 'rotten_egg',
    'rotten-egg': 'rotten_egg',
    'rottenegg': 'rotten_egg',
    'crown': 'crown',
    'thumbs_down': 'thumbs_down',
    'thumbsdown': 'thumbs_down',
    'thumbs-down': 'thumbs_down',
    'mock': 'mock',
    'stocks': 'stocks',
    'jester': 'jester',
    'court_jester': 'courtJester',
    'court-jester': 'courtJester',
    'courtjester': 'courtJester',
    'silence': 'silence',
    'taunt': 'taunt',
    'smoke_bomb': 'smokeBomb',
    'smoke-bomb': 'smokeBomb',
    'smokebomb': 'smokeBomb',
    'protection': 'protection',
    'shame': 'shame',
    'challenge': 'challenge',
    'joust': 'joust',
    'duel': 'duel',
    'royal_decree': 'royal_decree',
    'royal-decree': 'royal_decree',
    'royaldecree': 'royal_decree',
    'flame': 'flame',
    'heart': 'heart',
    'skull': 'skull',
    'laugh': 'laugh',
    'fish': 'mock' // map fish to mock if it doesn't exist
  };
  
  return actionMap[normalizedAction] || 'mock';
};

/**
 * Ensures that a value is a valid TeamColor
 */
export const ensureTeamColor = (team?: string | null): TeamColor => {
  if (!team) return 'none';
  
  const normalizedTeam = String(team).toLowerCase();
  
  switch (normalizedTeam) {
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'green': return 'green';
    case 'gold': return 'gold';
    case 'purple': return 'purple';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'crimson': return 'crimson';
    case 'neutral': return 'neutral';
    case 'none': return 'none';
    default: return 'none';
  }
};

/**
 * Ensures that a value is a valid UserTier
 */
export const ensureUserTier = (tier?: string | null): UserTier => {
  if (!tier) return 'basic';
  
  const normalizedTier = String(tier).toLowerCase();
  
  switch (normalizedTier) {
    case 'free': return 'free';
    case 'basic': return 'basic';
    case 'pro': return 'pro' as UserTier;
    case 'premium': return 'premium';
    case 'royal': return 'royal';
    case 'founder': return 'founder';
    case 'platinum': return 'platinum' as UserTier;
    case 'diamond': return 'diamond' as UserTier;
    case 'gold': return 'gold' as UserTier;
    case 'silver': return 'silver' as UserTier;
    case 'bronze': return 'bronze' as UserTier;
    case 'vip': return 'vip' as UserTier;
    case 'whale': return 'whale' as UserTier;
    case 'shark': return 'shark' as UserTier;
    case 'dolphin': return 'dolphin' as UserTier;
    case 'noble': return 'noble' as UserTier;
    case 'standard': return 'standard' as UserTier;
    case 'elite': return 'elite' as UserTier;
    case 'legendary': return 'legendary' as UserTier;
    default: return 'basic';
  }
};

/**
 * Ensures that a mockery action is valid
 */
export const ensureMockeryAction = (action?: string | null): MockeryAction => {
  if (!action) return 'mock';
  return normalizeMockeryAction(String(action));
};
