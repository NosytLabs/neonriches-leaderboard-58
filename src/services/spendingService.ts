
import { User } from '@/types';
import { Team } from '@/types/user';

export interface UserRankData {
  userId: string;
  username: string;
  profileImage?: string;
  rank: number;
  totalSpent: number;
  spendStreak: number;
  team?: Team;
  tier?: string;
}

// Mock data for development
const mockRankingData: UserRankData[] = [
  {
    userId: '1',
    username: 'RoyalWhale',
    profileImage: 'https://i.pravatar.cc/150?img=1',
    rank: 1,
    totalSpent: 25000,
    spendStreak: 12,
    team: 'red',
    tier: 'royal'
  },
  {
    userId: '2',
    username: 'GoldenSpender',
    profileImage: 'https://i.pravatar.cc/150?img=2',
    rank: 2,
    totalSpent: 15000,
    spendStreak: 8,
    team: 'blue',
    tier: 'pro'
  },
  {
    userId: '3',
    username: 'NobleElite',
    profileImage: 'https://i.pravatar.cc/150?img=3',
    rank: 3,
    totalSpent: 12000,
    spendStreak: 5,
    team: 'green',
    tier: 'pro'
  },
  {
    userId: '4',
    username: 'RoyalJester',
    profileImage: 'https://i.pravatar.cc/150?img=4',
    rank: 4,
    totalSpent: 9000,
    spendStreak: 3,
    team: 'red',
    tier: 'basic'
  },
  {
    userId: '5',
    username: 'CrownSeeker',
    profileImage: 'https://i.pravatar.cc/150?img=5',
    rank: 5,
    totalSpent: 7500,
    spendStreak: 0,
    team: 'green',
    tier: 'basic'
  },
  // Add more mock data as needed
];

// Get user ranking data
export const getUserRanking = (): UserRankData[] => {
  // In a real app, this would be an API call
  return mockRankingData;
};

// Apply spending to a user
export const applyUserSpending = async (user: User, amount: number, title?: string): Promise<boolean> => {
  try {
    // In a real app, this would make an API call to update the user's spending
    console.log(`User ${user.username} spent $${amount}`);
    
    // For this mock implementation, we'll update localStorage
    if (user) {
      // Update wallet balance
      if (user.walletBalance !== undefined) {
        user.walletBalance -= amount;
      }
      
      // Update amount spent
      if (user.amountSpent !== undefined) {
        user.amountSpent += amount;
      } else {
        user.amountSpent = amount;
      }
      
      // Update spend streak (simplified for mock)
      if (user.spendStreak !== undefined) {
        user.spendStreak += 1;
      } else {
        user.spendStreak = 1;
      }
      
      // Save to localStorage
      localStorage.setItem('p2w_user', JSON.stringify(user));
    }
    
    return true;
  } catch (error) {
    console.error('Error applying spending:', error);
    return false;
  }
};

// Get team totals for the leaderboard
export const getTeamTotals = async (): Promise<{ red: number, green: number, blue: number }> => {
  try {
    // In a real app, this would be an API call
    const rankings = getUserRanking();
    
    const totals = rankings.reduce((acc, user) => {
      if (user.team === 'red') {
        acc.red += user.totalSpent;
      } else if (user.team === 'green') {
        acc.green += user.totalSpent;
      } else if (user.team === 'blue') {
        acc.blue += user.totalSpent;
      }
      return acc;
    }, { red: 0, green: 0, blue: 0 });
    
    return totals;
  } catch (error) {
    console.error('Error getting team totals:', error);
    return { red: 0, green: 0, blue: 0 };
  }
};

// Get the total pool for prize distribution
export const getTotalPool = async (): Promise<number> => {
  try {
    // In a real app, this would be an API call
    const rankings = getUserRanking();
    const totalSpent = rankings.reduce((acc, user) => acc + user.totalSpent, 0);
    
    // Assume 15% of total spending goes to the prize pool
    return totalSpent * 0.15;
  } catch (error) {
    console.error('Error getting total pool:', error);
    return 0;
  }
};
