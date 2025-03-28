
import { UserProfile, UserGender } from '@/types/user';

// Create a default user for development
export const createDefaultUser = (): UserProfile => {
  const defaultCosmetics = {
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: [],
    themes: []
  };

  return {
    id: 'test-user-id',
    username: 'TestUser',
    email: 'test@example.com',
    displayName: 'Test User',
    bio: 'This is a test user account for development.',
    profileImage: 'https://source.unsplash.com/random/300x300?portrait',
    banner: 'https://source.unsplash.com/random/1200x400?landscape',
    amountSpent: 0,
    spentAmount: 0,
    walletBalance: 100,
    rank: 999,
    joinedAt: new Date().toISOString(),
    joinDate: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    isVerified: true,
    gender: 'neutral',
    tier: 'crab',
    spendStreak: 0,
    cosmetics: defaultCosmetics,
    socialLinks: [],
    profileViews: 0,
    profileClicks: 0,
    followers: 0,
    settings: {
      notifications: {
        email: true,
        push: true,
        rankChanges: true
      },
      privacy: {
        showSpending: true,
        showStats: true,
        publicProfile: true
      },
      display: {
        darkMode: true,
        animations: true,
        showRankInProfile: true,
        compactView: false
      },
      showRank: true,
      showSpending: true,
      showTeam: true,
      profileVisibility: 'public',
      allowProfileLinks: true,
      showEmailOnProfile: false,
      emailNotifications: true,
      rankChangeAlerts: true,
      shameAlerts: false,
      newFollowerAlerts: true
    }
  };
};

export const createRandomUser = (index: number): UserProfile => {
  const teams: Array<'red' | 'green' | 'blue'> = ['red', 'green', 'blue'];
  const genders: UserGender[] = ['king', 'queen', 'neutral', 'noble'];
  
  return {
    id: `random-user-${index}`,
    username: `Noble${index}`,
    email: `noble${index}@example.com`,
    displayName: `Noble User ${index}`,
    profileImage: `https://source.unsplash.com/random/300x300?portrait&${index}`,
    amountSpent: Math.floor(Math.random() * 1000),
    spentAmount: Math.floor(Math.random() * 1000),
    walletBalance: Math.floor(Math.random() * 500),
    rank: index + 1,
    tier: 'crab',
    team: teams[Math.floor(Math.random() * teams.length)],
    gender: genders[Math.floor(Math.random() * genders.length)],
    joinedAt: new Date().toISOString(),
    joinDate: new Date().toISOString(),
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
    socialLinks: []
  };
};
