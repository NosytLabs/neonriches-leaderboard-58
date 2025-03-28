
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  profileImage?: string;
  walletBalance?: number;
  team?: string;
  tier?: 'free' | 'pro';
  spendStreak?: number;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (email: string, username: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  updateUserProfile: (updates: Partial<User>) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demonstration
const MOCK_USER: User = {
  id: 'user-1',
  username: 'RoyalSpender',
  email: 'royal@example.com',
  profileImage: 'https://i.pravatar.cc/150?img=11',
  walletBalance: 100,
  team: 'red',
  tier: 'free',
  spendStreak: 3
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('spendthrone_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse user from localStorage', error);
      }
    }
    
    // Demo: Auto-login with mock user for development
    if (process.env.NODE_ENV === 'development' && !savedUser) {
      setUser(MOCK_USER);
      localStorage.setItem('spendthrone_user', JSON.stringify(MOCK_USER));
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // This would be a real API call in a production app
      console.log('Login attempt', { email, password });
      
      // Mock successful login for demo
      setUser(MOCK_USER);
      localStorage.setItem('spendthrone_user', JSON.stringify(MOCK_USER));
      
      return { success: true };
    } catch (error) {
      console.error('Login failed', error);
      return { 
        success: false, 
        message: 'Login failed. Please check your credentials and try again.' 
      };
    }
  };

  const register = async (email: string, username: string, password: string) => {
    try {
      // This would be a real API call in a production app
      console.log('Register attempt', { email, username, password });
      
      // Mock successful registration for demo
      const newUser = { ...MOCK_USER, email, username };
      setUser(newUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(newUser));
      
      return { success: true };
    } catch (error) {
      console.error('Registration failed', error);
      return { 
        success: false, 
        message: 'Registration failed. Please try again later.' 
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('spendthrone_user');
  };

  const updateUserProfile = async (updates: Partial<User>) => {
    try {
      if (!user) return false;
      
      // This would be a real API call in a production app
      console.log('Updating user profile', updates);
      
      // Update user locally
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('spendthrone_user', JSON.stringify(updatedUser));
      
      return true;
    } catch (error) {
      console.error('Failed to update user profile', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// For compatibility with existing code
export { AuthContext };
