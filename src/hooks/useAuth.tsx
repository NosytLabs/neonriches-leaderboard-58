
import React, { createContext, useContext, useState } from 'react';

type User = {
  id: string;
  username?: string;
  displayName?: string;
  profileImage?: string;
  email?: string;
  rank?: number;
  walletBalance?: number;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (credentials: { username: string; password: string }) => {
    setIsLoading(true);
    // Mock login
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser({
          id: '123',
          username: credentials.username,
          displayName: 'Royal User',
          rank: 42,
          walletBalance: 1000
        });
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  };

  const logout = async () => {
    setIsLoading(true);
    // Mock logout
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(null);
        setIsLoading(false);
        resolve();
      }, 500);
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

export default useAuth;
