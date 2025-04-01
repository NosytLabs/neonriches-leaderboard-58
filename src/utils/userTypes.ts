
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';
import { UserProfile as UserProfileType } from '@/types/user';

/**
 * Ensures a user has the totalSpent property by copying from amountSpent if needed
 */
export const ensureTotalSpent = <T extends {totalSpent?: number, amountSpent?: number}>(user: T): T & {totalSpent: number} => {
  return {
    ...user,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0
  };
};

/**
 * Cast a user to the consolidated user profile type
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
export const asUserProfile = (user: any): UserProfileType => {
  return {
    ...user,
    id: typeof user.id === 'number' ? String(user.id) : user.id,
    tier: user.tier || 'basic',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    amountSpent: user.amountSpent || user.totalSpent || 0
  } as UserProfileType;
};
