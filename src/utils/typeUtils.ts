
import { TeamColor, UserTier } from '@/types/user';

/**
 * Type guard to check if a value is a valid TeamColor
 * @param value - Value to check
 * @returns boolean indicating if the value is a valid TeamColor
 */
export function isTeamColor(value: any): value is TeamColor {
  if (value === null) return true;
  return [
    'red', 
    'blue', 
    'green', 
    'gold', 
    'purple', 
    'silver', 
    'bronze', 
    'neutral', 
    'none'
  ].includes(value);
}

/**
 * Type guard to check if a value is a valid UserTier
 * @param value - Value to check
 * @returns boolean indicating if the value is a valid UserTier
 */
export function isUserTier(value: any): value is UserTier {
  return [
    'free',
    'basic',
    'premium',
    'royal',
    'gold',
    'silver',
    'bronze',
    'elite',
    'pro'
  ].includes(value);
}

/**
 * Validates and formats a value as a TeamColor
 * @param value - Value to validate
 * @returns A valid TeamColor or null if invalid
 */
export function validateTeamColor(value: any): TeamColor | null {
  if (isTeamColor(value)) {
    return value;
  }
  return null;
}

/**
 * Validates and formats a value as a UserTier
 * @param value - Value to validate
 * @returns A valid UserTier or 'basic' if invalid
 */
export function validateUserTier(value: any): UserTier {
  if (isUserTier(value)) {
    return value;
  }
  return 'basic';
}
