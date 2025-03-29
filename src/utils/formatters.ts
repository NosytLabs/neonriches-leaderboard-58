
/**
 * Format a currency value with a dollar sign and two decimal places
 */
export const formatCurrency = (value: number): string => {
  return `$${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
};

/**
 * Format file size to human-readable format
 */
export const formatFileSize = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10);
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Format a date to a readable string
 */
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Format a number with commas for thousands
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Format a dollar amount with dollar sign and commas
 */
export const formatDollarAmount = (amount: number): string => {
  return `$${formatNumber(Math.round(amount))}`;
};

/**
 * Format a number in compact form (1K, 1M, etc.)
 */
export const formatCompactNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return (num / 1000000).toFixed(1) + 'M';
  }
};

/**
 * Format a time period in seconds to a human-readable string
 */
export const formatTimePeriod = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''}`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  } else {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days !== 1 ? 's' : ''}`;
  }
};

/**
 * Format a time period in a medieval way
 */
export const formatMedievalTimePeriod = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds} moment${seconds !== 1 ? 's' : ''}`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} fortnight${minutes !== 1 ? 's' : ''}`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} watch${hours !== 1 ? 'es' : ''}`;
  } else {
    const days = Math.floor(seconds / 86400);
    return `${days} moon${days !== 1 ? 's' : ''}`;
  }
};

/**
 * Format a time ago in a medieval way
 */
export const formatMedievalTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const pastDate = typeof date === 'string' ? new Date(date) : date;
  const seconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000);
  
  if (seconds < 60) {
    return 'moments ago';
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} fortnight${minutes !== 1 ? 's' : ''} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} watch${hours !== 1 ? 'es' : ''} ago`;
  } else if (seconds < 2592000) { // 30 days
    const days = Math.floor(seconds / 86400);
    return `${days} sun${days !== 1 ? 's' : ''} ago`;
  } else if (seconds < 31536000) { // 365 days
    const months = Math.floor(seconds / 2592000);
    return `${months} moon${months !== 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(seconds / 31536000);
    return `${years} harvest${years !== 1 ? 's' : ''} ago`;
  }
};

/**
 * Format a rank with a noble title
 */
export const formatRankWithTitle = (rank: number): string => {
  if (rank === 1) return "The Sovereign";
  if (rank <= 5) return "Grand Duke";
  if (rank <= 10) return "Duke";
  if (rank <= 20) return "Marquis";
  if (rank <= 50) return "Earl";
  if (rank <= 100) return "Count";
  if (rank <= 200) return "Viscount";
  if (rank <= 500) return "Baron";
  if (rank <= 1000) return "Knight";
  return "Squire";
};

/**
 * Format currency with a medieval flair
 */
export const formatMedievalCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)} million gold sovereigns`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)} thousand gold crowns`;
  } else if (value >= 100) {
    return `${value} gold pieces`;
  } else {
    return `${value} silver coins`;
  }
};
