
// Utility functions for formatting values

// Format a date to a user-friendly string
export const formatDate = (date: string | Date) => {
  if (!date) return '';
  
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Format a date to a relative time string (e.g. "2 days ago")
export const formatTimeAgo = (date: string | Date) => {
  if (!date) return '';
  
  const d = new Date(date);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else {
    return 'Just now';
  }
};

// Format a date as a relative time (future or past)
export const formatRelativeTime = (date: string | Date) => {
  if (!date) return '';
  
  const d = new Date(date);
  const now = new Date();
  const diff = d.getTime() - now.getTime();
  
  const seconds = Math.floor(Math.abs(diff) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  const prefix = diff < 0 ? '' : 'in ';
  const suffix = diff < 0 ? ' ago' : '';
  
  if (days > 0) {
    return `${prefix}${days} day${days === 1 ? '' : 's'}${suffix}`;
  } else if (hours > 0) {
    return `${prefix}${hours} hour${hours === 1 ? '' : 's'}${suffix}`;
  } else if (minutes > 0) {
    return `${prefix}${minutes} minute${minutes === 1 ? '' : 's'}${suffix}`;
  } else {
    return 'Just now';
  }
};

// Format a number as currency
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

// Format a number as dollar amount
export const formatDollarAmount = (amount: number | string) => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return formatCurrency(num);
};

// Get a color based on the team
export const getTeamColor = (team: string) => {
  switch (team?.toLowerCase()) {
    case 'red':
      return 'text-red-500';
    case 'green':
      return 'text-green-500';
    case 'blue':
      return 'text-blue-500';
    default:
      return 'text-gray-500';
  }
};

// Format file size from bytes to human-readable format
export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Format a wallet address with ellipsis
export const formatAddress = (address: string, chars = 4) => {
  if (!address) return '';
  
  return address.substring(0, chars) + '...' + address.substring(address.length - chars);
};

// Format a percentage
export const formatPercentage = (value: number, decimals = 2) => {
  return value.toFixed(decimals) + '%';
};

// Format a historical value with time period
export const formatHistoricalValue = (value: number, period: string, showPlus = true) => {
  const sign = value > 0 ? (showPlus ? '+' : '') : '';
  return `${sign}${value.toFixed(2)} (${period})`;
};

// Get an icon for an achievement type
export const getAchievementIcon = (type: string) => {
  switch (type) {
    case 'royal':
      return 'crown';
    case 'rank':
      return 'trophy';
    case 'milestone':
      return 'star';
    case 'deposit':
      return 'dollar';
    case 'streak':
      return 'zap';
    case 'purchase':
      return 'award';
    default:
      return 'award';
  }
};
