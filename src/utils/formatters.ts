
import { format, formatDistance } from 'date-fns';

// Basic formatters
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'MMM d, yyyy');
};

export const formatTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'h:mm a');
};

export const formatDateTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'MMM d, yyyy h:mm a');
};

export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistance(dateObj, new Date(), { addSuffix: true });
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(0)}%`;
};

export const formatDateRange = (startDate: Date, endDate: Date): string => {
  if (startDate.getFullYear() === endDate.getFullYear()) {
    if (startDate.getMonth() === endDate.getMonth()) {
      if (startDate.getDate() === endDate.getDate()) {
        return formatDate(startDate);
      }
      return `${format(startDate, 'MMM d')} - ${format(endDate, 'd, yyyy')}`;
    }
    return `${format(startDate, 'MMM d')} - ${format(endDate, 'MMM d, yyyy')}`;
  }
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

// Additional formatters needed by components
export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};

export const formatAddress = (address: string, length: number = 6): string => {
  if (!address) return '';
  if (address.length <= length * 2) return address;
  return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const getTeamColor = (team: string): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'team-red';
    case 'blue': return 'team-blue';
    case 'green': return 'team-green';
    case 'gold': return 'royal-gold';
    default: return 'gray-500';
  }
};

export const formatHistoricalValue = (value: number, type: string = 'currency'): string => {
  if (type === 'currency') {
    return formatCurrency(value);
  } else if (type === 'percentage') {
    return formatPercentage(value);
  } else {
    return formatNumber(value);
  }
};

export const getAchievementIcon = (type: string): string => {
  switch (type) {
    case 'royal': return 'crown';
    case 'rank': return 'trophy';
    case 'deposit': return 'dollar';
    case 'milestone': return 'award';
    case 'streak': return 'zap';
    case 'purchase': return 'star';
    default: return 'star';
  }
};
