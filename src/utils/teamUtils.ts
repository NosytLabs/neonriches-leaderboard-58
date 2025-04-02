
import { TeamColor } from '@/types/team';

// TeamColor utilities
// ===================

// Convert any string to a valid TeamColor
export const toTeamColor = (team: string): TeamColor => {
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 
    'none', 'neutral', 'silver', 'bronze', 'crimson'
  ];
  
  // If the input is already a valid TeamColor, return it
  if (validTeamColors.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  // Default fallback
  return 'none';
};

// Team name utilities
// ==================

// Get the display name for a team color
export const getTeamName = (team: TeamColor): string => {
  const names: Record<TeamColor, string> = {
    red: 'Crimson Crown',
    blue: 'Azure Knights',
    green: 'Golden Order',
    gold: 'Royal Gold',
    purple: 'Royal Purple',
    none: 'No Team',
    neutral: 'Neutral',
    silver: 'Silver League',
    bronze: 'Bronze League',
    crimson: 'Crimson League'
  };
  
  return names[team] || team;
};

// Team styling utilities
// =====================

// Get the appropriate CSS color class for a team
export const getTeamColor = (team: TeamColor): string => {
  const colorClasses: Record<TeamColor, string> = {
    red: 'text-royal-crimson border-royal-crimson',
    blue: 'text-royal-navy border-royal-navy',
    green: 'text-royal-gold border-royal-gold',
    gold: 'text-amber-500 border-amber-500',
    purple: 'text-purple-500 border-purple-500',
    none: 'text-gray-400 border-gray-400',
    neutral: 'text-gray-500 border-gray-500',
    silver: 'text-gray-300 border-gray-300',
    bronze: 'text-amber-700 border-amber-700',
    crimson: 'text-red-700 border-red-700'
  };
  
  return colorClasses[team] || 'text-gray-400 border-gray-400';
};

// Get text color for a team
export const getTeamTextColor = (team: TeamColor): string => {
  const colorClasses: Record<TeamColor, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    gold: 'text-yellow-400',
    purple: 'text-purple-500',
    none: 'text-gray-400',
    neutral: 'text-gray-400',
    silver: 'text-slate-400',
    bronze: 'text-amber-600',
    crimson: 'text-red-600'
  };
  
  return colorClasses[team] || 'text-gray-400';
};

// Get background color for a team
export const getTeamBackgroundColor = (team: TeamColor): string => {
  const colorClasses: Record<TeamColor, string> = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    gold: 'bg-yellow-400',
    purple: 'bg-purple-500',
    none: 'bg-gray-400',
    neutral: 'bg-gray-400',
    silver: 'bg-slate-400',
    bronze: 'bg-amber-600',
    crimson: 'bg-red-600'
  };
  
  return colorClasses[team] || 'bg-gray-400';
};

// Get light background color for a team
export const getTeamBackgroundLightColor = (team: TeamColor): string => {
  const colorClasses: Record<TeamColor, string> = {
    red: 'bg-red-500/20',
    blue: 'bg-blue-500/20',
    green: 'bg-green-500/20',
    gold: 'bg-yellow-400/20',
    purple: 'bg-purple-500/20',
    none: 'bg-gray-400/20',
    neutral: 'bg-gray-400/20',
    silver: 'bg-slate-400/20',
    bronze: 'bg-amber-600/20',
    crimson: 'bg-red-600/20'
  };
  
  return colorClasses[team] || 'bg-gray-400/20';
};

// Get border color for a team
export const getTeamBorderColor = (team: TeamColor): string => {
  const colorClasses: Record<TeamColor, string> = {
    red: 'border-red-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    gold: 'border-yellow-400',
    purple: 'border-purple-500',
    none: 'border-gray-400',
    neutral: 'border-gray-400',
    silver: 'border-slate-400',
    bronze: 'border-amber-600',
    crimson: 'border-red-600'
  };
  
  return colorClasses[team] || 'border-gray-400';
};

// Team information utilities
// =========================

// Get the motto for a team
export const getTeamMotto = (team: TeamColor): string => {
  const mottos: Record<TeamColor, string> = {
    red: "Spend First, Think Never",
    blue: "Today's Purchases, Tomorrow's Problems",
    green: "All Wealth's a Stage",
    gold: "The Golden Rule: He Who Has The Gold Makes The Rules",
    purple: "Nobility Through Expenditure",
    neutral: "Independent in Finance and Spirit",
    none: "Free From Faction, Bound By Currency",
    silver: "Second Place, First-Rate Spending",
    bronze: "Humble in Rank, Mighty in Wallet",
    crimson: "Blood Money Flows Eternal"
  };
  
  return mottos[team] || "Wealth Is Our Virtue";
};

