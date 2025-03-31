
/**
 * Centralized formatting utility functions
 */
import React from 'react';
import { format, isValid, formatDistance } from 'date-fns';
import { Trophy, Zap, Award, Star, Crown, DollarSign } from 'lucide-react';

// Currency formatting
export const formatCurrency = (amount: number | undefined | null, currency: string = 'USD'): string => {
  if (amount === undefined || amount === null) return '$0.00';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Number formatting with thousands separators
export const formatNumber = (value: number | undefined | null, options?: Intl.NumberFormatOptions): string => {
  if (value === undefined || value === null) return '0';
  
  const defaultOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  
  return new Intl.NumberFormat('en-US', options || defaultOptions).format(value);
};

// Format a dollar amount with simpler display (e.g., $1,234)
export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};

// Format a percentage value
export const formatPercentage = (value: number, decimals = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

// Format a percentage
export const formatPercent = (value: number, decimals: number = 2): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

// Date formatting
export const formatDate = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date';
  
  return format(dateObj, 'MMM d, yyyy');
};

// Format time portion of a date
export const formatTime = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid time';
  
  return format(dateObj, 'h:mm a');
};

// Format a date and time together
export const formatDateTime = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date/time';
  
  return format(dateObj, 'MMM d, yyyy h:mm a');
};

// Format relative time (e.g., "5 minutes ago")
export const formatRelativeTime = (date: Date | string): string => {
  const now = new Date();
  const pastDate = typeof date === 'string' ? new Date(date) : date;
  const secondsAgo = Math.floor((now.getTime() - pastDate.getTime()) / 1000);
  
  if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
  
  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  
  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  
  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 30) return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  
  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
  
  const yearsAgo = Math.floor(monthsAgo / 12);
  return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`;
};

// Format a timestamp to "X time ago" format
export const formatTimeAgo = (date: string | Date): string => {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
};

// Format a currency with a plus or minus sign
export const formatCurrencyWithSign = (amount: number): string => {
  const formatted = formatCurrency(Math.abs(amount));
  return amount >= 0 ? `+${formatted}` : `-${formatted}`;
};

// Format a file size in bytes to a human readable format
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Format a Solana/Crypto address to a shortened version
export const formatAddress = (address: string): string => {
  if (!address) return '';
  if (address.length <= 8) return address;
  
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};

// Format a large number with appropriate suffix (K, M, B)
export const formatLargeNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K';
  }
  return num.toString();
};

// Format a time duration in seconds to a readable format
export const formatDuration = (seconds: number): string => {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  return `${hours}h ${minutes}m`;
};

// Format a timespan into a readable duration string
export const formatTimeSpan = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}m ${seconds % 60}s`;
  }
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ${minutes % 60}m`;
  }
  
  const days = Math.floor(hours / 24);
  return `${days}d ${hours % 24}h`;
};

// Generate a truncated version of text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Convert snake_case or kebab-case to camelCase
export const toCamelCase = (str: string): string => {
  return str.replace(/[-_]([a-z])/g, (_, letter) => letter.toUpperCase());
};

// Get icon for achievement based on type
export const getAchievementIcon = (type: string): React.ReactNode => {
  switch (type.toLowerCase()) {
    case 'rank':
      return React.createElement(Trophy, { className: "h-5 w-5" });
    case 'streak':
      return React.createElement(Zap, { className: "h-5 w-5" });
    case 'milestone':
      return React.createElement(Award, { className: "h-5 w-5" });
    case 'royal':
      return React.createElement(Crown, { className: "h-5 w-5" });
    case 'deposit':
      return React.createElement(DollarSign, { className: "h-5 w-5" });
    default:
      return React.createElement(Star, { className: "h-5 w-5" });
  }
};

// Get the time left until a date
export const getTimeLeft = (endTime: string | Date) => {
  const endDate = typeof endTime === 'string' ? new Date(endTime) : endTime;
  const now = new Date();
  
  // If the end time is in the past, return zeros
  if (endDate <= now) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: 0,
      isComplete: true
    };
  }
  
  const total = endDate.getTime() - now.getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    days,
    hours,
    minutes,
    seconds,
    total,
    isComplete: false
  };
};

// Export as default for convenience
export default {
  formatCurrency,
  formatNumber,
  formatDate,
  formatTime,
  formatDateTime,
  formatRelativeTime,
  formatTimeAgo,
  formatCurrencyWithSign,
  formatDollarAmount,
  formatPercentage,
  formatPercent,
  formatDuration,
  formatFileSize,
  formatAddress,
  formatLargeNumber,
  truncateText,
  toCamelCase,
  getAchievementIcon,
  formatTimeSpan,
  getTimeLeft
};
