
import { LeaderboardUser } from '@/types/leaderboard';
import { formatTimeAgo } from '@/utils/formatters';

/**
 * Sort leaderboard users by various criteria
 */
export const sortLeaderboardUsers = (
  users: LeaderboardUser[],
  sortBy: string = 'rank'
): LeaderboardUser[] => {
  switch (sortBy) {
    case 'rank':
      return [...users].sort((a, b) => a.rank - b.rank);
    case 'totalSpent':
      return [...users].sort((a, b) => b.totalSpent - a.totalSpent);
    case 'username':
      return [...users].sort((a, b) => a.username.localeCompare(b.username));
    case 'mostRecent':
      return [...users].sort((a, b) => {
        const dateA = a.joinedAt ? new Date(a.joinedAt).getTime() : 0;
        const dateB = b.joinedAt ? new Date(b.joinedAt).getTime() : 0;
        return dateB - dateA;
      });
    default:
      return users;
  }
};

/**
 * Filter leaderboard users by various criteria
 */
export const filterLeaderboardUsers = (
  users: LeaderboardUser[],
  filter: {
    team?: string;
    tier?: string;
    search?: string;
  }
): LeaderboardUser[] => {
  let filtered = [...users];
  
  if (filter.team && filter.team !== 'all') {
    filtered = filtered.filter((user) => user.team === filter.team);
  }
  
  if (filter.tier && filter.tier !== 'all') {
    filtered = filtered.filter((user) => user.tier === filter.tier);
  }
  
  if (filter.search) {
    const search = filter.search.toLowerCase();
    filtered = filtered.filter(
      (user) =>
        user.username.toLowerCase().includes(search) ||
        (user.displayName && user.displayName.toLowerCase().includes(search))
    );
  }
  
  return filtered;
};

/**
 * Format the date when a user joined for display
 */
export const formatJoinDate = (user: LeaderboardUser): string => {
  // Use joinedAt property instead of joinDate 
  return user.joinedAt ? formatTimeAgo(user.joinedAt) : 'Unknown';
};

/**
 * Get the trend indicator based on rank change
 */
export const getTrendIndicator = (
  user: LeaderboardUser
): 'up' | 'down' | 'neutral' => {
  if (!user.previousRank) return 'neutral';
  if (user.rank < user.previousRank) return 'up';
  if (user.rank > user.previousRank) return 'down';
  return 'neutral';
};
