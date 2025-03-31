
/**
 * Format a number as currency
 */
export const formatCurrency = (value: number | string): string => {
  if (value === null || value === undefined) {
    return '0.00';
  }
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  // Ensure it's a valid number
  if (isNaN(numValue)) {
    return '0.00';
  }
  
  // Format with commas for thousands and two decimal places
  return numValue.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * Format a number with commas for thousands
 */
export const formatNumber = (value: number | string): string => {
  if (value === null || value === undefined) {
    return '0';
  }
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  // Ensure it's a valid number
  if (isNaN(numValue)) {
    return '0';
  }
  
  // Format with commas for thousands
  return numValue.toLocaleString('en-US');
};

/**
 * Format a percentage
 */
export const formatPercent = (value: number | string, decimals = 1): string => {
  if (value === null || value === undefined) {
    return '0%';
  }
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  // Ensure it's a valid number
  if (isNaN(numValue)) {
    return '0%';
  }
  
  return `${numValue.toFixed(decimals)}%`;
};

export default {
  formatCurrency,
  formatNumber,
  formatPercent
};
