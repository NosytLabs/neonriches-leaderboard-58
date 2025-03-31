import { LeaderboardUser } from '@/types/leaderboard';
import { User } from '@/types/user';
import { formatDate } from '@/utils/formatters/dateFormatters'; // Fixed import

/**
 * Utility functions for leaderboard components
 */

/**
 * Sort users by total spent in descending order
 */
export function sortByTotalSpent(users: LeaderboardUser[]): LeaderboardUser[] {
  return [...users].sort((a, b) => (b.totalSpent || 0) - (a.totalSpent || 0));
}

/**
 * Sort users by rank in ascending order
 */
export function sortByRank(users: LeaderboardUser[]): LeaderboardUser[] {
  return [...users].sort((a, b) => (a.rank || 0) - (b.rank || 0));
}

/**
 * Filter users by tier
 */
export function filterByTier(users: LeaderboardUser[], tier: string): LeaderboardUser[] {
  if (tier === 'all') {
    return users;
  }
  return users.filter(user => user.tier === tier);
}

/**
 * Filter users by team
 */
export function filterByTeam(users: LeaderboardUser[], team: string): LeaderboardUser[] {
  if (team === 'all') {
    return users;
  }
  return users.filter(user => user.team === team);
}

/**
 * Search users by username or display name
 */
export function searchUsers(users: LeaderboardUser[], query: string): LeaderboardUser[] {
  const searchTerm = query.toLowerCase();
  return users.filter(user =>
    user.username.toLowerCase().includes(searchTerm) ||
    (user.displayName && user.displayName.toLowerCase().includes(searchTerm)) || false
  );
}

/**
 * Get the change in rank compared to the previous rank
 */
export function getRankChange(user: LeaderboardUser): number {
  return (user.previousRank || 0) - (user.rank || 0);
}

/**
 * Get the formatted join date
 */
export function getFormattedJoinDate(user: LeaderboardUser): string {
  return formatDate(user.joinDate || '');
}

/**
 * Get the user's profile URL
 */
export function getUserProfileUrl(user: LeaderboardUser): string {
  return `/profile/${user.username}`;
}

/**
 * Get the user's display name or username
 */
export function getUserDisplayName(user: LeaderboardUser): string {
  return user.displayName || user.username;
}

/**
 * Check if the user is verified
 */
export function isUserVerified(user: LeaderboardUser): boolean {
  return user.isVerified || false;
}

/**
 * Check if the user is protected
 */
export function isUserProtected(user: LeaderboardUser): boolean {
  return user.isProtected || false;
}

/**
 * Get the user's spend streak
 */
export function getSpendStreak(user: LeaderboardUser): number {
  return user.spendStreak || 0;
}

/**
 * Get the user's wallet balance
 */
export function getWalletBalance(user: LeaderboardUser): number {
  return user.walletBalance || 0;
}

/**
 * Get the user's total spent
 */
export function getTotalSpent(user: LeaderboardUser): number {
  return user.totalSpent || 0;
}

/**
 * Get the user's tier
 */
export function getUserTier(user: LeaderboardUser): string {
  return user.tier || 'basic';
}

/**
 * Get the user's team
 */
export function getUserTeam(user: LeaderboardUser): string {
  return user.team || 'none';
}

/**
 * Get the user's profile image
 */
export function getUserProfileImage(user: LeaderboardUser): string {
  return user.profileImage || '/images/default-profile.png';
}
