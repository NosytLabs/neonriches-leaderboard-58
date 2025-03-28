
import { useState } from 'react';
import { UserProfile, ProfileBoost } from '@/types/user';
import { addProfileBoost, addCosmetic } from './authUtils';

export const useAuthState = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    isAuthModalOpen,
    setIsAuthModalOpen
  };
};

export const useAuthMethods = (
  user: UserProfile | null, 
  setUser: (user: UserProfile | null) => void,
  setIsLoading: (loading: boolean) => void,
  setError: (error: Error | null) => void
) => {
  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Mock authentication success
      const mockUser: UserProfile = {
        id: '1',
        username: 'royal_user',
        email,
        walletBalance: 100,
        team: 'red',
        tier: 'basic',
        spendStreak: 0,
        rank: 50,
        joinedAt: new Date().toISOString(),
        joinDate: new Date().toISOString(),
        amountSpent: 0,
        spentAmount: 0,
        cosmetics: {
          borders: [],
          colors: [],
          fonts: [],
          emojis: [],
          titles: [],
          backgrounds: [],
          effects: [],
          badges: [],
          themes: [],
        },
        subscription: {
          status: 'active',
          tier: 'basic',
          interval: 'monthly',
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          autoRenew: true,
          features: ['Basic Profile', 'Leaderboard Entry'],
        },
        profileViews: 0,
        profileClicks: 0,
        followers: 0,
        profileBoosts: [],
      };

      setUser(mockUser);
      localStorage.setItem('p2w_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Sign in error:', error);
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Mock registration success
      const mockUser: UserProfile = {
        id: '1',
        username,
        email,
        walletBalance: 10,
        team: null,
        tier: 'basic',
        spendStreak: 0,
        rank: 999,
        joinedAt: new Date().toISOString(),
        joinDate: new Date().toISOString(),
        amountSpent: 0,
        spentAmount: 0,
        cosmetics: {
          borders: [],
          colors: [],
          fonts: [],
          emojis: [],
          titles: [],
          backgrounds: [],
          effects: [],
          badges: [],
          themes: [],
        },
        subscription: {
          status: 'active',
          tier: 'basic',
          interval: 'monthly',
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          autoRenew: true,
          features: ['Basic Profile', 'Leaderboard Entry'],
        },
        profileViews: 0,
        profileClicks: 0,
        followers: 0,
        profileBoosts: [],
      };

      setUser(mockUser);
      localStorage.setItem('p2w_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Sign up error:', error);
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setUser(null);
      localStorage.removeItem('p2w_user');
    } catch (error) {
      console.error('Logout error:', error);
      setError(error as Error);
      throw error;
    }
  };

  const updateUserProfile = async (updatedUser: Partial<UserProfile>): Promise<void> => {
    try {
      if (!user) throw new Error('No user to update');
      
      const newUser = { ...user, ...updatedUser };
      setUser(newUser);
      localStorage.setItem('p2w_user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Update profile error:', error);
      setError(error as Error);
      throw error;
    }
  };

  const boostProfile = async (days: number = 1, level: number = 1): Promise<boolean> => {
    try {
      if (!user) return false;
      
      const newBoosts = addProfileBoost(user, days, level);
      
      const updatedUser = {
        ...user,
        profileBoosts: newBoosts,
      };
      
      setUser(updatedUser);
      localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
      
      return true;
    } catch (error) {
      console.error('Boost profile error:', error);
      setError(error as Error);
      return false;
    }
  };

  const awardCosmetic = async (
    cosmeticId: string, 
    category: string, 
    rarity: string, 
    source: string
  ): Promise<boolean> => {
    try {
      if (!user) return false;
      
      const updatedCosmetics = addCosmetic(user, cosmeticId, category);
      
      const updatedUser = {
        ...user,
        cosmetics: updatedCosmetics,
      };
      
      setUser(updatedUser);
      localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
      
      return true;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      setError(error as Error);
      return false;
    }
  };

  return {
    login,
    register,
    logout,
    updateUserProfile,
    boostProfile,
    awardCosmetic,
  };
};