// Get the description for a team
export const getTeamDescription = (team: TeamColor): string => {
  const descriptions: Record<TeamColor, string> = {
    red: "Founded on the principle that money exists to be spent lavishly and spectacularly. Members pride themselves on bold, impulsive purchases.",
    blue: "Masters of leveraging credit to maintain appearances. Members excel at maintaining a high spending profile through strategic use of borrowed funds.",
    green: "Combines flamboyant spending with theatrical flair. Every purchase is treated as a performance art piece, designed to entertain and impress.",
    gold: "The elite inner circle of the Cash Kingdom. Members set the standard for opulence and wasteful spending.",
    purple: "The Royal Purple Council represents the old money of the Cash Kingdom. Their spending emphasizes tradition, legacy, and responsibility.",
    neutral: "Independent spenders who refuse to align with any philosophy of consumption. Members value flexibility in their spending habits.",
    none: "Those yet to pledge allegiance to a spending philosophy. Unaffiliated members are free to explore different approaches.",
    silver: "The Silver Sovereign Society combines fiscal responsibility with strategic splurging to maximize social impact of each dollar.",
    bronze: "The Bronze Bank Brigade takes pride in achieving impressive status with more modest means through careful curation.",
    crimson: "The most aggressive and competitive spenders in the kingdom, often engaging in spending wars at any cost."
  };
  
  return descriptions[team] || "A faction of like-minded spenders united by their financial philosophy.";
};

// Get the benefits for a team
export const getTeamBenefits = (team: TeamColor): string[] => {
  const benefits: Record<TeamColor, string[]> = {
    red: [
      "20% bonus on direct deposits",
      "Exclusive crimson profile frames",
      "Access to special fire-themed effects"
    ],
    blue: [
      "5% royalty on team member spending",
      "Sapphire profile decorations",
      "Water-themed animation effects"
    ],
    green: [
      "15% discount on profile boosts",
      "Nature-themed custom emojis",
      "Emerald crown cosmetic item"
    ],
    gold: [
      "30% bonus on all transactions",
      "Golden profile badge",
      "Premium animated effects"
    ],
    purple: [
      "Royal status in team chats",
      "Mystical profile effects",
      "Priority customer support"
    ],
    none: [
      "Team-neutral bonuses",
      "Access to all basic features",
      "Standard profile customization"
    ],
    neutral: [
      "Balanced bonus allocation",
      "Universal team compatibility",
      "Cross-team communication perks"
    ],
    silver: [
      "10% discount on upgrades",
      "Silver frame decorations",
      "Special moonlight effects"
    ],
    bronze: [
      "5% bonus on recurring deposits",
      "Bronze commemorative items",
      "Early access to basic features"
    ],
    crimson: [
      "25% power boost in team competitions",
      "Blood-themed profile effects",
      "Exclusive crimson cosmetics"
    ]
  };
  
  return benefits[team] || ["No benefits available"];
};

// Get the headquarters for a team
export const getTeamHeadquarters = (team: TeamColor): string => {
  const headquarters: Record<TeamColor, string> = {
    red: 'Crimson Citadel',
    blue: 'Sapphire Sanctuary',
    green: 'Emerald Enclave',
    gold: 'Golden Palace',
    purple: 'Amethyst Tower',
    none: 'Independent Quarters',
    neutral: 'Balance Hall',
    silver: 'Sterling Spire',
    bronze: 'Bronze Bastion',
    crimson: 'Bloodstone Keep'
  };
  
  return headquarters[team] || 'Unknown Location';
};

// Get the specialty for a team
export const getTeamSpecialty = (team: TeamColor): string => {
  const specialties: Record<TeamColor, string> = {
    red: 'Combat and Direct Competition',
    blue: 'Strategy and Knowledge',
    green: 'Growth and Resource Gathering',
    gold: 'Wealth Generation and Commerce',
    purple: 'Rare Item Collection and Stealth',
    none: 'Adaptability and Independence',
    neutral: 'Diplomacy and Mediation',
    silver: 'Defense and Protection',
    bronze: 'Crafting and Creation',
    crimson: 'Blood Magic and Intimidation'
  };
  
  return specialties[team] || 'Unknown Specialty';
};

// Team Data utilities
// ==================

// Create a TeamData object from basic information
export const createTeamData = (
  color: TeamColor, 
  name: string, 
  description: string, 
  memberCount: number, 
  totalSpent: number, 
  rank: number
): any => {
  return {
    id: color,
    color: color,
    name: name,
    description: description,
    memberCount: memberCount,
    members: memberCount,
    totalSpent: totalSpent,
    rank: rank,
    leaderUsername: `${color}Leader`,
    logo: `/assets/teams/${color}.svg`,
  };
};

// Get Tailwind background color class for a team
export const getTeamTailwindBgColor = (team: TeamColor): string => {
  return getTeamBorderColor(team);
};

