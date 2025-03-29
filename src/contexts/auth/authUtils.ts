
import { User, ProfileBoost, UserCosmetics } from '@/types/user';

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
