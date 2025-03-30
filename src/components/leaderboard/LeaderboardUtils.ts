
import { UserProfile } from '@/types/user';
import { formatCurrency, formatDate } from '@/utils/formatters';

export interface LeaderboardUser extends UserProfile {
  rankChange?: number;
  spendChange?: number;
}

/**
 * Calculates the change in a user's rank
 * @param user - The user profile
 * @returns Change in rank (positive means improved rank)
 */
export const calculateRankChange = (user: UserProfile): number => {
  if (!user || !user.previousRank) return 0;
  
  // Positive means improved rank (moved up)
  return user.previousRank - user.rank;
};

/**
 * Formats a rank change for display
 * @param change - The rank change value
 * @returns Formatted rank change string
 */
export const formatRankChange = (change: number): string => {
  if (change === 0) return "0";
  return change > 0 ? `+${change}` : `${change}`;
};

/**
 * Gets the appropriate color for a rank change
 * @param change - The rank change value
 * @returns CSS color class
 */
export const getRankChangeColor = (change: number): string => {
  if (change === 0) return "text-gray-400";
  return change > 0 ? "text-green-500" : "text-red-500";
};

/**
 * Gets the appropriate icon for a rank change
 * @param change - The rank change value
 * @returns Icon string
 */
export const getRankChangeIcon = (change: number): string => {
  if (change === 0) return "➝";
  return change > 0 ? "↑" : "↓";
};

/**
 * Gets the color for a team
 * @param team - The team name
 * @returns CSS color class
 */
export const getTeamColor = (team: string | null | undefined) => {
  switch (team) {
    case 'red': return 'text-red-500';
    case 'green': return 'text-green-500';
    case 'blue': return 'text-blue-500';
    default: return 'text-white/60';
  }
};

/**
 * Sorts a list of users based on a sort criteria
 * @param users - List of user profiles
 * @param sortBy - Sort criteria
 * @returns Sorted list of users
 */
export const sortLeaderboard = (users: UserProfile[], sortBy: string = 'rank'): UserProfile[] => {
  return [...users].sort((a, b) => {
    switch(sortBy) {
      case 'rank':
        return a.rank - b.rank;
      case 'totalSpent':
        return (b.totalSpent || 0) - (a.totalSpent || 0);
      case 'username':
        return a.username.localeCompare(b.username);
      case 'joinDate':
        return new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime();
      default:
        return a.rank - b.rank;
    }
  });
};

/**
 * Filters a list of users based on a filter criteria
 * @param users - List of user profiles
 * @param filter - Filter type
 * @param value - Filter value
 * @returns Filtered list of users
 */
export const filterLeaderboard = (users: UserProfile[], filter: string, value: string): UserProfile[] => {
  if (!filter || !value) return users;
  
  return users.filter(user => {
    switch(filter) {
      case 'team':
        return user.team === value;
      case 'tier':
        return user.tier === value;
      case 'joinDate':
        // Filter by month/year
        const userDate = new Date(user.joinedAt);
        const [month, year] = value.split('/');
        return userDate.getMonth() + 1 === parseInt(month) && 
               userDate.getFullYear() === parseInt(year);
      default:
        return true;
    }
  });
};

// Re-export formatters for convenience
export {
  formatCurrency,
  formatDate
};
