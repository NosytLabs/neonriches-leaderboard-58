
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserSubscription } from '@/types/user';
import { CosmeticRarity } from '@/types/cosmetics';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  error: Error | null;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  logout: () => void;
  // Add these properties to fix the TypeScript errors
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  signOut: () => void;
  subscription?: UserSubscription;
  // New functions
  awardCosmetic?: (cosmeticId: string, category: string, rarity: CosmeticRarity, source: string) => Promise<boolean>;
  boostProfile?: (days?: number, level?: number) => Promise<boolean>;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the initial user
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
      emojis: ['crown', 'gem']
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

// Create a mocked register user
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
      emojis: []
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

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Check for saved auth state on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, this would check for a valid token in localStorage or cookies
        // and make an API call to fetch the user data
        
        // For demo purposes, let's use localStorage to simulate persistence
        const savedUser = localStorage.getItem('authUser');
        
        if (savedUser) {
          // Parse and set the user
          const userData = JSON.parse(savedUser);
          // Handle date conversion for joinDate
          userData.joinDate = new Date(userData.joinDate);
          
          setUser(userData);
        } else {
          // For demo purposes, immediately "log in" with a default user
          // In a real app, you would set user to null here
          // setUser(null);
          
          // Use default user
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
  
  // Update user profile
  const updateUserProfile = async (data: Partial<UserProfile>): Promise<void> => {
    try {
      if (!user) {
        throw new Error('No user is currently authenticated');
      }
      
      // Merge the current user data with the updated data
      const updatedUser = { ...user, ...data };
      
      // In a real app, this would make an API call to update the user data
      
      // Update state and localStorage
      setUser(updatedUser);
      localStorage.setItem('authUser', JSON.stringify(updatedUser));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error updating profile'));
      throw err;
    }
  };
  
  // Alias for updateUserProfile to match expected function name
  const updateProfile = updateUserProfile;
  
  // Logout function
  const logout = async (): Promise<void> => {
    try {
      // In a real app, this would make an API call to invalidate the token
      
      // Clear user state and localStorage
      setUser(null);
      localStorage.removeItem('authUser');
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error during logout'));
      throw err;
    }
  };
  
  // Alias for logout to match expected function name
  const signOut = logout;
  
  // Award cosmetic to user
  const awardCosmetic = async (
    cosmeticId: string, 
    category: string, 
    rarity: CosmeticRarity, 
    source: string
  ): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // Check if user already has this cosmetic
      const userCosmetics = user.cosmetics || { borders: [], colors: [], fonts: [], emojis: [] };
      const categoryItems = userCosmetics[category as keyof typeof userCosmetics] || [];
      
      if (Array.isArray(categoryItems) && categoryItems.includes(cosmeticId)) {
        return false; // Already owned
      }
      
      // Add cosmetic to user
      const updatedCosmetics = {
        ...userCosmetics,
        [category]: Array.isArray(categoryItems) ? [...categoryItems, cosmeticId] : [cosmeticId]
      };
      
      // Update user profile
      await updateUserProfile({
        cosmetics: updatedCosmetics
      });
      
      return true;
    } catch (error) {
      console.error("Error awarding cosmetic:", error);
      return false;
    }
  };
  
  // Boost user profile
  const boostProfile = async (days: number = 7, level: number = 1): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // In a real app, we would store boost info in the user profile
      // For now, we'll just simulate success
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

// Hook for easy context use
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export the types
export type { UserProfile, UserSubscription };
