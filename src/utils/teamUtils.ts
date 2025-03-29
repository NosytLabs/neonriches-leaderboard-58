
import { UserTeam, UserGender } from '@/types/user';

export const getTeamColor = (team: UserTeam | string | undefined): string => {
  if (!team) return 'text-white/70';
  
  switch (team) {
    case 'red': return 'text-team-red';
    case 'green': return 'text-team-green';
    case 'blue': return 'text-team-blue';
    default: return 'text-white/70';
  }
};

export const getTeamBorderColor = (team: UserTeam | string | undefined): string => {
  if (!team) return 'border-white/10';
  
  switch (team) {
    case 'red': return 'border-team-red/50';
    case 'green': return 'border-team-green/50';
    case 'blue': return 'border-team-blue/50';
    default: return 'border-white/10';
  }
};

export const getTeamName = (team: UserTeam | string | undefined): string => {
  if (!team) return 'No Team';
  
  switch (team) {
    case 'red': return 'Red Dragons';
    case 'green': return 'Green Vipers';
    case 'blue': return 'Blue Phoenixes';
    default: return 'Unaffiliated';
  }
};

export const getGenderTitle = (gender: UserGender | undefined): string => {
  if (!gender) return 'Noble';
  
  switch (gender) {
    case 'king': return 'King';
    case 'queen': return 'Queen';
    case 'jester': return 'Jester';
    case 'noble': return 'Noble';
    case 'neutral': return 'Sovereign';
    default: return 'Noble';
  }
};

export const getGenderEmoji = (gender: UserGender | undefined): string => {
  if (!gender) return '👑';
  
  switch (gender) {
    case 'king': return '👑';
    case 'queen': return '👸';
    case 'jester': return '🃏';
    case 'noble': return '⚜️';
    case 'neutral': return '🏅';
    default: return '👑';
  }
};

export const getInitials = (displayName: string | undefined, username: string): string => {
  if (!displayName) return username.substring(0, 2).toUpperCase();
  
  const parts = displayName.split(' ');
  if (parts.length === 1) return displayName.substring(0, 2).toUpperCase();
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};
