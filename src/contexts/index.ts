
import { createContext, useContext } from 'react';
import { AuthContextType } from '@/types/auth-context';
import { UserProfile, User } from '@/types/user';

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
  updateUserProfile: async () => {},
  updateUser: async () => false,
  awardCosmetic: async () => false,
});

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Export the UserProfile type
export type { UserProfile, User };

// Export the AuthProvider component
export { AuthProvider } from './auth/AuthProvider';
