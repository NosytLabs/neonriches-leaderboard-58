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
  velvet: 'bg-gradient-to-r from-royal-velvet/80 via-royal-purple to-royal-velvet/80',
  purple: 'bg-gradient-to-r from-royal-purple/80 via-royal-purple to-royal-purple/80',
  mahogany: 'bg-gradient-to-r from-royal-mahogany/80 via-royal-mahogany to-royal-mahogany/80',
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
    case 'velvet':
      return 'linear-gradient(to right, rgba(93, 0, 51, 0.8), #4B0082, rgba(93, 0, 51, 0.8))';
    case 'purple':
      return 'linear-gradient(to right, rgba(75, 0, 130, 0.8), #4B0082, rgba(75, 0, 130, 0.8))';
    case 'mahogany':
      return 'linear-gradient(to right, rgba(192, 64, 0, 0.8), #C04000, rgba(192, 64, 0, 0.8))';
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

// Get team gradient class
export const getTeamGradientClass = (team: string | null | undefined) => {
  switch (team) {
    case 'red': return gradientClasses.crimson;
    case 'green': return gradientClasses.gold;
    case 'blue': return gradientClasses.navy;
    default: return '';
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

// Get rank badge class based on position
export const getRankBadgeClass = (rank: number) => {
  if (rank === 1) return 'bg-royal-gold/20 text-royal-gold border-royal-gold/50';
  if (rank === 2) return 'bg-gray-300/20 text-gray-300 border-gray-300/50';
  if (rank === 3) return 'bg-amber-700/20 text-amber-700 border-amber-700/50';
  if (rank <= 10) return 'bg-royal-purple/20 text-royal-purple border-royal-purple/50';
  if (rank <= 50) return 'bg-royal-navy/20 text-royal-navy border-royal-navy/50';
  return 'bg-gray-500/20 text-gray-500 border-gray-500/50';
};

// Spending tier boundaries
export const SPENDING_TIERS = {
  CRAB: 50,        // $0-$50
  OCTOPUS: 250,    // $50-$250
  FISH: 1000,      // $250-$1,000
  DOLPHIN: 5000,   // $1,000-$5,000
  SHARK: 10000,    // $5,000-$10,000
  WHALE: 25000,    // $10,000+
};

// Get spending tier based on amount spent
export const getSpendingTier = (amountSpent: number): string => {
  if (amountSpent >= SPENDING_TIERS.WHALE) return 'whale';
  if (amountSpent >= SPENDING_TIERS.SHARK) return 'shark';
  if (amountSpent >= SPENDING_TIERS.DOLPHIN) return 'dolphin';
  if (amountSpent >= SPENDING_TIERS.FISH) return 'fish';
  if (amountSpent >= SPENDING_TIERS.OCTOPUS) return 'octopus';
  return 'crab';
};

// Get friendly label for spending tier
export const getSpendingTierLabel = (tier: string): string => {
  switch (tier) {
    case 'whale': return 'Whale';
    case 'shark': return 'Shark';
    case 'dolphin': return 'Dolphin';
    case 'fish': return 'Fish';
    case 'octopus': return 'Octopus';
    case 'crab': return 'Crab';
    default: return 'Commoner';
  }
};

// Get CSS classes for spending tier badges
export const getSpendingTierBadgeClass = (tier: string): string => {
  switch (tier) {
    case 'whale': return 'tier-whale';
    case 'shark': return 'tier-shark';
    case 'dolphin': return 'tier-dolphin';
    case 'fish': return 'tier-fish';
    case 'octopus': return 'tier-octopus';
    case 'crab': return 'tier-crab';
    default: return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
  }
};

// Get spending tier emoji
export const getSpendingTierEmoji = (tier: string): string => {
  switch (tier) {
    case 'whale': return '🐋';
    case 'shark': return '🦈';
    case 'dolphin': return '🐬';
    case 'fish': return '🐠';
    case 'octopus': return '🐙';
    case 'crab': return '🦀';
    default: return '👤';
  }
};

// Generate bg and text colors for team
export const getTeamColors = (team: string | null): { bg: string, text: string, border: string } => {
  switch (team) {
    case 'red':
      return { 
        bg: 'bg-team-red/20', 
        text: 'text-team-red', 
        border: 'border-team-red/30' 
      };
    case 'green':
      return { 
        bg: 'bg-team-green/20', 
        text: 'text-team-green', 
        border: 'border-team-green/30' 
      };
    case 'blue':
      return { 
        bg: 'bg-team-blue/20', 
        text: 'text-team-blue', 
        border: 'border-team-blue/30' 
      };
    default:
      return { 
        bg: 'bg-white/10', 
        text: 'text-white/70', 
        border: 'border-white/20' 
      };
  }
};
