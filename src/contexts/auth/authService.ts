
import { UserProfile } from '@/types/user-consolidated';
import { LoginResponse, RegisterResponse } from './types';

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
  joinDate: new Date().toISOString(),
  isVerified: true,
  spendStreak: 0,
  cosmetics: {
    border: ['starter-border'],
    color: ['starter-color'],
    font: [],
    emoji: [],
    title: ['newcomer'],
    background: [],
    effect: [],
    badge: [],
    theme: []
  }
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
 * Create new user in the database
 */
export const createUser = async (userData: Partial<UserProfile>): Promise<UserProfile> => {
  // In a real implementation, this would make an API call to create the user in the database
  console.log('Creating user:', userData);
  
  // For the mock version, just return a merged version of mock user with the provided data
  return {
    ...mockUser,
    ...userData
  };
};

/**
 * Get user data by ID
 */
export const getUser = async (userId: string): Promise<UserProfile | null> => {
  // In a real implementation, this would make an API call to get the user by ID
  console.log('Getting user by ID:', userId);
  
  // For the mock version, just return the mockUser if there's a token
  const token = localStorage.getItem('authToken');
  if (!token) return null;
  
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
): Promise<RegisterResponse> => {
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
 * Update user in database
 */
export const updateUser = async (userId: string, updates: Partial<UserProfile>): Promise<UserProfile> => {
  // In a real implementation, this would make an API call to update the user in the database
  console.log('Updating user:', userId, updates);
  
  // For the mock version, just return a merged version of mock user with the provided updates
  return {
    ...mockUser,
    ...updates
  };
};
