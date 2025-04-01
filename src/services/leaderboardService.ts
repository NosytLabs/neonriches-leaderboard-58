import { UserProfile } from '@/types/user';
import { TeamColor } from '@/types/user-consolidated';
import { LeaderboardUser } from '@/types/leaderboard';

// Fetch the current top spender
export const fetchTopSpender = async (): Promise<User> => {
  try {
    const { data, error } = await supabase
      .from('leaderboard_view')
      .select('*')
      .eq('is_ranked', true)
      .order('total_deposited', { ascending: false })
      .limit(1)
      .single();
    
    if (error) throw error;
    
    return {
      id: data.id,
      username: data.username,
      displayName: data.display_name,
      profileImage: data.profile_image,
      bio: '', // This can be expanded later
      tier: data.tier,
      team: data.team,
      rank: data.rank,
      walletBalance: data.current_balance,
      totalSpent: data.total_deposited,
      spentAmount: data.total_deposited,
      amountSpent: data.total_deposited,
      createdAt: data.joined_at,
      isVerified: true,
      gender: 'king', // Default, can be updated from profile
      spendStreak: 0 // This can be calculated separately
    };
  } catch (error) {
    console.error('Error fetching top spender:', error);
    // Return mock data as fallback
    return mockTopSpender;
  }
};

// Fetch leaderboard data with real database connection
export const fetchLeaderboard = async (page = 1, limit = 10): Promise<User[]> => {
  try {
    const { data, error } = await supabase
      .from('leaderboard_view')
      .select('*')
      .eq('is_ranked', true)
      .order('total_deposited', { ascending: false })
      .range((page - 1) * limit, page * limit - 1);
    
    if (error) throw error;
    
    return data.map(entry => ({
      id: entry.id,
      username: entry.username,
      displayName: entry.display_name,
      profileImage: entry.profile_image,
      tier: entry.tier,
      team: entry.team,
      rank: entry.rank,
      previousRank: entry.rank + 1, // This will be updated with historical data later
      walletBalance: entry.current_balance,
      totalSpent: entry.total_deposited,
      spentAmount: entry.total_deposited,
      amountSpent: entry.total_deposited,
      createdAt: entry.joined_at,
      joinDate: entry.joined_at,
      gender: 'king', // Default value, can be updated from profile
      spendStreak: 0, // This will be calculated separately
      badges: entry.tier === 'royal' ? ['whale', 'royal'] : 
              entry.tier === 'premium' ? ['big-spender'] : [],
      isVerified: entry.total_deposited > 50,
      isVIP: entry.total_deposited > 100
    }));
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    // Use mock data as fallback
    return mockLeaderboardData;
  }
};

// Get leaderboard entries with pagination
export const getLeaderboardEntries = async (page = 1, limit = 10): Promise<{
  entries: User[],
  totalCount: number
}> => {
  try {
    // Get the total count
    const { count, error: countError } = await supabase
      .from('leaderboard_view')
      .select('*', { count: 'exact', head: true })
      .eq('is_ranked', true);
    
    if (countError) throw countError;
    
    const entries = await fetchLeaderboard(page, limit);
    return {
      entries,
      totalCount: count || 0
    };
  } catch (error) {
    console.error('Error getting leaderboard entries:', error);
    // Return mock data as fallback
    const entries = await fetchLeaderboard(page, limit);
    return {
      entries,
      totalCount: 100 // Mock total count
    };
  }
};

