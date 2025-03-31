
import { useContext } from 'react';
import { AuthContext } from '@/contexts';
import { AuthContextType } from '@/types/user-consolidated';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;
