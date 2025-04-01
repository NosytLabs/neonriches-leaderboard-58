
/**
 * Format a number as currency
 * @param value - the value to format
 * @param decimalPlaces - number of decimal places to show (default 2)
 * @param showCents - whether to show cents (default true)
 * @returns formatted currency string
 */
export const formatCurrency = (
  value: number, 
  decimalPlaces: number = 2, 
  showCents: boolean = true
): string => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0.00';
  }

  // If showCents is false, round to integer
  const places = showCents ? decimalPlaces : 0;
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: places,
    maximumFractionDigits: places,
  });

  return formatter.format(value);
};

/**
 * Format a value with a specific unit
 * @param value - the number to format
 * @param unit - the unit to append (e.g., '$', '€', etc.)
 * @param decimalPlaces - number of decimal places
 * @returns formatted string with unit
 */
export const formatWithUnit = (
  value: number,
  unit: string = '$',
  decimalPlaces: number = 2
): string => {
  if (typeof value !== 'number' || isNaN(value)) {
    return `${unit}0.00`;
  }

  return `${unit}${formatCurrency(value, decimalPlaces)}`;
};

/**
 * Format a large number in a compact way (e.g., 1.5K, 2.3M)
 * @param value - the number to format
 * @param unit - the unit to append (default '$')
 * @returns compact formatted string
 */
export const formatCompactNumber = (
  value: number,
  unit: string = '$'
): string => {
  if (typeof value !== 'number' || isNaN(value)) {
    return `${unit}0`;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  });

  return `${unit}${formatter.format(value)}`;
};

/**
 * Format a number as a dollar amount (same as formatWithUnit with $ as unit)
 * @param amount The amount to format
 * @returns Formatted dollar amount
 */
export const formatDollarAmount = (amount: number): string => {
  return formatWithUnit(amount);
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
