
/**
 * Utility functions for formatting values
 */

// Format currency
export const formatCurrency = (amount: number | undefined, locale = 'en-US', currency = 'USD'): string => {
  if (amount === undefined || amount === null) return '$0.00';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format date
export const formatDate = (dateString: string | undefined, locale = 'en-US'): string => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

// Format relative time
export const formatRelativeTime = (dateString: string | undefined): string => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    
    // Convert to appropriate units
    const diffSecs = Math.floor(diffMs / 1000);
    if (diffSecs < 60) return `${diffSecs}s ago`;
    
    const diffMins = Math.floor(diffSecs / 60);
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 30) return `${diffDays}d ago`;
    
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return `${diffMonths}mo ago`;
    
    const diffYears = Math.floor(diffMonths / 12);
    return `${diffYears}y ago`;
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return dateString;
  }
};

// Truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Format number with commas
export const formatNumber = (number: number | undefined): string => {
  if (number === undefined || number === null) return '0';
  return number.toLocaleString();
};

// Truncate address (useful for blockchain addresses)
export const truncateAddress = (address: string, startLength = 4, endLength = 4): string => {
  if (!address) return '';
  if (address.length <= startLength + endLength) return address;
  
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};

export default {
  formatCurrency,
  formatDate,
  formatRelativeTime,
  truncateText,
  formatNumber,
  truncateAddress
};
