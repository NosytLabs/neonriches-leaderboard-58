import React, { createContext, useContext, ReactNode } from 'react';
import { useAuthState, useAuthMethods } from './authHooks';
import { AuthContextType } from '@/types/auth-context';

// Create the context
export const AuthContext = createContext<AuthContextType | null>(null);

// Create the provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { 
    user, 
    setUser, 
    isLoading, 
    setIsLoading, 
    error, 
    setError,
    isAuthModalOpen,
    setIsAuthModalOpen
  } = useAuthState();

  const {
    login,
    register,
    logout,
    updateUserProfile,
    boostProfile,
    awardCosmetic
  } = useAuthMethods(user, setUser, setIsLoading, setError);

  // Create the auth context value
  const authContextValue: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
    updateUserProfile,
    login,
    register,
    logout,
    // Keep signOut as an alias for logout for backward compatibility
    signOut: logout,
    openAuthModal: () => setIsAuthModalOpen(true),
    closeAuthModal: () => setIsAuthModalOpen(false),
    boostProfile,
    awardCosmetic
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
