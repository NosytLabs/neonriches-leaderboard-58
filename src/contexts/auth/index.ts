
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserTier } from '@/types/user';
import { CosmeticRarity } from '@/types/cosmetics';

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: () => void;
  signOut: () => void;
  updateUserProfile: (updatedUser: User) => Promise<boolean>;
  awardCosmetic?: (
    cosmeticId: string,
    category: string, 
    rarity: CosmeticRarity, 
    source: string
  ) => Promise<boolean>;
}

const initialContext: AuthContextType = {
  user: null,
  isLoading: true,
  signIn: () => {},
  signOut: () => {},
  updateUserProfile: async () => false,
};

export const AuthContext = createContext<AuthContextType>(initialContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock authentication check
    const checkAuth = async () => {
      // For demo purposes, create a mock user
      const mockUser: User = {
        id: '1',
        username: 'royaluser',
        displayName: 'Royal User',
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        walletBalance: 100,
        totalSpent: 500,
        spentAmount: 500,
        amountSpent: 500,
        createdAt: new Date().toISOString(),
        rank: 10,
        tier: 'gold',
        team: 'red',
        gender: 'king',
        spendStreak: 5,
        badges: ['early-adopter'],
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
        socialLinks: {
          twitter: 'https://twitter.com/royaluser',
          instagram: 'https://instagram.com/royaluser'
        }
      };

      // Uncomment to simulate logged in user
      // setUser(mockUser);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const signIn = () => {
    // Mock sign in
    const mockUser: User = {
      id: '1',
      username: 'royaluser',
      displayName: 'Royal User',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      walletBalance: 100,
      totalSpent: 500,
      spentAmount: 500,
      amountSpent: 500,
      createdAt: new Date().toISOString(),
      rank: 10,
      tier: 'gold',
      team: 'red',
      gender: 'king',
      spendStreak: 5,
      badges: ['early-adopter'],
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
      socialLinks: {
        twitter: 'https://twitter.com/royaluser',
        instagram: 'https://instagram.com/royaluser'
      }
    };
    
    setUser(mockUser);
  };

  const signOut = () => {
    setUser(null);
  };

  const updateUserProfile = async (updatedUser: User): Promise<boolean> => {
    try {
      // In a real app, this would call an API
      setUser(updatedUser);
      return true;
    } catch (error) {
      console.error('Error updating user profile:', error);
      return false;
    }
  };

  const awardCosmetic = async (
    cosmeticId: string,
    category: string, 
    rarity: CosmeticRarity, 
    source: string
  ): Promise<boolean> => {
    try {
      // In a real app, this would call an API
      if (!user) return false;
      
      // Mock implementation
      console.log(`Awarded ${rarity} ${category} cosmetic to user`);
      return true;
    } catch (error) {
      console.error('Error awarding cosmetic:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        signIn, 
        signOut,
        updateUserProfile,
        awardCosmetic
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export * from './authHooks';
