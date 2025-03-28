
import { UserProfile } from '@/types/user';

/**
 * Creates a default user profile for testing and development
 */
export const createDefaultUser = (): UserProfile => {
  return {
    id: '1',
    username: 'NobleTester',
    email: 'test@example.com',
    profileImage: 'https://source.unsplash.com/random/200x200/?portrait',
    amountSpent: 25,
    walletBalance: 100,
    rank: 5,
    spendStreak: 2,
    tier: 'octopus',
    team: 'blue',
    gender: 'king',
    joinDate: new Date('2023-01-15'),
    cosmetics: {
      borders: ['gold-border'],
      colors: ['royal-purple'],
      fonts: ['medieval'],
      emojis: ['crown', 'gem'],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    },
    bio: 'A noble testing the royal features of this fine kingdom.',
    marketingStats: {
      impressions: 1250,
      clicks: 75,
      conversions: 5,
      ctr: 6.0,
      sources: { 'direct': 800, 'social': 300, 'referral': 150 },
      referrers: { 'twitter': 200, 'facebook': 100, 'instagram': 50 }
    },
    socialLinks: [
      { platform: 'Twitter', url: 'https://twitter.com/example', clicks: 12 },
      { platform: 'Website', url: 'https://example.com', clicks: 25 }
    ]
  };
};

/**
 * Creates a new user profile based on registration data
 */
export const registerUser = (email: string, username: string, password: string): UserProfile => {
  return {
    id: 'user_' + Date.now(),
    username,
    email,
    profileImage: 'https://source.unsplash.com/random/200x200/?silhouette',
    amountSpent: 0,
    walletBalance: 25, // Starting balance
    rank: 999, // Start at the bottom
    spendStreak: 0,
    tier: 'crab',
    team: 'red', // Default team
    gender: 'jester', // Default gender
    joinDate: new Date(),
    cosmetics: {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    },
    marketingStats: {
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: 0,
      sources: {},
      referrers: {}
    },
    socialLinks: []
  };
};
