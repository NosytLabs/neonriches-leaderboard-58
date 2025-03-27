
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export type UserTier = 'free' | 'pro';
export type TeamColor = 'red' | 'green' | 'blue' | null;
export type GenderType = 'king' | 'queen' | 'jester' | null;

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  walletBalance: number;
  amountSpent: number;
  rank: number;
  tier: UserTier;
  team: TeamColor;
  gender?: GenderType;
  profileImage?: string;
  bio?: string;
  joinDate: Date;
  spendStreak?: number;
  lastSpend?: Date;
  cosmetics?: {
    borders?: string[];
    colors?: string[];
    fonts?: string[];
    emojis?: string[];
    effects?: string[];
    badges?: string[];
    frames?: string[];
    backgrounds?: string[];
    [key: string]: string[] | undefined;
  };
  activeCosmetics?: {
    border?: string;
    color?: string;
    font?: string;
    emoji?: string;
    effect?: string;
    badge?: string;
    frame?: string;
    background?: string;
    [key: string]: string | undefined;
  };
  // New marketing-focused fields
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  socialLinks?: {
    platform: string;
    url: string;
    clicks?: number;
  }[];
  marketingStats?: {
    impressions: number;
    engagement: number;
    conversionRate: number;
  };
}

export interface Subscription {
  id: string;
  status: 'active' | 'inactive' | 'canceled';
  plan: 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  autoRenew: boolean;
}

interface AuthContextType {
  user: UserProfile | null;
  subscription: Subscription | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUserData: UserProfile = {
  id: '123456',
  username: 'RoyalUser',
  email: 'user@example.com',
  walletBalance: 100,
  amountSpent: 250,
  rank: 42,
  tier: 'free',
  team: 'green',
  gender: 'king',
  profileImage: 'https://i.pravatar.cc/150?img=3',
  bio: 'Digital royalty in the making. Climbing the ranks one dollar at a time.',
  joinDate: new Date('2023-01-15'),
  spendStreak: 3,
  lastSpend: new Date(),
  cosmetics: {
    borders: ['gold-border', 'silver-border'],
    colors: ['royal-purple'],
    fonts: ['medieval-blackletter'],
    emojis: ['crown-emoji', 'gem-emoji'],
  },
  activeCosmetics: {
    border: 'gold-border',
    color: 'royal-purple',
    font: 'medieval-blackletter',
    emoji: 'crown-emoji',
  },
  profileViews: 120,
  profileClicks: 35,
  followers: 12,
  socialLinks: [
    { platform: 'twitter', url: 'https://twitter.com/example', clicks: 15 },
    { platform: 'instagram', url: 'https://instagram.com/example', clicks: 20 },
  ],
};

// Mock subscription data
const mockSubscription: Subscription = {
  id: 'sub_123456',
  status: 'active',
  plan: 'monthly',
  startDate: new Date('2023-05-01'),
  endDate: new Date('2023-06-01'),
  autoRenew: true,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for existing session on component mount
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('p2w_user');
        
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a mock user
      const mockUser: UserProfile = {
        id: '123456',
        username: 'RoyalUser',
        email: email,
        profileImage: 'https://i.pravatar.cc/150?img=3',
        amountSpent: 250,
        walletBalance: 100,
        rank: 42,
        spendStreak: 3,
        tier: 'octopus',
        team: 'blue',
        gender: 'king',
        cosmetics: {
          decorations: ['royal-crown'],
          colors: ['royal-gold'],
          fonts: [],
          emojis: ['crown-emoji']
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('p2w_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, username: string) => {
    setLoading(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a mock user
      const mockUser: UserProfile = {
        id: '123456',
        username: username,
        email: email,
        profileImage: 'https://i.pravatar.cc/150?img=5',
        amountSpent: 0,
        walletBalance: 50, // Welcome bonus
        rank: 999,
        spendStreak: 0,
        tier: 'crab',
        gender: 'jester',
        cosmetics: {
          decorations: [],
          colors: [],
          fonts: [],
          emojis: []
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('p2w_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      // Clear user from state and storage
      setUser(null);
      localStorage.removeItem('p2w_user');
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const updateUserProfile = async (userData: Partial<UserProfile>) => {
    if (!user) throw new Error("No user logged in");
    
    try {
      // Merge the existing user data with the updates
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
      return;
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  };

  // Aliases for compatibility
  const updateProfile = updateUserProfile;
  const signOut = logout;

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      loading, 
      updateUserProfile,
      updateProfile,
      signOut,
      subscription: user?.subscription
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
