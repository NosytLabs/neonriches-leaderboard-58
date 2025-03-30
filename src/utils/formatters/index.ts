
/**
 * Export all formatter functions from a single entry point
 */

// Re-export all formatters from the formatters.ts file
export * from '@/lib/utils';

// Re-export formatters from specific files
export { formatDate, formatRelativeTime } from './dateFormatters';

/**
 * Formats a number as a dollar amount with $ symbol
 * @param value The number to format
 * @returns Formatted dollar amount with $ symbol
 */
export const formatDollarAmount = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

/**
 * Formats a dollar amount in a more compact way for display
 * @param value The number to format
 * @returns Formatted dollar amount in compact form
 */
export const formatCompactDollar = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1
  });
  
  return formatter.format(value);
};

/**
 * Formats a historical monetary value with appropriate context
 * @param value The value to format
 * @param year Optional year for historical context
 * @returns Formatted historical value
 */
export const formatHistoricalValue = (value: number, year?: number): string => {
  const formattedValue = formatDollarAmount(value);
  if (year) {
    return `${formattedValue} (${year})`;
  }
  return `${formattedValue} (historical)`;
};

/**
 * Format a percentage value
 * @param value Number to format as percentage
 * @param decimals Number of decimal places
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number, decimals: number = 1): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value / 100);
};

/**
 * Format an Ethereum address to a shortened form
 * @param address The full address
 * @param chars Number of characters to show at start/end
 * @returns Shortened address string
 */
export const formatAddress = (address: string, chars: number = 4): string => {
  if (!address) return '';
  if (address.length <= chars * 2) return address;
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
};

/**
 * Format Ethereum address
 */
export const formatEthAddress = (address: string): string => {
  return formatAddress(address, 4);
};

/**
 * Format Solana address
 */
export const formatSolanaAddress = (address: string): string => {
  return formatAddress(address, 4);
};
