
/**
 * Format a number with specified options
 * @param value Number to format
 * @param options Intl.NumberFormat options
 * @returns Formatted number
 */
export const formatNumber = (value: number | string, options = {}): string => {
  if (value === undefined || value === null) return '0';
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  return new Intl.NumberFormat('en-US', {
    ...options
  }).format(numValue);
};

/**
 * Format a file size in bytes to a human-readable string
 * @param bytes Size in bytes
 * @returns Human-readable file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Format a rank with the appropriate suffix (1st, 2nd, 3rd, etc)
 * @param rank Rank number
 * @returns Formatted rank with suffix
 */
export const formatRankWithSuffix = (rank: number): string => {
  if (!rank) return 'N/A';
  
  const j = rank % 10;
  const k = rank % 100;
  
  if (j === 1 && k !== 11) {
    return rank + "st";
  }
  if (j === 2 && k !== 12) {
    return rank + "nd";
  }
  if (j === 3 && k !== 13) {
    return rank + "rd";
  }
  return rank + "th";
};

/**
 * Round a number to a specific number of decimal places
 * @param value Number to round
 * @param decimals Number of decimal places
 * @returns Rounded number
 */
export const roundToDecimalPlaces = (value: number, decimals: number = 2): number => {
  return Number(Math.round(parseFloat(value + 'e' + decimals)) + 'e-' + decimals);
};

/**
 * Format a number with abbreviations (K, M, B, T)
 * @param num Number to format
 * @returns Abbreviated number as string
 */
export const formatNumberWithAbbreviation = (num: number): string => {
  if (num < 1000) return num.toString();
  
  const abbreviations = ['', 'K', 'M', 'B', 'T'];
  const tier = Math.floor(Math.log10(Math.abs(num)) / 3);
  
  if (tier >= abbreviations.length) return num.toString();
  
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;
  
  return scaled.toFixed(1).replace(/\.0$/, '') + abbreviations[tier];
};
