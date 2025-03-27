
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserRole, UserRolePermissions, MfaSettings, UserSubscription, getRolePermissions, hasPermission } from '@/types/auth';

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
  gender?: 'king' | 'queen' | 'jester' | null;
  role?: UserRole;
  mfaSettings?: MfaSettings;
  subscription?: UserSubscription;
  emailVerified?: boolean;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  signUp: (email: string, username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (profileData: Partial<UserProfile>) => Promise<void>;
  hasPermission: (permission: keyof UserRolePermissions) => boolean;
  getRolePermissions: () => UserRolePermissions | null;
  subscription: UserSubscription | null;
  isSubscriptionActive: boolean;
  activeSessions: number;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  updateProfile: async () => {},
  hasPermission: () => false,
  getRolePermissions: () => null,
  subscription: null,
  isSubscriptionActive: false,
  activeSessions: 0
});

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
  lastSpendDate: new Date(),
  gender: 'jester',
  role: 'premium',
  mfaSettings: {
    enabled: true,
    method: 'app',
    verified: true,
    lastVerified: new Date()
  },
  subscription: {
    id: 'sub_123456',
    tier: 'pro',
    status: 'active',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2024-01-01'),
    renewalDate: new Date('2023-02-01'),
    paymentMethod: 'credit_card',
    autoRenew: true,
    price: 9.99,
    interval: 'monthly',
    features: ['5 images', '5 links', 'custom borders', 'video embeds']
  },
  emailVerified: true
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const [activeSessions, setActiveSessions] = useState(0);
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const localStorageKey = 'p2w_user';
  const sessionStorageKey = 'p2w_session_user';

  // Mock authentication - would be replaced with real authentication
  useEffect(() => {
    // Simulate loading user data
    const checkAuth = async () => {
      try {
        // Check localStorage first (for remember me)
        const savedUser = localStorage.getItem(localStorageKey);
        
        if (savedUser) {
          try {
            const parsedUser = JSON.parse(savedUser);
            // Convert string dates back to Date objects
            parsedUser.joinedAt = new Date(parsedUser.joinedAt);
            if (parsedUser.lastSpendDate) {
              parsedUser.lastSpendDate = new Date(parsedUser.lastSpendDate);
            }
            if (parsedUser.mfaSettings?.lastVerified) {
              parsedUser.mfaSettings.lastVerified = new Date(parsedUser.mfaSettings.lastVerified);
            }
            if (parsedUser.subscription) {
              parsedUser.subscription.startDate = new Date(parsedUser.subscription.startDate);
              parsedUser.subscription.endDate = new Date(parsedUser.subscription.endDate);
              if (parsedUser.subscription.renewalDate) {
                parsedUser.subscription.renewalDate = new Date(parsedUser.subscription.renewalDate);
              }
              setSubscription(parsedUser.subscription);
            }
            setUser(parsedUser);
          } catch (parseError) {
            console.error('Error parsing saved user from localStorage:', parseError);
            localStorage.removeItem(localStorageKey);
          }
        } else {
          // If not found in localStorage, check sessionStorage (for session-only login)
          const sessionUser = sessionStorage.getItem(sessionStorageKey);
          
          if (sessionUser) {
            try {
              const parsedUser = JSON.parse(sessionUser);
              // Convert string dates back to Date objects
              parsedUser.joinedAt = new Date(parsedUser.joinedAt);
              if (parsedUser.lastSpendDate) {
                parsedUser.lastSpendDate = new Date(parsedUser.lastSpendDate);
              }
              if (parsedUser.mfaSettings?.lastVerified) {
                parsedUser.mfaSettings.lastVerified = new Date(parsedUser.mfaSettings.lastVerified);
              }
              if (parsedUser.subscription) {
                parsedUser.subscription.startDate = new Date(parsedUser.subscription.startDate);
                parsedUser.subscription.endDate = new Date(parsedUser.subscription.endDate);
                if (parsedUser.subscription.renewalDate) {
                  parsedUser.subscription.renewalDate = new Date(parsedUser.subscription.renewalDate);
                }
                setSubscription(parsedUser.subscription);
              }
              setUser(parsedUser);
            } catch (parseError) {
              console.error('Error parsing saved user from sessionStorage:', parseError);
              sessionStorage.removeItem(sessionStorageKey);
            }
          }
        }
        
        // Mock multiple sessions
        setActiveSessions(Math.floor(Math.random() * 3) + 1);
        
      } catch (error) {
        console.error('Auth error:', error);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string, rememberMe = false) => {
    setLoading(true);
    try {
      // Mock sign in - would call an API in a real app
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just use our mock user
      setUser(MOCK_USER);
      setSubscription(MOCK_USER.subscription || null);
      
      // Store user data based on remember me preference
      if (rememberMe) {
        localStorage.setItem(localStorageKey, JSON.stringify(MOCK_USER));
      } else {
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(MOCK_USER));
      }
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
        id: Math.random().toString(36).substring(2, 9),
        email,
        username,
        amountSpent: 0,
        rank: 999,
        team: null,
        tier: 'free',
        joinedAt: new Date(),
        spendStreak: 0,
        role: 'user',
        mfaSettings: {
          enabled: false,
          method: 'email',
          verified: false
        },
        subscription: null,
        emailVerified: false
      };
      
      setUser(newUser);
      setSubscription(null);
      
      // For new users, store in session storage by default
      sessionStorage.setItem(sessionStorageKey, JSON.stringify(newUser));
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      // Mock sign out
      setUser(null);
      setSubscription(null);
      localStorage.removeItem(localStorageKey);
      sessionStorage.removeItem(sessionStorageKey);
      return Promise.resolve();
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  const updateProfile = async (profileData: Partial<UserProfile>) => {
    try {
      if (!user) throw new Error('No user logged in');
      
      const updatedUser = { ...user, ...profileData };
      setUser(updatedUser);
      
      if (profileData.subscription) {
        setSubscription(profileData.subscription);
      }
      
      // Update in both storages to ensure consistency
      if (localStorage.getItem(localStorageKey)) {
        localStorage.setItem(localStorageKey, JSON.stringify(updatedUser));
      }
      
      if (sessionStorage.getItem(sessionStorageKey)) {
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(updatedUser));
      }
      
      return Promise.resolve();
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  };

  const checkPermission = (permission: keyof UserRolePermissions): boolean => {
    if (!user || !user.role) return false;
    return hasPermission(user.role, permission);
  };

  const getUserRolePermissions = (): UserRolePermissions | null => {
    if (!user || !user.role) return null;
    return getRolePermissions(user.role);
  };

  const isSubActive = !!subscription && subscription.status === 'active' && new Date(subscription.endDate) > new Date();

  // Only render children once we've checked authentication
  if (!initialized) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-royal-gold border-t-transparent"></div>
          <p className="text-white/70 text-lg">Loading royal experience...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        signIn, 
        signUp, 
        signOut, 
        updateProfile,
        hasPermission: checkPermission,
        getRolePermissions: getUserRolePermissions,
        subscription,
        isSubscriptionActive: isSubActive,
        activeSessions
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
