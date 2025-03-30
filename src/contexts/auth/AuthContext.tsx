
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types/user';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (updates: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  updateUserProfile: async () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

// Mock user data
const mockUser: User = {
  id: '1',
  username: 'LordCashington',
  displayName: 'Lord Cashington III',
  email: 'lord@example.com',
  joinedAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  tier: 'premium',
  team: 'red',
  rank: 42,
  walletBalance: 1500,
  amountSpent: 5000,
  profileImage: 'https://i.pravatar.cc/150?img=3'
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for user session
    const storedUser = localStorage.getItem('spendthrone_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Save user to state and local storage
    setUser(mockUser);
    localStorage.setItem('spendthrone_user', JSON.stringify(mockUser));
  };

  const register = async (email: string, password: string, username: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create custom user with provided username
    const newUser = {
      ...mockUser,
      username,
      displayName: username,
      email,
      rank: 0,
      walletBalance: 0,
      amountSpent: 0
    };
    
    // Save user to state and local storage
    setUser(newUser);
    localStorage.setItem('spendthrone_user', JSON.stringify(newUser));
  };

  const logout = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Clear user from state and local storage
    setUser(null);
    localStorage.removeItem('spendthrone_user');
  };

  const updateUserProfile = async (updates: Partial<User>) => {
    if (!user) return;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('spendthrone_user', JSON.stringify(updatedUser));
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
        updateUserProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
