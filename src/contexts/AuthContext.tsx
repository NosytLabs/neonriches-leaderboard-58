
// This file is to maintain backward compatibility with existing imports
import { useAuth } from './auth/AuthContext';
import type { AuthContextType } from '@/types/auth-context';
import type { UserProfile } from '@/types/user';

// Create a compatibility export for AuthProvider
import { AuthProvider as AuthProviderOriginal } from './auth/AuthContext';
export const AuthProvider = AuthProviderOriginal;

export { useAuth };
export type { AuthContextType, UserProfile };
