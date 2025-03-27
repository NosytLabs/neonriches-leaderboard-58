
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function combining clsx and twMerge (moved from lib/utils.ts to avoid duplication)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Team color variants
export type TeamColorVariant = 'red' | 'green' | 'blue' | 'default';

// Get team background color
export const getTeamBgColor = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return 'bg-royal-crimson';
    case 'green': return 'bg-royal-gold';
    case 'blue': return 'bg-royal-navy';
    default: return 'bg-royal-gold';
  }
};

// Get team border color
export const getTeamBorderColor = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return 'border-royal-crimson';
    case 'green': return 'border-royal-gold';
    case 'blue': return 'border-royal-navy';
    default: return 'border-royal-gold';
  }
};

// Get team text color
export const getTeamTextColor = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return 'text-royal-crimson';
    case 'green': return 'text-royal-gold';
    case 'blue': return 'text-royal-navy';
    default: return 'text-royal-gold';
  }
};

// Get team glow color (for CSS variables)
export const getTeamGlowColor = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return 'rgba(157, 23, 77, 0.5)';
    case 'green': return 'rgba(245, 158, 11, 0.5)';
    case 'blue': return 'rgba(30, 58, 138, 0.5)';
    default: return 'rgba(245, 158, 11, 0.5)';
  }
};

// Get team color class (for styling)
export const getTeamColorClass = (team: string): string => {
  switch (team.toLowerCase()) {
    case 'red':
      return 'team-red';
    case 'green':
      return 'team-green';
    case 'blue':
      return 'team-blue';
    default:
      return 'royal-gold';
  }
};
