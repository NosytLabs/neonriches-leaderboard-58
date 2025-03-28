// Helper functions for team colors
export const getTeamBgColor = (team: string | null | undefined): string => {
  switch (team) {
    case 'red':
      return 'bg-team-red';
    case 'green':
      return 'bg-team-green';
    case 'blue':
      return 'bg-team-blue';
    default:
      return 'bg-gray-700';
  }
};

export const getTeamTextColor = (team: string | null | undefined): string => {
  switch (team) {
    case 'red':
      return 'text-team-red';
    case 'green':
      return 'text-team-green';
    case 'blue':
      return 'text-team-blue';
    default:
      return 'text-gray-400';
  }
};

// Add these missing functions
export const getTeamBgColorClass = getTeamBgColor;
export const getTeamTextColorClass = getTeamTextColor;

export const getRankTextColorClass = (rank: number): string => {
  if (rank === 1) return 'text-royal-gold';
  if (rank === 2) return 'text-royal-silver';
  if (rank === 3) return 'text-royal-bronze';
  if (rank <= 10) return 'text-royal-purple';
  if (rank <= 50) return 'text-royal-blue';
  if (rank <= 100) return 'text-royal-crimson';
  return 'text-white/70';
};

export const getSpendingTierLabel = (tier: string): string => {
  switch (tier) {
    case 'crab':
      return 'Crab Tier';
    case 'octopus':
      return 'Octopus Tier';
    case 'fish':
      return 'Fish Tier';
    case 'dolphin':
      return 'Dolphin Tier';
    case 'shark':
      return 'Shark Tier';
    case 'whale':
      return 'Whale Tier';
    case 'royal':
      return 'Royal Tier';
    case 'pro':
      return 'Pro Tier';
    case 'free':
    default:
      return 'Free Tier';
  }
};

export const getSpendingTierBadgeClass = (tier: string): string => {
  switch (tier) {
    case 'crab':
      return 'bg-gray-700/50 text-gray-300 border border-gray-600/50';
    case 'octopus':
      return 'bg-pink-900/50 text-pink-300 border border-pink-600/50';
    case 'fish':
      return 'bg-blue-900/50 text-blue-300 border border-blue-600/50';
    case 'dolphin':
      return 'bg-cyan-900/50 text-cyan-300 border border-cyan-600/50';
    case 'shark':
      return 'bg-purple-900/50 text-purple-300 border border-purple-600/50';
    case 'whale':
      return 'bg-amber-900/50 text-amber-300 border border-amber-600/50';
    case 'royal':
      return 'bg-gradient-to-r from-royal-purple/50 to-royal-gold/50 text-white border border-royal-gold/50';
    case 'pro':
      return 'bg-gradient-to-r from-royal-blue/50 to-royal-purple/50 text-white border border-royal-purple/50';
    case 'free':
    default:
      return 'bg-gray-800/50 text-gray-300 border border-gray-700/50';
  }
};

// Add utility functions for the User type
export const formatCurrency = (amount?: number): string => {
  if (amount === undefined) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

export const formatDate = (date?: string): string => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
