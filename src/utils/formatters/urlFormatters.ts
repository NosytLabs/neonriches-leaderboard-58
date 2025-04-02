
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

/**
 * Convert a URL to a tracking URL
 */
export const createTrackingUrl = (url: string, trackingId: string): string => {
  if (!url) return '';
  
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}utm_source=app&utm_medium=profile&utm_campaign=${trackingId}`;
};

/**
 * Extracts the domain from a URL
 */
export const extractDomain = (url: string): string => {
  if (!url) return '';
  
  try {
    const urlObj = new URL(ensureProtocol(url));
    return urlObj.hostname;
  } catch (e) {
    // If URL parsing fails, try a simple regex extraction
    const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i);
    return match ? match[1] : '';
  }
};

/**
 * Extracts path from URL
 */
export const extractPath = (url: string): string => {
  if (!url) return '';
  
  try {
    const urlObj = new URL(ensureProtocol(url));
    return urlObj.pathname;
  } catch (e) {
    // If URL parsing fails, try a simple regex extraction
    const match = url.match(/^(?:https?:\/\/)?(?:www\.)?[^\/]+(\/[^?#]*)/i);
    return match ? match[1] : '';
  }
};

/**
 * Checks if URL is valid
 */
export const isValidUrl = (url: string): boolean => {
  if (!url) return false;
  
  try {
    new URL(ensureProtocol(url));
    return true;
  } catch (e) {
    return false;
  }
};
