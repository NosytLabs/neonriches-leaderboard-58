
import { UserProfile } from './user';

export interface AuthContextType {
  user: UserProfile | null;
  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  signout: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}
