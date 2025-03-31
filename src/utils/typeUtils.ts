
import { TeamType, UserTier } from '@/types/user';
import { LeaderboardUser } from '@/types/leaderboard';
import { ShameAction, MockeryAction } from '@/types/mockery-types';

/**
 * Safely converts a string to number, returning a default value if invalid
 */
export function safeNumberConversion(value: string | number, defaultValue: number = 0): number {
  if (typeof value === 'number') return value;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

/**
 * Safely converts a value to string
 */
export function safeStringConversion(value: any): string {
  if (value === null || value === undefined) return '';
  return String(value);
}

/**
 * Converts a value to a TeamType, ensuring it's a valid value
 */
export function toTeamType(value: string): TeamType {
  const validTypes: TeamType[] = ['red', 'blue', 'green', 'gold'];
  return validTypes.includes(value as TeamType) ? value as TeamType : 'red';
}

/**
 * Converts a value to a UserTier, ensuring it's a valid value
 */
export function toUserTier(value: string): UserTier {
  const validTiers: UserTier[] = ['free', 'basic', 'premium', 'royal', 'founder'];
  return validTiers.includes(value as UserTier) ? value as UserTier : 'free';
}

/**
 * Convert ShameAction to MockeryAction and vice versa
 */
export function convertShameToMockery(action: ShameAction): MockeryAction {
  return action as MockeryAction;
}

export function convertMockeryToShame(action: MockeryAction): ShameAction | undefined {
  if (['tomatoes', 'eggs', 'stocks'].includes(action)) {
    return action as ShameAction;
  }
  return undefined;
}

/**
 * Creates a properly typed LeaderboardUser object
 */
export function createLeaderboardUser(data: Partial<LeaderboardUser>): LeaderboardUser {
  return {
    id: data.id || '',
    username: data.username || '',
    displayName: data.displayName,
    profileImage: data.profileImage,
    tier: data.tier || 'free',
    team: data.team,
    rank: data.rank || 0,
    previousRank: data.previousRank,
    walletBalance: data.walletBalance,
    totalSpent: data.totalSpent || 0,
    spentAmount: data.spentAmount || 0,
    supporters: data.supporters,
    supporting: data.supporting,
    isVIP: data.isVIP,
    isFounder: data.isFounder,
    isVerified: data.isVerified
  };
}