// Mocked top spender data as fallback
const mockTopSpender: User = {
  id: 'top-spender-1',
  username: 'RoyalTycoon',
  displayName: 'Royal Tycoon',
  profileImage: 'https://randomuser.me/api/portraits/men/19.jpg',
  bio: 'The undisputed king of spending! Bow before my wealth!',
  tier: 'royal',
  team: 'Red',
  rank: 1,
  walletBalance: 150.50,
  totalSpent: 9850.25,
  spentAmount: 9850.25,
  amountSpent: 9850.25,
  createdAt: new Date().toISOString(),
  isVerified: true,
  gender: 'king',
  spendStreak: 12,
  badges: ['whale', 'royal', 'early-adopter'],
  cosmetics: {
    border: ['royal-border-1', 'royal-border-2'],
    color: ['royal-color-1'],
    font: ['royal-font-1'],
    emoji: ['royal-emoji-1', 'royal-emoji-2'],
    title: ['royal-whale', 'money-monarch'],
    background: ['royal-bg-1'],
    effect: ['royal-effect-1'],
    badge: ['royal-badge-1', 'royal-badge-2'],
    theme: ['royal-theme-1'],
    activeBorder: 'royal-border-1',
    activeColor: 'royal-color-1',
    activeFont: 'royal-font-1',
    activeEmoji: 'royal-emoji-1',
    activeTitle: 'money-monarch',
    activeBackground: 'royal-bg-1',
    activeEffect: 'royal-effect-1',
    activeBadge: 'royal-badge-1',
    activeTheme: 'royal-theme-1'
  }
};

// Mock leaderboard data as fallback
export const mockLeaderboardData = Array.from({ length: 20 }).map((_, i) => ({
  id: `user-${i + 1}`,
  username: `User${i + 1}`,
  displayName: `User ${i + 1}`,
  profileImage: `https://randomuser.me/api/portraits/men/${20 + i}.jpg`,
  tier: i < 3 ? 'royal' : i < 8 ? 'premium' : i < 15 ? 'gold' : 'silver',
  team: ['Red', 'Green', 'Blue'][i % 3],
  rank: i + 1,
  previousRank: i + 2,
  walletBalance: Math.round(Math.random() * 100 * 100) / 100,
  totalSpent: Math.round((10000 - i * 500 + Math.random() * 200) * 100) / 100,
  spentAmount: Math.round((10000 - i * 500 + Math.random() * 200) * 100) / 100,
  amountSpent: Math.round((10000 - i * 500 + Math.random() * 200) * 100) / 100,
  createdAt: new Date().toISOString(),
  joinDate: new Date().toISOString(),
  gender: i % 2 === 0 ? 'king' : 'queen',
  spendStreak: Math.floor(Math.random() * 20),
  badges: i < 5 ? ['whale', 'royal'] : i < 10 ? ['big-spender'] : [],
  isVerified: i < 10,
  isVIP: i < 5
}));

// Fix the team color in the mock user data
export const getTopUser = (id: string): UserProfile => {
  return {
    id: 'top-spender-1',
    username: 'RoyalTycoon',
    displayName: 'Royal Tycoon',
    profileImage: 'https://randomuser.me/api/portraits/men/19.jpg',
    bio: 'The undisputed king of spending! Bow before my wealth!',
    tier: 'royal',
    team: "red" as TeamColor,
    rank: 1,
    walletBalance: 150.50,
    totalSpent: 9850.25,
    spentAmount: 9850.25,
    amountSpent: 9850.25,
    createdAt: new Date().toISOString(),
    isVerified: true,
    gender: 'king',
    spendStreak: 12,
    badges: ['whale', 'royal', 'early-adopter'],
    cosmetics: {
      border: ['royal-border-1', 'royal-border-2'],
      color: ['royal-color-1'],
      font: ['royal-font-1'],
      emoji: ['royal-emoji-1', 'royal-emoji-2'],
      title: ['royal-whale', 'money-monarch'],
      background: ['royal-bg-1'],
      effect: ['royal-effect-1'],
      badge: ['royal-badge-1', 'royal-badge-2'],
      theme: ['royal-theme-1'],
      activeBorder: 'royal-border-1',
      activeColor: 'royal-color-1',
      activeFont: 'royal-font-1',
      activeEmoji: 'royal-emoji-1',
      activeTitle: 'money-monarch',
      activeBackground: 'royal-bg-1',
      activeEffect: 'royal-effect-1',
      activeBadge: 'royal-badge-1',
      activeTheme: 'royal-theme-1'
    },
    joinedDate: new Date().toISOString()
  } as UserProfile;
};

// Add joinedDate to all mock users
const addJoinedDateToUsers = (users: any[]): UserProfile[] => {
  return users.map(user => ({
    ...user,
    joinedDate: user.joinedDate || user.createdAt || new Date().toISOString()
  })) as UserProfile[];
};
