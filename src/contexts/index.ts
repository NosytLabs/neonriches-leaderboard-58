
import { createContext, useContext } from 'react';
import { AuthContextType } from '@/types/auth-context';
import { UserProfile } from '@/types/user-consolidated';

// Create a context with a default value
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  signIn: async () => false,
  register: async () => false,
  logout: async () => {},
  signOut: async () => {},
  updateUserProfile: async () => false,
  updateUser: async () => false,
  awardCosmetic: async () => false,
});

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Export types
export type { UserProfile, AuthContextType };

// Export the AuthProvider component
export { AuthProvider } from './auth/AuthProvider';
