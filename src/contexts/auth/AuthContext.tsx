
import React, { createContext, useState, useEffect, useContext } from 'react';
import { signInWithEmail, signUpWithEmail, signOut } from '@/services/authService';
import { UserProfile } from '@/types/user';

export interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    
    try {
      const success = await signInWithEmail(email, password);
      
      if (success) {
        // Simulate user data fetch from API
        const mockUser: UserProfile = {
          id: 'user_' + Date.now(),
          email,
          username: email.split('@')[0],
          displayName: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
          walletBalance: 100,
          rank: Math.floor(Math.random() * 100) + 1,
          team: Math.random() > 0.5 ? (Math.random() > 0.5 ? 'red' : 'green') : 'blue',
          joined: new Date(),
          spentTotal: 0,
          amountSpent: Math.floor(Math.random() * 1000),
          tier: 'basic'
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
    setIsLoading(true);
    
    try {
      const success = await signUpWithEmail(email, password);
      
      if (success) {
        // Simulate user data creation
        const mockUser: UserProfile = {
          id: 'user_' + Date.now(),
          email,
          username,
          displayName: username,
          walletBalance: 50, // New users get starting balance
          rank: Math.floor(Math.random() * 1000) + 100, // Initial rank
          joined: new Date(),
          spentTotal: 0,
          amountSpent: 0,
          tier: 'basic'
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
    setIsLoading(true);
    
    try {
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

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      isAuthenticated: !!user, 
      login, 
      register, 
      logout 
    }}>
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
