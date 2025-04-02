
// String formatting utility functions

/**
 * Format username for display
 */
export const formatUsername = (username: string): string => {
  if (!username) return '';
  return username.startsWith('@') ? username : `@${username}`;
};

/**
 * Truncate string to specified length with ellipsis
 */
export const truncateString = (str: string, maxLength: number = 30): string => {
  if (!str || str.length <= maxLength) return str || '';
  return `${str.substring(0, maxLength)}...`;
};

/**
 * Capitalize first letter of a string
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Convert string to title case
 */
export const toTitleCase = (str: string): string => {
  if (!str) return '';
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
};

/**
 * Strip HTML tags from string
 */
export const stripHtmlTags = (str: string): string => {
  if (!str) return '';
  return str.replace(/<[^>]*>?/gm, '');
};

/**
 * Get initials from a name (up to specified number of chars)
 */
export const getInitials = (name: string, chars: number = 2): string => {
  if (!name) return '';
  
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return name.substring(0, chars).toUpperCase();
  }
  
  let initials = '';
  for (let i = 0; i < Math.min(parts.length, chars); i++) {
    initials += parts[i].charAt(0);
  }
  
  return initials.toUpperCase();
};

// Format dollar amount
export const formatDollarAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};
