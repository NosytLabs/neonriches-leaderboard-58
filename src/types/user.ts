export interface UserProfile {
  id: string;
  username: string;
  email: string;
  profileImage?: string;
  walletBalance?: number;
  createdAt?: string;
  rank?: number;
  team?: string;
  walletAddress?: string;
  // Add any other properties needed for the user profile
}
