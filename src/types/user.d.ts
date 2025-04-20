
export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  avatarUrl?: string;
  rank?: number;
  walletBalance?: number;
  amountSpent?: number;
  totalSpent?: number;
  team?: string;
  role?: string;
  tier?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<boolean>;
}
