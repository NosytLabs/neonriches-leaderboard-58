
import { createContext, useContext } from 'react';
import { AuthContextType, UserProfile } from '@/types/user';

// Create a context with a default value
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  signIn: async () => false,
  register: async () => false,
  logout: async () => {},
  signOut: () => {},
  updateProfile: async () => false,
  updateUser: async () => false,
  updateUserProfile: async () => false,
  refreshUser: async () => {},
  forgotPassword: async () => false,
  resetPassword: async () => false,
  verifyEmail: async () => false,
  loginWithProvider: async () => false,
  awardCosmetic: async () => false,
});

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Export the UserProfile type
export type { UserProfile };

// Export the AuthProvider component from the implementation file
export { AuthProvider } from './AuthProvider';
