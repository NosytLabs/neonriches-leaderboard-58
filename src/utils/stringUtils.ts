
/**
 * Get initials from a name
 * @param name Full name
 * @returns Initials (up to 2 characters)
 */
export const getInitials = (name?: string): string => {
  if (!name) return '?';
  
  const parts = name.trim().split(/\s+/);
  
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

/**
 * Truncate a string with ellipsis
 * @param str String to truncate
 * @param maxLength Maximum length before truncation
 * @returns Truncated string
 */
export const truncate = (str?: string, maxLength = 20): string => {
  if (!str) return '';
  
  if (str.length <= maxLength) {
    return str;
  }
  
  return str.slice(0, maxLength) + '...';
};

/**
 * Convert camelCase or snake_case to Title Case
 * @param str String to convert
 * @returns Converted string
 */
export const toTitleCase = (str?: string): string => {
  if (!str) return '';
  
  // Handle camelCase
  const spacedString = str
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/_/g, ' '); // Replace underscores with spaces
  
  // Capitalize first letter of each word
  return spacedString
    .split(' ')
    .map(word => {
      if (!word) return '';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .trim();
};

/**
 * Remove HTML tags from a string
 * @param htmlString String with HTML tags
 * @returns Plain text string
 */
export const stripHtml = (htmlString?: string): string => {
  if (!htmlString) return '';
  
  return htmlString.replace(/<\/?[^>]+(>|$)/g, '');
};
