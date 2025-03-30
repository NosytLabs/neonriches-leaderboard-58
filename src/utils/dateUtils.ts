
import { format, formatDistanceToNow, isValid, parse, parseISO } from "date-fns";

export const formatDate = (date: string | Date): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'MMM d, yyyy');
};

export const formatDateTime = (date: string | Date): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'MMM d, yyyy h:mm a');
};

export const formatTime = (date: string | Date): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'h:mm a');
};

export const isEventActive = (startDate: string, endDate: string): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return now >= start && now <= end;
};

export const isEventUpcoming = (startDate: string): boolean => {
  const now = new Date();
  const start = new Date(startDate);
  
  return now < start;
};

export const isEventPast = (endDate: string): boolean => {
  const now = new Date();
  const end = new Date(endDate);
  
  return now > end;
};

export const getTimeUntilEvent = (startDate: string): string => {
  const now = new Date();
  const start = new Date(startDate);
  
  if (now >= start) return 'Started';
  
  return formatDistanceToNow(start, { addSuffix: true });
};

export const getTimeRemaining = (endDate: string): string => {
  const now = new Date();
  const end = new Date(endDate);
  
  if (now >= end) return 'Ended';
  
  return formatDistanceToNow(end, { addSuffix: true });
};

export const getRelativeTimeString = (date: string | Date): string => {
  const now = new Date();
  const then = new Date(date);
  const diff = Math.max(1, Math.floor((now.getTime() - then.getTime()) / 1000));
  
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo ago`;
  return `${Math.floor(diff / 31536000)}y ago`;
};

export default { 
  formatDate,
  formatDateTime,
  formatTime,
  isEventActive,
  isEventUpcoming,
  isEventPast,
  getTimeUntilEvent,
  getTimeRemaining,
  getRelativeTimeString
};
