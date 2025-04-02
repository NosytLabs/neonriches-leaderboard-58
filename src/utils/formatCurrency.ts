
/**
 * Format a number as currency
 */
export function formatCurrency(amount: number, currency = 'USD', options = {}): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options
  }).format(amount);
}

export default formatCurrency;
