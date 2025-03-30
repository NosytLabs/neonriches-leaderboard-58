
import { useContext } from 'react';
import AuthContext from '@/contexts/AuthContext';
import { AuthContextType } from '@/types/auth-context';

/**
 * Custom hook to access auth context functionality
 * This provides type-safe access to all authentication methods and user data
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

export default useAuth;
