
/**
 * Consolidated user profile adapters and type utilities
 */

import { UserProfile } from '@/types/user';
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';
import { ProfileBoost } from '@/types/user';
import { TeamColor, MockeryTier } from '@/types/mockery-types';
import { toTeamColor } from './typeConverters';

/**
 * Ensures the user profile has totalSpent and amountSpent properties
 */
export const ensureTotalSpent = <T extends {totalSpent?: number, amountSpent?: number}>(user: T): T & {totalSpent: number; amountSpent: number} => {
  return {
    ...user,
    totalSpent: typeof user.totalSpent === 'number' ? user.totalSpent : (user.amountSpent || 0),
    amountSpent: typeof user.amountSpent === 'number' ? user.amountSpent : (user.totalSpent || 0),
  };
};

/**
 * Adapts a user profile from the consolidated format to the standard format
 */
export const adaptToStandardUserProfile = (user: UserProfile & { totalSpent: number; amountSpent: number }): UserProfile => {
  // Adding joinedDate from joinedDate for backward compatibility
  const joinedDate = user.joinedDate;
  
  // Ensure all required properties are present
  const adaptedUser: UserProfile = {
    ...user,
    // Ensure all required properties are present
    tier: user.tier || 'basic',
    team: user.team || 'none',
    // Use joinedDate as the standard field for when user joined
    joinedDate: joinedDate || new Date().toISOString(),
    // Ensure totalSpent and amountSpent are set
    totalSpent: user.totalSpent,
    amountSpent: user.amountSpent
  };

  return adaptedUser;
};

/**
 * Adapts a user profile object to ensure it has all required properties
 * for components that expect the UserProfile type
 */
export const adaptToUserProfile = (user: any): ConsolidatedUserProfile => {
  if (!user) {
    throw new Error('Cannot adapt null or undefined user');
  }
  
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    tier: user.tier || 'basic',
    team: user.team || 'none',
    rank: user.rank || 0,
    previousRank: user.previousRank || user.rank || 0,
    totalSpent: user.totalSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    settings: {
      profileVisibility: user.settings?.profileVisibility || 'public',
      allowProfileLinks: user.settings?.allowProfileLinks !== false,
      theme: user.settings?.theme || 'dark',
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
    profileBoosts: user.profileBoosts || [],
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
    spendStreak: user.spendStreak || 0,
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    subscription: user.subscription || null,
    purchasedFeatures: user.purchasedFeatures || [],
    certificateNFT: user.certificateNFT || undefined,
    gender: user.gender || 'prefer-not-to-say'
  };
};

/**
 * Adapts a subscription object to ensure compatibility
 */
export const adaptSubscription = (subscription: any) => {
  if (!subscription) return null;
  
  return {
    planId: subscription.planId || subscription.id || '',
    nextBillingDate: subscription.nextBillingDate || subscription.endDate || '',
    status: subscription.status || 'active',
    tier: subscription.tier || 'basic'
  };
};

/**
 * Adapts user profile data to ensure compatibility across different parts of the app
 */
export const adaptUserProfile = (user: any): UserProfile => {
  if (!user) return null as any;
  
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
    settings: user.settings || {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true,
      showTeam: true,
      showSpending: true
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

/**
 * Ensures required fields are present in a boost
 */
export const ensureBoostHasRequiredFields = (boost: Partial<ProfileBoost>): ProfileBoost => {
  return {
    id: boost.id || `boost-${Date.now()}`,
    type: boost.type || 'standard',
    startDate: boost.startDate || new Date().toISOString(),
    endDate: boost.endDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    level: boost.level || 1,
    isActive: boost.isActive !== undefined ? boost.isActive : true,
    strength: boost.strength || 1,
    appliedBy: boost.appliedBy || 'system',
  };
};

/**
 * Converts a user type to a consolidated user profile
 */
export const asConsolidatedUserProfile = (user: any): ConsolidatedUserProfile => {
  const consolidatedUser: ConsolidatedUserProfile = {
    ...user,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    id: typeof user.id === 'number' ? String(user.id) : user.id,
    tier: user.tier || 'basic',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString()
  };

  return consolidatedUser;
};

/**
 * Cast a user to the user profile type
 */
export const asUserProfile = (user: any): UserProfile => {
  return {
    ...user,
    id: typeof user.id === 'number' ? String(user.id) : user.id,
    tier: user.tier || 'basic',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    amountSpent: user.amountSpent || user.totalSpent || 0
  } as UserProfile;
};

/**
 * Get mockery tier color class
 */
export const getMockeryTierColorClass = (tier: string): string => {
  const colorClasses: Record<string, string> = {
    'common': 'text-gray-300',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-orange-400',
    'royal': 'text-royal-gold'
  };
  
  return colorClasses[tier] || 'text-gray-300';
};

export default {
  adaptToUserProfile,
  adaptUserProfile,
  adaptSubscription,
  ensureTotalSpent,
  asConsolidatedUserProfile,
  asUserProfile,
  getMockeryTierColorClass,
  ensureBoostHasRequiredFields
};
