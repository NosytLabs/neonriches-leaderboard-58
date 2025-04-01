
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType, UserProfile } from '@/types/user-consolidated';

// Create a context for auth state
export const AuthContext = createContext<AuthContextType | null>(null);

// Default user data
const defaultUser: UserProfile = {
  id: '',
  username: '',
  displayName: '',
  email: '',
  profileImage: '',
  bio: '',
  joinedDate: new Date().toISOString(),
  tier: 'free',
  team: null,
  rank: 0,
  previousRank: 0,
  totalSpent: 0,
  amountSpent: 0,
  walletBalance: 0,
  settings: {
    profileVisibility: 'public',
    allowProfileLinks: true,
    theme: 'dark',
    notifications: true,
    emailNotifications: false,
    marketingEmails: false,
    soundEffects: true,
    showRank: true,
    darkMode: true,
    showBadges: true,
    showTeam: true,
    showSpending: true
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for existing auth token in localStorage
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          // For demo purposes, just create a mock user
          setUser({
            ...defaultUser,
            id: '1',
            username: 'demo_user',
            displayName: 'Demo User',
            email: 'demo@example.com',
            joinedDate: new Date().toISOString(),
            profileImage: '/avatars/default.png',
            tier: 'premium',
            team: 'blue',
            rank: 42,
            previousRank: 45,
            totalSpent: 1250,
            amountSpent: 1250,
            walletBalance: 500,
          });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // For demo, any non-empty values will succeed
      if (email && password) {
        localStorage.setItem('authToken', 'mock-jwt-token');
        
        setUser({
          ...defaultUser,
          id: '1',
          username: email.split('@')[0],
          displayName: email.split('@')[0],
          email: email,
          profileImage: '/avatars/default.png',
          joinedDate: new Date().toISOString(),
          tier: 'premium',
          team: 'blue',
          rank: 42,
          previousRank: 45,
          totalSpent: 1250,
          amountSpent: 1250,
          walletBalance: 500,
        });
        
        setIsLoading(false);
        return true;
      }
      
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      setIsLoading(false);
      return false;
    }
  };

  // Register function
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, any non-empty values will succeed
      if (username && email && password) {
        localStorage.setItem('authToken', 'mock-jwt-token');
        
        setUser({
          ...defaultUser,
          id: '1',
          username: username,
          displayName: username,
          email: email,
          profileImage: '/avatars/default.png',
          joinedDate: new Date().toISOString(),
          tier: 'basic',
          team: null,
          rank: 999,
          previousRank: 999,
          totalSpent: 0,
          amountSpent: 0,
          walletBalance: 100, // Starter balance
        });
        
        setIsLoading(false);
        return true;
      }
      
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Registration failed:', error);
      setIsLoading(false);
      return false;
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // Clear auth token
      localStorage.removeItem('authToken');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update user
  const updateUser = async (updates: Partial<UserProfile>): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(prevUser => {
        if (!prevUser) return null;
        return { ...prevUser, ...updates };
      });
      
      return true;
    } catch (error) {
      console.error('Update user failed:', error);
      return false;
    }
  };

  // Award a cosmetic item to the user
  const awardCosmetic = async (category: string, itemId: string, notify: boolean = true): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update user cosmetics
      setUser(prevUser => {
        if (!prevUser) return null;
        
        const updatedCosmetics = { ...(prevUser.cosmetics || {}) };
        
        // Initialize the category array if it doesn't exist
        if (!updatedCosmetics[category]) {
          updatedCosmetics[category] = [];
        }
        
        // Add the item to the category if it doesn't already exist
        if (Array.isArray(updatedCosmetics[category]) && !updatedCosmetics[category].includes(itemId)) {
          updatedCosmetics[category] = [...updatedCosmetics[category], itemId];
        }
        
        return {
          ...prevUser,
          cosmetics: updatedCosmetics,
          // Reduce wallet balance to simulate purchase
          walletBalance: prevUser.walletBalance ? prevUser.walletBalance - 50 : 0
        };
      });
      
      return true;
    } catch (error) {
      console.error('Award cosmetic failed:', error);
      return false;
    }
  };

  // Provide auth context value
  const contextValue: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signIn: login, // Alias for login
    register,
    logout,
    signOut: logout, // Alias for logout
    updateUser,
    updateUserProfile: updateUser, // Alias for updateUser
    awardCosmetic,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
