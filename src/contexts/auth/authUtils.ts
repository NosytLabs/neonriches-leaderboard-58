import { UserProfile, TeamColor } from '@/types/user-consolidated';

/**
 * Creates a basic user profile with default values
 * @param id User ID 
 * @param username Username
 * @param displayName Display name
 * @returns A new user profile with default values
 */
export const createBasicUserProfile = (
  id: string | any,
  username: string | any,
  displayName: string | any
): UserProfile => {
  return {
    id: id,
    username: username,
    displayName: displayName,
    email: '',
    profileImage: '',
    bio: '',
    joinedDate: new Date().toISOString(),
    isVerified: false,
    team: 'none' as TeamColor,
    tier: 'basic',
    rank: 1000,
    previousRank: 1000,
    walletBalance: 0,
    totalSpent: 0,
    amountSpent: 0,
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true,
      showTeam: true,
      showSpending: true
    },
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    socialLinks: [],
    following: [],
    followers: []
  };
};

/**
 * Creates a demo user profile for testing purposes
 * @param id User ID
 * @param username Username
 * @returns A demo user profile
 */
export const createDemoUserProfile = (
  id: string,
  username: string
): UserProfile => {
  const displayName = username.charAt(0).toUpperCase() + username.slice(1);
  
  return {
    id,
    username,
    displayName,
    email: `${username}@example.com`,
    profileImage: 'https://source.unsplash.com/random/300x300/?portrait',
    bio: `This is ${displayName}'s profile.`,
    joinedDate: new Date().toISOString(),
    isVerified: false,
    team: 'blue',
    tier: 'basic',
    rank: Math.floor(Math.random() * 1000) + 1,
    previousRank: Math.floor(Math.random() * 1000) + 1,
    walletBalance: Math.floor(Math.random() * 1000),
    totalSpent: Math.floor(Math.random() * 1000),
    amountSpent: Math.floor(Math.random() * 1000),
    spendStreak: Math.floor(Math.random() * 10),
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true,
      showTeam: true,
      showSpending: true
    },
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    socialLinks: [],
    following: [],
    followers: []
  };
};

// Rest of the existing functions
export const addProfileBoostWithDays = (
  user: UserProfile,
  boostType: string,
  days: number,
  strength: number = 1
): UserProfile => {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + days);
  
  const newBoost = {
    id: `boost-${Date.now()}`,
    type: boostType,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    level: 1,
    isActive: true,
    strength: strength,
    appliedBy: 'system'
  };
  
  return {
    ...user,
    profileBoosts: [...(user.profileBoosts || []), newBoost]
  };
};

/**
 * Add a cosmetic item to a user profile by category
 * @param user UserProfile to update
 * @param category Cosmetic category
 * @param item Item to add
 * @returns Updated UserProfile
 */
export const addCosmeticByCategoryString = (
  user: UserProfile,
  category: string,
  item: string
): UserProfile => {
  // Ensure valid cosmetics object
  const cosmetics = user.cosmetics || {
    border: [],
    color: [],
    font: [],
    emoji: [],
    title: [],
    background: [],
    effect: [],
    badge: [],
    theme: []
  };
  
  // Check if the category is valid
  if (!cosmetics.hasOwnProperty(category)) {
    console.error(`Invalid cosmetic category: ${category}`);
    return user;
  }
  
  // Cast category to keyof UserCosmetics for type safety
  const typedCategory = category as keyof typeof cosmetics;
  
  // Ensure the array exists
  const currentItems = (cosmetics[typedCategory] as string[]) || [];
  
  // Check if the item already exists
  if (!currentItems.includes(item)) {
    // Add the item
    const updatedItems = [...currentItems, item];
    
    // Update the category
    const updatedCosmetics = {
      ...cosmetics,
      [typedCategory]: updatedItems
    };
    
    // Return updated user
    return {
      ...user,
      cosmetics: updatedCosmetics
    };
  }
  
  return user;
};
