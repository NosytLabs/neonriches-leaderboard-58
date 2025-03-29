
import { User } from '@/types/user';

/**
 * Generates a random integer between min and max (inclusive)
 * @param min The minimum value
 * @param max The maximum value
 * @returns A random integer
 */
const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generates a mock leaderboard
 * @param count The number of users to generate
 * @returns An array of mock users
 */
export const generateMockLeaderboard = (count: number = 50): User[] => {
  const leaderboard: User[] = [];
  
  for (let i = 0; i < count; i++) {
    const userTeam = ['red', 'green', 'blue', null][Math.floor(Math.random() * 4)] as any;
    const userTier = ['basic', 'premium', 'royal'][Math.floor(Math.random() * 3)];
    const totalSpent = getRandomInt(10, 5000);
    const joinDate = new Date(Date.now() - Math.random() * 10000000000).toISOString();
    
    leaderboard.push({
      id: `user-${getRandomInt(1000, 9999)}`,
      username: `user${i + 1}`,
      displayName: `Player ${i + 1}`,
      team: userTeam,
      tier: userTier,
      rank: i + 1,
      totalSpent: totalSpent,
      amountSpent: totalSpent,
      spentAmount: totalSpent,
      profileImage: `https://source.unsplash.com/random/?portrait&${i}`,
      joinDate: joinDate,
      joinedAt: joinDate,
      walletBalance: Math.floor(Math.random() * 1000),
      email: `user${i + 1}@example.com`,
      socialLinks: [],
      profileBoosts: [],
      createdAt: joinDate // Add createdAt to fix the error
    });
  }
  
  return leaderboard;
};

/**
 * Gets a user ranking
 * @returns An array of mock users
 */
export const getUserRanking = (): User[] => {
  return generateMockLeaderboard(25);
};

/**
 * Gets leaderboard entries with filtering and sorting options
 * @param options Options for filtering and sorting
 * @returns Leaderboard entries
 */
export const getLeaderboardEntries = (options: {
  limit?: number;
  filter?: string;
  sort?: string;
  direction?: string;
} = {}): User[] => {
  const { limit = 50, filter, sort = 'rank', direction = 'asc' } = options;
  
  // Generate mock data
  let entries = generateMockLeaderboard(limit);
  
  // Apply time filter if specified
  if (filter) {
    const now = new Date();
    let cutoff = new Date();
    
    if (filter === 'week') {
      cutoff.setDate(now.getDate() - 7);
    } else if (filter === 'month') {
      cutoff.setMonth(now.getMonth() - 1);
    } else if (filter === 'year') {
      cutoff.setFullYear(now.getFullYear() - 1);
    }
    
    entries = entries.filter(entry => new Date(entry.joinDate) >= cutoff);
  }
  
  // Apply sorting
  entries.sort((a, b) => {
    let valueA = a[sort as keyof User];
    let valueB = b[sort as keyof User];
    
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
    
    valueA = valueA as number || 0;
    valueB = valueB as number || 0;
    
    return direction === 'asc' ? valueA - valueB : valueB - valueA;
  });
  
  return entries;
};
