
import { useState, useCallback, useContext } from 'react';
import { AuthContext } from '@/contexts/auth';

/**
 * Hook for accessing and managing authentication
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    console.warn('useAuth must be used within an AuthProvider');
    // Return a basic fallback to avoid crashing the app
    return {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      login: async () => false,
      logout: async () => {},
      register: async () => false,
    };
  }

  return context;
}

export default useAuth;
