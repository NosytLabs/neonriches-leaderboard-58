
/**
 * Formatting functions for dollar amounts and monetary values
 */

/**
 * Formats a number as a dollar amount with $ symbol
 * @param value The number to format
 * @returns Formatted dollar amount with $ symbol
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
 * Formats a dollar amount in a more compact way for display
 * @param value The number to format
 * @returns Formatted dollar amount in compact form
 */
export const formatCompactDollar = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 1
  });
  
  return formatter.format(value);
};

/**
 * Formats a historical monetary value with appropriate context
 * @param value The value to format
 * @param year Optional year for historical context
 * @returns Formatted historical value
 */
export const formatHistoricalValue = (value: number, year?: number): string => {
  const formattedValue = formatDollarAmount(value);
  if (year) {
    return `${formattedValue} (${year})`;
  }
  return `${formattedValue} (historical)`;
};
