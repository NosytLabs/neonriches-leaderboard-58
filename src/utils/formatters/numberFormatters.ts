
/**
 * Format a number with commas as thousands separators
 * @param num - Number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number): string => {
  if (num === null || num === undefined) return '0';
  return num.toLocaleString('en-US');
};

/**
 * Format a number as percentage
 * @param value Number to format as percentage
 * @param options Additional formatting options
 * @returns Formatted percentage string
 */
export const formatPercent = (value: number | string, options = {}): string => {
  if (value === undefined || value === null) return '0%';
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options
  }).format(numValue / 100);
};
