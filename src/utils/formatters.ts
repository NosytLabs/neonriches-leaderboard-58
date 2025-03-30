import React from 'react';
import { Trophy, Zap, Award, DollarSign, Crown, Star } from 'lucide-react';
import { LeaderboardEntry } from '@/types/leaderboard';
import { TeamType, UserTeam } from '@/types/user';
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Function to format a date
export const formatDate = (date: Date | string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
};

// Function to format time
export const formatTime = (date: Date | string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleTimeString();
};

// Function to format date and time
export const formatDateTime = (date: Date | string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleString();
};

// Function to format currency
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Function to format dollar amount
export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};

// Function to format number
export const formatNumber = (number: number): string => {
  return number.toLocaleString();
};

// Function to format percentage
export const formatPercentage = (number: number): string => {
  return `${number.toFixed(2)}%`;
};

// Function to format address
export const formatAddress = (address: string): string => {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

// Function to format file size
export const formatFileSize = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

// Function to format historical value
export const formatHistoricalValue = (value: number): string => {
  return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2);
};

export const getAchievementIcon = (type: string): React.ReactElement => {
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

// Define required types
export type RoyalDecorationType = 'border' | 'corner' | 'icon' | 'flourish';
export type RoyalButtonVariant = 
  | "default" 
  | "destructive" 
  | "outline" 
  | "secondary" 
  | "ghost" 
  | "link" 
  | "royal" 
  | "gold" 
  | "premium"
  | "glass"
  | "mahogany"
  | "goldOutline"
  | "crimsonOutline"
  | "navyOutline"
  | "royalGold"  
  | "royalCrimson"
  | "royalNavy"  
  | "royalPurple";

// Add the missing function
export const getMockeryActionIconColor = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'putridEggs':
    case 'dunce':
      return 'text-amber-500';
    case 'stocks':
    case 'silence':
    case 'courtJester':
      return 'text-red-500';
    case 'jest':
    case 'mockery':
    case 'defeat':
      return 'text-purple-500';
    case 'protection':
    case 'immune':
      return 'text-green-500';
    case 'smokeBomb':
    case 'glitterBomb':
      return 'text-blue-500';
    case 'crown':
    case 'target':
    case 'challenge':
      return 'text-yellow-500';
    default:
      return 'text-gray-500';
  }
};
