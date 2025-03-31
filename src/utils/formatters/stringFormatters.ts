
/**
 * String formatting and text utilities
 */

/**
 * Generate a truncated version of text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Convert snake_case or kebab-case to camelCase
 */
export const toCamelCase = (str: string): string => {
  return str.replace(/[-_]([a-z])/g, (_, letter) => letter.toUpperCase());
};

/**
 * Format a file size in bytes to a human readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Format a Solana/Crypto address to a shortened version
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  if (address.length <= 8) return address;
  
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};
