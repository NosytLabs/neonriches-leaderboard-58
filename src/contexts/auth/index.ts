
import { createContext } from 'react';
import { AuthContextType } from '@/types/auth-context';
import AuthProvider from './AuthProvider';
import useAuth from '@/hooks/useAuth';

// Create a context with a default empty value that will be populated by the provider
const AuthContext = createContext<AuthContextType | null>(null);

export { 
  AuthContext,
  AuthProvider,
  useAuth
};

export default AuthContext;
