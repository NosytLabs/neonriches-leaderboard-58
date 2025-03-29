
import { User, UserProfile, UserTeam, UserTier, UserGender } from '@/types/user';

/**
 * Adapts a UserProfile to a User type
 * @param profile UserProfile to adapt
 * @returns Adapted User
 */
export const adaptUserProfileToUser = (profile: any): User => {
  // Ensure createdAt is present
  const createdAt = profile.createdAt || profile.joinDate || profile.joinedAt || new Date().toISOString();
  
  // Ensure team is a valid UserTeam
  let team: UserTeam = null;
  if (profile.team === 'red' || profile.team === 'green' || profile.team === 'blue') {
    team = profile.team as UserTeam;
  }
  
  // Ensure tier is a valid UserTier
  let tier: UserTier = 'basic';
  if (profile.tier && typeof profile.tier === 'string') {
    const validTiers: UserTier[] = ['basic', 'premium', 'royal', 'crab', 'fish', 'dolphin', 'shark', 'whale', 'free', 'pro', 'legendary'];
    if (validTiers.includes(profile.tier as UserTier)) {
      tier = profile.tier as UserTier;
    }
  }
  
  // Ensure gender is a valid UserGender or undefined
  let gender: UserGender | undefined = undefined;
  if (profile.gender && typeof profile.gender === 'string') {
    const validGenders: UserGender[] = ['male', 'female', 'non-binary', 'prefer-not-to-say', 'king', 'queen', 'jester', 'noble', 'neutral'];
    if (validGenders.includes(profile.gender as UserGender)) {
      gender = profile.gender as UserGender;
    }
  }
  
  // Create a User object with required fields
  const user: User = {
    id: profile.id || `user-${Date.now()}`,
    username: profile.username || 'anonymous',
    email: profile.email || `${profile.username || 'anonymous'}@example.com`,
    createdAt: createdAt,
    team: team,
    tier: tier,
    displayName: profile.displayName || profile.username || 'Anonymous',
    profileImage: profile.profileImage,
    bio: profile.bio,
    isAdmin: profile.isAdmin || false,
    walletBalance: profile.walletBalance || 0,
    totalSpent: profile.totalSpent || profile.amountSpent || profile.spentAmount || 0,
    amountSpent: profile.amountSpent || profile.totalSpent || profile.spentAmount || 0,
    gender: gender,
    lastActive: profile.lastActive,
    profileBoosts: profile.profileBoosts || [],
    cosmetics: profile.cosmetics || {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    },
    activeTitle: profile.activeTitle,
    rank: profile.rank || 0,
    previousRank: profile.previousRank,
    joinDate: profile.joinDate || createdAt,
    joinedAt: profile.joinedAt || createdAt,
    socialLinks: profile.socialLinks || [],
    profileImages: profile.profileImages || [],
    spendStreak: profile.spendStreak || 0,
    spentAmount: profile.spentAmount || profile.amountSpent || profile.totalSpent || 0,
    badges: profile.badges || [],
    profileViews: profile.profileViews || 0,
    profileClicks: profile.profileClicks || 0,
    followers: profile.followers || 0,
    following: profile.following || 0,
    isVIP: profile.isVIP || false,
    certificateNFT: profile.certificateNFT,
    settings: profile.settings,
    subscription: profile.subscription,
    walletAddress: profile.walletAddress,
    role: profile.role,
    isVerified: profile.isVerified || false,
    lastLoginDate: profile.lastLoginDate,
    isAuthenticated: profile.isAuthenticated || false,
    lastLogin: profile.lastLogin
  };
  
  return user;
};

/**
 * Adapts a partial user object to ensure it has all required fields
 * @param partialUser Partial user object
 * @returns Complete User object
 */
export const completeUserObject = (partialUser: Partial<User>): User => {
  return adaptUserProfileToUser(partialUser);
};

/**
 * Ensure a user object has all required fields
 * @param userOrProfile User or profile object that might be incomplete
 * @returns Complete User object
 */
export const ensureUser = (userOrProfile: any): User => {
  if (!userOrProfile) {
    return adaptUserProfileToUser({});
  }
  
  if (userOrProfile.createdAt) {
    // Probably already a valid user
    return userOrProfile as User;
  }
  
  return adaptUserProfileToUser(userOrProfile);
};
