
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format a number as currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
}

// Format a date
export function formatDate(date: string | Date, options: Intl.DateTimeFormatOptions = {}): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', {
    ...defaultOptions,
    ...options
  }).format(dateObj);
}

// Helper function for team colors
export function getTeamColor(team: string | null | undefined): string {
  if (!team) return 'text-white/70';
  
  switch(team) {
    case 'red': return 'text-team-red';
    case 'green': return 'text-team-green';
    case 'blue': return 'text-team-blue';
    default: return 'text-white/70';
  }
}

export function getTeamBgColor(team: string | null | undefined): string {
  if (!team) return 'bg-gray-500';
  
  switch(team) {
    case 'red': return 'bg-team-red';
    case 'green': return 'bg-team-green';
    case 'blue': return 'bg-team-blue';
    default: return 'bg-gray-500';
  }
}

export function getTeamTextColorClass(team: string | null | undefined): string {
  if (!team) return 'text-white/70';
  
  switch(team) {
    case 'red': return 'text-team-red';
    case 'green': return 'text-team-green';
    case 'blue': return 'text-team-blue';
    default: return 'text-white/70';
  }
}

export function getRankTextColorClass(rank: number): string {
  if (rank === 1) return 'text-royal-gold';
  if (rank === 2) return 'text-royal-silver';
  if (rank === 3) return 'text-royal-bronze';
  return 'text-white/70';
}
