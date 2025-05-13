
/**
 * Formats a number as currency
 * @param {number} amount - The amount to format
 * @param {string} [currency='USD'] - Currency code
 * @param {string} [locale='en-US'] - Locale for formatting
 * @returns {string} Formatted currency string
 */
export function formatCurrency(
  amount: number, 
  currency = 'USD', 
  locale = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats a number with commas as thousand separators
 * @param {number} value - The value to format
 * @returns {string} Formatted string with commas
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat().format(value);
}

/**
 * Formats a date to a short format (e.g., "May 4, 2023")
 * @param {Date|string|number} date - Date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date: Date | string | number): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Formats a percentage value
 * @param {number} value - The percentage value (e.g., 0.42 for 42%)
 * @returns {string} Formatted percentage string (e.g., "42%")
 */
export function formatPercentage(value: number): string {
  return `${Math.round(value * 100)}%`;
}

/**
 * Truncates a string to a specific length and adds ellipsis if needed
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length before truncating
 * @returns {string} Truncated string
 */
export function truncateText(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength).trim()}...`;
}

/**
 * Formats a number to display with k, m, b suffixes for thousands, millions, billions
 * @param {number} num - Number to format
 * @returns {string} Formatted number with suffix
 */
export function formatCompactNumber(num: number): string {
  if (num < 1000) return num.toString();
  
  const tiers = [
    { threshold: 1e12, suffix: 't' },
    { threshold: 1e9, suffix: 'b' },
    { threshold: 1e6, suffix: 'm' },
    { threshold: 1e3, suffix: 'k' }
  ];
  
  for (const { threshold, suffix } of tiers) {
    if (num >= threshold) {
      return `${(num / threshold).toFixed(1).replace(/\.0$/, '')}${suffix}`;
    }
  }
  
  return num.toString();
}
