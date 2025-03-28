
// This file now re-exports from the correct location
import { AuthContext, useAuth } from './auth/AuthContext';
import { AuthContextType } from '@/types/auth-context';
import { UserProfile } from '@/types/user';

export { AuthContext, useAuth };
export type { AuthContextType, UserProfile };
