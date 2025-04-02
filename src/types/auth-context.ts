
import { UserProfile } from './user';
import { CosmeticType, CosmeticRarity } from './cosmetics';

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  register: (userData: Partial<UserProfile>) => Promise<boolean>;
  logout: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (data: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<boolean>;
  awardCosmetic: (
    cosmeticId: string, 
    category: CosmeticType | string, 
    rarity: CosmeticRarity, 
    source?: string
  ) => Promise<boolean>;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  user?: UserProfile;
  token?: string;
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
  user?: UserProfile;
  token?: string;
}

export type AuthAction = 
  | { type: 'LOGIN_SUCCESS'; payload: UserProfile }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'REGISTER_SUCCESS'; payload: UserProfile }
  | { type: 'REGISTER_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: UserProfile };

export interface AuthProviderProps {
  children: React.ReactNode;
}
