
import { format, isBefore, isAfter } from 'date-fns';

/**
 * Formats a date string to a human-readable format
 */
export function formatDate(dateString?: string): string {
  if (!dateString) return 'N/A';
  
  try {
    const date = new Date(dateString);
    return format(date, 'MMM d, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
}

/**
 * Formats a date string to include time
 */
export function formatDateTime(dateString?: string): string {
  if (!dateString) return 'N/A';
  
  try {
    const date = new Date(dateString);
    return format(date, 'MMM d, yyyy h:mm a');
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
}

/**
 * Checks if an event is currently active based on start and end dates
 */
export function isEventActive(startDate?: string, endDate?: string): boolean {
  if (!startDate || !endDate) return false;
  
  try {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return isAfter(now, start) && isBefore(now, end);
  } catch (error) {
    console.error('Error checking if event is active:', error);
    return false;
  }
}

/**
 * Calculates the time remaining until a date
 */
export function getTimeRemaining(endDate: string): { 
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const total = new Date(endDate).getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    days,
    hours,
    minutes,
    seconds
  };
}
