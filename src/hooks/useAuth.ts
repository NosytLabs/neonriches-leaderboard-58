
import { useContext } from 'react';
import { AuthContext } from '@/contexts/auth/AuthContext';

/**
 * Hook to access the authentication context
 */
export const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
