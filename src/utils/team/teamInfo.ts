
import { TeamColor } from '@/types/team';

// Team Names
export const teamNames: Record<TeamColor, string> = {
  red: 'Crimson Court',
  blue: 'Azure Alliance',
  green: 'Emerald Enclave',
  gold: 'Golden Oligarchy',
  purple: 'Violet Vanguard',
  none: 'Unaffiliated',
  neutral: 'Neutral Negotiators',
  silver: 'Sterling Sentinels',
  bronze: 'Bronze Brigade'
};

// Team Taglines
export const teamTaglines: Record<TeamColor, string> = {
  red: 'Spend boldly, rise rapidly',
  blue: 'Strategic spending, calculated status',
  green: 'Growing wealth, growing status',
  gold: 'The pinnacle of prosperity',
  purple: 'Mystical methods, magical results',
  none: 'Forge your own path',
  neutral: 'Balance in all things',
  silver: 'Tradition meets innovation',
  bronze: 'Steady and reliable'
};

// Team Mottos (in pseudo-Latin for extra pretentiousness)
export const teamMottos: Record<TeamColor, string> = {
  red: 'Expendus Maximus',
  blue: 'Strategia Pecunia',
  green: 'Crescere Divitiae',
  gold: 'Aurum Supremus',
  purple: 'Mysticum Expenditure',
  none: 'Libertas Pecuniam',
  neutral: 'Aequilibrium Omnibus',
  silver: 'Argentum Prudentia',
  bronze: 'Aes Constantia'
};

// Team Mascots
export const teamMascots: Record<TeamColor, string> = {
  red: 'The Crimson Phoenix',
  blue: 'The Sapphire Owl',
  green: 'The Emerald Stag',
  gold: 'The Golden Lion',
  purple: 'The Amethyst Dragon',
  none: 'The White Wolf',
  neutral: 'The Gray Fox',
  silver: 'The Silver Eagle',
  bronze: 'The Bronze Bear'
};

// Team Values
export const teamValues: Record<TeamColor, string[]> = {
  red: ['Boldness', 'Competition', 'Flamboyance', 'Aggression', 'Immediacy'],
  blue: ['Strategy', 'Intelligence', 'Calculation', 'Efficiency', 'Planning'],
  green: ['Growth', 'Sustainability', 'Patience', 'Nurturing', 'Long-term thinking'],
  gold: ['Excellence', 'Luxury', 'Exclusivity', 'Prestige', 'Wealth'],
  purple: ['Creativity', 'Mystery', 'Innovation', 'Intuition', 'Unconventionality'],
  none: ['Independence', 'Freedom', 'Self-reliance', 'Autonomy', 'Flexibility'],
  neutral: ['Balance', 'Diplomacy', 'Perspective', 'Harmony', 'Mediation'],
  silver: ['Tradition', 'Innovation', 'Balance', 'Respect', 'Excellence'],
  bronze: ['Reliability', 'Consistency', 'Stability', 'Prudence', 'Value']
};
