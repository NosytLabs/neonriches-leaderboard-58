
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserProfile } from '@/types';

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, username: string, password: string) => Promise<boolean>;
  signOut: () => void;
  updateUserProfile: (updatedUser: Partial<User>) => Promise<boolean>;
  boostProfile?: (type: string, duration: number) => Promise<boolean>;
  awardCosmetic?: (id: string, category: string, rarity: string, source: string) => Promise<boolean>;
  // Add other auth-related functions here
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  signIn: async () => false,
  signUp: async () => false,
  signOut: () => {},
  updateUserProfile: async () => false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock authentication for development
  useEffect(() => {
    // Simulate loading auth state
    const timer = setTimeout(() => {
      // Check if there's a user in localStorage
      const storedUser = localStorage.getItem('p2w_user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error('Failed to parse stored user:', error);
        }
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Mock authentication success
      const mockUser: User = {
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
      
      return true;
    } catch (error) {
      console.error('Sign in error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, username: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Mock registration success
      const mockUser: User = {
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
      
      return true;
    } catch (error) {
      console.error('Sign up error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('p2w_user');
  };

  const updateUserProfile = async (updatedUser: Partial<User>): Promise<boolean> => {
    try {
      if (!user) return false;
      
      const newUser = { ...user, ...updatedUser };
      setUser(newUser);
      localStorage.setItem('p2w_user', JSON.stringify(newUser));
      
      return true;
    } catch (error) {
      console.error('Update profile error:', error);
      return false;
    }
  };

  const boostProfile = async (type: string, duration: number): Promise<boolean> => {
    try {
      if (!user) return false;
      
      const boostId = `boost_${Date.now()}`;
      const boost = {
        id: boostId,
        effectId: type,
        startTime: new Date().toISOString(),
        endTime: Date.now() + duration * 60 * 60 * 1000, // Convert hours to ms
        type,
        strength: 1,
        appliedBy: user.id,
      };
      
      const currentBoosts = user.profileBoosts || [];
      const newBoosts = [...currentBoosts, boost];
      
      const updatedUser = {
        ...user,
        profileBoosts: newBoosts,
      };
      
      setUser(updatedUser);
      localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
      
      return true;
    } catch (error) {
      console.error('Boost profile error:', error);
      return false;
    }
  };

  const awardCosmetic = async (
    id: string, 
    category: string, 
    rarity: string, 
    source: string
  ): Promise<boolean> => {
    try {
      if (!user) return false;
      
      const cosmetics = user.cosmetics || {
        borders: [],
        colors: [],
        fonts: [],
        emojis: [],
        titles: [],
        backgrounds: [],
        effects: [],
        badges: [],
        themes: [],
      };
      
      const categoryItems = cosmetics[category as keyof typeof cosmetics] || [];
      
      if (Array.isArray(categoryItems) && !categoryItems.includes(id)) {
        const updatedCosmetics = {
          ...cosmetics,
          [category]: [...categoryItems, id],
        };
        
        const updatedUser = {
          ...user,
          cosmetics: updatedCosmetics,
        };
        
        setUser(updatedUser);
        localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        isAuthenticated: !!user, 
        signIn, 
        signUp, 
        signOut,
        updateUserProfile,
        boostProfile,
        awardCosmetic
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export type { UserProfile };
