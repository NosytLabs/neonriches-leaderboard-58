
import { TeamColor, UserTier } from '@/types/mockery-types';

/**
 * Safely cast a string to TeamColor
 */
export const toTeamColor = (team: string | undefined | null): TeamColor => {
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 
    'none', 'neutral', 'silver', 'bronze', 'crimson'
  ];
  
  if (!team || !validTeamColors.includes(team as TeamColor)) {
    return 'none';
  }
  
  return team as TeamColor;
};

/**
 * Safely cast a string to UserTier
 */
export const toUserTier = (tier: string | undefined | null): UserTier => {
  const validUserTiers: UserTier[] = [
    'free', 'basic', 'pro', 'premium', 'royal', 
    'founder', 'platinum', 'diamond', 'gold', 'silver', 
    'bronze', 'vip', 'whale', 'shark', 'dolphin', 
    'noble', 'standard', 'elite', 'legendary'
  ];
  
  if (!tier || !validUserTiers.includes(tier as UserTier)) {
    return 'basic';
  }
  
  return tier as UserTier;
};

/**
 * Safely cast theme string to one of the allowed values
 */
export const toThemeValue = (theme: string | undefined | null): "royal" | "dark" | "light" | "system" => {
  const validThemes = ['royal', 'dark', 'light', 'system'];
  
  if (!theme || !validThemes.includes(theme)) {
    return 'dark';
  }
  
  return theme as "royal" | "dark" | "light" | "system";
};

export default {
  toTeamColor,
  toUserTier,
  toThemeValue
};
