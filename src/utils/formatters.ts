
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

/**
 * Formats a number as a currency amount
 * This function is equivalent to formatMoney and is provided for backward compatibility
 * @param amount Number to format
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number | undefined) => {
  if (amount === undefined) return '$0.00';
  return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

/**
 * Formats a dollar amount with a dollar sign
 * @param amount Number to format
 * @returns Formatted dollar amount string
 */
export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};

/**
 * Formats an address (e.g., wallet address) by showing only the first 4 and last 4 characters
 * @param address Address string to format
 * @returns Formatted address string
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  if (address.length <= 8) return address;
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};

/**
 * Calculates and formats a historical value adjusted for inflation
 * @param value Original value
 * @param year Year the value is from
 * @returns Inflation-adjusted value
 */
export const formatHistoricalValue = (value: number, year: number): number => {
  const inflation = 0.03; // 3% average annual inflation
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - year;
  return value * Math.pow(1 + inflation, yearDiff);
};

/**
 * Maps achievement types to their respective icons
 * @param type Achievement type
 * @returns React node with the appropriate icon
 */
export const getAchievementIcon = (type: string) => {
  return null; // Placeholder - this will need to be properly implemented with icons
};

