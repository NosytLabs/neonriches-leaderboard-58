
/**
 * Formats a file size for display
 * @param bytes File size in bytes
 * @returns Formatted file size string
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

/**
 * Formats a number as a currency amount
 * @param amount Number to format
 * @returns Formatted currency string
 */
export const formatMoney = (amount: number | undefined) => {
  if (amount === undefined) return '$0.00';
  return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

/**
 * Formats a date string
 * @param dateString Date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

/**
 * Formats a rank number with commas
 * @param rank Number to format
 * @returns Formatted rank number string
 */
export const formatRankNumber = (rank: number) => {
  return rank?.toLocaleString() || '-';
};
