
/**
 * Common formatting utilities for displaying values in a consistent way
 */

// Format a date to a readable string
export const formatDate = (date: string | Date, options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

// Format a number as currency
export const formatCurrency = (amount: number): string => {
  if (amount === undefined || amount === null) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format a dollar amount with larger values using K/M/B suffixes
export const formatDollarAmount = (amount: number): string => {
  if (amount === undefined || amount === null) return '$0';
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  
  if (amount >= 1000000000) {
    return formatter.format(amount / 1000000000) + 'B';
  } else if (amount >= 1000000) {
    return formatter.format(amount / 1000000) + 'M';
  } else if (amount >= 1000) {
    return formatter.format(amount / 1000) + 'K';
  } else {
    return formatter.format(amount);
  }
};

// Format a number with commas
export const formatNumber = (num: number): string => {
  if (num === undefined || num === null) return '0';
  return new Intl.NumberFormat('en-US').format(num);
};

// Format a number as a percentage
export const formatPercentage = (value: number, decimals = 1): string => {
  if (value === undefined || value === null) return '0%';
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value / 100);
};

// Format a blockchain address to shortened form
export const formatAddress = (address: string): string => {
  if (!address) return '';
  if (address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Format value in historical context with fake "old money" terminology
export const formatHistoricalValue = (value: number, era: string = 'medieval', currency: string = 'gold'): string => {
  if (!value) return '0 pieces';
  
  let prefix = '';
  let suffix = '';
  
  switch (era) {
    case 'medieval':
      prefix = value >= 1000 ? 'A king\'s ransom of ' : value >= 100 ? 'A lord\'s fortune of ' : '';
      suffix = value === 1 ? ' piece of ' + currency : ' pieces of ' + currency;
      break;
    case 'renaissance':
      prefix = value >= 1000 ? 'A merchant prince\'s treasury of ' : value >= 100 ? 'A guild master\'s chest of ' : '';
      suffix = ' ' + currency + ' coins';
      break;
    case 'victorian':
      prefix = value >= 1000 ? 'An aristocrat\'s wealth of ' : value >= 100 ? 'A gentleman\'s purse of ' : '';
      suffix = ' ' + currency + ' sovereigns';
      break;
    default:
      suffix = ' ' + currency;
  }
  
  return `${prefix}${formatNumber(value)}${suffix}`;
};

// Format a date as relative time (e.g., "2 hours ago")
export const formatTimeAgo = (date: string | Date): string => {
  if (!date) return '';
  
  const now = new Date();
  const pastDate = typeof date === 'string' ? new Date(date) : date;
  const seconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000);
  
  // Time periods in seconds
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  
  if (seconds < minute) {
    return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
  } else if (seconds < hour) {
    const minutes = Math.floor(seconds / minute);
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  } else if (seconds < day) {
    const hours = Math.floor(seconds / hour);
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (seconds < week) {
    const days = Math.floor(seconds / day);
    return days === 1 ? '1 day ago' : `${days} days ago`;
  } else if (seconds < month) {
    const weeks = Math.floor(seconds / week);
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  } else if (seconds < year) {
    const months = Math.floor(seconds / month);
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else {
    const years = Math.floor(seconds / year);
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }
};

// Format file size in bytes to human-readable format
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
