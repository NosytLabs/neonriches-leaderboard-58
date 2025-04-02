
import { UserProfile as UserProfileOriginal } from '@/types/user';
import { UserProfile as UserProfileConsolidated } from '@/types/user-consolidated';
import { TeamColor } from '@/types/mockery-types';
import { asTeamColor } from './teamUtils';

/**
 * Adapt a user profile from the original type to the consolidated type
 */
export const adaptUserProfile = (user: UserProfileOriginal): UserProfileConsolidated => {
  return {
    ...user,
    displayName: user.displayName || user.username,
    team: user.team?.toString() || 'none',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    totalSpent: user.totalSpent || user.amountSpent || 0
  };
};

/**
 * Adapt a team color string to a TeamColor enum
 */
export const adaptTeamColor = (team?: string | TeamColor | null): TeamColor => {
  return asTeamColor(team);
};

/**
 * Adapt a user subscription to the expected format
 */
export const adaptSubscription = (subscription: any) => {
  return {
    id: subscription.id || `sub-${Date.now()}`,
    planId: subscription.planId,
    status: (subscription.status as "active" | "cancelled" | "expired" | "pending" | "paused") || "active",
    tier: subscription.tier,
    startDate: subscription.startDate || new Date().toISOString(),
    nextBillingDate: subscription.nextBillingDate
  };
};

export default {
  adaptUserProfile,
  adaptTeamColor,
  adaptSubscription
};
