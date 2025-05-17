
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

// Mock user data structure
interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  totalSpent?: number;
  rank?: number;
  tier?: string;
  team?: string;
  walletBalance?: number;
  isVIP?: boolean;
  joinedDate?: string;
  lastActive?: string;
  cosmetics?: Record<string, string[]>;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  updateUserProfile: (updates: Partial<User>) => Promise<boolean>;
  awardCosmetic: (category: string, itemId: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  login: async () => false,
  logout: () => {},
  register: async () => false,
  updateUserProfile: async () => false,
  awardCosmetic: async () => false
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulate checking if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      try {
        // In a real app, check if session exists in localStorage or via API
        const savedUser = localStorage.getItem('spendthrone_user');
        
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (err) {
        console.error('Error checking authentication:', err);
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
  }, []);

  const login = useCallback(async (username: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call for login
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock user for demo
      const mockUser: User = {
        id: 'user-123',
        username,
        displayName: username.charAt(0).toUpperCase() + username.slice(1),
        profileImage: '/assets/default-avatar.png',
        totalSpent: 1500,
        rank: 15,
        tier: 'premium',
        team: 'red',
        walletBalance: 500,
        isVIP: false,
        joinedDate: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        cosmetics: {
          border: [],
          color: [],
          font: []
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(mockUser));
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to login');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('spendthrone_user');
  }, []);

  const register = useCallback(async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user for demo
      const mockUser: User = {
        id: 'user-' + Date.now(),
        username,
        email,
        displayName: username.charAt(0).toUpperCase() + username.slice(1),
        profileImage: '/assets/default-avatar.png',
        totalSpent: 0,
        rank: 999,
        tier: 'basic',
        team: 'neutral',
        walletBalance: 0,
        isVIP: false,
        joinedDate: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        cosmetics: {
          border: [],
          color: [],
          font: []
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(mockUser));
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to register');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateUserProfile = useCallback(async (updates: Partial<User>): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(updatedUser));
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
      return false;
    }
  }, [user]);
  
  const awardCosmetic = useCallback(async (category: string, itemId: string): Promise<boolean> => {
    try {
      if (!user || !user.cosmetics) return false;
      
      // Check if the cosmetic category exists
      if (!user.cosmetics[category]) {
        user.cosmetics[category] = [];
      }
      
      // Check if user already has this cosmetic
      if (user.cosmetics[category].includes(itemId)) {
        return true; // Already owned
      }
      
      // Add the cosmetic
      const updatedCosmetics = {
        ...user.cosmetics,
        [category]: [...user.cosmetics[category], itemId]
      };
      
      const updatedUser = {
        ...user,
        cosmetics: updatedCosmetics
      };
      
      setUser(updatedUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(updatedUser));
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to award cosmetic');
      return false;
    }
  }, [user]);

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    register,
    updateUserProfile,
    awardCosmetic
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use authentication context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;
