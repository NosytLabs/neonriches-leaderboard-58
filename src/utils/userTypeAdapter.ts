
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';
import { UserProfile as StandardUserProfile } from '@/types/user';
import { ProfileBoost as ConsolidatedProfileBoost } from '@/types/user-consolidated';
import { ProfileBoost as StandardProfileBoost } from '@/types/user';

/**
 * Adapts a UserProfile from the consolidated type to the standard type
 * This is needed because different parts of the application use different profile types
 */
export const adaptToStandardUserProfile = (user: ConsolidatedUserProfile): StandardUserProfile => {
  // Create a base user profile with required properties
  const standardUser: StandardUserProfile = {
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    email: user.email || '',
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    amountSpent: user.amountSpent,
    tier: user.tier as any, // Cast tier to avoid type issues
    team: user.team as any, // Cast team to avoid type issues
    following: Array.isArray(user.following) ? user.following : [],
    followers: Array.isArray(user.followers) ? user.followers : []
  };

  // Add optional properties if they exist
  if (user.rank !== undefined) standardUser.rank = user.rank;
  if (user.previousRank !== undefined) standardUser.previousRank = user.previousRank;
  if (user.totalSpent !== undefined) standardUser.totalSpent = user.totalSpent;
  if (user.walletBalance !== undefined) standardUser.walletBalance = user.walletBalance;
  if (user.spendStreak !== undefined) standardUser.spendStreak = user.spendStreak;
  if (user.cosmetics) standardUser.cosmetics = adaptUserCosmetics(user.cosmetics);
  if (user.settings) standardUser.settings = adaptUserSettings(user.settings);
  if (user.isVerified !== undefined) standardUser.isVerified = user.isVerified;
  if (user.lastActive) standardUser.lastActive = user.lastActive;
  if (user.isVIP !== undefined) standardUser.isVIP = user.isVIP;
  if (user.role) standardUser.role = user.role;
  if (user.activeTitle) standardUser.activeTitle = user.activeTitle;
  
  // Handle profile boosts (making sure level is set as it's required in StandardProfileBoost)
  if (user.profileBoosts && Array.isArray(user.profileBoosts)) {
    standardUser.profileBoosts = user.profileBoosts.map(boost => {
      const standardBoost: StandardProfileBoost = {
        ...boost,
        level: boost.level || 1, // Ensure level is set (required in StandardProfileBoost)
        isActive: boost.isActive || false
      };
      return standardBoost;
    });
  }

  return standardUser;
};

/**
 * Adapts UserCosmetics between different formats
 */
function adaptUserCosmetics(cosmetics: any): any {
  // Convert to the right format
  return {
    border: cosmetics.border || cosmetics.borders || [],
    color: cosmetics.color || cosmetics.colors || [],
    font: cosmetics.font || cosmetics.fonts || [],
    emoji: cosmetics.emoji || cosmetics.emojis || [],
    title: cosmetics.title || cosmetics.titles || [],
    background: cosmetics.background || cosmetics.backgrounds || [],
    effect: cosmetics.effect || cosmetics.effects || [],
    badge: cosmetics.badge || cosmetics.badges || [],
    theme: cosmetics.theme || cosmetics.themes || [],
    activeBorder: cosmetics.activeBorder,
    activeColor: cosmetics.activeColor,
    activeFont: cosmetics.activeFont,
    activeEmoji: cosmetics.activeEmoji,
    activeTitle: cosmetics.activeTitle,
    activeBackground: cosmetics.activeBackground,
    activeEffect: cosmetics.activeEffect,
    activeBadge: cosmetics.activeBadge,
    activeTheme: cosmetics.activeTheme
  };
}

/**
 * Adapts UserSettings between different formats
 */
function adaptUserSettings(settings: any): any {
  return {
    profileVisibility: settings.profileVisibility || 'public',
    allowProfileLinks: settings.allowProfileLinks ?? true,
    theme: settings.theme || 'dark',
    notifications: settings.notifications ?? true,
    emailNotifications: settings.emailNotifications ?? false,
    marketingEmails: settings.marketingEmails ?? false, 
    showRank: settings.showRank ?? true,
    darkMode: settings.darkMode ?? true,
    soundEffects: settings.soundEffects ?? true,
    showBadges: settings.showBadges ?? true,
    showEmailOnProfile: settings.showEmailOnProfile ?? false,
    rankChangeAlerts: settings.rankChangeAlerts ?? false,
    showTeam: settings.showTeam ?? true,
    showSpending: settings.showSpending ?? true,
    newFollowerAlerts: settings.newFollowerAlerts,
    teamNotifications: settings.teamNotifications
  };
}

/**
 * Create missing SpotlightProfile component
 */
