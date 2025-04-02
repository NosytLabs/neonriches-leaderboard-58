
/**
 * Format a number as a dollar amount
 * @param amount - The amount to format
 * @param options - Formatting options
 * @returns Formatted dollar amount string
 */
export const formatDollarAmount = (
  amount: number, 
  options: { 
    showCents?: boolean; 
    showSymbol?: boolean;
    compactDisplay?: boolean;
  } = {}
): string => {
  const { 
    showCents = true, 
    showSymbol = true,
    compactDisplay = false
  } = options;

  if (typeof amount !== 'number' || isNaN(amount)) {
    return showSymbol ? '$0.00' : '0.00';
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: showSymbol ? 'currency' : 'decimal',
    currency: 'USD',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
    notation: compactDisplay ? 'compact' : 'standard',
    compactDisplay: 'short'
  });

  return formatter.format(amount);
};
