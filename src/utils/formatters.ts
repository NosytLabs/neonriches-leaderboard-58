
/**
 * Formats a number as a currency string
 * @param amount Number to format as currency
 * @param currency Currency code (default: USD)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return amount.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};

/**
 * Formats a number as a compact currency representation (e.g., $1.2K, $5M)
 */
export const formatCompactCurrency = (amount: number): string => {
  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`;
  } else if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(1)}K`;
  }
  return `$${amount}`;
};

/**
 * Formats a date as a relative time (e.g., "2 days ago")
 */
export const formatRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const then = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  }
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
};

/**
 * Format a number with appropriate suffix (e.g., 1st, 2nd, 3rd)
 */
export const formatOrdinal = (n: number): string => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

/**
 * Format a rank with special coloring and naming based on position
 */
export const formatRankTitle = (rank: number): { title: string, color: string } => {
  if (rank === 1) {
    return { title: 'Sovereign', color: 'text-royal-gold' };
  } else if (rank === 2) {
    return { title: 'Grand Duke', color: 'text-amber-300' };
  } else if (rank === 3) {
    return { title: 'High Lord', color: 'text-zinc-300' };
  } else if (rank <= 10) {
    return { title: 'Noble Lord', color: 'text-royal-purple' };
  } else if (rank <= 50) {
    return { title: 'Lesser Lord', color: 'text-royal-navy' };
  } else if (rank <= 100) {
    return { title: 'Knight', color: 'text-royal-crimson' };
  } else {
    return { title: 'Commoner', color: 'text-gray-400' };
  }
};
