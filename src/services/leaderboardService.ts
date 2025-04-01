import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import { UserProfile } from '@/types/user';
import { supabase } from '@/utils/mockSupabase';

/**
 * Get the current leaderboard
 */
export const getLeaderboard = async (filter: LeaderboardFilter = {}): Promise<LeaderboardUser[]> => {
  const { timeframe = 'all', team = null, limit = 50 } = filter;
  
  try {
    let query = supabase
      .from('leaderboard')
      .select('*, profiles(*)');
      
    if (team) {
      query = query.eq('team', team);
    }
    
    if (timeframe === 'day') {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      query = query.gte('updated_at', yesterday.toISOString());
    } else if (timeframe === 'week') {
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      query = query.gte('updated_at', lastWeek.toISOString());
    } else if (timeframe === 'month') {
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      query = query.gte('updated_at', lastMonth.toISOString());
    }
    
    const { data, error } = await query
      .order('amount_spent', { ascending: false })
      .limit(limit);
      
    if (error) {
      console.error('Error fetching leaderboard:', error);
      return [];
    }
    
    // Mock data for development
    return [
      {
        id: '1',
        username: 'RoyalSpender',
        displayName: 'Royal Spender',
        profileImage: '/images/avatars/royal1.jpg',
        tier: 'royal',
        team: 'red',
        rank: 1,
        previousRank: 2,
        walletBalance: 5000,
        totalSpent: 25000,
        amountSpent: 25000,
        isVerified: true,
        spendStreak: 12
      },
      // Add more mock data as needed
    ];
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
};

/**
 * Get a user's rank on the leaderboard
 */
export const getUserRank = async (userId: string): Promise<number | null> => {
  try {
    // Mock implementation
    // In a real app, this would query the database to find the user's rank
    return Math.floor(Math.random() * 100) + 1;
  } catch (error) {
    console.error('Error fetching user rank:', error);
    return null;
  }
};

/**
 * Add a user to the leaderboard
 */
export const addUserToLeaderboard = async (user: UserProfile): Promise<boolean> => {
  try {
    // Mock implementation
    // In a real app, this would insert the user into the leaderboard table
    console.log(`Adding user ${user.id} to leaderboard`);
    return true;
  } catch (error) {
    console.error('Error adding user to leaderboard:', error);
    return false;
  }
};

/**
 * Update a user on the leaderboard
 */
export const updateUserOnLeaderboard = async (user: UserProfile): Promise<boolean> => {
  try {
    // Mock implementation
    // In a real app, this would update the user's data in the leaderboard table
    console.log(`Updating user ${user.id} on leaderboard`);
    return true;
  } catch (error) {
    console.error('Error updating user on leaderboard:', error);
    return false;
  }
};

/**
 * Remove a user from the leaderboard
 */
export const removeUserFromLeaderboard = async (userId: string): Promise<boolean> => {
  try {
    // Mock implementation
    // In a real app, this would remove the user from the leaderboard table
    console.log(`Removing user ${userId} from leaderboard`);
    return true;
  } catch (error) {
    console.error('Error removing user from leaderboard:', error);
    return false;
  }
};
