
import React, { createContext, useState, useEffect } from 'react';
import { UserProfile, AuthContextType } from '@/types/user-consolidated';

// Create the Auth context with default values
export const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Set up initial auth state on component mount
  useEffect(() => {
    const checkAuth = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser) as UserProfile;
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Error parsing user data:", error);
          localStorage.removeItem('user');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Handle user login
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulating API call for login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const mockUser: UserProfile = {
        id: "user123",
        username: "royal_user",
        displayName: "Royal User",
        email: email,
        profileImage: "https://api.dicebear.com/7.x/personas/svg?seed=royal",
        bio: "I'm a royal user of SpendThrone!",
        joinedDate: new Date().toISOString(),
        rank: 42,
        totalSpent: 1250,
        amountSpent: 1250, // Make sure amountSpent is also set
        tier: "gold",
        team: "blue",
        isVerified: true,
        walletBalance: 500,
        followers: [], // Initialize as empty array instead of number
        following: [], // Initialize as empty array instead of number 
        spendStreak: 7,
        profileViews: 102,
        profileClicks: 48,
        settings: {
          profileVisibility: "public",
          allowProfileLinks: true,
          theme: "dark",
          notifications: true,
          emailNotifications: true,
          marketingEmails: false,
          darkMode: true,
          soundEffects: true,
          newFollowerAlerts: true,
          teamNotifications: true,
          showTeam: true,
          showSpending: true,
          showRank: true,
          showBadges: true
        }
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Handle user registration
  const register = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulating API call for registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration and auto-login
      const newUser: UserProfile = {
        id: `user${Date.now()}`,
        username,
        email,
        profileImage: `https://api.dicebear.com/7.x/personas/svg?seed=${username}`,
        joinedDate: new Date().toISOString(),
        rank: 9999,
        totalSpent: 0,
        amountSpent: 0, // Add amountSpent to fix the error
        tier: "free",
        isVerified: false,
        walletBalance: 10, // Starting bonus
        followers: [], // Initialize as empty array
        following: [], // Initialize as empty array
        settings: {
          profileVisibility: "public",
          allowProfileLinks: true,
          theme: "dark",
          notifications: true,
          emailNotifications: true,
          marketingEmails: false,
          darkMode: true,
          soundEffects: true,
          newFollowerAlerts: true,
          teamNotifications: true,
          showTeam: true,
          showSpending: true,
          showRank: true,
          showBadges: true
        }
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Handle user logout
  const logout = async () => {
    setIsLoading(true);
    try {
      // Simulating API call for logout
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('user');
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update user profile
  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return false;
    
    try {
      // Simulating API call for profile update
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error("Profile update error:", error);
      return false;
    }
  };

  // Award a cosmetic to the user
  const awardCosmetic = async (category: string, itemId: string, notify: boolean = true) => {
    if (!user) return false;
    
    try {
      // Simulate API call to award cosmetic
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update user's cosmetics
      const currentCosmetics = user.cosmetics || {};
      const updatedCosmetics = { ...currentCosmetics };
      
      // Handle different category structures
      if (!updatedCosmetics[category]) {
        updatedCosmetics[category] = [];
      }
      
      if (Array.isArray(updatedCosmetics[category])) {
        // Only add if it doesn't already exist
        if (!(updatedCosmetics[category] as string[]).includes(itemId)) {
          (updatedCosmetics[category] as string[]).push(itemId);
        }
      } else if (typeof updatedCosmetics[category] === 'object') {
        // Handle object structure
        updatedCosmetics[category] = {
          ...(updatedCosmetics[category] as Record<string, string>),
          [itemId]: itemId
        };
      }
      
      // Update the user with new cosmetics
      const updatedUser = { 
        ...user, 
        cosmetics: updatedCosmetics 
      };
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return true;
    } catch (error) {
      console.error("Error awarding cosmetic:", error);
      return false;
    }
  };

  // Create the context value object to provide to consumers
  const contextValue: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signIn: login, // Alias for login
    register,
    logout,
    signOut: logout, // Alias for logout
    updateUser: updateUserProfile, // Alias for updateUserProfile
    updateUserProfile,
    awardCosmetic
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
