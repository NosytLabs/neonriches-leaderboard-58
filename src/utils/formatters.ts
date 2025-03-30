
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
