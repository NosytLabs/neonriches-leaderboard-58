
import { TeamColor, UserTier, Gender } from '@/types/mockery-types';

/**
 * Safely converts a string to TeamColor type
 */
export const toTeamColor = (team: string | null | undefined): TeamColor => {
  if (!team) return 'none';
  
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 
    'none', 'neutral', 'silver', 'bronze', 'crimson'
  ];
  
  return validTeamColors.includes(team as TeamColor) 
    ? (team as TeamColor) 
    : 'none';
};

/**
 * Safely converts a string to UserTier type
 */
export const toUserTier = (tier: string | null | undefined): UserTier => {
  if (!tier) return 'basic';
  
  const validTiers: UserTier[] = [
    'free', 'basic', 'premium', 'elite', 'royal', 'founder',
    'pro', 'gold', 'silver', 'bronze', 'platinum', 'diamond',
    'vip', 'whale', 'shark', 'dolphin', 'noble', 'standard', 'legendary'
  ];
  
  return validTiers.includes(tier as UserTier) 
    ? (tier as UserTier) 
    : 'basic';
};

/**
 * Safely converts a string to Gender type
 */
export const toGender = (gender: string | null | undefined): Gender => {
  if (!gender) return 'none';
  
  const validGenders: Gender[] = [
    'male', 'female', 'other', 'none', 'king', 'queen',
    'jester', 'noble', 'prefer-not-to-say'
  ];
  
  return validGenders.includes(gender as Gender) 
    ? (gender as Gender) 
    : 'none';
};

export default {
  toTeamColor,
  toUserTier,
  toGender
};
