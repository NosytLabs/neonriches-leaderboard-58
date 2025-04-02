
import { TeamColor } from '@/types/mockery-types';

// Function to convert a team color to a Tailwind background color class
export const getTeamTailwindColor = (team: TeamColor | string | null): string => {
  if (!team) return 'bg-gray-800';
  
  switch (team) {
    case 'red': return 'bg-red-600';
    case 'blue': return 'bg-blue-600';
    case 'green': return 'bg-green-600';
    case 'gold': return 'bg-amber-500';
    case 'purple': return 'bg-purple-600';
    case 'silver': return 'bg-gray-400';
    case 'bronze': return 'bg-amber-700';
    case 'crimson': return 'bg-red-800';
    case 'neutral': 
    case 'none': 
    default: return 'bg-gray-700';
  }
};

// Function to convert a team color to a Tailwind background color class with gradient
export const getTeamTailwindBgColor = (team: TeamColor | string | null): string => {
  if (!team) return 'bg-gradient-to-r from-gray-800 to-gray-700';
  
  switch (team) {
    case 'red': return 'bg-gradient-to-r from-red-700 to-red-600';
    case 'blue': return 'bg-gradient-to-r from-blue-700 to-blue-600';
    case 'green': return 'bg-gradient-to-r from-green-700 to-green-600';
    case 'gold': return 'bg-gradient-to-r from-amber-600 to-amber-500';
    case 'purple': return 'bg-gradient-to-r from-purple-700 to-purple-600';
    case 'silver': return 'bg-gradient-to-r from-gray-500 to-gray-400';
    case 'bronze': return 'bg-gradient-to-r from-amber-800 to-amber-700';
    case 'crimson': return 'bg-gradient-to-r from-red-900 to-red-800';
    case 'neutral': 
    case 'none': 
    default: return 'bg-gradient-to-r from-gray-800 to-gray-700';
  }
};

// Function to convert a team color to a Tailwind text color class
export const getTeamTailwindTextColor = (team: TeamColor | string | null): string => {
  if (!team) return 'text-gray-400';
  
  switch (team) {
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'green': return 'text-green-500';
    case 'gold': return 'text-amber-400';
    case 'purple': return 'text-purple-500';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-600';
    case 'crimson': return 'text-red-700';
    case 'neutral': 
    case 'none': 
    default: return 'text-gray-400';
  }
};

// Function to convert a team color to a Tailwind border color class
export const getTeamTailwindBorderColor = (team: TeamColor | string | null): string => {
  if (!team) return 'border-gray-700';
  
  switch (team) {
    case 'red': return 'border-red-600';
    case 'blue': return 'border-blue-600';
    case 'green': return 'border-green-600';
    case 'gold': return 'border-amber-500';
    case 'purple': return 'border-purple-600';
    case 'silver': return 'border-gray-400';
    case 'bronze': return 'border-amber-700';
    case 'crimson': return 'border-red-800';
    case 'neutral': 
    case 'none': 
    default: return 'border-gray-700';
  }
};

// Ensure a string is a valid TeamColor
export const toTeamColor = (team?: string | null): TeamColor => {
  if (!team) return 'none';
  
  switch (team) {
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'green': return 'green';
    case 'gold': return 'gold';
    case 'purple': return 'purple';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'crimson': return 'crimson';
    case 'neutral': return 'neutral';
    case 'none': return 'none';
    default: return 'none';
  }
};

// Add an ID property to TeamData for use with TeamDetails component
export const addTeamId = (team: TeamColor | string): string => {
  switch (team) {
    case 'red': return 'red-team';
    case 'blue': return 'blue-team';
    case 'green': return 'green-team';
    case 'gold': return 'gold-team';
    case 'purple': return 'purple-team';
    case 'silver': return 'silver-team';
    case 'bronze': return 'bronze-team';
    case 'crimson': return 'crimson-team';
    case 'neutral': return 'neutral-team';
    case 'none': return 'none-team';
    default: return `${team}-team`;
  }
};
