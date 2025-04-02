
/**
 * Format username with special handling for long usernames
 */
export const formatUsername = (username: string, maxLength: number = 15): string => {
  if (!username) return '';
  if (username.length <= maxLength) return username;
  return `${username.substring(0, maxLength)}...`;
};

/**
 * Truncate a string with ellipsis if it exceeds maxLength
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (!str) return '';
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
};

/**
 * Capitalize the first letter of a string
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Convert a string to title case
 */
export const toTitleCase = (str: string): string => {
  if (!str) return '';
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

/**
 * Remove HTML tags from a string
 */
export const stripHtmlTags = (html: string): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
};

/**
 * Get initials from a name or username
 */
export const getInitials = (name: string, maxChars: number = 2): string => {
  if (!name) return '';
  
  const parts = name.split(/[\s-_]+/);
  if (parts.length === 1) {
    // If single word, take first N characters
    return name.substring(0, maxChars).toUpperCase();
  }
  
  // Take first character of each word
  return parts
    .slice(0, maxChars)
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase();
};

/**
 * Format a dollar amount
 */
export const formatDollarAmount = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};
