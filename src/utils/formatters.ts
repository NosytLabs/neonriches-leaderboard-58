
// General formatting utilities

import { TeamType } from '@/types/user';

// Format a timestamp as a relative time
export const formatTimeAgo = (timestamp: string | number | Date): string => {
  if (!timestamp) return '';
  
  const date = new Date(timestamp);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }
  
  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
  
  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  }
  
  const years = Math.floor(months / 12);
  return `${years} year${years !== 1 ? 's' : ''} ago`;
};

// Format date in a readable format
export const formatDate = (date: string | number | Date): string => {
  if (!date) return '';
  
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return d.toLocaleDateString('en-US', options);
};

// Format relative time
export const formatRelativeTime = (date: string | number | Date): string => {
  if (!date) return '';
  return formatTimeAgo(date);
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format dollar amount (without cents if it's a whole number)
export const formatDollarAmount = (amount: number): string => {
  return amount % 1 === 0 
    ? `$${amount.toFixed(0)}` 
    : formatCurrency(amount);
};

// Get color for team
export const getTeamColor = (team: TeamType | string | null): string => {
  if (!team) return 'text-gray-500';
  
  const lowerTeam = typeof team === 'string' ? team.toLowerCase() : '';
  
  switch (lowerTeam) {
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

// Format file size
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Format wallet address for display
export const formatAddress = (address: string, start = 4, end = 4): string => {
  if (!address || address.length < (start + end + 3)) return address || '';
  return `${address.substring(0, start)}...${address.substring(address.length - end)}`;
};

// Format percentage
export const formatPercentage = (value: number, decimalPlaces = 2): string => {
  return `${(value * 100).toFixed(decimalPlaces)}%`;
};

// Format historical value with inflation adjustment
export const formatHistoricalValue = (value: number, year: number): string => {
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - year;
  
  // Simple inflation adjustment (not accurate but for display purposes)
  const adjustedValue = value * Math.pow(1.03, yearDiff);
  
  return `${formatCurrency(value)} (adjusted to ${formatCurrency(adjustedValue)} in ${currentYear})`;
};

// Get achievement icon
export const getAchievementIcon = (type: string): string => {
  switch (type) {
    case 'royal': return '👑';
    case 'rank': return '🏆';
    case 'milestone': return '🌟';
    case 'deposit': return '💰';
    case 'streak': return '🔥';
    case 'purchase': return '💎';
    case 'referral': return '👥';
    case 'social': return '📱';
    default: return '🎯';
  }
};
