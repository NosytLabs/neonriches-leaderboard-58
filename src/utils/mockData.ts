
import { UserProfile } from '@/types/user';
import { LeaderboardUser } from '@/types/leaderboard';
import { v4 as uuidv4 } from 'uuid';

/**
 * Generate a mock leaderboard of users
 */
export const generateMockLeaderboard = (count: number = 20): LeaderboardUser[] => {
  const users: LeaderboardUser[] = [];
  
  const teams = ['red', 'blue', 'green', 'gold'] as const;
  const tiers = ['free', 'basic', 'premium', 'royal'] as const;
  
  for (let i = 0; i < count; i++) {
    const id = uuidv4();
    const rank = i + 1;
    const previousRank = Math.max(1, rank + (Math.random() > 0.7 ? Math.floor(Math.random() * 3) - 1 : 0));
    
    const amountSpent = Math.floor(10000 / rank) * (0.9 + Math.random() * 0.2);
    
    users.push({
      id,
      username: `User${rank}`,
      displayName: `User ${rank}`,
      profileImage: `https://source.unsplash.com/random/100x100?face=${rank}`,
      rank,
      previousRank,
      team: teams[Math.floor(Math.random() * teams.length)],
      tier: tiers[Math.floor(Math.random() * tiers.length)],
      totalSpent: amountSpent,
      amountSpent,
      spentAmount: amountSpent,
      joinDate: new Date(2023, 0, 1 + (rank * 3)).toISOString(),
      isVerified: Math.random() > 0.8,
      isProtected: Math.random() > 0.9
    });
  }
  
  return users;
};

export default { generateMockLeaderboard };
