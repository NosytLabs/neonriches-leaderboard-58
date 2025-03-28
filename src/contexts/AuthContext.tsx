import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserSubscription } from '@/types/user';
import { CosmeticRarity } from '@/types/cosmetics';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  error: Error | null;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  signOut: () => void;
  subscription?: UserSubscription;
  awardCosmetic?: (cosmeticId: string, category: string, rarity: CosmeticRarity, source: string) => Promise<boolean>;
  boostProfile?: (days?: number, level?: number) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const createDefaultUser = (): UserProfile => {
  return {
    id: '1',
    username: 'NobleTester',
    email: 'test@example.com',
    profileImage: 'https://source.unsplash.com/random/200x200/?portrait',
    amountSpent: 25,
    walletBalance: 100,
    rank: 5,
    spendStreak: 2,
    tier: 'octopus',
    team: 'blue',
    gender: 'king',
    joinDate: new Date('2023-01-15'),
    cosmetics: {
      borders: ['gold-border'],
      colors: ['royal-purple'],
      fonts: ['medieval'],
      emojis: ['crown', 'gem'],
      titles: []
    },
    bio: 'A noble testing the royal features of this fine kingdom.',
    marketingStats: {
      impressions: 1250,
      clicks: 75,
      conversions: 5,
      ctr: 6.0
    },
    socialLinks: [
      { platform: 'Twitter', url: 'https://twitter.com/example', clicks: 12 },
      { platform: 'Website', url: 'https://example.com', clicks: 25 }
    ]
  };
};

const registerUser = (email: string, username: string, password: string): UserProfile => {
  return {
    id: 'user_' + Date.now(),
    username,
    email,
    profileImage: 'https://source.unsplash.com/random/200x200/?silhouette',
    amountSpent: 0,
    walletBalance: 25, // Starting balance
    rank: 999, // Start at the bottom
    spendStreak: 0,
    tier: 'crab',
    team: 'red', // Default team
    gender: 'jester', // Default gender
    joinDate: new Date(),
    cosmetics: {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: []
    },
    marketingStats: {
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: 0
    },
    socialLinks: []
  };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem('authUser');
        
        if (savedUser) {
          const userData = JSON.parse(savedUser);
          userData.joinDate = new Date(userData.joinDate);
          
          setUser(userData);
        } else {
          const defaultUser = createDefaultUser();
          setUser(defaultUser);
          localStorage.setItem('authUser', JSON.stringify(defaultUser));
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error during authentication'));
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  const updateUserProfile = async (data: Partial<UserProfile>): Promise<void> => {
    try {
      if (!user) {
        throw new Error('No user is currently authenticated');
      }
      
      const updatedUser = { ...user, ...data };
      
      setUser(updatedUser);
      localStorage.setItem('authUser', JSON.stringify(updatedUser));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error updating profile'));
      throw err;
    }
  };
  
  const updateProfile = updateUserProfile;
  
  const logout = async (): Promise<void> => {
    try {
      setUser(null);
      localStorage.removeItem('authUser');
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error during logout'));
      throw err;
    }
  };
  
  const signOut = logout;
  
  const awardCosmetic = async (
    cosmeticId: string, 
    category: string, 
    rarity: CosmeticRarity, 
    source: string
  ): Promise<boolean> => {
    try {
      if (!user) return false;
      
      const userCosmetics = user.cosmetics || { 
        borders: [], 
        colors: [], 
        fonts: [], 
        emojis: [], 
        titles: [] 
      };
      
      const categoryItems = userCosmetics[category as keyof typeof userCosmetics] || [];
      
      if (Array.isArray(categoryItems) && categoryItems.includes(cosmeticId)) {
        return false;
      }
      
      const updatedCosmetics = {
        ...userCosmetics,
        [category]: Array.isArray(categoryItems) ? [...categoryItems, cosmeticId] : [cosmeticId]
      };
      
      await updateUserProfile({
        cosmetics: updatedCosmetics
      });
      
      return true;
    } catch (error) {
      console.error("Error awarding cosmetic:", error);
      return false;
    }
  };
  
  const boostProfile = async (days: number = 7, level: number = 1): Promise<boolean> => {
    try {
      if (!user) return false;
      
      return true;
    } catch (error) {
      console.error("Error boosting profile:", error);
      return false;
    }
  };
  
  const contextValue: AuthContextType = {
    user,
    isLoading,
    error,
    updateUserProfile,
    updateProfile,
    logout,
    signOut,
    awardCosmetic,
    boostProfile
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export type { UserProfile, UserSubscription };
