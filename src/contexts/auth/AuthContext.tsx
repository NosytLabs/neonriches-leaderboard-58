
import React, { createContext, useContext, useState } from 'react';
import { AuthContextType, UserProfile, AuthProviderProps } from './types';

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
  register: async () => false,
  updateUser: async () => false,
  isLoading: false
});

// Mock user data
const mockUser: UserProfile = {
  id: 'user-1',
  username: 'royaluser',
  displayName: 'Royal User',
  email: 'user@example.com',
  profileImage: '/throne-assets/avatars/default.jpg',
  bio: 'A noble in the digital kingdom',
  totalSpent: 250,
  amountSpent: 250,
  walletBalance: 500,
  rank: 10,
  previousRank: 12,
  team: 'red',
  tier: 'gold',
  gender: 'prefer-not-to-say',
  joinedAt: new Date().toISOString(),
  lastLogin: new Date().toISOString(),
  cosmetics: {
    badges: ['early-supporter'],
    titles: ['duke'],
    borders: ['gold'],
    effects: ['sparkle'],
    emojis: ['crown'],
    boosts: []
  },
  subscription: {
    tier: 'gold',
    startDate: new Date().toISOString(),
    endDate: null,
    autoRenew: true,
    price: 9.99
  },
  socialLinks: [],
  profileBoosts: [],
  walletAddress: '0x1234'
};

// Provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(mockUser); // For development, start logged in
  const [isLoading, setIsLoading] = useState(false);

  // Simplified login function
  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo/development, always succeed with mock user
      setUser(mockUser);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = (): void => {
    setUser(null);
  };

  // Register function
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a new user based on the mock user
      const newUser: UserProfile = {
        ...mockUser,
        id: `user-${Date.now()}`,
        username,
        email,
        displayName: username,
      };
      
      setUser(newUser);
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Update user function
  const updateUser = async (userData: Partial<UserProfile>): Promise<boolean> => {
    if (!user) return false;
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUser({
        ...user,
        ...userData
      });
      
      return true;
    } catch (error) {
      console.error('User update failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Create the context value
  const contextValue: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    updateUser,
    isLoading
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
