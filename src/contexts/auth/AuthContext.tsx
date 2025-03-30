
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { signInWithEmail, signUpWithEmail, signOut } from '@/services/authService';

interface User {
  id: string;
  email: string;
  username: string;
  displayName?: string;
  walletBalance: number;
  rank: number;
  team?: 'red' | 'green' | 'blue' | null;
  joined: Date;
  spentTotal: number;
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile?: (updates: Partial<User>) => Promise<void>;
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

// Create a provider component
export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for stored user data on component mount
    const storedUser = localStorage.getItem('spendthrone_user');
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        localStorage.removeItem('spendthrone_user');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const success = await signInWithEmail(email, password);
      
      if (success) {
        // Simulate user data fetch from API
        const mockUser: User = {
          id: 'user_' + Date.now(),
          email,
          username: email.split('@')[0],
          displayName: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
          walletBalance: 100,
          rank: Math.floor(Math.random() * 100) + 1,
          team: Math.random() > 0.5 ? (Math.random() > 0.5 ? 'red' : 'green') : 'blue',
          joined: new Date(),
          spentTotal: 0
        };
        
        setUser(mockUser);
        localStorage.setItem('spendthrone_user', JSON.stringify(mockUser));
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      const success = await signUpWithEmail(email, password);
      
      if (success) {
        // Simulate user data creation
        const mockUser: User = {
          id: 'user_' + Date.now(),
          email,
          username,
          displayName: username,
          walletBalance: 50, // New users get starting balance
          rank: Math.floor(Math.random() * 1000) + 100, // Initial rank
          joined: new Date(),
          spentTotal: 0
        };
        
        setUser(mockUser);
        localStorage.setItem('spendthrone_user', JSON.stringify(mockUser));
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await signOut();
      setUser(null);
      localStorage.removeItem('spendthrone_user');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserProfile = async (updates: Partial<User>) => {
    try {
      if (!user) throw new Error('No user to update');
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(updatedUser));
      return Promise.resolve();
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;
