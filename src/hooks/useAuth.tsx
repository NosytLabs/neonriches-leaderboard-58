
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types/user';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<boolean>;
  awardCosmetic?: (cosmeticType: string, cosmeticId: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  logout: async () => {},
  register: async () => false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      try {
        // Simulate auth check
        const mockUser: User = {
          id: '123',
          username: 'royaluser',
          displayName: 'Lord Spendington',
          profileImage: '/images/avatars/default.jpg',
          walletBalance: 5000,
          rank: 42,
          tier: 'premium',
          team: 'gold',
        };
        
        setUser(mockUser);
      } catch (error) {
        console.error('Session check failed:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      // Simulate login
      setUser({
        id: '123',
        username: 'royaluser',
        displayName: 'Lord Spendington',
        profileImage: '/images/avatars/default.jpg',
        walletBalance: 5000,
        rank: 42,
        tier: 'premium',
        team: 'gold',
      });
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      // Simulate logout
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, username: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      // Simulate registration
      setUser({
        id: '123',
        username,
        displayName: username,
        profileImage: '/images/avatars/default.jpg',
        walletBalance: 1000,
        rank: 999,
        tier: 'basic',
      });
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const awardCosmetic = async (cosmeticType: string, cosmeticId: string): Promise<boolean> => {
    try {
      // Simulate awarding a cosmetic
      console.log(`Awarding ${cosmeticType}: ${cosmeticId}`);
      return true;
    } catch (error) {
      console.error('Failed to award cosmetic:', error);
      return false;
    }
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
        awardCosmetic
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
