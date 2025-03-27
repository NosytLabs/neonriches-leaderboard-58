
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
    case 'red': return 'bg-purple-500';
    case 'green': return 'bg-amber-500';
    case 'blue': return 'bg-blue-500';
    default: return 'bg-amber-500';
  }
};

// Get team border color
export const getTeamBorderColor = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return 'border-purple-500';
    case 'green': return 'border-amber-500';
    case 'blue': return 'border-blue-500';
    default: return 'border-amber-500';
  }
};

// Get team text color
export const getTeamTextColor = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return 'text-purple-500';
    case 'green': return 'text-amber-500';
    case 'blue': return 'text-blue-500';
    default: return 'text-amber-500';
  }
};

// Get team glow color (for CSS variables)
export const getTeamGlowColor = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return 'rgba(168, 85, 247, 0.5)';
    case 'green': return 'rgba(245, 158, 11, 0.5)';
    case 'blue': return 'rgba(59, 130, 246, 0.5)';
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
