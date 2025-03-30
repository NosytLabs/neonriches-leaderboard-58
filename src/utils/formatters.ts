/**
 * Utility functions for formatting data consistently across the application
 */

import { TeamType } from '@/types/user';

// Format currency values
export const formatCurrency = (amount: number): string => {
  // Handle undefined, null, or NaN
  if (amount === undefined || amount === null || isNaN(amount)) {
    return '$0.00';
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format a simple dollar amount without cents for larger numbers
export const formatDollarAmount = (amount: number): string => {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return '$0';
  }
  
  // For amounts over 1000, format without cents
  if (Math.abs(amount) >= 1000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
  
  // For smaller amounts, show cents
  return formatCurrency(amount);
};

// Format a date
export const formatDate = (date: string | Date): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Format a time ago string (e.g. "2 hours ago")
export const formatTimeAgo = (date: string | Date): string => {
  if (!date) return '';
  
  const now = new Date();
  const past = typeof date === 'string' ? new Date(date) : date;
  
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  }
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
};

// Format a relative time string
export const formatRelativeTime = (date: string | Date): string => {
  if (!date) return '';
  
  const now = new Date();
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  
  // Check if the date is today
  if (
    targetDate.getDate() === now.getDate() &&
    targetDate.getMonth() === now.getMonth() &&
    targetDate.getFullYear() === now.getFullYear()
  ) {
    return 'Today';
  }
  
  // Check if date is yesterday
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (
    targetDate.getDate() === yesterday.getDate() &&
    targetDate.getMonth() === yesterday.getMonth() &&
    targetDate.getFullYear() === yesterday.getFullYear()
  ) {
    return 'Yesterday';
  }
  
  // Otherwise return formatted date
  return formatDate(targetDate);
};

// Get color class for team
export const getTeamColor = (team: TeamType): string => {
  const normalizedTeam = typeof team === 'string' ? team.toLowerCase() as TeamType : team;
  
  switch (normalizedTeam) {
    case 'red':
      return 'text-red-500 border-red-500/50';
    case 'green':
      return 'text-green-500 border-green-500/50';
    case 'blue':
      return 'text-blue-500 border-blue-500/50';
    default:
      return 'text-gray-400 border-gray-400/50';
  }
};

// Get rank text color class
export const getRankTextColorClass = (rank: number): string => {
  if (rank === 1) return 'text-royal-gold';
  if (rank === 2) return 'text-gray-300';
  if (rank === 3) return 'text-amber-700';
  if (rank <= 10) return 'text-indigo-400';
  if (rank <= 50) return 'text-purple-400';
  if (rank <= 100) return 'text-blue-400';
  return 'text-gray-400';
};
