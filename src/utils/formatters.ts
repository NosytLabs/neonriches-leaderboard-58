
/**
 * Formats a number of bytes into a human-readable string
 * @param bytes The number of bytes to format
 * @returns A formatted string (e.g., "1.5 KB", "2.3 MB")
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

/**
 * Formats a number with commas as thousands separators
 * @param num The number to format
 * @returns A formatted string (e.g., "1,234,567")
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Formats a percentage value with specified decimal places
 * @param value The percentage value (e.g., 0.123 for 12.3%)
 * @param decimals The number of decimal places to show
 * @returns A formatted percentage string (e.g., "12.3%")
 */
export const formatPercent = (value: number, decimals: number = 1): string => {
  return (value * 100).toFixed(decimals) + '%';
};
