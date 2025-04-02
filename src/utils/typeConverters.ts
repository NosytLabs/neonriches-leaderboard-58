
/**
 * Ensures that an ID is a string
 * @param id - The ID to ensure is a string
 * @returns The ID as a string
 */
export const ensureStringId = (id: string | number): string => {
  return typeof id === 'number' ? id.toString() : id;
};

/**
 * Safely converts a string to a TeamColor
 * @param team - The team color string to convert
 * @returns The validated TeamColor
 */
export const toTeamColor = (team: string | null): any => {
  if (!team) return null;
  const validColors = ['red', 'blue', 'green', 'gold', 'purple', 'silver', 'bronze', 'neutral', 'none'];
  return validColors.includes(team) ? team : 'none';
};

/**
 * Safely converts any value to a string, handling null and undefined
 * @param value - The value to convert
 * @param defaultValue - Default value if input is null/undefined
 * @returns String representation of the value
 */
export const safeToString = (value: any, defaultValue: string = ''): string => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  return String(value);
};
