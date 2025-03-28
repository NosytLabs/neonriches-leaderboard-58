
// This file is to maintain backward compatibility with existing imports
import { AuthProvider, useAuth } from './auth';
import type { AuthContextType } from '@/types/auth-context';
import type { UserProfile } from '@/types/user';

export { AuthProvider, useAuth };
export type { AuthContextType, UserProfile };
