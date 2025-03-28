
// This is a temporary file to provide the missing auth context
// In a real application, this would be a fully implemented authentication system

import { createContext, useContext } from 'react';
import { UserProfile } from '@/types/user';

export interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Create a default auth context with empty functions
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  isAuthenticated: false,
  isLoading: false,
});

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);
