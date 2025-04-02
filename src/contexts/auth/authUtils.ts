
import { UserProfile, TeamColor } from '@/types/user';

export const createDemoUserProfile = (id: string, username?: string): UserProfile => {
  const userId = id || `demo-user-${Date.now()}`;
  const demoUsername = username || `demouser${Math.floor(Math.random() * 10000)}`;
  
  return {
    id: userId,
    username: demoUsername,
    displayName: `Demo User ${Math.floor(Math.random() * 100)}`,
    email: `${demoUsername}@example.com`,
    profileImage: `https://source.unsplash.com/random/300x300/?portrait&demo${Math.floor(Math.random() * 100)}`,
    bio: 'This is a demo user account.',
    joinedDate: new Date().toISOString(),
    tier: 'basic',
    team: 'blue',
    rank: Math.floor(Math.random() * 100) + 1,
    previousRank: Math.floor(Math.random() * 100) + 1,
    totalSpent: Math.floor(Math.random() * 1000),
    amountSpent: Math.floor(Math.random() * 1000),
    walletBalance: Math.floor(Math.random() * 500),
    isVerified: false,
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true,
      showTeam: true,
      showSpending: true
    },
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    }
  };
};

export const createUserFromTokenData = (tokenData: any): UserProfile => {
  return {
    id: tokenData.id || tokenData.userId || tokenData.sub,
    username: tokenData.username,
    displayName: tokenData.displayName,
    email: tokenData.email,
    profileImage: tokenData.profileImage,
    bio: tokenData.bio,
    joinedDate: tokenData.joinedDate,
    isVerified: Boolean(tokenData.isVerified),
    team: tokenData.team as TeamColor || 'none',
    tier: tokenData.tier || 'basic',
    rank: tokenData.rank || 0,
    previousRank: tokenData.previousRank || 0,
    walletBalance: tokenData.walletBalance || 0,
    totalSpent: tokenData.totalSpent || 0,
    amountSpent: tokenData.amountSpent || 0,
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true,
      showTeam: true,
      showSpending: true
    },
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    }
  };
};
