
interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  error: Error | null;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  logout: () => void;
  // Add these properties to fix the TypeScript errors
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  signOut: () => void;
  subscription?: UserSubscription;
  // New functions
  awardCosmetic?: (cosmeticId: string, category: string, rarity: CosmeticRarity, source: string) => Promise<boolean>;
  boostProfile?: (days?: number, level?: number) => Promise<boolean>;
}
