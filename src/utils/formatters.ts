
// Formatter utilities for strings, numbers, dates, etc.

// Format a currency amount with proper symbol
export const formatCurrency = (amount: number, currency: string = "$"): string => {
  return `${currency}${amount.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
};

// Format a dollar amount with proper commas and decimal places
export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
};

// Format a number with proper commas
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

// Format a percentage
export const formatPercent = (num: number): string => {
  return `${(num * 100).toFixed(1)}%`;
};

// Format a date to a readable string
export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

// Format a date and time
export const formatDateTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Format time elapsed since a given date
export const formatTimeAgo = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);
  
  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
};

// Format file size in KB, MB, GB
export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1073741824) return `${(bytes / 1048576).toFixed(1)} MB`;
  return `${(bytes / 1073741824).toFixed(1)} GB`;
};

// Format duration in seconds to MM:SS
export const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// Format historical value with inflation adjustment
export const formatHistoricalValue = (
  amount: number, 
  currency: string, 
  year: number, 
  todayEquivalent: number
): string => {
  return `${formatNumber(amount)} ${currency} (${year}) ≈ ${formatDollarAmount(todayEquivalent)} today`;
};

export default {
  formatCurrency,
  formatDollarAmount,
  formatNumber,
  formatPercent,
  formatDate,
  formatDateTime,
  formatTimeAgo,
  formatFileSize,
  formatDuration,
  formatHistoricalValue
};
