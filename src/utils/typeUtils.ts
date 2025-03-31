
/**
 * Utility functions for type conversions and safety
 */

/**
 * Safely converts a string to number, returning a default value if invalid
 */
export function safeNumberConversion(value: string | number, defaultValue: number = 0): number {
  if (typeof value === 'number') return value;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

/**
 * Safely converts a value to string
 */
export function safeStringConversion(value: any): string {
  if (value === null || value === undefined) return '';
  return String(value);
}

/**
 * Converts a value to a valid team type
 */
export function toTeamType(value: string): string {
  const validTypes = ['red', 'blue', 'green', 'gold'];
  return validTypes.includes(value) ? value : 'red';
}

/**
 * Converts a value to a valid user tier
 */
export function toUserTier(value: string): string {
  const validTiers = ['free', 'basic', 'premium', 'royal', 'founder'];
  return validTiers.includes(value) ? value : 'free';
}
