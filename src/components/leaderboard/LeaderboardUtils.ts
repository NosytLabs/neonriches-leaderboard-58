
import { UserProfile } from '@/types/user';

export interface LeaderboardUser extends UserProfile {
  rankChange?: number;
  spendChange?: number;
}

export const calculateRankChange = (user: UserProfile): number => {
  if (!user || !user.previousRank) return 0;
  
  // Positive means improved rank (moved up)
  return user.previousRank - user.rank;
};

export const formatRankChange = (change: number): string => {
  if (change === 0) return "0";
  return change > 0 ? `+${change}` : `${change}`;
};

export const getRankChangeColor = (change: number): string => {
  if (change === 0) return "text-gray-400";
  return change > 0 ? "text-green-500" : "text-red-500";
};

export const getRankChangeIcon = (change: number): string => {
  if (change === 0) return "➝";
  return change > 0 ? "↑" : "↓";
};

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
