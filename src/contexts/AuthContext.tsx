
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  profileImage?: string;
  amountSpent: number;
  walletBalance: number;
  rank: number;
  spendStreak: number;
  tier: string;
  team?: 'red' | 'green' | 'blue' | null;
  gender?: 'king' | 'queen' | 'jester' | null;
  cosmetics?: {
    decorations?: string[];
    colors?: string[];
    fonts?: string[];
    emojis?: string[];
  };
  subscription?: UserSubscription;
  role?: string;
}

export interface UserSubscription {
  id: string;
  tier: string;
  status: 'active' | 'canceled' | 'expired';
  startDate: Date;
  endDate: Date;
  renewalDate?: Date;
  paymentMethod: string;
  autoRenew: boolean;
  price: number;
  interval: 'monthly' | 'quarterly' | 'annual';
  features: string[];
}

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  updateUserProfile: (userData: Partial<UserProfile>) => Promise<void>;
  subscription?: UserSubscription | null;
  updateProfile: (userData: Partial<UserProfile>) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for existing session on component mount
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('p2w_user');
        
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a mock user
      const mockUser: UserProfile = {
        id: '123456',
        username: 'RoyalUser',
        email: email,
        profileImage: 'https://i.pravatar.cc/150?img=3',
        amountSpent: 250,
        walletBalance: 100,
        rank: 42,
        spendStreak: 3,
        tier: 'octopus',
        team: 'blue',
        gender: 'king',
        cosmetics: {
          decorations: ['royal-crown'],
          colors: ['royal-gold'],
          fonts: [],
          emojis: ['crown-emoji']
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('p2w_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, username: string) => {
    setLoading(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a mock user
      const mockUser: UserProfile = {
        id: '123456',
        username: username,
        email: email,
        profileImage: 'https://i.pravatar.cc/150?img=5',
        amountSpent: 0,
        walletBalance: 50, // Welcome bonus
        rank: 999,
        spendStreak: 0,
        tier: 'crab',
        gender: 'jester',
        cosmetics: {
          decorations: [],
          colors: [],
          fonts: [],
          emojis: []
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('p2w_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      // Clear user from state and storage
      setUser(null);
      localStorage.removeItem('p2w_user');
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const updateUserProfile = async (userData: Partial<UserProfile>) => {
    if (!user) throw new Error("No user logged in");
    
    try {
      // Merge the existing user data with the updates
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
      return;
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  };

  // Aliases for compatibility
  const updateProfile = updateUserProfile;
  const signOut = logout;

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      loading, 
      updateUserProfile,
      updateProfile,
      signOut,
      subscription: user?.subscription
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
