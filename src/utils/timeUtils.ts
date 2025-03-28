
import { parseDate } from './dateUtils';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

/**
 * Calculate time left until a target date
 */
export function getTimeLeft(targetDate: Date | string): TimeLeft {
  const total = parseDate(targetDate).getTime() - Date.now();
  
  // Ensure we don't show negative time
  const adjustedTotal = Math.max(0, total);
  
  const seconds = Math.floor((adjustedTotal / 1000) % 60);
  const minutes = Math.floor((adjustedTotal / (1000 * 60)) % 60);
  const hours = Math.floor((adjustedTotal / (1000 * 60 * 60)) % 24);
  const days = Math.floor(adjustedTotal / (1000 * 60 * 60 * 24));
  
  return {
    total: adjustedTotal,
    days,
    hours,
    minutes,
    seconds
  };
}

/**
 * Format milliseconds into a human-readable duration string
 */
export function formatDuration(ms: number): string {
  if (ms <= 0) return "0s";
  
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  
  const parts = [];
  
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0) parts.push(`${seconds}s`);
  
  return parts.join(' ');
}
