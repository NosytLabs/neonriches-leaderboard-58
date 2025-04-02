
/**
 * Get initials from a name or username
 */
export const getInitials = (name: string): string => {
  if (!name) return '';
  
  // Split by space and get first letter of each part
  const parts = name.split(' ');
  if (parts.length > 1) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  
  // If no space, return first and second letter
  if (name.length > 1) {
    return name.substring(0, 2).toUpperCase();
  }
  
  // If only one letter, return it
  return name[0].toUpperCase();
};

/**
 * Truncate a string to a certain length with ellipsis
 */
export const truncateString = (str: string, maxLength: number = 20): string => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  
  return str.substring(0, maxLength) + '...';
};

/**
 * Capitalize first letter of each word
 */
export const capitalizeWords = (str: string): string => {
  if (!str) return '';
  
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Format a username for display
 */
export const formatUsername = (username: string): string => {
  if (!username) return '';
  
  // Remove spaces and special characters
  const sanitized = username.replace(/[^a-zA-Z0-9_]/g, '');
  
  // Ensure it starts with @
  return sanitized.startsWith('@') ? sanitized : `@${sanitized}`;
};

export default {
  getInitials,
  truncateString,
  capitalizeWords,
  formatUsername
};
