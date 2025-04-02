
import { UserProfile } from '@/types/user-consolidated';

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (updates: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<boolean>;
  awardCosmetic: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  user?: UserProfile;
  token?: string;
  error?: string;
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
  user?: UserProfile;
  token?: string;
  error?: string;
}

export type AuthAction = 
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: UserProfile }
  | { type: 'LOGIN_FAILURE'; payload?: string }
  | { type: 'REGISTER_START' }
  | { type: 'REGISTER_SUCCESS'; payload: UserProfile }
  | { type: 'REGISTER_FAILURE'; payload?: string }
  | { type: 'LOGOUT' }
  | { type: 'REFRESH_USER_START' }
  | { type: 'REFRESH_USER_SUCCESS'; payload: UserProfile }
  | { type: 'REFRESH_USER_FAILURE'; payload?: string }
  | { type: 'UPDATE_PROFILE_SUCCESS'; payload: UserProfile }
  | { type: 'CLEAR_ERROR' }
  | { type: 'UPDATE_USER'; payload: UserProfile }
  | { type: 'AUTH_START' }
  | { type: 'AUTH_SUCCESS'; payload: UserProfile }
  | { type: 'AUTH_FAIL'; payload?: string }
  | { type: 'AUTH_LOGOUT' };

export interface AuthProviderProps {
  children: React.ReactNode;
}

// Re-export UserProfile for convenience
export type { UserProfile };
