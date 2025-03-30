
import { useContext } from 'react';
import { AuthContext } from '@/contexts/auth';

/**
 * Hook to access the authentication context
 */
export const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
