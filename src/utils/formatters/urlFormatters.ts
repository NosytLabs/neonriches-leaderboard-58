
/**
 * URL formatting utility functions
 */

/**
 * Format a URL by removing protocol and trailing slash
 */
export const formatUrl = (url: string): string => {
  if (!url) return '';
  
  // Remove protocol
  let formatted = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  
  // Remove trailing slash
  formatted = formatted.replace(/\/$/, '');
  
  return formatted;
};

/**
 * Add protocol to URL if missing
 */
export const ensureProtocol = (url: string, protocol: 'http' | 'https' = 'https'): string => {
  if (!url) return '';
  
  if (!url.match(/^https?:\/\//)) {
    return `${protocol}://${url}`;
  }
  
  return url;
};
