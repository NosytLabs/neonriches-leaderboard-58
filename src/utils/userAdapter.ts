
import { User } from '@/types/user';

// Ensure User object has all required properties
export const ensureUser = (user: any): User => {
  return {
    id: user.id || '',
    username: user.username || '',
    email: user.email,
    displayName: user.displayName,
    profileImage: user.profileImage,
    bio: user.bio,
    tier: user.tier,
    role: user.role,
    team: user.team,
    rank: user.rank,
    previousRank: user.previousRank,
    walletBalance: user.walletBalance || 0,
    walletAddress: user.walletAddress,
    totalSpent: user.totalSpent || 0,
    spentAmount: user.spentAmount || 0,
    amountSpent: user.amountSpent || 0,
    joinDate: user.joinDate,
    joinedAt: user.joinedAt,
    createdAt: user.createdAt || new Date().toISOString(),
    updatedAt: user.updatedAt,
    isVerified: user.isVerified,
    cosmetics: user.cosmetics || {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      banners: [],
      themes: [],
      effects: [],
      titles: []
    },
    subscription: user.subscription,
    activeTitle: user.activeTitle,
    socialLinks: user.socialLinks || {},
    badges: user.badges || [],
    spendStreak: user.spendStreak || 0,
    gender: user.gender || 'prefer-not-to-say',
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    followers: user.followers || 0,
    following: user.following || 0,
    isVIP: user.isVIP || false,
    settings: user.settings || {
      showRank: true,
      showTeam: true,
      showSpending: true,
      publicProfile: true,
      allowMessages: true,
      emailNotifications: true,
      darkMode: true,
      language: 'en'
    },
    profileBoosts: user.profileBoosts || []
  };
};

// Convert a user profile from the API to a User object
export const adaptUserProfileToUser = (userProfile: any): User => {
  return ensureUser(userProfile);
};

// Create a mock user for demo purposes
export const createMockUser = (overrides: Partial<User> = {}): User => {
  const defaultUser: User = {
    id: `user-${Math.random().toString(36).substring(2, 9)}`,
    username: `noble${Math.floor(Math.random() * 10000)}`,
    email: `noble${Math.floor(Math.random() * 10000)}@spendthrone.com`,
    displayName: "Nameless Noble",
    profileImage: `/throne-assets/avatars/default-${Math.floor(Math.random() * 5) + 1}.jpg`,
    bio: "A mysterious noble shrouded in the mists of mediocrity.",
    tier: 'bronze',
    role: 'user',
    team: Math.random() > 0.66 ? 'red' : Math.random() > 0.5 ? 'green' : 'blue',
    rank: Math.floor(Math.random() * 1000) + 1,
    previousRank: Math.floor(Math.random() * 1000) + 1,
    walletBalance: Math.floor(Math.random() * 500),
    totalSpent: Math.floor(Math.random() * 1000),
    spentAmount: Math.floor(Math.random() * 1000),
    amountSpent: Math.floor(Math.random() * 1000),
    joinDate: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
    gender: 'prefer-not-to-say',
    profileViews: Math.floor(Math.random() * 500),
    profileClicks: Math.floor(Math.random() * 200),
    followers: Math.floor(Math.random() * 50),
    following: Math.floor(Math.random() * 50),
    isVIP: Math.random() > 0.8,
    badges: [],
    spendStreak: Math.floor(Math.random() * 7),
    socialLinks: {},
    cosmetics: {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      banners: [],
      themes: [],
      effects: [],
      titles: []
    },
    settings: {
      showRank: true,
      showTeam: true,
      showSpending: true,
      publicProfile: true,
      allowMessages: true,
      emailNotifications: true,
      darkMode: true,
      language: 'en'
    },
    profileBoosts: []
  };
  
  return { ...defaultUser, ...overrides };
};

// Generate random medieval noble title
export const generateNobleTitle = (gender: string = 'prefer-not-to-say', tier: string = 'bronze'): string => {
  const malePrefix = ['Lord', 'Sir', 'Baron', 'Count', 'Duke', 'Earl', 'Viscount', 'Marquis'];
  const femalePrefix = ['Lady', 'Baroness', 'Countess', 'Duchess', 'Dame', 'Viscountess', 'Marchioness'];
  const neutralPrefix = ['Noble', 'Sovereign', 'Highness', 'Excellence', 'Eminence'];
  
  const suffix = ['of the Golden Purse', 'the Extravagant', 'Money-Waster', 'Gold-Flinger', 
                 'Coin-Tosser', 'Treasury-Emptier', 'Fortune-Squanderer', 'Wealth-Flaunter'];
  
  let prefix: string[] = neutralPrefix;
  
  if (gender === 'king' || gender === 'male') {
    prefix = malePrefix;
  } else if (gender === 'queen' || gender === 'female') {
    prefix = femalePrefix;
  }
  
  // Higher tiers get fancier titles
  let titlePool = prefix;
  if (tier === 'gold' || tier === 'platinum' || tier === 'royal') {
    titlePool = prefix.slice(Math.floor(prefix.length / 2));
  }
  
  const randomPrefix = titlePool[Math.floor(Math.random() * titlePool.length)];
  const randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];
  
  return `${randomPrefix} ${randomSuffix}`;
};
