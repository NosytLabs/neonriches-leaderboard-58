
/**
 * Dollar amount formatting utility functions
 */

/**
 * Format a number as US dollars
 */
export const formatDollarAmount = (amount: number | string | undefined | null): string => {
  if (amount === undefined || amount === null) return '$0.00';
  
  // Convert to number if it's a string
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  // Handle NaN
  if (isNaN(numAmount)) return '$0.00';
  
  // Format with dollar sign
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numAmount);
};

/**
 * Format a dollar amount without cents (whole dollars only)
 */
export const formatWholeDollars = (amount: number | string | undefined | null): string => {
  if (amount === undefined || amount === null) return '$0';
  
  // Convert to number if it's a string
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  // Handle NaN
  if (isNaN(numAmount)) return '$0';
  
  // Format with dollar sign but no cents
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(numAmount);
};

/**
 * Format a dollar amount for compact display (e.g., $1.2k, $2.3M)
 */
export const formatCompactDollars = (amount: number | string | undefined | null): string => {
  if (amount === undefined || amount === null) return '$0';
  
  // Convert to number if it's a string
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  // Handle NaN
  if (isNaN(numAmount)) return '$0';
  
  // Use compact notation for large numbers
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(numAmount);
};
