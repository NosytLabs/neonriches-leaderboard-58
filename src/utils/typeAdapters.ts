
// Update the adaptUserProfile function to handle theme type correctly

import { UserProfile } from '@/types/user';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor } from './typeConverters';

/**
 * Adapts a user profile object to ensure it has all required properties
 */
export const adaptUserProfile = (user: any): UserProfile => {
  if (!user) return null as any;
  
  // Make sure to convert theme to a valid value
  const theme = user.settings?.theme || 'dark';
  const validTheme = ['royal', 'dark', 'light', 'system'].includes(theme) 
    ? theme as 'royal' | 'dark' | 'light' | 'system'
    : 'dark';
  
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    team: toTeamColor(user.team || 'none') as TeamColor,
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    spendStreak: user.spendStreak || 0,
    isVerified: !!user.isVerified,
    isProtected: !!user.isProtected,
    isVIP: !!user.isVIP,
    isFounder: !!user.isFounder,
    isAdmin: !!user.isAdmin,
    settings: {
      ...user.settings,
      profileVisibility: user.settings?.profileVisibility || 'public',
      allowProfileLinks: user.settings?.allowProfileLinks !== false,
      theme: validTheme,
      notifications: user.settings?.notifications !== false,
      emailNotifications: user.settings?.emailNotifications || false,
      marketingEmails: user.settings?.marketingEmails || false,
      showRank: user.settings?.showRank !== false,
      darkMode: user.settings?.darkMode !== false,
      soundEffects: user.settings?.soundEffects !== false,
      showBadges: user.settings?.showBadges !== false,
      showTeam: user.settings?.showTeam !== false,
      showSpending: user.settings?.showSpending !== false
    },
    cosmetics: user.cosmetics || {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    profileBoosts: user.profileBoosts || []
  };
};

export default adaptUserProfile;
