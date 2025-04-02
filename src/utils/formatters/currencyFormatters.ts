
/**
 * Format a number as currency with dollar sign
 */
export const formatCurrency = (amount: number | undefined): string => {
  if (amount === undefined || amount === null || isNaN(Number(amount))) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Formats a dollar amount using a shorter notation
 */
export const formatDollarAmount = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

/**
 * Formats a number with a unit suffix (like "5k" or "2.5M")
 */
export const formatWithUnit = (value: number, unit: string = ''): string => {
  const formatted = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value);
  
  return unit ? `${formatted}${unit}` : formatted;
};

/**
 * Formats a number as a percentage
 */
export const formatPercent = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value);
};

/**
 * Formats a number in compact notation (like "5k" or "2.5M")
 */
export const formatCompactNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value);
};

/**
 * Formats a dollar amount in compact notation
 */
export const formatCompactDollar = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value);
};

/**
 * Formats a historical value with the year
 */
export const formatHistoricalValue = (value: number, year?: number): string => {
  const formattedValue = formatDollarAmount(value);
  if (year) {
    return `${formattedValue} (${year})`;
  }
  return formattedValue;
};
