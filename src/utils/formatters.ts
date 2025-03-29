
import { format, formatDistanceToNow as fDistanceToNow, formatRelative } from 'date-fns';

/**
 * Formats a date like 'Jan 1, 2023'
 */
export function formatDate(date: Date | string | number): string {
  if (!date) return '';
  const d = new Date(date);
  return format(d, 'MMM d, yyyy');
}

/**
 * Formats time like '3:45 PM'
 */
export function formatTime(date: Date | string | number): string {
  if (!date) return '';
  const d = new Date(date);
  return format(d, 'h:mm a');
}

/**
 * Formats a date and time together: 'Jan 1, 2023 at 3:45 PM'
 */
export function formatDateTime(date: Date | string | number): string {
  if (!date) return '';
  const d = new Date(date);
  return format(d, "MMM d, yyyy 'at' h:mm a");
}

/**
 * Formats a relative time like '5 minutes ago', '2 hours ago', etc.
 */
export function formatDistanceToNow(date: Date | string | number): string {
  if (!date) return '';
  const d = new Date(date);
  return fDistanceToNow(d, { addSuffix: true });
}

/**
 * Formats a relative time compared to another date
 */
export function formatRelativeTime(date: Date | string | number, baseDate: Date | string | number): string {
  if (!date || !baseDate) return '';
  const d = new Date(date);
  const base = new Date(baseDate);
  return formatRelative(d, base);
}

/**
 * Formats currency with dollar sign
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

/**
 * Formats a number with commas as thousands separators
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Formats a file size in bytes to a human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Format a percentage with specified decimal places
 */
export function formatPercent(num: number, decimals = 1): string {
  return `${num.toFixed(decimals)}%`;
}

/**
 * Formats a number to have a + prefix if positive
 */
export function formatWithSign(num: number): string {
  return num > 0 ? `+${num}` : `${num}`;
}

/**
 * Formats a phone number as (xxx) xxx-xxxx
 */
export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phoneNumber;
}

/**
 * Formats an absurd royal title with random silly prefixes
 */
export function formatRoyalTitle(name: string, tier?: string): string {
  const prefixes = [
    'Grand Spendthrift',
    'Supreme Moneybags',
    'Royal Cash Burner',
    'His Excessive Spendiness',
    'Lord High Waster',
    'Duke of Disposable Income',
    'Count Cash-a-lot',
    'Baron von Bankrupt',
    'Minister of Monetary Misuse',
    'Chancellor of Checkout',
    'Archduke of Affluence',
    'Cardinal of Credit Cards',
    'Imperator of Impulse Buys',
    'Sovereign of Splurging',
    'Tzar of Transactions'
  ];
  
  const tierPrefixes: Record<string, string[]> = {
    'bronze': ['Minor', 'Junior', 'Petty', 'Lesser'],
    'silver': ['Respectable', 'Notable', 'Distinguished'],
    'gold': ['Magnificent', 'Grandiose', 'Illustrious'],
    'platinum': ['Supreme', 'Paramount', 'Transcendent'],
    'royal': ['Celestial', 'Divine', 'Eternal']
  };
  
  let prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  
  if (tier && tierPrefixes[tier]) {
    const tierPrefix = tierPrefixes[tier][Math.floor(Math.random() * tierPrefixes[tier].length)];
    prefix = `${tierPrefix} ${prefix}`;
  }
  
  return `${prefix} ${name}`;
}

/**
 * Creates an absurdly over-the-top description of spending amount
 */
export function formatAbsurdSpending(amount: number): string {
  if (amount <= 0) return 'Has not spent a single penny yet';
  
  if (amount < 10) return `Has reluctantly parted with ${formatCurrency(amount)}`;
  if (amount < 50) return `Has casually tossed ${formatCurrency(amount)} into the royal coffers`;
  if (amount < 100) return `Has generously contributed ${formatCurrency(amount)} to the throne`;
  if (amount < 500) return `Has impressively showered the throne with ${formatCurrency(amount)}`;
  if (amount < 1000) return `Has magnificently bestowed ${formatCurrency(amount)} upon the kingdom`;
  if (amount < 5000) return `Has royally injected ${formatCurrency(amount)} into the realm's treasury`;
  if (amount < 10000) return `Has lavishly funded the throne with a princely ${formatCurrency(amount)}`;
  
  return `Has achieved legendary status by sacrificing an astronomical ${formatCurrency(amount)} to the throne!`;
}
