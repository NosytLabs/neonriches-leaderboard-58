
// Mock authentication service
// In a real app, this would use a real authentication provider

import { User } from '@/types/user';

// Mock user database
const users: Record<string, { email: string; password: string; userData: Partial<User> }> = {
  'user@example.com': {
    email: 'user@example.com',
    password: 'password123',
    userData: {
      id: 'user_1',
      username: 'royalspender',
      displayName: 'Royal Spender',
      walletBalance: 100,
      rank: 10,
      team: 'red',
      tier: 'gold',
      totalSpent: 500,
      profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=royalspender',
      joinedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString()
    }
  },
  'demo@spendthrone.com': {
    email: 'demo@spendthrone.com',
    password: 'demo123',
    userData: {
      id: 'user_2',
      username: 'demospender',
      displayName: 'Demo Spender',
      walletBalance: 50,
      rank: 25,
      team: 'blue',
      tier: 'silver',
      totalSpent: 200,
      profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=demospender',
      joinedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
    }
  }
};

// Current session
let currentUser: User | null = null;

export const signInWithEmail = async (email: string, password: string): Promise<boolean> => {
  // Simulate API request
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Check if user exists
  const user = users[email.toLowerCase()];
  if (!user) {
    console.log('User not found');
    return false;
  }
  
  // Check password
  if (user.password !== password) {
    console.log('Invalid password');
    return false;
  }
  
  // Set current user
  currentUser = {
    ...user.userData,
    email,
    id: user.userData.id || `user_${Date.now()}`,
    isAuthenticated: true
  } as User;
  
  // Store in localStorage
  localStorage.setItem('spendthrone_user', JSON.stringify(currentUser));
  
  return true;
};

export const signUpWithEmail = async (email: string, password: string): Promise<boolean> => {
  // Simulate API request
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if user already exists
  if (users[email.toLowerCase()]) {
    console.log('User already exists');
    return false;
  }
  
  // Create new user
  const newUserId = `user_${Date.now()}`;
  const username = email.split('@')[0];
  
  users[email.toLowerCase()] = {
    email,
    password,
    userData: {
      id: newUserId,
      username,
      displayName: username.charAt(0).toUpperCase() + username.slice(1),
      walletBalance: 50, // Starting balance
      rank: Math.floor(Math.random() * 1000) + 100, // Random initial rank
      team: null,
      tier: 'bronze',
      totalSpent: 0,
      profileImage: `https://api.dicebear.com/6.x/personas/svg?seed=${username}`,
      joinedAt: new Date().toISOString()
    }
  };
  
  // Set current user
  currentUser = {
    ...users[email.toLowerCase()].userData,
    email,
    isAuthenticated: true
  } as User;
  
  // Store in localStorage
  localStorage.setItem('spendthrone_user', JSON.stringify(currentUser));
  
  return true;
};

export const signOut = async (): Promise<void> => {
  // Simulate API request
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Clear current user
  currentUser = null;
  
  // Remove from localStorage
  localStorage.removeItem('spendthrone_user');
};

export const getCurrentUser = (): User | null => {
  // Check if we have a user in memory
  if (currentUser) {
    return currentUser;
  }
  
  // Check if we have a user in localStorage
  const storedUser = localStorage.getItem('spendthrone_user');
  if (storedUser) {
    try {
      currentUser = JSON.parse(storedUser) as User;
      return currentUser;
    } catch (error) {
      console.error('Failed to parse stored user data:', error);
      localStorage.removeItem('spendthrone_user');
    }
  }
  
  return null;
};

export const updateUserProfile = async (userId: string, updates: Partial<User>): Promise<boolean> => {
  // Simulate API request
  await new Promise(resolve => setTimeout(resolve, 700));
  
  // Find user by ID
  const userEntry = Object.values(users).find(u => u.userData.id === userId);
  if (!userEntry) {
    console.log('User not found');
    return false;
  }
  
  // Update user data
  userEntry.userData = {
    ...userEntry.userData,
    ...updates
  };
  
  // Update current user if it's the same user
  if (currentUser && currentUser.id === userId) {
    currentUser = {
      ...currentUser,
      ...updates
    };
    
    // Update localStorage
    localStorage.setItem('spendthrone_user', JSON.stringify(currentUser));
  }
  
  return true;
};
