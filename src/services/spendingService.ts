
// Modify imports to include proper Team types
import { User, UserProfile } from '@/types/user';
import { TeamColor } from '@/types/team';

// Mock spending service
const mockSpendingService = {
  getTopSpenders: async (limit: number = 10): Promise<UserProfile[]> => {
    // Mock implementation
    const topSpenders: UserProfile[] = [
      {
        id: '1',
        username: 'GoldenKing',
        displayName: 'Golden King',
        profileImage: '/avatars/user1.png',
        totalSpent: 5000,
        amountSpent: 5000, // Adding amountSpent field
        rank: 1,
        team: 'gold' as TeamColor,
        tier: 'royal',
        spendStreak: 7,
        walletBalance: 10000,
        previousRank: 2,
        joinedDate: new Date().toISOString()
      },
      {
        id: '2',
        username: 'DiamondDuchess',
        displayName: 'Diamond Duchess',
        profileImage: '/avatars/user2.png',
        totalSpent: 3800,
        amountSpent: 3800, // Adding amountSpent field
        rank: 2,
        team: 'purple' as TeamColor,
        tier: 'elite',
        spendStreak: 5,
        walletBalance: 7500,
        previousRank: 3,
        joinedDate: new Date().toISOString()
      },
      {
        id: '3',
        username: 'SilverSurfer',
        displayName: 'Silver Surfer',
        profileImage: '/avatars/user3.png',
        totalSpent: 2900,
        amountSpent: 2900, // Adding amountSpent field
        rank: 3,
        team: 'silver' as TeamColor,
        tier: 'premium',
        spendStreak: 3,
        walletBalance: 6000,
        previousRank: 4,
        joinedDate: new Date().toISOString()
      },
      {
        id: '4',
        username: 'BronzeEmperor',
        displayName: 'Bronze Emperor',
        profileImage: '/avatars/user4.png',
        totalSpent: 2100,
        amountSpent: 2100, // Adding amountSpent field
        rank: 4,
        team: 'bronze' as TeamColor,
        tier: 'basic',
        spendStreak: 1,
        walletBalance: 4500,
        previousRank: 5,
        joinedDate: new Date().toISOString()
      }
    ];
    
    return topSpenders.slice(0, limit);
  },
  
  getHighestSpenderByTeam: async (team: TeamColor): Promise<UserProfile | null> => {
    // Mock implementation
    const mockUsers = [
      {
        id: 'red-1',
        username: 'RedBaron',
        displayName: 'Red Baron',
        profileImage: '/avatars/red-baron.png',
        totalSpent: 1500,
        amountSpent: 1500, // Adding amountSpent field
        rank: 5,
        team: 'red' as TeamColor,
        tier: 'premium',
        spendStreak: 4,
        walletBalance: 3000,
        previousRank: 6,
        joinedDate: new Date().toISOString()
      },
      {
        id: 'blue-1',
        username: 'BlueBomber',
        displayName: 'Blue Bomber',
        profileImage: '/avatars/blue-bomber.png',
        totalSpent: 1200,
        amountSpent: 1200, // Adding amountSpent field
        rank: 6,
        team: 'blue' as TeamColor,
        tier: 'basic',
        spendStreak: 2,
        walletBalance: 2500,
        previousRank: 7,
        joinedDate: new Date().toISOString()
      },
      {
        id: 'green-1',
        username: 'GreenGiant',
        displayName: 'Green Giant',
        profileImage: '/avatars/green-giant.png',
        totalSpent: 1000,
        amountSpent: 1000, // Adding amountSpent field
        rank: 7,
        team: 'green' as TeamColor,
        tier: 'premium',
        spendStreak: 3,
        walletBalance: 2000,
        previousRank: 8,
        joinedDate: new Date().toISOString()
      },
      {
        id: 'gold-1',
        username: 'GoldMiner',
        displayName: 'Gold Miner',
        profileImage: '/avatars/gold-miner.png',
        totalSpent: 900,
        amountSpent: 900, // Adding amountSpent field
        rank: 8,
        team: 'gold' as TeamColor,
        tier: 'basic',
        spendStreak: 1,
        walletBalance: 1800,
        previousRank: 9,
        joinedDate: new Date().toISOString()
      }
    ];
    
    const teamUsers = mockUsers.filter(user => user.team === team);
    
    if (teamUsers.length === 0) {
      return null;
    }
    
    return teamUsers.reduce((prev, current) => (prev.totalSpent > current.totalSpent) ? prev : current);
  },
  
  getAverageSpendingByTier: async (): Promise<{ [tier: string]: number }> => {
    // Mock implementation
    return {
      free: 100,
      basic: 500,
      premium: 1500,
      royal: 4000
    };
  }
};

// Fix team comparisons by using TeamColor types
const getTeamFromString = (team: string): TeamColor => {
  return team.toLowerCase() as TeamColor;
};

// Update user factories to use proper TeamColor values
export const mockSpendingUsers = {
  getRedTeamUser: (): UserProfile => ({
    id: 'red-user',
    username: 'RedUser',
    displayName: 'Red User',
    profileImage: '/avatars/red-user.png',
    totalSpent: 750,
    amountSpent: 750, // Adding amountSpent field
    rank: 9,
    team: "red" as TeamColor,
    tier: 'basic',
    spendStreak: 2,
    walletBalance: 1500,
    previousRank: 10,
    joinedDate: new Date().toISOString()
  }),
  
  getBlueTeamUser: (): UserProfile => ({
    id: 'blue-user',
    username: 'BlueUser',
    displayName: 'Blue User',
    profileImage: '/avatars/blue-user.png',
    totalSpent: 600,
    amountSpent: 600, // Adding amountSpent field
    rank: 10,
    team: "blue" as TeamColor,
    tier: 'free',
    spendStreak: 1,
    walletBalance: 1200,
    previousRank: 11,
    joinedDate: new Date().toISOString()
  }),
  
  getGreenTeamUser: (): UserProfile => ({
    id: 'green-user',
    username: 'GreenUser',
    displayName: 'Green User',
    profileImage: '/avatars/green-user.png',
    totalSpent: 800,
    amountSpent: 800, // Adding amountSpent field
    rank: 8,
    team: "green" as TeamColor,
    tier: 'premium',
    spendStreak: 3,
    walletBalance: 1600,
    previousRank: 9,
    joinedDate: new Date().toISOString()
  }),
  
  getGoldTeamUser: (): UserProfile => ({
    id: 'gold-user',
    username: 'GoldUser',
    displayName: 'Gold User',
    profileImage: '/avatars/gold-user.png',
    totalSpent: 900,
    amountSpent: 900, // Adding amountSpent field
    rank: 7,
    team: "gold" as TeamColor,
    tier: 'basic',
    spendStreak: 4,
    walletBalance: 1800,
    previousRank: 8,
    joinedDate: new Date().toISOString()
  })
};

// Fix team comparisons in any functions that compare teams
const modifyTeamComparisons = (team: TeamColor, comparison: TeamColor): boolean => {
  return team === comparison;
};

export default mockSpendingService;
