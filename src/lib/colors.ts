
// Team Colors
export const getTeamBgColor = (team: string | null): string => {
  if (!team) return 'bg-gray-500';
  
  switch (team) {
    case 'red': return 'bg-team-red';
    case 'green': return 'bg-team-green';
    case 'blue': return 'bg-team-blue';
    default: return 'bg-gray-500';
  }
};

export const getTeamTextColor = (team: string | null): string => {
  if (!team) return 'text-gray-500';
  
  switch (team) {
    case 'red': return 'text-team-red';
    case 'green': return 'text-team-green';
    case 'blue': return 'text-team-blue';
    default: return 'text-gray-500';
  }
};

export const getTeamBorderColor = (team: string | null): string => {
  if (!team) return 'border-gray-500';
  
  switch (team) {
    case 'red': return 'border-team-red';
    case 'green': return 'border-team-green';
    case 'blue': return 'border-team-blue';
    default: return 'border-gray-500';
  }
};

// Compatibility function for existing code that uses getTeamColor
export const getTeamColor = getTeamBgColor;

// Rank colors
export const getRankBgColor = (rank: number): string => {
  if (rank === 1) return 'bg-royal-gold';
  if (rank === 2) return 'bg-silver-400';
  if (rank === 3) return 'bg-bronze-400';
  if (rank <= 10) return 'bg-royal-purple/70';
  return 'bg-gray-500/50';
};

export const getRankTextColor = (rank: number): string => {
  if (rank === 1) return 'text-royal-gold';
  if (rank === 2) return 'text-silver-400';
  if (rank === 3) return 'text-bronze-400';
  if (rank <= 10) return 'text-royal-purple';
  return 'text-gray-400';
};

export const getRankBorderColor = (rank: number): string => {
  if (rank === 1) return 'border-royal-gold';
  if (rank === 2) return 'border-silver-400';
  if (rank === 3) return 'border-bronze-400';
  if (rank <= 10) return 'border-royal-purple/50';
  return 'border-gray-500/30';
};

// For backward compatibility
export const getRankTextColorClass = getRankTextColor;
export const getTeamBgColorClass = getTeamBgColor;
export const getTeamTextColorClass = getTeamTextColor;

// Spending tier functions
export const getSpendingTierLabel = (spent: number): string => {
  if (spent >= 25000) return 'Whale';
  if (spent >= 10000) return 'Shark';
  if (spent >= 5000) return 'Dolphin';
  if (spent >= 1000) return 'Fish';
  if (spent >= 250) return 'Octopus';
  return 'Crab';
};

export const getSpendingTierBadgeClass = (spent: number): string => {
  if (spent >= 25000) return 'bg-royal-purple text-white';
  if (spent >= 10000) return 'bg-royal-navy text-white';
  if (spent >= 5000) return 'bg-blue-500 text-white';
  if (spent >= 1000) return 'bg-green-500 text-white';
  if (spent >= 250) return 'bg-amber-500 text-white';
  return 'bg-gray-500 text-white';
};
