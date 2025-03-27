
export type TeamColor = 'red' | 'green' | 'blue';

export const getTeamColor = (team: string): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'text-team-red';
    case 'green': return 'text-team-green';
    case 'blue': return 'text-team-blue';
    default: return 'text-white';
  }
};

export const getTeamBgColor = (team: string): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'bg-team-red';
    case 'green': return 'bg-team-green';
    case 'blue': return 'bg-team-blue';
    default: return 'bg-white';
  }
};

export const getTeamBorderColor = (team: string): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'border-team-red';
    case 'green': return 'border-team-green';
    case 'blue': return 'border-team-blue';
    default: return 'border-white';
  }
};

export const getTeamTextColor = (team: string): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'text-team-red';
    case 'green': return 'text-team-green';
    case 'blue': return 'text-team-blue';
    default: return 'text-white';
  }
};

export const getTeamShadowColor = (team: string): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'shadow-team-red/20';
    case 'green': return 'shadow-team-green/20';
    case 'blue': return 'shadow-team-blue/20';
    default: return 'shadow-white/20';
  }
};

export const getTeamName = (team: string): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'Crimson Court';
    case 'green': return 'Golden Order';
    case 'blue': return 'Royal Navy';
    default: return 'Unaligned';
  }
};
