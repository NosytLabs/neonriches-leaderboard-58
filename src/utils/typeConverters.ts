
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
export const toTeamColor = (team: string): any => {
  const validColors = ['red', 'blue', 'green', 'gold', 'purple', 'silver', 'bronze', 'neutral', 'none'];
  return validColors.includes(team) ? team : 'none';
};
