
/**
 * Format a number with thousands separators and optional decimal places
 */
export const formatNumber = (number: number | undefined, decimals = 0): string => {
  if (number === undefined || number === null || isNaN(Number(number))) return '0';
  
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(number);
};

/**
 * Format a number as a percentage
 */
export const formatPercent = (value: number | undefined, decimals = 1): string => {
  if (value === undefined || value === null || isNaN(Number(value))) return '0%';
  
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
};

/**
 * Format a number in compact notation (e.g., "1K", "1M")
 */
export const formatCompact = (value: number | undefined): string => {
  if (value === undefined || value === null || isNaN(Number(value))) return '0';
  
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value);
};

/**
 * Format a number as an ordinal (1st, 2nd, 3rd, etc.)
 */
export const formatOrdinal = (value: number): string => {
  if (isNaN(value)) return '';
  
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = value % 100;
  
  return value + (
    suffixes[(remainder - 20) % 10] || 
    suffixes[remainder] || 
    suffixes[0]
  );
};

/**
 * Format a number to always have a + prefix if positive
 */
export const formatSignedNumber = (value: number): string => {
  if (value > 0) {
    return `+${formatNumber(value)}`;
  }
  return formatNumber(value);
};
