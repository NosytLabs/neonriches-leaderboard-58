
/**
 * Format a number as currency
 */
export function formatCurrency(amount: number | undefined, currency = 'USD', options = {}): string {
  if (amount === undefined || isNaN(Number(amount))) return `$0.00`;
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options
  }).format(amount);
}

export default formatCurrency;
