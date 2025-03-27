
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function combining clsx and twMerge
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

// Get team names
export const getTeamName = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return 'Crimson Court';
    case 'green': return 'Golden Order';
    case 'blue': return 'Royal Navy';
    default: return 'Noble House';
  }
};

// Get team icon
export const getTeamIcon = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return '🛡️'; // Shield for Crimson Court
    case 'green': return '👑'; // Crown for Golden Order
    case 'blue': return '⚔️'; // Swords for Royal Navy
    default: return '⚜️'; // Fleur-de-lis for default
  }
};

// Get team glow color (for CSS variables)
export const getTeamGlowColor = (team: string) => {
  switch (team.toLowerCase()) {
    case 'red': return 'rgba(139, 0, 0, 0.5)';
    case 'green': return 'rgba(207, 181, 59, 0.5)';
    case 'blue': return 'rgba(0, 0, 128, 0.5)';
    default: return 'rgba(207, 181, 59, 0.5)';
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
