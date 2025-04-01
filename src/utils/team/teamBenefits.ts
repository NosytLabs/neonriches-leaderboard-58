
import { TeamColor } from '@/types/team';

// Add missing properties
export const teamBenefits: Record<TeamColor, string[]> = {
  red: ['Team-exclusive chat', 'Crimson cosmetics', 'Special discount on packages'],
  blue: ['Team-exclusive chat', 'Navy cosmetics', 'Bonus on first deposit'],
  green: ['Team-exclusive chat', 'Emerald cosmetics', 'Increased daily rewards'],
  gold: ['Team-exclusive chat', 'Royal cosmetics', 'Elite status features'],
  purple: ['Team-exclusive chat', 'Violet cosmetics', 'Mystical profile effects'],
  none: ['Basic chat access', 'Standard cosmetics', 'Normal rewards'],
  neutral: ['Multi-team chat access', 'Neutral cosmetics', 'Balanced rewards'],
  silver: ['Silver team benefits', 'Silver cosmetics', 'Silver rewards'],
  bronze: ['Bronze team benefits', 'Bronze cosmetics', 'Bronze rewards']
};

export const teamDescriptions: Record<TeamColor, string> = {
  red: 'The Red Team is known for its aggressive spending and competitive spirit.',
  blue: 'The Blue Team values strategy and collaboration to maximize their impact.',
  green: 'The Green Team focuses on sustainable growth and long-term investments.',
  gold: 'The Gold Team represents the elite spenders with exclusive benefits.',
  purple: 'The Purple Team embraces creativity and unique spending styles.',
  none: 'No team affiliation, enjoy a balanced experience.',
  neutral: 'Access to multiple team chats, offering a diverse perspective.',
  silver: 'The Silver Team is known for its balanced spending and strategic spirit.',
  bronze: 'The Bronze Team is known for its conservative spending and steady spirit.'
};

export const teamLore: Record<TeamColor, string> = {
  red: 'Forged in the fires of competition, the Red Team dominates the arena.',
  blue: 'United by a shared vision, the Blue Team navigates the tides of fortune.',
  green: 'Rooted in growth and prosperity, the Green Team cultivates success.',
  gold: 'Adorned in opulence, the Gold Team reigns supreme in the realm of riches.',
  purple: 'Embracing the arcane, the Purple Team weaves magic into their spending.',
  none: 'Unaffiliated, you forge your own path in the kingdom.',
  neutral: 'A diplomat among teams, you seek harmony in spending.',
  silver: 'The Silver Team is known for its balanced spending and strategic spirit.',
  bronze: 'The Bronze Team is known for its conservative spending and steady spirit.'
};

export const teamColors: Record<TeamColor, string> = {
  red: '#FF4136',
  blue: '#0074D9',
  green: '#2ECC40',
  gold: '#FFDC00',
  purple: '#B10DC9',
  none: '#85144b',
  neutral: '#AAAAAA',
  silver: '#C0C0C0',
  bronze: '#CD7F32'
};

export const teamIcons: Record<TeamColor, string> = {
  red: 'fire',
  blue: 'water',
  green: 'leaf',
  gold: 'crown',
  purple: 'magic',
  none: 'question',
  neutral: 'balance',
  silver: 'trophy',
  bronze: 'medal'
};
