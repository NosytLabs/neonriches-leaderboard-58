
// Royal theme colors
export const ROYAL_COLORS = {
  crimson: '#8B0000',   // Deep red
  gold: '#D4AF37',      // Richer gold
  navy: '#000080',      // Navy blue
  purple: '#4B0082',    // Royal purple
  bronze: '#CD7F32',    // Bronze
  silver: '#C0C0C0',    // Silver
  parchment: '#F5DEB3', // Parchment
  amber: '#FFBF00',     // Amber
  mahogany: '#C04000',  // Mahogany
  velvet: '#5D0033',    // Velvet
  ink: '#1A1A1A',       // Ink black
};

// Team colors
export const TEAM_COLORS = {
  red: ROYAL_COLORS.crimson,
  green: ROYAL_COLORS.gold,
  blue: ROYAL_COLORS.navy,
};

// Gradient generators
export const gradientClasses = {
  royal: 'bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy',
  gold: 'bg-gradient-to-r from-royal-gold/80 via-royal-gold to-royal-gold/80',
  crimson: 'bg-gradient-to-r from-royal-crimson/80 via-royal-crimson to-royal-crimson/80',
  navy: 'bg-gradient-to-r from-royal-navy/80 via-royal-navy to-royal-navy/80',
};

// Helper to get CSS gradient
export const getCSSGradient = (type: keyof typeof gradientClasses): string => {
  switch (type) {
    case 'royal':
      return 'linear-gradient(to right, #8B0000, #D4AF37, #000080)';
    case 'gold':
      return 'linear-gradient(to right, rgba(212, 175, 55, 0.8), #D4AF37, rgba(212, 175, 55, 0.8))';
    case 'crimson':
      return 'linear-gradient(to right, rgba(139, 0, 0, 0.8), #8B0000, rgba(139, 0, 0, 0.8))';
    case 'navy':
      return 'linear-gradient(to right, rgba(0, 0, 128, 0.8), #000080, rgba(0, 0, 128, 0.8))';
    default:
      return 'linear-gradient(to right, #8B0000, #D4AF37, #000080)';
  }
};

// Get team color
export const getTeamColor = (team: string | null | undefined) => {
  switch (team) {
    case 'red': return ROYAL_COLORS.crimson;
    case 'green': return ROYAL_COLORS.gold;
    case 'blue': return ROYAL_COLORS.navy;
    default: return '#999999';
  }
};

// Get team text color class
export const getTeamTextColorClass = (team: string | null | undefined) => {
  switch (team) {
    case 'red': return 'text-royal-crimson';
    case 'green': return 'text-royal-gold';
    case 'blue': return 'text-royal-navy';
    default: return 'text-gray-500';
  }
};

// Get team background color class
export const getTeamBgColorClass = (team: string | null | undefined) => {
  switch (team) {
    case 'red': return 'bg-royal-crimson';
    case 'green': return 'bg-royal-gold';
    case 'blue': return 'bg-royal-navy';
    default: return 'bg-gray-500';
  }
};

// Get team border color class
export const getTeamBorderColorClass = (team: string | null | undefined) => {
  switch (team) {
    case 'red': return 'border-royal-crimson';
    case 'green': return 'border-royal-gold';
    case 'blue': return 'border-royal-navy';
    default: return 'border-gray-500';
  }
};

// Get rank color based on position
export const getRankColor = (rank: number) => {
  if (rank === 1) return ROYAL_COLORS.gold;
  if (rank === 2) return ROYAL_COLORS.silver;
  if (rank === 3) return ROYAL_COLORS.bronze;
  if (rank <= 10) return ROYAL_COLORS.purple;
  if (rank <= 50) return ROYAL_COLORS.navy;
  return '#999999';
};

// Get rank text color class
export const getRankTextColorClass = (rank: number) => {
  if (rank === 1) return 'text-royal-gold';
  if (rank === 2) return 'text-gray-300';
  if (rank === 3) return 'text-amber-700';
  if (rank <= 10) return 'text-royal-purple';
  if (rank <= 50) return 'text-royal-navy';
  return 'text-gray-500';
};
