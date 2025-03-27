
import React, { createContext, useContext, useState, useEffect } from 'react';

// User types
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  amountSpent: number;
  rank: number;
  team: 'red' | 'green' | 'blue' | null;
  joinedAt: Date;
  tier: 'free' | 'pro';
  profileImage?: string;
  spendStreak: number;
  lastSpendDate?: Date;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (profileData: Partial<UserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - in a real app, this would come from a database
const MOCK_USER: UserProfile = {
  id: '1',
  username: 'NeonBoss',
  email: 'user@example.com',
  amountSpent: 1500,
  rank: 1,
  team: 'red',
  joinedAt: new Date('2023-01-01'),
  tier: 'pro',
  profileImage: 'https://i.pravatar.cc/150?img=1',
  spendStreak: 4,
  lastSpendDate: new Date()
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication - would be replaced with real authentication
  useEffect(() => {
    // Simulate loading user data
    const checkAuth = async () => {
      try {
        // In a real app, this would check localStorage/cookies and validate with backend
        const savedUser = localStorage.getItem('p2w_user');
        
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
        
      } catch (error) {
        console.error('Auth error:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock sign in - would call an API in a real app
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just use our mock user
      setUser(MOCK_USER);
      localStorage.setItem('p2w_user', JSON.stringify(MOCK_USER));
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, username: string, password: string) => {
    setLoading(true);
    try {
      // Mock sign up - would call an API in a real app
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: UserProfile = {
        ...MOCK_USER,
        id: Math.random().toString(36).substr(2, 9),
        email,
        username,
        amountSpent: 0,
        rank: 999,
        team: null,
        tier: 'free',
        joinedAt: new Date(),
        spendStreak: 0
      };
      
      setUser(newUser);
      localStorage.setItem('p2w_user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    // Mock sign out
    setUser(null);
    localStorage.removeItem('p2w_user');
    return Promise.resolve();
  };

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    if (!user) throw new Error('No user logged in');
    
    const updatedUser = { ...user, ...profileData };
    setUser(updatedUser);
    localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, updateProfile }}>
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
