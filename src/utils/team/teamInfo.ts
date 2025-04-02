
import { TeamColor } from '@/types/mockery-types';

// Team descriptions
export const teamDescriptions: Record<TeamColor, string> = {
  red: 'The Red Team is known for their aggressive strategies and direct approach to challenges. They pride themselves on strength and power, often leading the charge in competitive events.',
  blue: 'The Blue Team values wisdom and calculated decision-making. They approach challenges with careful planning and strategic thinking, often finding innovative solutions to complex problems.',
  green: 'The Green Team emphasizes growth and sustainability. They focus on long-term strategies and resource management, building their influence gradually but steadily over time.',
  gold: 'The Gold Team prioritizes wealth accumulation and economic dominance. They excel at generating and managing resources, often controlling significant portions of the marketplace.',
  purple: 'The Purple Team values mystery and exclusivity. They operate with a certain degree of secrecy, cultivating rare skills and unique approaches to rise through the ranks.',
  none: 'Unaffiliated members remain independent from team politics and allegiances. They forge their own path without team limitations or obligations.',
  neutral: 'The Neutral faction maintains balance between competing teams. They often serve as mediators and can work effectively with members of any team.',
  silver: 'The Silver Team embodies elegance and technical precision. They excel through meticulous execution and attention to detail rather than raw power.',
  bronze: 'The Bronze Team represents tradition and reliability. They build upon established foundations, emphasizing consistency and incremental improvement.',
  crimson: 'The Crimson Team embodies sacrifice and intimidation. They are willing to pay high costs for power and maintain an aura of danger around their activities.'
};

// Team headquarters locations
export const teamHeadquarters: Record<TeamColor, string> = {
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

// Team specialties
export const teamSpecialties: Record<TeamColor, string> = {
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

// Team weaknesses
export const teamWeaknesses: Record<TeamColor, string> = {
  red: 'Impulsive decision-making',
  blue: 'Overthinking simple problems',
  green: 'Slow initial progress',
  gold: 'Overemphasis on material gain',
  purple: 'Excessive secrecy',
  none: 'Lack of team support',
  neutral: 'Indecisiveness',
  silver: 'Perfectionism',
  bronze: 'Resistance to change',
  crimson: 'Self-destructive tendencies'
};

// Team rivals
export const teamRivals: Record<TeamColor, string[]> = {
  red: ['blue', 'silver'],
  blue: ['red', 'purple'],
  green: ['gold', 'bronze'],
  gold: ['green', 'crimson'],
  purple: ['blue', 'neutral'],
  none: [],
  neutral: ['purple', 'crimson'],
  silver: ['red', 'bronze'],
  bronze: ['green', 'silver'],
  crimson: ['gold', 'neutral']
};
