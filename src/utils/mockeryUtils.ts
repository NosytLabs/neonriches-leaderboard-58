
// Helper functions to format mockery tiers

export const mockeryTierBorder = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
      return 'border-red-500/30';
    case 'eggs':
      return 'border-yellow-200/30';
    case 'stocks':
      return 'border-amber-700/30';
    case 'silence':
      return 'border-blue-500/30';
    case 'courtJester':
      return 'border-emerald-500/30';
    default:
      return 'border-white/10';
  }
};

export const mockeryTierBg = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
      return 'bg-red-500/10';
    case 'eggs':
      return 'bg-yellow-200/10';
    case 'stocks':
      return 'bg-amber-700/10';
    case 'silence':
      return 'bg-blue-500/10';
    case 'courtJester':
      return 'bg-emerald-500/10';
    default:
      return 'bg-white/5';
  }
};

export const mockeryTierText = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
      return 'Tomato Mockery';
    case 'eggs':
      return 'Egg Assault';
    case 'stocks':
      return 'Stocks Punishment';
    case 'silence':
      return 'Royal Silence';
    case 'courtJester':
      return 'Court Jester';
    default:
      return 'Unknown Tier';
  }
};
