
/**
 * Format a number as currency
 */
export const formatCurrency = (amount: number, currency = 'USD', locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a number as a dollar amount
 */
export const formatDollarAmount = (amount: number, minimumFractionDigits = 2): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a number with commas
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat().format(num);
};

/**
 * Format an address for display
 */
export const formatAddress = (address: string, chars = 6): string => {
  if (!address) return '';
  return `${address.substring(0, chars)}...${address.substring(address.length - 4)}`;
};

/**
 * Format a date to a relative time string
 */
export const getRelativeTimeString = (date: string | Date): string => {
  const now = new Date();
  const then = new Date(date);
  const diff = Math.max(1, Math.floor((now.getTime() - then.getTime()) / 1000));
  
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo ago`;
  return `${Math.floor(diff / 31536000)}y ago`;
};

/**
 * Format a historical value
 */
export const formatHistoricalValue = (value: number, currency = true): string => {
  if (currency) {
    return formatCurrency(value);
  }
  return formatNumber(value);
};

/**
 * Get an icon for an achievement
 */
export const getAchievementIcon = (achievement: string): string => {
  const iconMap: Record<string, string> = {
    'first_purchase': 'trophy',
    'reached_top_100': 'award',
    'spent_milestone': 'target',
    'joined_team': 'users',
    'referred_user': 'user-plus',
    'purchased_cosmetic': 'sparkles',
    'royal_status': 'crown',
    'verified': 'check-circle',
  };
  
  return iconMap[achievement] || 'circle';
};
