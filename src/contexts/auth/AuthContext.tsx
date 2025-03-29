
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types/user';
import { AuthContextType } from '@/types/auth-context';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    // Check if user is stored in localStorage (simplified auth for demo)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate authentication
      const mockUser: User = {
        id: 'user-123',
        email,
        username: email.split('@')[0],
        createdAt: new Date().toISOString(),
        isAdmin: email.includes('admin'),
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error: any) {
      console.error('Error signing in:', error);
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate registration
      const mockUser: User = {
        id: 'user-' + Date.now(),
        email,
        username,
        createdAt: new Date().toISOString(),
        isAdmin: false,
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error: any) {
      console.error('Error registering:', error);
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      setUser(null);
      localStorage.removeItem('user');
    } catch (error: any) {
      console.error('Error signing out:', error);
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserProfile = async (updates: Partial<User>) => {
    try {
      if (!user) throw new Error('No user to update');
      
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error: any) {
      console.error('Error updating profile:', error);
      setError(error);
      throw error;
    }
  };

  const awardCosmetic = async (id: string, category: string, rarity: string, source: string) => {
    try {
      // In a real app, this would call your backend API
      // Here we just update local state
      if (!user) return false;
      
      const userCosmetics = user.cosmetics || { 
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
      
      const categoryItems = userCosmetics[category as keyof typeof userCosmetics] || [];
      
      if (Array.isArray(categoryItems) && !categoryItems.includes(id)) {
        const updatedCosmetics = {
          ...userCosmetics,
          [category]: [...categoryItems, id],
        };
        
        await updateUserProfile({
          ...user,
          cosmetics: updatedCosmetics,
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error awarding cosmetic:', error);
      return false;
    }
  };

  const boostProfile = async (duration: number = 7) => {
    try {
      // In a real app, this would call your backend API
      // Here we just update local state
      if (!user) return false;
      
      // Implementation would go here...
      
      return true;
    } catch (error) {
      console.error('Error boosting profile:', error);
      return false;
    }
  };

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  // Alias for compatibility
  const signOut = logout;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        signOut,
        updateUserProfile,
        awardCosmetic,
        boostProfile,
        openAuthModal,
        closeAuthModal,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
