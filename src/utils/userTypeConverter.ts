
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';
import { User } from '@/types/user-types';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor } from './typeConverters';

// Type alias to match what's being imported
type UserProfile = User;

/**
 * Converts any user object to a properly typed UserProfile
 */
export const toUserProfile = (user: any): UserProfile => {
  if (!user) return null as any;
  
  return {
    id: typeof user.id === 'number' ? String(user.id) : (user.id || ''),
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    team: toTeamColor(user.team) as TeamColor,
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
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
    spendStreak: user.spendStreak || 0,
    cosmetics: user.cosmetics || { 
      border: [], 
      color: [], 
      font: [], 
      emoji: [], 
      title: [] 
    },
    profileBoosts: user.profileBoosts || []
  };
};

/**
 * Converts any user object to a properly typed ConsolidatedUserProfile
 */
export const toConsolidatedUserProfile = (user: any): ConsolidatedUserProfile => {
  if (!user) return null as any;
  
  return {
    id: typeof user.id === 'number' ? String(user.id) : (user.id || ''),
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    team: user.team || 'none',
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
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
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {},
    spendStreak: user.spendStreak || 0
  };
};

/**
 * Ensures a UserProfile object has all required fields
 */
export const ensureUserProfile = (user: any): UserProfile => {
  if (!user) return null as any;
  return toUserProfile(user);
};

/**
 * Ensures a ConsolidatedUserProfile object has all required fields
 */
export const ensureConsolidatedUserProfile = (user: any): ConsolidatedUserProfile => {
  if (!user) return null as any;
  return toConsolidatedUserProfile(user);
};

// Make sure to export the User type as UserProfile for compatibility
export type { UserProfile };
