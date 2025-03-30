
import { Trophy, Zap, Award, Star, Crown, DollarSign } from 'lucide-react';
import React from 'react';
import { format, isValid, formatDistance } from 'date-fns';

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

export const formatCurrency = (amount: number | undefined | null): string => {
  if (amount === undefined || amount === null) return '$0.00';
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

export const formatPercentage = (num: number): string => {
  return `${num.toFixed(1)}%`;
};

export const formatAddress = (address: string): string => {
  if (!address) return '';
  if (address.length <= 8) return address;
  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};

export const formatHistoricalValue = (value: number, year: number): number => {
  const inflation = 0.03; // 3% average annual inflation
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - year;
  return value * Math.pow(1 + inflation, yearDiff);
};

export const formatTimeAgo = (date: string | Date): string => {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
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
