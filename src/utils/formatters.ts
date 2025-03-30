
/**
 * Formats a number as currency
 * @param amount - The amount to format
 * @param currency - The currency symbol (default: $)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number | undefined): string => {
  if (amount === undefined) return '$0.00';
  return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

/**
 * Formats a date string to a localized date
 * @param dateString - The date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

/**
 * Formats a number with commas for thousands
 * @param num - The number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number | undefined): string => {
  if (num === undefined) return '0';
  return num.toLocaleString();
};

/**
 * Formats a rank number
 * @param rank - The rank to format
 * @returns Formatted rank string
 */
export const formatRank = (rank: number | undefined): string => {
  if (rank === undefined) return '-';
  return `#${rank.toLocaleString()}`;
};
