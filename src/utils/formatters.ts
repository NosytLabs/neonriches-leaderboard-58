
import { format, formatDistanceToNow, formatRelative } from 'date-fns';

// Format a date to a string
export const formatDate = (date: string | Date, formatString: string = 'PPP'): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, formatString);
};

// Format a dollar amount
export const formatDollarAmount = (amount: number | undefined): string => {
  if (amount === undefined) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format a number with commas
export const formatNumber = (number: number | undefined, precision: number = 0): string => {
  if (number === undefined) return '0';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  }).format(number);
};

// Format a percentage
export const formatPercentage = (number: number | undefined, precision: number = 1): string => {
  if (number === undefined) return '0%';
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  }).format(number / 100);
};

// Format currency
export const formatCurrency = (amount: number | undefined, currency: string = 'USD'): string => {
  if (amount === undefined) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format address
export const formatAddress = (address: string): string => {
  if (!address) return 'N/A';
  if (address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Format historical value
export const formatHistoricalValue = (
  current: number, 
  previous: number | undefined
): { value: string; isPositive: boolean; isNeutral: boolean; percentChange: string } => {
  if (previous === undefined || previous === current) {
    return { value: '0', isPositive: false, isNeutral: true, percentChange: '0%' };
  }
  
  const diff = current - previous;
  const percentChange = previous !== 0 ? (diff / previous) * 100 : 0;
  
  return {
    value: diff >= 0 ? `+${formatNumber(diff)}` : formatNumber(diff),
    isPositive: diff > 0,
    isNeutral: diff === 0,
    percentChange: `${diff >= 0 ? '+' : ''}${percentChange.toFixed(1)}%`
  };
};

// Format time ago
export const formatTimeAgo = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true });
};

// Format file size
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
