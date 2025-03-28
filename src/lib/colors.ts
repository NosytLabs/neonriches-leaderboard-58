
export type TeamColor = 'red' | 'green' | 'blue';

export const getTeamColor = (team: string): string => {
  switch (team.toLowerCase()) {
    case 'red':
      return 'text-team-red';
    case 'green':
      return 'text-team-green';
    case 'blue':
      return 'text-team-blue';
    default:
      return 'text-white';
  }
};

export const getTeamBgColor = (team: string): string => {
  switch (team.toLowerCase()) {
    case 'red':
      return 'bg-team-red';
    case 'green':
      return 'bg-team-green';
    case 'blue':
      return 'bg-team-blue';
    default:
      return 'bg-white/10';
  }
};

export const getTeamBorderColor = (team: string): string => {
  switch (team.toLowerCase()) {
    case 'red':
      return 'border-team-red';
    case 'green':
      return 'border-team-green';
    case 'blue':
      return 'border-team-blue';
    default:
      return 'border-white/10';
  }
};

export const getRoyalColor = (tier: string): string => {
  switch (tier.toLowerCase()) {
    case 'gold':
      return '#FFD700';
    case 'silver':
      return '#C0C0C0';
    case 'bronze':
      return '#CD7F32';
    case 'royal':
      return 'linear-gradient(to right, #e11d48, #FFD700, #0369a1)';
    default:
      return '#FFFFFF';
  }
};

// Tier colors
export const tierColors = {
  free: {
    text: 'text-white/80',
    bg: 'bg-white/10',
    border: 'border-white/20'
  },
  basic: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30'
  },
  pro: {
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30'
  },
  royal: {
    text: 'text-royal-gold',
    bg: 'bg-royal-gold/10',
    border: 'border-royal-gold/30'
  },
  founder: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30'
  }
};

// Rank colors for top 10
export const rankColors = [
  'text-royal-gold', // 1st
  'text-gray-300',   // 2nd
  'text-amber-700',  // 3rd
  'text-purple-400', // 4th
  'text-blue-400',   // 5th
  'text-green-400',  // 6th
  'text-pink-400',   // 7th
  'text-indigo-400', // 8th
  'text-yellow-400', // 9th
  'text-red-400'     // 10th
];

// Get color for a specific rank
export const getRankColor = (rank: number): string => {
  if (rank <= 10) {
    return rankColors[rank - 1];
  }
  return 'text-white/70';
};
