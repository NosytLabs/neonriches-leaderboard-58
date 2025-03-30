
import { format, formatDistanceToNow, formatRelative } from 'date-fns';

// Date formatting
export const formatDate = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'MMM d, yyyy');
};

export const formatTime = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'h:mm a');
};

export const formatDateTime = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'MMM d, yyyy h:mm a');
};

export const formatTimeAgo = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true });
};

export const formatRelativeTime = (date: string | Date): string => {
  if (!date) return 'N/A';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatRelative(dateObj, new Date());
};

// Currency formatting
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Dollar amount formatting with custom options
export const formatDollarAmount = (amount: number, options?: { 
  showSymbol?: boolean; 
  abbreviate?: boolean;
  precision?: number;
}): string => {
  const { showSymbol = true, abbreviate = false, precision = 2 } = options || {};
  
  // Handle abbreviation for large numbers
  if (abbreviate) {
    if (amount >= 1000000000) {
      return `${showSymbol ? '$' : ''}${(amount / 1000000000).toFixed(precision)}B`;
    }
    if (amount >= 1000000) {
      return `${showSymbol ? '$' : ''}${(amount / 1000000).toFixed(precision)}M`;
    }
    if (amount >= 1000) {
      return `${showSymbol ? '$' : ''}${(amount / 1000).toFixed(precision)}K`;
    }
  }
  
  // Standard formatting
  return new Intl.NumberFormat('en-US', {
    style: showSymbol ? 'currency' : 'decimal',
    currency: 'USD',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  }).format(amount);
};

// Percentage formatting
export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`;
};

// Address formatting (for wallet addresses)
export const formatAddress = (address: string, length = 6): string => {
  if (!address) return '';
  if (address.length <= length * 2) return address;
  return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
};

// File size formatting
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
};

// Historical value formatting
export const formatHistoricalValue = (value: number, year?: number): string => {
  return `${formatCurrency(value)}${year ? ` (${year})` : ''}`;
};

// Achievement icon mapping
export const getAchievementIcon = (achievementType: string): string => {
  const iconMap: Record<string, string> = {
    'spending': '💰',
    'milestone': '🏆',
    'streak': '🔥',
    'royal': '👑',
    'referral': '👥',
    'special': '⭐',
    'event': '🎭',
    'contribution': '🤝'
  };
  
  return iconMap[achievementType.toLowerCase()] || '🎯';
};

// Team color mapping
export const getTeamColor = (team: string | null): string => {
  switch (team?.toLowerCase()) {
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

// Get mockery action icon color
export const getMockeryActionIconColor = (action: string): string => {
  const colorMap: Record<string, string> = {
    'shame': 'text-red-500',
    'tomatoes': 'text-red-500',
    'taunt': 'text-yellow-500',
    'eggs': 'text-yellow-500',
    'ridicule': 'text-orange-500',
    'putridEggs': 'text-orange-500',
    'jester': 'text-purple-500',
    'courtJester': 'text-purple-500',
    'mock': 'text-blue-500',
    'dunce': 'text-blue-500',
    'humiliate': 'text-indigo-500',
    'silence': 'text-indigo-500',
    'expose': 'text-pink-500',
    'glitterBomb': 'text-pink-500',
    'guillotine': 'text-stone-500',
    'smokeBomb': 'text-stone-500',
    'dungeons': 'text-slate-500',
    'defeat': 'text-slate-500',
    'removal': 'text-amber-500',
    'challenge': 'text-amber-500',
    'roast': 'text-rose-500',
    'royalPie': 'text-royal-crimson',
    'jokeCrown': 'text-royal-gold',
    'memeFrame': 'text-royal-purple'
  };
  
  return colorMap[action] || 'text-gray-500';
};

// Royal decoration types
export type RoyalDecorationType = 'banner' | 'crown' | 'flourish' | 'insignia' | 'swords';
export type RoyalButtonVariant = 'default' | 'royal' | 'gold' | 'crimson';
