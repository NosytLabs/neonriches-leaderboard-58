import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserSubscription } from '@/types/auth';

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
  spendStreak?: number;
  role?: 'user' | 'premium' | 'moderator' | 'admin';
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
  spendStreak: 3,
  role: 'premium',
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
  const navigate = useNavigate();
  const location = useLocation();
  
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const storedUser = localStorage.getItem('p2w_user');
      return storedUser ? JSON.parse(storedUser) : mockUser;
    } catch (error) {
      console.error('Failed to load user from localStorage:', error);
      return mockUser;
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem('p2w_user', JSON.stringify(user));
      } catch (error) {
        console.error('Failed to save user to localStorage:', error);
      }
    } else {
      try {
        localStorage.removeItem('p2w_user');
      } catch (error) {
        console.error('Failed to remove user from localStorage:', error);
      }
    }
  }, [user]);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        try {
          const mockAuth = email === 'user@example.com' && password === 'password';
          if (mockAuth) {
            setUser(mockUser);
            navigate('/dashboard');
          } else {
            console.error('Invalid credentials');
          }
        } catch (error) {
          console.error('Error during sign in:', error);
        } finally {
          setLoading(false);
          resolve();
        }
      }, 1000);
    });
  };

  const signUp = async (email: string, password: string, username: string) => {
    setLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        try {
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
        } catch (error) {
          console.error('Error during sign up:', error);
        } finally {
          setLoading(false);
          resolve();
        }
      }, 1500);
    });
  };

  const signOut = () => {
    try {
      setUser(null);
      localStorage.removeItem('p2w_user');
      navigate('/auth');
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        try {
          if (user) {
            const updatedUser = { ...user, ...data };
            setUser(updatedUser);
            localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
          }
        } catch (error) {
          console.error('Error updating profile:', error);
        } finally {
          resolve();
        }
      }, 500);
    });
  };

  useEffect(() => {
    if (user && !user.acceptedTerms) {
      try {
        const acceptedTerms = localStorage.getItem('acceptedTerms') === 'true';
        const termsAcceptedDate = localStorage.getItem('termsAcceptedDate');
        
        if (acceptedTerms && termsAcceptedDate) {
          updateProfile({ 
            acceptedTerms: true,
            termsAcceptedDate
          });
        }
      } catch (error) {
        console.error('Error checking terms acceptance:', error);
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
