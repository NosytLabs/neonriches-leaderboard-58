
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { User, UserProfile } from '@/types/user';
import { adaptUserProfileToUser } from '@/utils/userAdapter';

// Define the shape of our auth context
interface AuthContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (code: string, newPassword: string) => Promise<void>;
  getToken: () => Promise<string | null>;
  refreshToken: () => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  boostProfile: (days: number, level: number) => Promise<boolean>;
  awardCosmetic: (id: string, category: string, rarity: string, source: string) => Promise<boolean>;
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType | null>(null);

// The provider component that will wrap the app
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        // This would normally check with your backend/auth provider
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to restore session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  // Helper to save user to local storage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Login function
  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      // This would call your auth API
      // For demo purposes, we're just setting a mock user
      const mockUser: UserProfile = {
        id: 'user123',
        username: email.split('@')[0],
        email,
        displayName: email.split('@')[0],
        role: 'user',
        walletBalance: 1000,
        totalSpent: 0,
        joinDate: new Date().toISOString(),
        rank: 100,
      };
      
      setUser(mockUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // Call logout API if needed
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Alias for logout
  const signOut = logout;

  // Signup function
  const signup = async (email: string, password: string, username: string): Promise<void> => {
    setIsLoading(true);
    try {
      // This would call your signup API
      const mockUser: UserProfile = {
        id: `user_${Date.now()}`,
        username,
        email,
        displayName: username,
        role: 'user',
        walletBalance: 100, // Starting balance
        totalSpent: 0,
        joinDate: new Date().toISOString(),
        rank: 999, // Starting rank
      };
      
      setUser(mockUser);
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Alias for signup with different parameter order
  const register = async (username: string, email: string, password: string): Promise<void> => {
    return signup(email, password, username);
  };

  // Update profile function
  const updateProfile = async (data: Partial<UserProfile>): Promise<void> => {
    if (!user) return;
    
    try {
      // This would call your update profile API
      setUser({...user, ...data});
    } catch (error) {
      console.error('Update profile failed:', error);
      throw error;
    }
  };

  // Alias for updateProfile to maintain consistency with prop names in components
  const updateUserProfile = updateProfile;

  // Password reset request
  const forgotPassword = async (email: string): Promise<void> => {
    try {
      // This would call your password reset API
      console.log(`Password reset requested for: ${email}`);
    } catch (error) {
      console.error('Forgot password request failed:', error);
      throw error;
    }
  };

  // Password reset with code
  const resetPassword = async (code: string, newPassword: string): Promise<void> => {
    try {
      // This would call your password reset confirmation API
      console.log(`Resetting password with code: ${code}`);
    } catch (error) {
      console.error('Password reset failed:', error);
      throw error;
    }
  };

  // Get authentication token
  const getToken = async (): Promise<string | null> => {
    // This would normally get token from secure storage or refresh if needed
    return user ? 'mock-jwt-token' : null;
  };

  // Refresh auth token
  const refreshToken = async (): Promise<boolean> => {
    // This would normally call your token refresh API
    return !!user;
  };

  // Open auth modal
  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  // Close auth modal
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  // Boost profile
  const boostProfile = async (days: number = 1, level: number = 1): Promise<boolean> => {
    try {
      if (!user) return false;
      
      const now = new Date();
      const endDate = new Date(now);
      endDate.setDate(endDate.getDate() + days);
      
      const newBoost = {
        id: `boost_${Date.now()}`,
        startDate: now.toISOString(),
        endDate: endDate.toISOString(),
        level,
        effectId: level === 3 ? 'crown' : level === 2 ? 'sparkle' : 'glow',
        type: 'visibility',
        strength: level,
        appliedBy: user.id
      };
      
      const currentBoosts = user.profileBoosts || [];
      const updatedBoosts = [...currentBoosts, newBoost];
      
      await updateUserProfile({
        profileBoosts: updatedBoosts
      });
      
      return true;
    } catch (error) {
      console.error('Boost profile error:', error);
      return false;
    }
  };

  // Award cosmetic
  const awardCosmetic = async (
    cosmeticId: string, 
    category: string, 
    rarity: string, 
    source: string
  ): Promise<boolean> => {
    try {
      if (!user) return false;
      
      // Get current cosmetics
      const cosmetics = user.cosmetics || {
        borders: [],
        colors: [],
        fonts: [],
        emojis: [],
        titles: [],
        backgrounds: [],
        effects: [],
        badges: [],
        themes: [],
      };
      
      // Add cosmetic to the appropriate category
      // @ts-ignore - We're using dynamic property access
      if (!cosmetics[category].includes(cosmeticId)) {
        // @ts-ignore - We're using dynamic property access
        cosmetics[category] = [...cosmetics[category], cosmeticId];
      }
      
      // Update user profile
      await updateUserProfile({
        cosmetics
      });
      
      return true;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        signup,
        updateProfile,
        updateUserProfile,
        forgotPassword,
        resetPassword,
        getToken,
        refreshToken,
        register,
        signOut,
        openAuthModal,
        closeAuthModal,
        boostProfile,
        awardCosmetic,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
