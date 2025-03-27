// User rank data for displaying users on leaderboards and other views
export interface UserRankData {
  userId: string;
  username: string;
  profileImage?: string;
  rank: number;
  tier: string;
  team: string | null;
  totalSpent: number;
  spendStreak: number;
}

// Placeholder implementations of spending service functions
// These would typically connect to a real backend

/**
 * Get all user rank data for the leaderboard
 */
export const getAllUserRanks = async (): Promise<UserRankData[]> => {
  // This would normally fetch from an API
  return []; // Placeholder
};

/**
 * Get a specific user's rank data
 */
export const getUserRank = async (userId: string): Promise<UserRankData | null> => {
  // This would normally fetch from an API
  return null; // Placeholder
};

/**
 * Record a new spending transaction
 */
export const recordSpending = async (
  userId: string, 
  amount: number, 
  description: string
): Promise<{ success: boolean; newRank: number }> => {
  // This would normally post to an API
  return { success: true, newRank: 0 }; // Placeholder
};
