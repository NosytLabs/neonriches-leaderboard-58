
/**
 * Export all formatter functions from a single entry point
 */

// Re-export all formatters from the formatters.ts file
export * from '@/lib/utils';

// Export additional formatters
export { 
  formatDollarAmount,
  formatCompactDollar,
  formatHistoricalValue
} from './dollarFormatters';

export {
  formatAddress,
  formatEthAddress,
  formatSolanaAddress
} from './addressFormatters';

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
