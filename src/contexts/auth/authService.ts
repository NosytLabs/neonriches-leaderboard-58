
import { UserProfile } from '@/types/user';
import { LoginResponse } from './types';

// Mock data for development
const mockUser: UserProfile = {
  id: '1',
  username: 'royaluser',
  displayName: 'Royal User',
  profileImage: '/images/avatars/default.png',
  email: 'user@spendthrone.com',
  bio: 'A loyal supporter of the throne',
  totalSpent: 1500,
  amountSpent: 1500,
  walletBalance: 500,
  rank: 42,
  previousRank: 45,
  tier: 'silver',
  team: 'blue',
  joinedAt: new Date().toISOString(),
  cosmetics: {
    badges: [],
    titles: ['Loyal Subject'],
    borders: ['silver-border'],
    effects: [],
    emojis: [],
    fonts: [],
    colors: [],
    backgrounds: [],
    themes: []
  },
  spendStreak: 0,
  followers: 0,
  following: 0,
  profileViews: 0,
  profileClicks: 0,
  socialLinks: [],
  isVIP: false,
  subscription: {
    id: '',
    active: false,
    tier: 'basic',
    startDate: '',
    endDate: '',
    nextBillingDate: '',
    plan: ''
  },
  purchasedFeatures: [],
  settings: {
    profileVisibility: 'public',
    allowProfileLinks: true,
    emailNotifications: true,
    rankChangeAlerts: true,
    newFollowerAlerts: true,
    teamNotifications: true,
    darkMode: false,
    showRank: true,
    showTeam: true
  },
  lastActive: new Date().toISOString(),
  role: 'user',
  gender: 'unspecified',
  certificateNFT: null,
  profileBoosts: []
};

/**
 * Fetch user profile data
 */
export const fetchUserProfile = async (): Promise<UserProfile | null> => {
  // In a real implementation, this would make an API call to get the user's profile
  const token = localStorage.getItem('authToken');
  if (!token) return null;
  
  // For the mock version, simply return the mockUser
  return mockUser;
};

/**
 * Login with email and password
 */
export const loginWithEmail = async (
  email: string, 
  password: string
): Promise<LoginResponse> => {
  // In a real implementation, this would make an API call to authenticate the user
  console.log('Logging in with email:', email);
  
  // For the mock version, simulate a successful login
  localStorage.setItem('authToken', 'mock-jwt-token');
  
  return {
    success: true,
    user: {
      ...mockUser,
      email,
    },
  };
};

/**
 * Register a new user
 */
export const registerWithEmail = async (
  username: string, 
  email: string, 
  password: string
): Promise<LoginResponse> => {
  // In a real implementation, this would make an API call to register the user
  console.log('Registering new user:', username, email);
  
  // For the mock version, simulate a successful registration
  localStorage.setItem('authToken', 'mock-jwt-token');
  
  return {
    success: true,
    user: {
      ...mockUser,
      username,
      email,
    },
  };
};

/**
 * Logout the user
 */
export const logoutUser = (): void => {
  localStorage.removeItem('authToken');
};

/**
 * Update user data
 */
export const updateUserData = async (userData: UserProfile): Promise<UserProfile> => {
  // In a real implementation, this would make an API call to update the user's data
  console.log('Updating user data:', userData);
  
  // For the mock version, just return the updated user
  return userData;
};

/**
 * Award a cosmetic item to a user
 */
export const awardCosmeticItem = async (
  userId: string, 
  category: string, 
  itemId: string, 
  notify: boolean = true
): Promise<boolean> => {
  // In a real implementation, this would make an API call to add the item to the user's collection
  console.log(`Awarding ${category} item ${itemId} to user ${userId}, notify: ${notify}`);
  
  // For the mock version, always succeed
  return true;
};
