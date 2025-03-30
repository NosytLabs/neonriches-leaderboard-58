
/**
 * Format a number as currency ($X,XXX.XX)
 */
export const formatCurrency = (amount: number | undefined): string => {
  if (amount === undefined) return '$0.00';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Format a number with commas (X,XXX)
 */
export const formatNumber = (number: number | undefined): string => {
  if (number === undefined) return '0';
  
  return new Intl.NumberFormat('en-US').format(number);
};

/**
 * Format a file size (bytes to KB, MB, etc.)
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Format a date in a readable format
 */
export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Format a timestamp as relative time (e.g. "2 hours ago")
 */
export const formatRelativeTime = (timestamp: string | Date): string => {
  const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
  const now = new Date();
  
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (hours < 24) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (days < 30) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else {
    return formatDate(date.toISOString());
  }
};

/**
 * Format a number as a percentage
 */
export const formatPercentage = (value: number, decimals: number = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

/**
 * Format historical money values with modern equivalents
 */
export const formatHistoricalValue = (amount: number, currency: string, year: number, modernEquivalent?: number): string => {
  const formattedOriginal = `${amount.toLocaleString()} ${currency} (${year})`;
  
  if (modernEquivalent) {
    return `${formattedOriginal} ≈ ${formatCurrency(modernEquivalent)} today`;
  }
  
  return formattedOriginal;
};
