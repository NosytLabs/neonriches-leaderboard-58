
import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { UserProfile } from '@/types/user-consolidated';
import { TeamColor } from '@/types/user';
import { toTeamColor } from '@/utils/typeConverters';
import { AuthContextType } from '@/types/auth-context';
import AuthContext from './index';

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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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
            team: toTeamColor('blue'), // Convert to valid TeamColor
            rank: 42,
            previousRank: 45,
            totalSpent: 1250,
            amountSpent: 1250,
            walletBalance: 500,
          });
          setIsAuthenticated(true);
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
          team: toTeamColor('blue'),  // Convert string to valid TeamColor
          rank: 42,
          previousRank: 45,
          totalSpent: 1250,
          amountSpent: 1250,
          walletBalance: 500,
        });
        
        setIsAuthenticated(true);
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
        
        setIsAuthenticated(true);
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
      setIsAuthenticated(false);
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
      
      // Process team color if it exists in the updates
      if (updates.team && typeof updates.team === 'string') {
        updates.team = toTeamColor(updates.team);
      }
      
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

  // Add cosmetic to user
  const awardCosmetic = async (category: string, itemId: string, notify: boolean = true): Promise<boolean> => {
    try {
      if (!user || !user.cosmetics) return false;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Make a copy of user cosmetics
      const updatedCosmetics = { ...user.cosmetics };
      
      // Add the item to the appropriate category
      if (category in updatedCosmetics) {
        const categoryItems = [...(updatedCosmetics[category as keyof typeof updatedCosmetics] || [])];
        if (!categoryItems.includes(itemId)) {
          categoryItems.push(itemId);
          updatedCosmetics[category as keyof typeof updatedCosmetics] = categoryItems;
          
          setUser(prevUser => {
            if (!prevUser) return null;
            return { ...prevUser, cosmetics: updatedCosmetics };
          });
          
          return true;
        }
      }
      
      return false;
    } catch (error) {
      console.error('Award cosmetic failed:', error);
      return false;
    }
  };

  // Create the context value
  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signIn: login, // Alias for login
    register,
    logout,
    signOut: logout, // Alias for logout
    updateUser,
    updateUserProfile: updateUser, // Alias for updateUser
    awardCosmetic
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
