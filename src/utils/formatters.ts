
/**
 * Format a number as a currency
 */
export const formatCurrency = (value: number | undefined): string => {
  if (value === undefined) return '$0';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Format a number with commas
 */
export const formatNumber = (value: number | undefined): string => {
  if (value === undefined) return '0';
  return new Intl.NumberFormat('en-US').format(value);
};

/**
 * Format a dollar amount for display
 */
export const formatDollarAmount = (value: number | undefined): string => {
  if (value === undefined) return '$0';
  return formatCurrency(value);
};

/**
 * Format a date string to display in a readable format
 */
export const formatDate = (dateString: string | Date, format: 'short' | 'medium' | 'long' = 'medium'): string => {
  if (!dateString) return 'N/A';
  
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  
  if (format === 'long') {
    options.hour = '2-digit';
    options.minute = '2-digit';
  }
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

/**
 * Format an address for display
 */
export const formatAddress = (address: string | undefined): string => {
  if (!address) return 'No address';
  return address;
};

/**
 * Shorten a string with ellipsis in the middle
 */
export const shortenString = (str: string, startChars = 6, endChars = 4): string => {
  if (!str) return '';
  if (str.length <= startChars + endChars) return str;
  return `${str.substring(0, startChars)}...${str.substring(str.length - endChars)}`;
};

/**
 * Format wallet address for display
 */
export const formatWalletAddress = (address: string | undefined): string => {
  if (!address) return 'No address';
  return shortenString(address, 6, 4);
};
