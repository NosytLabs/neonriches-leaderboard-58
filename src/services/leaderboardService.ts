
import { User } from '@/types/user';

// Mocked top spender data
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
    borders: ['royal-border-1', 'royal-border-2'],
    colors: ['royal-color-1'],
    fonts: ['royal-font-1'],
    emojis: ['royal-emoji-1', 'royal-emoji-2'],
    titles: ['royal-whale', 'money-monarch'],
    backgrounds: ['royal-bg-1'],
    effects: ['royal-effect-1'],
    badges: ['royal-badge-1', 'royal-badge-2'],
    themes: ['royal-theme-1'],
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

// Fetch the current top spender
export const fetchTopSpender = async (): Promise<User> => {
  // In a real app, this would fetch from an API
  // For now, we're using mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTopSpender);
    }, 800);
  });
};

// Fetch leaderboard data
export const fetchLeaderboard = async (page = 1, limit = 10): Promise<User[]> => {
  // Mock leaderboard data with 20 users
  const mockLeaderboard = Array.from({ length: 20 }).map((_, i) => ({
    id: `user-${i + 1}`,
    username: `User${i + 1}`,
    displayName: `User ${i + 1}`,
    profileImage: `https://randomuser.me/api/portraits/men/${20 + i}.jpg`,
    tier: i < 3 ? 'royal' : i < 8 ? 'platinum' : i < 15 ? 'gold' : 'silver',
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
  } as User));

  // If page 1, ensure the top spender is the first result
  if (page === 1) {
    mockLeaderboard[0] = mockTopSpender;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      resolve(mockLeaderboard.slice(startIndex, endIndex));
    }, 800);
  });
};

// Get leaderboard entries with pagination
export const getLeaderboardEntries = async (page = 1, limit = 10): Promise<{
  entries: User[],
  totalCount: number
}> => {
  const entries = await fetchLeaderboard(page, limit);
  return {
    entries,
    totalCount: 100 // Mock total count
  };
};
