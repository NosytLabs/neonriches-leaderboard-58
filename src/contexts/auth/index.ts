
import { createContext } from 'react';
import { AuthContextType, UserProfile } from '@/types/user-consolidated';

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
  updateUser: async () => false,
  updateUserProfile: async () => false,
  awardCosmetic: async () => false,
});

// Export the UserProfile type
export type { UserProfile };

// Export the AuthProvider component from the implementation file
export { AuthProvider } from './AuthProvider';

// Export the useAuth hook
export { useAuth } from '@/hooks/useAuth';
