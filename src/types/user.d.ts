
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  createdAt: string;
  role?: 'user' | 'admin' | 'moderator';
  rank?: number;
  totalSpent?: number;
  team?: string;
  displayName?: string;
  bio?: string;
  subscription?: string;
  lastActive?: string;
  socialLinks?: {
    twitter?: string;
    discord?: string;
    github?: string;
    website?: string;
  };
}
