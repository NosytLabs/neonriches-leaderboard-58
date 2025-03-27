import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserSubscription } from '@/types/auth';
// Include wallet-related properties in UserProfile
export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  profileImage: string;
  amountSpent: number;
  rank: number;
  team: 'red' | 'green' | 'blue' | null;
  tier: 'free' | 'pro';
  gender?: 'king' | 'queen' | 'jester' | null;
  lastSpendDate?: Date | null;
  walletBalance?: number;
  acceptedTerms?: boolean;
  termsAcceptedDate?: string;
  subscription?: UserSubscription;
}

export interface AuthContextType {
  user: UserProfile | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signOut: () => void;
  loading: boolean;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  subscription: UserSubscription | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Update the mock user data to include wallet-related properties
const mockUser: UserProfile = {
  id: '1',
  username: 'NeonBoss',
  email: 'user@example.com',
  profileImage: 'https://i.pravatar.cc/150?img=1',
  amountSpent: 1500,
  rank: 1,
  team: 'red',
  tier: 'pro',
  walletBalance: 250,
  acceptedTerms: false,
  gender: 'king',
  subscription: {
    id: 'sub_123',
    tier: 'pro',
    status: 'active',
    startDate: new Date(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    paymentMethod: 'credit_card',
    autoRenew: true,
    price: 25,
    interval: 'monthly',
    features: [
      'Advanced profile customization',
      'Reduced advertisement costs',
      'Analytics dashboard',
      'Custom RGB effects'
    ]
  }
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    // Get user from localStorage on initial load
    const storedUser = localStorage.getItem('p2w_user');
    return storedUser ? JSON.parse(storedUser) : mockUser;
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Persist user to localStorage whenever it changes
    if (user) {
      localStorage.setItem('p2w_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('p2w_user');
    }
  }, [user]);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    return new Promise<void>((resolve) => {
      // Simulate authentication
      setTimeout(() => {
        const mockAuth = email === 'user@example.com' && password === 'password';
        if (mockAuth) {
          setUser(mockUser);
          navigate('/dashboard');
        } else {
          console.error('Invalid credentials');
        }
        setLoading(false);
        resolve();
      }, 1000);
    });
  };

  const signUp = async (email: string, password: string, username: string) => {
    setLoading(true);
    return new Promise<void>((resolve) => {
      // Simulate registration
      setTimeout(() => {
        const newUser: UserProfile = {
          id: Math.random().toString(36).substring(2, 9),
          username,
          email,
          profileImage: 'https://i.pravatar.cc/150?img=11',
          amountSpent: 0,
          rank: 100,
          team: null,
          tier: 'free',
          walletBalance: 0,
          acceptedTerms: false,
          subscription: undefined
        };
        setUser(newUser);
        navigate('/dashboard');
        setLoading(false);
        resolve();
      }, 1500);
    });
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('p2w_user');
    navigate('/auth');
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    return new Promise<void>((resolve) => {
      // Simulate network delay
      setTimeout(() => {
        if (user) {
          const updatedUser = { ...user, ...data };
          setUser(updatedUser);
          
          // Store updated user in localStorage for persistence
          localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
        }
        resolve();
      }, 500);
    });
  };

  // Check if user has accepted terms
  useEffect(() => {
    if (user && !user.acceptedTerms) {
      const acceptedTerms = localStorage.getItem('acceptedTerms') === 'true';
      const termsAcceptedDate = localStorage.getItem('termsAcceptedDate');
      
      if (acceptedTerms && termsAcceptedDate) {
        updateProfile({ 
          acceptedTerms: true,
          termsAcceptedDate
        });
      }
    }
  }, [user]);

  const contextValue = {
    user,
    signIn,
    signUp,
    signOut,
    loading,
    updateProfile,
    subscription: user?.subscription || null
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
