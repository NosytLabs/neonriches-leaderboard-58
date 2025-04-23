
import { UserProfile as UserProfileType } from '@/types/user';
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';

/**
 * Convert any user object to a standardized profile with all required fields
 * This helps prevent errors when different user objects are used across components
 */
export const toStandardUserProfile = (user: any): ConsolidatedUserProfile => {
  return {
    id: typeof user.id === 'number' ? String(user.id) : (user.id || ''),
    username: user.username || '',
    displayName: user.displayName || user.username || 'Anonymous User',
    email: user.email || '',
    avatarUrl: user.avatarUrl || user.profileImage || '',
    profileImage: user.profileImage || user.avatarUrl || '',
    rank: user.rank || 0,
    walletBalance: user.walletBalance || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    team: user.team || 'neutral',
    role: user.role || 'user',
    tier: user.tier || 'basic',
    joinedDate: user.joinedDate || user.createdAt || new Date().toISOString(),
    updatedAt: user.updatedAt || new Date().toISOString(),
    bio: user.bio || '',
  };
};

/**
 * Convert a standardized user profile to the UserProfileType expected by most components
 */
export const toUserProfile = (user: ConsolidatedUserProfile): UserProfileType => {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName,
    email: user.email,
    avatarUrl: user.avatarUrl,
    profileImage: user.profileImage || user.avatarUrl,
    rank: user.rank,
    walletBalance: user.walletBalance,
    amountSpent: user.amountSpent,
    team: user.team,
    role: user.role,
    tier: user.tier,
    createdAt: user.joinedDate,
    updatedAt: user.updatedAt,
    bio: user.bio,
  } as UserProfileType;
};

/**
 * Type guard to check if an object is a valid user profile
 */
export const isUserProfile = (obj: any): obj is UserProfileType => {
  return obj && typeof obj === 'object' && 
    'id' in obj && 
    'username' in obj;
};
