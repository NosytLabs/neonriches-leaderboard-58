
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';
import { UserProfile as UserProfileType } from '@/types/user';
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

/**
 * Convert a user object to ensure it has required fields with valid values
 */
export const adaptUserProfile = (user: any): UserProfileType => {
  return {
    ...user,
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || '/placeholder.svg',
    team: toTeamColor(user.team),
    tier: toUserTier(user.tier),
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    settings: {
      ...(user.settings || {}),
      theme: toThemeValue(user.settings?.theme),
      profileVisibility: user.settings?.profileVisibility || 'public',
      allowProfileLinks: user.settings?.allowProfileLinks !== false,
      notifications: user.settings?.notifications !== false,
      emailNotifications: user.settings?.emailNotifications !== false,
      marketingEmails: user.settings?.marketingEmails !== false,
      showRank: user.settings?.showRank !== false,
      darkMode: user.settings?.darkMode !== false,
      soundEffects: user.settings?.soundEffects !== false,
      showBadges: user.settings?.showBadges !== false,
      showTeam: user.settings?.showTeam !== false,
      showSpending: user.settings?.showSpending !== false,
    }
  };
};

export default {
  toTeamColor,
  toUserTier,
  toThemeValue,
  adaptUserProfile
};
