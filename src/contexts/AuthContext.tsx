
import React, { createContext, useEffect, useState } from 'react';
import { AuthContextType, UserProfile } from '@/types/user-consolidated';

// Create Auth Context
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: () => Promise.resolve(false),
  signIn: () => Promise.resolve(false),
  register: () => Promise.resolve(false),
  logout: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  updateUser: () => Promise.resolve(false),
  updateUserProfile: () => Promise.resolve(false),
  awardCosmetic: () => Promise.resolve(false),
});

// Create Provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Mock login logic
      if (email && password) {
        // In a real app, this would make an API call
        const mockUser: UserProfile = {
          id: '1',
          username: 'royal_user',
          displayName: 'Royal User',
          email: email,
          profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=royal_user',
          joinedDate: new Date().toISOString(),
          rank: 42,
          totalSpent: 1500,
          walletBalance: 100,
          tier: 'premium',
          team: 'blue',
          isVerified: true,
          isVIP: false,
          settings: {
            profileVisibility: 'public',
            allowProfileLinks: true,
            theme: 'dark',
            notifications: true,
            emailNotifications: true,
            marketingEmails: false,
            showRank: true,
            darkMode: true,
            soundEffects: true,
            newFollowerAlerts: true,
            teamNotifications: true,
            showTeam: true,
            showSpending: true
          },
          previousRank: 48,
          spendStreak: 7,
          profileViews: 324,
          profileClicks: 85
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(mockUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Mock registration logic
      if (username && email && password) {
        // In a real app, this would make an API call
        const mockUser: UserProfile = {
          id: '2',
          username: username,
          displayName: username,
          email: email,
          profileImage: `https://api.dicebear.com/6.x/personas/svg?seed=${username}`,
          joinedDate: new Date().toISOString(),
          rank: 999,
          totalSpent: 0,
          walletBalance: 50, // Initial free credit
          tier: 'free',
          team: null,
          isVerified: false,
          isVIP: false,
          settings: {
            profileVisibility: 'public',
            allowProfileLinks: true,
            theme: 'dark',
            notifications: true,
            emailNotifications: true,
            marketingEmails: false,
            showRank: true,
            darkMode: true,
            soundEffects: true,
            newFollowerAlerts: true,
            teamNotifications: true,
            showTeam: true,
            showSpending: true
          }
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(mockUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    return Promise.resolve();
  };

  const signOut = async (): Promise<void> => {
    return logout();
  };

  const updateUser = async (userData: Partial<UserProfile>): Promise<boolean> => {
    if (!user) return false;
    
    try {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error('Update user error:', error);
      return false;
    }
  };

  const updateUserProfile = async (userData: Partial<UserProfile>): Promise<boolean> => {
    return updateUser(userData);
  };

  const awardCosmetic = async (category: string, itemId: string, notify: boolean = true): Promise<boolean> => {
    if (!user) return false;

    try {
      // Update user's cosmetics
      const userCosmetics = user.cosmetics || {};
      
      // Ensure the category exists as an array
      if (!userCosmetics[category]) {
        userCosmetics[category] = [];
      }
      
      // Add the item if it doesn't exist
      const categoryItems = userCosmetics[category];
      if (Array.isArray(categoryItems)) {
        if (!categoryItems.includes(itemId)) {
          userCosmetics[category] = [...categoryItems, itemId];
        }
      } else {
        userCosmetics[category] = [itemId];
      }

      // Update user profile with new cosmetics
      const updatedUser = {
        ...user,
        cosmetics: userCosmetics,
      };

      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return true;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        signIn: login,
        register,
        logout,
        signOut,
        updateUser,
        updateUserProfile,
        awardCosmetic,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
