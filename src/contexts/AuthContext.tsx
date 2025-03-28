
import React, { useEffect } from 'react';
import { AuthContextType } from '@/types/auth-context';
import { AuthContext } from './auth';
import { useAuthState, useAuthMethods } from './auth/authHooks';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  // Mock authentication for development
  useEffect(() => {
    // Simulate loading auth state
    const timer = setTimeout(() => {
      // Check if there's a user in localStorage
      const storedUser = localStorage.getItem('p2w_user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error('Failed to parse stored user:', error);
          setError(new Error('Failed to parse stored user'));
        }
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  // Alias for logout for compatibility
  const signOut = () => {
    logout().catch(err => console.error('Error during signOut:', err));
  };

  const value: AuthContextType = {
    user, 
    isLoading, 
    isAuthenticated: !!user, 
    error,
    login, 
    register, 
    logout,
    signOut,
    updateUserProfile,
    boostProfile,
    awardCosmetic,
    openAuthModal,
    closeAuthModal
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
