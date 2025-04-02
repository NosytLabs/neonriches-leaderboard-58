
import { UserProfile } from '@/types/user-consolidated';
import { formatTimeAgo, formatCurrency } from '@/utils/formatters';

/**
 * Consolidated leaderboard utility functions
 */

/**
 * Sort users by different leaderboard criteria
 */
export function sortLeaderboardUsers(users: UserProfile[], sortBy: string): UserProfile[] {
  const sortedUsers = [...users];
  
  switch (sortBy) {
    case 'rank':
      return sortedUsers.sort((a, b) => (a.rank || Infinity) - (b.rank || Infinity));
    
    case 'spending':
      return sortedUsers.sort((a, b) => (b.totalSpent || 0) - (a.totalSpent || 0));
    
    case 'streak':
      return sortedUsers.sort((a, b) => (b.spendStreak || 0) - (a.spendStreak || 0));
    
    case 'recent':
      return sortedUsers.sort((a, b) => {
        const dateA = new Date(a.lastActive || a.joinedDate).getTime();
        const dateB = new Date(b.lastActive || b.joinedDate).getTime();
        return dateB - dateA;
      });
    
    default:
      return sortedUsers.sort((a, b) => (a.rank || Infinity) - (b.rank || Infinity));
  }
}

/**
 * Format leaderboard user data for display
 */
export function formatLeaderboardUserData(user: UserProfile) {
  return {
    id: user.id,
    name: user.displayName || user.username,
    rank: user.rank || 999,
    previousRank: user.previousRank || 999,
    amount: formatCurrency(user.totalSpent || 0),
    profileImage: user.profileImage || '/placeholder-avatar.jpg',
    team: user.team || null,
    tier: user.tier,
    isVIP: user.isVIP || false,
    lastActive: user.lastActive ? formatTimeAgo(user.lastActive) : 'Unknown',
    streak: user.spendStreak || 0
  };
}

/**
 * Filter leaderboard users by search term
 */
export function filterLeaderboardUsers(users: UserProfile[], search: string): UserProfile[] {
  if (!search) return users;
  
  const searchLower = search.toLowerCase();
  
  return users.filter(user => {
    return (
      user.username.toLowerCase().includes(searchLower) ||
      (user.displayName && user.displayName.toLowerCase().includes(searchLower))
    );
  });
}

/**
 * Filter leaderboard users by team
 */
export function filterByTeam(users: UserProfile[], team: string | null): UserProfile[] {
  if (!team || team === 'all') return users;
  
  return users.filter(user => user.team === team);
}

/**
 * Get rank change display information
 */
export function getRankChange(current: number, previous: number): { 
  text: string; 
  color: string; 
  icon: 'up' | 'down' | 'same' 
} {
  if (!previous || previous === current) {
    return { text: 'No change', color: 'text-gray-400', icon: 'same' };
  }
  
  const diff = previous - current;
  
  if (diff > 0) {
    return { 
      text: `↑ ${diff} position${diff !== 1 ? 's' : ''}`, 
      color: 'text-green-500', 
      icon: 'up' 
    };
  }
  
  return { 
    text: `↓ ${Math.abs(diff)} position${Math.abs(diff) !== 1 ? 's' : ''}`, 
    color: 'text-red-500', 
    icon: 'down' 
  };
}

/**
 * Format rank number for display 
 */
export const formatRankNumber = (rank: number) => {
  return rank?.toLocaleString() || '-';
};

/**
 * Format money for leaderboard display
 */
export const formatMoney = (amount: number | undefined) => {
  if (amount === undefined) return '$0.00';
  return formatCurrency(amount);
};

export { formatCurrency, formatTimeAgo };
