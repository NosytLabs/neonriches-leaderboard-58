
// Format currency 
export const formatCurrency = (amount: number, currency = 'USD', options = {}): string => {
  const defaultOptions = {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  
  const formatter = new Intl.NumberFormat('en-US', { ...defaultOptions, ...options });
  return formatter.format(amount);
};

// Format number with commas
export const formatNumber = (num: number, options = {}): string => {
  const defaultOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  
  const formatter = new Intl.NumberFormat('en-US', { ...defaultOptions, ...options });
  return formatter.format(num);
};

// Format date
export const formatDate = (dateString: string, format = 'medium'): string => {
  const date = new Date(dateString);
  
  const options: Intl.DateTimeFormatOptions = 
    format === 'short' ? { 
      month: 'numeric', 
      day: 'numeric', 
      year: 'numeric' 
    } : 
    format === 'medium' ? { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    } : 
    { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

// Format relative time (e.g., "2 hours ago")
export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
  }
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} ${diffInWeeks === 1 ? 'week' : 'weeks'} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths === 1 ? 'month' : 'months'} ago`;
  }
  
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} ${diffInYears === 1 ? 'year' : 'years'} ago`;
};

// Format percentage
export const formatPercentage = (value: number, options = {}): string => {
  const defaultOptions = {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  };
  
  const formatter = new Intl.NumberFormat('en-US', { ...defaultOptions, ...options });
  return formatter.format(value / 100);
};

// Format file size
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
