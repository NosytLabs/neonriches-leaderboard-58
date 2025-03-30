
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';
import { AuthContextType } from '@/types/auth-context';
import { useToast } from '@/hooks/use-toast';

// Create a mock initial user
const mockUser: UserProfile = {
  id: '1',
  username: 'royaluser',
  displayName: 'Royal User',
  profileImage: '/images/avatars/default.png',
  email: 'user@spendthrone.com',
  bio: 'A loyal supporter of the throne',
  totalSpent: 1500,
  amountSpent: 1500,
  walletBalance: 500,
  rank: 42,
  previousRank: 45,
  tier: 'silver',
  joinedAt: new Date().toISOString(),
  team: 'blue',
};

// Create auth context with default values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  logout: async () => {},
  register: async () => false,
  updateUserProfile: async () => {},
  awardCosmetic: async () => false,
  signIn: async () => false,
  signOut: async () => {},
});

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(mockUser);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Mock login implementation
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      console.log('Login attempt with:', email);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(mockUser);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock register implementation
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      console.log('Register attempt with:', username, email);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({
        ...mockUser,
        username,
        email,
      });
      return true;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock logout implementation
  const logout = async (): Promise<void> => {
    setUser(null);
  };

  // Mock update user implementation
  const updateUser = async (userData: Partial<UserProfile>): Promise<boolean> => {
    setIsLoading(true);
    try {
      console.log('Updating user:', userData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser(prev => prev ? { ...prev, ...userData } : null);
      return true;
    } catch (error) {
      console.error('Update user error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Award cosmetic items to user
  const awardCosmetic = async (category: string, itemId: string, notify = true): Promise<boolean> => {
    console.log(`Awarding cosmetic: ${category} - ${itemId}, notify: ${notify}`);
    return true;
  };

  // Alias methods for backward compatibility
  const signIn = login;
  const signOut = logout;
  const updateUserProfile = async (updates: Partial<UserProfile>): Promise<void> => {
    await updateUser(updates);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        register,
        updateUserProfile,
        awardCosmetic,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Export UserProfile for typechecking
export type { UserProfile };
