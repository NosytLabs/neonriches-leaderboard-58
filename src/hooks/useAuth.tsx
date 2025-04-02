
import { useContext } from 'react';
import AuthContext from '@/contexts/auth';
import { AuthContextType } from '@/types/auth-context';

/**
 * Custom hook for accessing the authentication context
 * @returns The auth context containing user data and authentication methods
 */
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (!context) {
    console.warn('useAuth must be used within an AuthProvider');
    // Return a default empty context instead of throwing an error
    return {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      login: async () => false,
      signIn: async () => false,
      register: async () => false,
      logout: async () => {},
      signOut: async () => {},
      updateUser: async () => false,
      updateUserProfile: async () => false,
      awardCosmetic: async () => false
    };
  }
  
  return context;
};

export default useAuth;
