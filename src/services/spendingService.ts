
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

// In-memory storage for teams and spending data (for demo purposes)
const teamTotals: Record<string, number> = {
  red: 4250,
  green: 3800,
  blue: 3500
};

// Prize pool amount (for demo purposes)
let prizePoolAmount = 2500;

// Mock user data for demonstration
const mockUserRanking: UserRankData[] = [
  { userId: '1', username: 'WhaleLord', profileImage: 'https://i.pravatar.cc/150?img=1', rank: 1, tier: 'pro', team: 'red', totalSpent: 5000, spendStreak: 5 },
  { userId: '2', username: 'CashKing', profileImage: 'https://i.pravatar.cc/150?img=2', rank: 2, tier: 'pro', team: 'green', totalSpent: 4500, spendStreak: 3 },
  { userId: '3', username: 'MoneyMaker', profileImage: 'https://i.pravatar.cc/150?img=3', rank: 3, tier: 'pro', team: 'blue', totalSpent: 4200, spendStreak: 7 },
  { userId: '4', username: 'BigSpender', profileImage: 'https://i.pravatar.cc/150?img=4', rank: 4, tier: 'pro', team: 'red', totalSpent: 3800, spendStreak: 2 },
  { userId: '5', username: 'RoyalPatron', profileImage: 'https://i.pravatar.cc/150?img=5', rank: 5, tier: 'pro', team: 'green', totalSpent: 3500, spendStreak: 4 },
  { userId: '6', username: 'CrownBuyer', profileImage: 'https://i.pravatar.cc/150?img=6', rank: 6, tier: 'free', team: 'blue', totalSpent: 2800, spendStreak: 0 },
  { userId: '7', username: 'StatusSeeker', profileImage: 'https://i.pravatar.cc/150?img=7', rank: 7, tier: 'free', team: 'red', totalSpent: 2500, spendStreak: 1 },
  { userId: '8', username: 'PayToWinner', profileImage: 'https://i.pravatar.cc/150?img=8', rank: 8, tier: 'free', team: 'green', totalSpent: 2000, spendStreak: 0 },
  { userId: '9', username: 'CreditCardWarrior', profileImage: 'https://i.pravatar.cc/150?img=9', rank: 9, tier: 'free', team: 'blue', totalSpent: 1500, spendStreak: 0 },
  { userId: '10', username: 'DigitalAristocrat', profileImage: 'https://i.pravatar.cc/150?img=10', rank: 10, tier: 'free', team: 'red', totalSpent: 1200, spendStreak: 0 },
];

/**
 * Get all user rank data for the leaderboard
 */
export const getAllUserRanks = async (): Promise<UserRankData[]> => {
  // This would normally fetch from an API
  return [...mockUserRanking];
};

/**
 * Get a specific user's rank data
 */
export const getUserRank = async (userId: string): Promise<UserRankData | null> => {
  // This would normally fetch from an API
  const user = mockUserRanking.find(u => u.userId === userId);
  return user || null;
};

/**
 * Get all user rankings (synchronous version for demo purposes)
 */
export const getUserRanking = (): UserRankData[] => {
  return [...mockUserRanking];
};

/**
 * Record a new spending transaction
 */
export const recordSpending = async (
  userId: string, 
  amount: number, 
  description: string = "General contribution"
): Promise<{ success: boolean; newRank: number }> => {
  // This would normally post to an API
  // For demo, we'll update the mock data
  const userIndex = mockUserRanking.findIndex(u => u.userId === userId);
  
  if (userIndex >= 0) {
    // Update user's total spent
    mockUserRanking[userIndex].totalSpent += amount;
    
    // Update user's streak
    mockUserRanking[userIndex].spendStreak += 1;
    
    // Update team totals if user is on a team
    const userTeam = mockUserRanking[userIndex].team;
    if (userTeam && (userTeam === 'red' || userTeam === 'green' || userTeam === 'blue')) {
      teamTotals[userTeam] += amount;
    }
    
    // Update prize pool (15% of spending)
    prizePoolAmount += amount * 0.15;
    
    // Re-sort the leaderboard by total spent
    mockUserRanking.sort((a, b) => b.totalSpent - a.totalSpent);
    
    // Update ranks after sorting
    mockUserRanking.forEach((user, index) => {
      user.rank = index + 1;
    });
    
    // Get the new rank
    const updatedUser = mockUserRanking.find(u => u.userId === userId);
    return { 
      success: true, 
      newRank: updatedUser ? updatedUser.rank : 0 
    };
  }
  
  return { success: false, newRank: 0 };
};

/**
 * Apply spending to a user account
 */
export const applyUserSpending = async (
  user: { id: string } | null,
  amount: number,
  description: string = "General contribution"
): Promise<boolean> => {
  if (!user) return false;
  
  try {
    const result = await recordSpending(user.id, amount, description);
    return result.success;
  } catch (error) {
    console.error("Error applying spending:", error);
    return false;
  }
};

/**
 * Get team totals
 */
export const getTeamTotals = (): Record<string, number> => {
  return { ...teamTotals };
};

/**
 * Get the current prize pool amount
 */
export const getTotalPool = (): number => {
  return prizePoolAmount;
};
