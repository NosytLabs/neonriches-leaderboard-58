
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserSubscription } from '@/types/user';
import { AuthContextType } from '@/types/auth-context';
import { createDefaultUser } from '@/utils/authUtils';
import { useUserCosmetics } from '@/hooks/useUserCosmetics';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem('authUser');
        
        if (savedUser) {
          const userData = JSON.parse(savedUser);
          userData.joinDate = new Date(userData.joinDate);
          
          setUser(userData);
        } else {
          const defaultUser = createDefaultUser();
          setUser(defaultUser);
          localStorage.setItem('authUser', JSON.stringify(defaultUser));
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error during authentication'));
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  const updateUserProfile = async (data: Partial<UserProfile>): Promise<void> => {
    try {
      if (!user) {
        throw new Error('No user is currently authenticated');
      }
      
      const updatedUser = { ...user, ...data };
      
      setUser(updatedUser);
      localStorage.setItem('authUser', JSON.stringify(updatedUser));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error updating profile'));
      throw err;
    }
  };
  
  const updateProfile = updateUserProfile;
  
  const logout = async (): Promise<void> => {
    try {
      setUser(null);
      localStorage.removeItem('authUser');
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error during logout'));
      throw err;
    }
  };
  
  const signOut = logout;

  // Use our cosmetics hook to get cosmetics-related functions
  const { awardCosmetic, boostProfile } = useUserCosmetics(user, updateUserProfile);
  
  const contextValue: AuthContextType = {
    user,
    isLoading,
    error,
    updateUserProfile,
    updateProfile,
    logout,
    signOut,
    awardCosmetic,
    boostProfile
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export type { UserProfile, UserSubscription };
