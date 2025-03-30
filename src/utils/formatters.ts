
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

export const formatCurrency = (amount: number | undefined | null): string => {
  if (amount === undefined || amount === null) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDollarAmount = (amount: number | undefined | null): string => {
  if (amount === undefined || amount === null) return '$0';
  
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`;
  }
  
  return `$${Math.round(amount)}`;
};

export const formatPercentage = (value: number, decimals: number = 2): string => {
  return `${value.toFixed(decimals)}%`;
};

export const formatNumber = (value: number, decimals: number = 0): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const formatAddress = (address: string | undefined, length: number = 6): string => {
  if (!address) return '';
  if (address.length < length * 2) return address;
  
  return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatHistoricalValue = (amount: number, year: number): string => {
  const currentYear = new Date().getFullYear();
  const yearsAgo = currentYear - year;
  const inflationRate = 0.03; // Assume 3% annual inflation
  
  // Calculate approximate modern value
  const modernValue = amount * Math.pow(1 + inflationRate, yearsAgo);
  
  return formatCurrency(modernValue);
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
