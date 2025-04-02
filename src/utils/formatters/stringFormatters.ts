
/**
 * Truncate a string to the specified length
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + '...';
};

/**
 * Capitalize the first letter of a string
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Convert a string to Title Case
 */
export const toTitleCase = (str: string): string => {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Strip HTML tags from a string
 */
export const stripHtmlTags = (html: string): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
};

/**
 * Format a username to include @ symbol
 */
export const formatUsername = (username: string): string => {
  if (!username) return '';
  return username.startsWith('@') ? username : `@${username}`;
};

/**
 * Generate initials from a name
 */
export const getInitials = (name: string): string => {
  if (!name) return '';
  
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};
