
import { TeamColor } from './team';
import { UserTier } from './tier';

export interface UserProfile {
  id: string | number;
  username: string;
  email?: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  walletBalance?: number;
  totalSpent?: number;
  rank?: number;
  team?: TeamColor | string;
  tier?: UserTier | string;
  joinDate?: string;
  isVerified?: boolean;
  lastActive?: string;
  amountSpent?: number;
}

// Re-export for backward compatibility
export interface User extends UserProfile {}
