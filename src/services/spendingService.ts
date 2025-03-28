export interface UserRankData {
  userId: string;
  username: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team?: string | null;
  tier: 'free' | 'pro';
  spendStreak: number;
}

// Mock leaderboard data
const mockUsers: UserRankData[] = [
  { userId: '1', username: 'RoyalOverlord', profileImage: 'https://i.pravatar.cc/150?img=11', totalSpent: 2500, rank: 1, team: 'red', tier: 'pro', spendStreak: 8 },
  { userId: '2', username: 'GoldenThrone', profileImage: 'https://i.pravatar.cc/150?img=12', totalSpent: 2200, rank: 2, team: 'green', tier: 'pro', spendStreak: 12 },
  { userId: '3', username: 'WealthyNoble', profileImage: 'https://i.pravatar.cc/150?img=13', totalSpent: 1900, rank: 3, team: 'blue', tier: 'pro', spendStreak: 6 },
  { userId: '4', username: 'RegalSpender', profileImage: 'https://i.pravatar.cc/150?img=14', totalSpent: 1650, rank: 4, team: 'red', tier: 'free', spendStreak: 4 },
  { userId: '5', username: 'PurpleDuke', profileImage: 'https://i.pravatar.cc/150?img=15', totalSpent: 1480, rank: 5, team: 'green', tier: 'free', spendStreak: 2 },
  { userId: '6', username: 'RoyalJester', profileImage: 'https://i.pravatar.cc/150?img=16', totalSpent: 1350, rank: 6, team: 'blue', tier: 'free', spendStreak: 1 },
  { userId: '7', username: 'EmeraldQueen', profileImage: 'https://i.pravatar.cc/150?img=17', totalSpent: 1200, rank: 7, team: 'green', tier: 'free', spendStreak: 3 },
  { userId: '8', username: 'SapphireKing', profileImage: 'https://i.pravatar.cc/150?img=18', totalSpent: 1100, rank: 8, team: 'blue', tier: 'free', spendStreak: 2 },
  { userId: '9', username: 'RubyBaroness', profileImage: 'https://i.pravatar.cc/150?img=19', totalSpent: 950, rank: 9, team: 'red', tier: 'free', spendStreak: 0 },
  { userId: '10', username: 'PearlPrince', profileImage: 'https://i.pravatar.cc/150?img=20', totalSpent: 820, rank: 10, team: null, tier: 'free', spendStreak: 0 },
];

export const getUserRanking = (userId?: string): UserRankData[] => {
  if (userId) {
    return mockUsers.filter(user => user.userId === userId);
  }
  return mockUsers;
};

export const getUserRank = (userId: string): UserRankData | null => {
  const user = mockUsers.find(user => user.userId === userId);
  return user || null;
};

export const applyUserSpending = async (
  user: any,
  amount: number,
  reason: string
): Promise<boolean> => {
  if (!user) return false;
  
  try {
    // In a real app, this would make an API call to process the spending
    console.log('Processing user spending', {
      userId: user.id,
      amount,
      reason
    });
    
    // Mock successful transaction
    return true;
  } catch (error) {
    console.error('User spending failed', error);
    return false;
  }
};

export const getTeamTotals = async (): Promise<any> => {
  // Mock implementation
  return {
    red: { total: 25000, members: 500 },
    green: { total: 18000, members: 450 },
    blue: { total: 22000, members: 480 }
  };
};

export const getTotalPool = async (): Promise<number> => {
  // Mock implementation
  return 65000;
};
