
import { Trophy, Zap, Award, Star, Crown, DollarSign } from 'lucide-react';
import React from 'react';
import { format, isValid } from 'date-fns';

export const formatDate = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date';
  
  return format(dateObj, 'MMM d, yyyy');
};

export const formatTime = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid time';
  
  return format(dateObj, 'h:mm a');
};

export const formatDateTime = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(dateObj)) return 'Invalid date/time';
  
  return format(dateObj, 'MMM d, yyyy h:mm a');
};

export const formatCurrency = (amount: number | null | undefined): string => {
  if (amount === null || amount === undefined) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const formatDollarAmount = (amount: number | null | undefined): string => {
  if (amount === null || amount === undefined) return '$0';
  return '$' + Math.round(amount).toLocaleString('en-US');
};

export const formatNumber = (number: number | null | undefined): string => {
  if (number === null || number === undefined) return '0';
  return number.toLocaleString('en-US');
};

export const formatPercentage = (number: number | null | undefined, decimals = 2): string => {
  if (number === null || number === undefined) return '0%';
  return number.toFixed(decimals) + '%';
};

export const formatAddress = (address: string, chars = 4): string => {
  if (!address) return '';
  if (address.length <= chars * 2) return address;
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
};

export const formatHistoricalValue = (value: number | string, year?: number): string => {
  if (typeof value === 'string') {
    value = parseFloat(value.replace(/[^0-9.-]+/g, ''));
  }
  
  if (isNaN(value)) return '$0';
  
  // Format the value with historical context
  return `${formatCurrency(value)} ${year ? `(${year})` : 'in historical currency'}`;
};

export const formatTimeAgo = (date: Date | string | number): string => {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffSecs < 60) return `${diffSecs} second${diffSecs !== 1 ? 's' : ''} ago`;
  if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  if (diffDays < 30) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  
  return formatDate(past);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const getAchievementIcon = (type: string): React.ReactNode => {
  switch (type.toLowerCase()) {
    case 'rank':
      return <Trophy className="h-5 w-5" />;
    case 'streak':
      return <Zap className="h-5 w-5" />;
    case 'milestone':
      return <Award className="h-5 w-5" />;
    case 'royal':
      return <Crown className="h-5 w-5" />;
    case 'deposit':
      return <DollarSign className="h-5 w-5" />;
    default:
      return <Star className="h-5 w-5" />;
  }
};
