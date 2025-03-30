
import { Team } from '@/types/user';

// Get team color class
export const getTeamColor = (team: Team | null | undefined): string => {
  if (!team) return '';
  
  switch (team.toLowerCase()) {
    case 'red': return 'bg-red-600/20 text-red-400 border-red-600/30';
    case 'green': return 'bg-green-600/20 text-green-400 border-green-600/30';
    case 'blue': return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
    default: return '';
  }
};

// Get team text color class
export const getTeamTextColorClass = (team: Team | null | undefined): string => {
  if (!team) return 'text-white/70';
  
  switch (team.toLowerCase()) {
    case 'red': return 'text-red-400';
    case 'green': return 'text-green-400';
    case 'blue': return 'text-blue-400';
    default: return 'text-white/70';
  }
};

// Get rank text color class
export const getRankTextColorClass = (rank: number): string => {
  if (rank === 1) return 'text-royal-gold';
  if (rank === 2) return 'text-gray-300';
  if (rank === 3) return 'text-amber-700';
  if (rank <= 10) return 'text-purple-400';
  return 'text-white/80';
};

// Get user initials
export const getInitials = (name: string = ''): string => {
  if (!name) return 'U';
  return name.charAt(0).toUpperCase();
};

// Get gender title
export const getGenderTitle = (gender: string): string => {
  switch (gender.toLowerCase()) {
    case 'male': return 'Lord';
    case 'female': return 'Lady';
    case 'neutral': return 'Noble';
    default: return 'Noble';
  }
};

// Get gender emoji
export const getGenderEmoji = (gender: string): string => {
  switch (gender.toLowerCase()) {
    case 'male': return '♂️';
    case 'female': return '♀️';
    case 'neutral': return '⚧';
    default: return '';
  }
};

// Get team motto
export const getTeamMotto = (team: Team): string => {
  switch (team.toLowerCase()) {
    case 'red': return 'Glory Through Sacrifice';
    case 'green': return 'Prosperity Through Wisdom';
    case 'blue': return 'Power Through Knowledge';
    default: return 'Honor Through Wealth';
  }
};

// Get team benefit
export const getTeamBenefit = (team: Team): string => {
  switch (team.toLowerCase()) {
    case 'red': return '+10% Mockery Discount';
    case 'green': return '+5% Cosmetic Discount';
    case 'blue': return '+15% Profile Boost Duration';
    default: return 'No Special Benefits';
  }
};

// Get team security guarantee
export const getTeamSecurityGuarantee = (team: Team): string => {
  switch (team.toLowerCase()) {
    case 'red': return 'Guaranteed to lose money slightly faster than others!';
    case 'green': return 'Your payments are definitely going somewhere!';
    case 'blue': return 'We promise not to tell anyone how much you spent!';
    default: return 'The most secure way to part with your money!';
  }
};

// Get absurd team statistic
export const getTeamAbsurdStat = (team: Team): string => {
  switch (team.toLowerCase()) {
    case 'red': return 'Members have collectively donated enough to buy 47 solid gold medieval helmets';
    case 'green': return 'Has funded the planting of exactly zero trees despite the name';
    case 'blue': return 'Members have read a combined total of 3 books about actual nobility';
    default: return 'Has the highest ratio of money spent to actual value received';
  }
};

// Get historical note
export const getTeamHistoricalNote = (team: Team): string => {
  switch (team.toLowerCase()) {
    case 'red': return 'Historically, red team members were expected to joust weekly for the amusement of others';
    case 'green': return 'The green team was originally formed when members accidentally spilled guacamole on their royal attire';
    case 'blue': return 'Blue team members traditionally claimed to have royal blood, despite obvious evidence to the contrary';
    default: return 'Once convinced an entire village they were actual royalty with nothing but fancy clothes and attitude';
  }
};

// Get NFT joke
export const getTeamNFTJoke = (team: Team): string => {
  switch (team.toLowerCase()) {
    case 'red': return 'Exclusively accepts digital artwork of members in increasingly ridiculous poses';
    case 'green': return 'Claims their digital assets are "environmentally friendly" because they're imaginary';
    case 'blue': return 'Once tried to sell the concept of nobility as an NFT';
    default: return 'Believes the "T" in NFT stands for "Title of nobility"';
  }
};

// Get crypto roast
export const getTeamCryptoRoast = (team: Team): string => {
  switch (team.toLowerCase()) {
    case 'red': return 'Still waiting for "BloodCoin" to take off any day now';
    case 'green': return 'Invented a cryptocurrency that loses value even when others gain';
    case 'blue': return 'Created a blockchain where all transactions are automatically taxed 90%';
    default: return 'Somehow managed to create a cryptocurrency worth less than monopoly money';
  }
};
