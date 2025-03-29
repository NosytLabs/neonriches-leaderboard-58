
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType } from '@/types/auth-context';
import { User, SocialLink } from '@/types/user';
import { CosmeticRarity } from '@/types/cosmetics';
import { getDefaultUser } from './authUtils';
import mockUsers from '@/utils/mockData';

// Create context with default undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Initialize authentication state
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Check for stored auth in localStorage
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  // Sign in function
  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // In a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find mock user with matching email
      const matchedUser = mockUsers.find(u => u.email === email);
      
      if (matchedUser) {
        setUser(matchedUser);
        localStorage.setItem('user', JSON.stringify(matchedUser));
        setShowAuthModal(false);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Sign in error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out function
  const signOut = async (): Promise<void> => {
    try {
      setIsLoading(true);
      
      // In a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up function
  const signUp = async (email: string, password: string, username: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // In a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if username or email already exists
      const userExists = mockUsers.some(u => 
        u.email === email || u.username === username
      );
      
      if (userExists) {
        return false;
      }
      
      // Create new user
      const newUser = getDefaultUser(email, username);
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      setShowAuthModal(false);
      
      return true;
    } catch (error) {
      console.error('Sign up error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Update user profile
  const updateUserProfile = async (newUserData: Partial<User>): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      if (!user) {
        throw new Error('No user is logged in');
      }
      
      // In a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Update user with new data
      const updatedUser = { ...user, ...newUserData };
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return true;
    } catch (error) {
      console.error('Update user error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Award cosmetic to user
  const awardCosmetic = async (
    id: string,
    category: string,
    rarity: CosmeticRarity,
    source: string
  ): Promise<boolean> => {
    try {
      if (!user) {
        throw new Error('No user is logged in');
      }
      
      // In a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Update user cosmetics
      const cosmetics = user.cosmetics || {
        borders: [],
        colors: [],
        fonts: [],
        emojis: [],
        titles: [],
        backgrounds: [],
        effects: [],
        badges: [],
        themes: []
      };
      
      // Convert category to a valid key of UserCosmetics
      const cosmeticKey = category as keyof typeof cosmetics;
      
      // Ensure the category exists and is an array
      if (!cosmetics[cosmeticKey] || !Array.isArray(cosmetics[cosmeticKey])) {
        cosmetics[cosmeticKey] = [];
      }
      
      // Check if cosmetic already exists
      if ((cosmetics[cosmeticKey] as string[]).includes(id)) {
        return false;
      }
      
      // Add cosmetic to the appropriate category
      (cosmetics[cosmeticKey] as string[]).push(id);
      
      // Update user with new cosmetics
      const updatedUser = { 
        ...user,
        cosmetics
      };
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return true;
    } catch (error) {
      console.error('Award cosmetic error:', error);
      return false;
    }
  };

  // Add social link
  const addSocialLink = async (platform: SocialLink, url: string): Promise<boolean> => {
    try {
      if (!user) {
        throw new Error('No user is logged in');
      }
      
      // Validate URL
      try {
        new URL(url);
      } catch (e) {
        return false;
      }
      
      // Update user's social links
      const socialLinks = user.socialLinks || {};
      socialLinks[platform as string] = url;
      
      const updatedUser = {
        ...user,
        socialLinks
      };
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return true;
    } catch (error) {
      console.error('Add social link error:', error);
      return false;
    }
  };

  // Auth modal functions
  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  // Determine authentication status
  const isAuthenticated = Boolean(user);

  // Context value
  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    signIn,
    signOut,
    signUp,
    openAuthModal,
    closeAuthModal,
    updateUserProfile,
    awardCosmetic
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      {/* Auth modal would be rendered here */}
    </AuthContext.Provider>
  );
};

// Hook for using the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
