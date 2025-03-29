
import { User, ProfileBoost, UserCosmetics, UserProfile } from '@/types/user';

/**
 * Adds a profile boost to a user
 * @param user The user
 * @param boost The boost to add
 * @returns The updated user
 */
export const addProfileBoost = (user: User, boost: ProfileBoost): User => {
  if (!user.profileBoosts) {
    user.profileBoosts = [];
  }
  
  return {
    ...user,
    profileBoosts: [...user.profileBoosts, boost]
  };
};

/**
 * Alternative implementation of addProfileBoost for authHooks.ts
 * @param user The user
 * @param days The number of days
 * @param level The boost level
 * @returns The updated profile boosts array
 */
export const addProfileBoostWithDays = (user: User, days: number, level: number): ProfileBoost[] => {
  if (!user.profileBoosts) {
    user.profileBoosts = [];
  }

  const newBoost: ProfileBoost = {
    id: `boost_${Date.now()}`,
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString(),
    level,
    type: 'profile',
    effectId: `effect_${level}`
  };
  
  return [...user.profileBoosts, newBoost];
};

/**
 * Adds a cosmetic item to a user
 * @param user The user
 * @param type The cosmetic type
 * @param itemId The cosmetic item ID
 * @returns The updated user
 */
export const addCosmetic = (user: User, type: keyof UserCosmetics, itemId: string): User => {
  if (!user.cosmetics) {
    user.cosmetics = {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    };
  }
  
  const cosmetics = { ...user.cosmetics };
  
  if (Array.isArray(cosmetics[type]) && !cosmetics[type].includes(itemId)) {
    cosmetics[type] = [...cosmetics[type], itemId];
  }
  
  return {
    ...user,
    cosmetics
  };
};

/**
 * Alternative implementation of addCosmetic for authHooks.ts
 * @param user The user
 * @param cosmeticId The cosmetic ID
 * @param category The category
 * @returns The updated user cosmetics object
 */
export const addCosmeticByCategoryString = (user: User, cosmeticId: string, category: string): UserCosmetics => {
  if (!user.cosmetics) {
    user.cosmetics = {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    };
  }

  const validCategories: Array<keyof UserCosmetics> = [
    'borders', 'colors', 'fonts', 'emojis', 
    'titles', 'backgrounds', 'effects', 'badges', 'themes'
  ];
  
  const validCategory = validCategories.find(c => c === category);
  if (!validCategory) {
    return user.cosmetics;
  }

  const cosmetics = { ...user.cosmetics };
  
  if (Array.isArray(cosmetics[validCategory]) && !cosmetics[validCategory].includes(cosmeticId)) {
    cosmetics[validCategory] = [...cosmetics[validCategory], cosmeticId];
  }
  
  return cosmetics;
};

/**
 * Validates that a string is a valid email address
 * @param email The email to validate
 * @returns Whether the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Validates that a password meets the minimum requirements
 * @param password The password to validate
 * @returns Whether the password is valid
 */
export const isValidPassword = (password: string): boolean => {
  // At least 8 characters, at least one uppercase letter, one lowercase letter, one number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
};

/**
 * Generates a random user ID
 * @returns A random user ID
 */
export const generateUserId = (): string => {
  return 'user_' + Math.random().toString(36).substr(2, 9);
};

/**
 * Sign in function (placeholder for compatibility)
 */
export const signIn = async (email: string, password: string): Promise<void> => {
  console.log('Sign in with:', email);
  // Implementation would be handled in the AuthContext
};

/**
 * Sign out function (placeholder for compatibility)
 */
export const signOut = async (): Promise<void> => {
  console.log('Sign out');
  // Implementation would be handled in the AuthContext
};
