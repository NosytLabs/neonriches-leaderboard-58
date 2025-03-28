
import { UserProfile } from "@/types/user";
import { supabase } from "@/integrations/supabase/client";

export interface LeaderboardEntry {
  id: string;
  rank: number;
  username: string;
  display_name?: string;
  team?: string;
  total_deposited: number;
  tier: string;
  profile_image?: string;
  joined_at: string;
}

/**
 * Get leaderboard entries with pagination
 * @param options Options for fetching leaderboard entries
 * @returns Promise with leaderboard entries
 */
export const getLeaderboardEntries = async (options: {
  limit?: number;
  offset?: number;
  filter?: string;
  sort?: string;
  direction?: 'asc' | 'desc';
} = {}): Promise<LeaderboardEntry[]> => {
  const {
    limit = 10,
    offset = 0,
    filter,
    sort = 'total_deposited',
    direction = 'desc'
  } = options;

  let query = supabase
    .from('leaderboard')
    .select('*')
    .order(sort, { ascending: direction === 'asc' })
    .range(offset, offset + limit - 1);

  if (filter) {
    query = query.eq('team', filter);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }

  return data as LeaderboardEntry[];
};

/**
 * Get total count of leaderboard entries
 * @param filter Optional filter by team
 * @returns Promise with count
 */
export const getLeaderboardCount = async (filter?: string): Promise<number> => {
  let query = supabase.from('leaderboard').select('id', { count: 'exact' });

  if (filter) {
    query = query.eq('team', filter);
  }

  const { count, error } = await query;

  if (error) {
    console.error('Error fetching leaderboard count:', error);
    return 0;
  }

  return count || 0;
};

/**
 * Get a user's current rank
 * @param userId User ID
 * @returns Promise with rank
 */
export const getUserRank = async (userId: string): Promise<number | null> => {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('rank')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user rank:', error);
    return null;
  }

  return data?.rank || null;
};

/**
 * Transform a leaderboard entry to a UserProfile
 * @param entry LeaderboardEntry object
 * @returns UserProfile object
 */
export const transformLeaderboardEntryToUserProfile = (entry: LeaderboardEntry): UserProfile => {
  return {
    id: entry.id,
    username: entry.username,
    displayName: entry.display_name,
    team: entry.team as any,
    tier: entry.tier as any,
    rank: entry.rank,
    totalSpent: entry.total_deposited,
    amountSpent: entry.total_deposited,
    profileImage: entry.profile_image,
    joinDate: entry.joined_at,
    walletBalance: 0, // Default value
    email: "", // Required by UserProfile type
    socialLinks: [],
    profileBoosts: [],
  };
};

export default {
  getLeaderboardEntries,
  getLeaderboardCount,
  getUserRank,
  transformLeaderboardEntryToUserProfile
};
