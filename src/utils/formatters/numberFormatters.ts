
/**
 * Format a number as currency
 * @param value Number to format
 * @param currency Currency code (default: 'USD')
 * @param options Formatting options
 * @returns Formatted currency string
 */
export function formatCurrency(
  value: number | string | undefined,
  currency: string = 'USD',
  options?: Intl.NumberFormatOptions
): string {
  if (value === undefined || value === null) return '$0.00';
  
  // Convert string to number if needed
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  // Check if it's a valid number
  if (isNaN(numValue)) return '$0.00';
  
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  
  // Merge default options with provided options
  const mergedOptions = options ? { ...defaultOptions, ...options } : defaultOptions;
  
  try {
    return new Intl.NumberFormat('en-US', mergedOptions).format(numValue);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return `$${numValue.toFixed(2)}`;
  }
}

/**
 * Format a number with thousands separators
 * @param value Number to format
 * @param options Formatting options
 * @returns Formatted number string
 */
export function formatNumber(
  value: number | string | undefined,
  options?: Intl.NumberFormatOptions
): string {
  if (value === undefined || value === null) return '0';
  
  // Convert string to number if needed
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  // Check if it's a valid number
  if (isNaN(numValue)) return '0';
  
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };
  
  // Merge default options with provided options
  const mergedOptions = options ? { ...defaultOptions, ...options } : defaultOptions;
  
  try {
    return new Intl.NumberFormat('en-US', mergedOptions).format(numValue);
  } catch (error) {
    console.error('Error formatting number:', error);
    return numValue.toString();
  }
}

/**
 * Format a percentage value
 * @param value Value to format as percentage (0.1 = 10%)
 * @param options Formatting options
 * @returns Formatted percentage string
 */
export function formatPercent(
  value: number | string | undefined,
  options?: Intl.NumberFormatOptions
): string {
  if (value === undefined || value === null) return '0%';
  
  // Convert string to number if needed
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  // Check if it's a valid number
  if (isNaN(numValue)) return '0%';
  
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  };
  
  // Merge default options with provided options
  const mergedOptions = options ? { ...defaultOptions, ...options } : defaultOptions;
  
  try {
    return new Intl.NumberFormat('en-US', mergedOptions).format(numValue);
  } catch (error) {
    console.error('Error formatting percentage:', error);
    return `${(numValue * 100).toFixed(1)}%`;
  }
}
