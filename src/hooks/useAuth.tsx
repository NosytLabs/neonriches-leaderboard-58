
import { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile } from '@/types/user';

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signOut: () => void;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  updateUser: (userData: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile: (userData: Partial<UserProfile>) => Promise<boolean>;
  awardCosmetic: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
}

// Create the context with a default empty value
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  signIn: async () => false,
  login: async () => false,
  logout: () => {},
  signOut: () => {},
  register: async () => false,
  updateUser: async () => false,
  updateUserProfile: async () => false,
  awardCosmetic: async () => false,
});

// Hook for easy context usage
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
