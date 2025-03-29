
import { UserTeam, UserGender } from '@/types/user';

export const getTeamColor = (team: UserTeam | string | undefined): string => {
  if (!team) return 'text-white/70';
  
  switch (team) {
    case 'red': return 'text-team-red';
    case 'green': return 'text-team-green';
    case 'blue': return 'text-team-blue';
    default: return 'text-white/70';
  }
};

export const getTeamBorderColor = (team: UserTeam | string | undefined): string => {
  if (!team) return 'border-white/10';
  
  switch (team) {
    case 'red': return 'border-team-red/50';
    case 'green': return 'border-team-green/50';
    case 'blue': return 'border-team-blue/50';
    default: return 'border-white/10';
  }
};

export const getTeamName = (team: UserTeam | string | undefined): string => {
  if (!team) return 'Unaffiliated Cheapskate';
  
  switch (team) {
    case 'red': return 'Royal Order of Reckless Spending';
    case 'green': return 'Emerald Exchequer Cabaret';
    case 'blue': return 'Cobalt Credit Cartel';
    default: return 'Unaffiliated';
  }
};

export const getTeamShortName = (team: UserTeam | string | undefined): string => {
  if (!team) return 'None';
  
  switch (team) {
    case 'red': return 'RORS';
    case 'green': return 'EEC';
    case 'blue': return 'CCC';
    default: return 'None';
  }
};

export const getTeamMotto = (team: UserTeam | string | undefined): string => {
  if (!team) return 'Too Frugal to Care';
  
  switch (team) {
    case 'red': return 'Buy First, Think Never';
    case 'green': return 'Wealth So Strategic, It\'s Almost Pathetic';
    case 'blue': return 'Patience in Spending, Unbridled in Pretending';
    default: return 'Too Frugal to Care';
  }
};

export const getTeamBenefit = (team: UserTeam | string | undefined): string[] => {
  if (!team) return ['Freedom from financial regret', 'Ability to laugh at big spenders', 'Extra money in your actual bank account'];
  
  switch (team) {
    case 'red':
      return [
        'Exclusive access to our "What Was I Thinking?" support group',
        'Priority placement on our "Most Impulsive Spenders" newsletter',
        'Special digital therapy sessions for post-purchase regret'
      ];
    case 'green':
      return [
        'Digital certificate in "Advanced Spending Rationalization"',
        'Access to spreadsheets that magically justify all purchases',
        'Permission to use "It\'s an investment!" in all arguments'
      ];
    case 'blue':
      return [
        'Complimentary course in "Pretending You Don\'t Care About Rank"',
        'Advanced tutorials on timing purchases for maximum visibility',
        'Expert training in looking down on the red team while secretly envying them'
      ];
    default:
      return ['No perks, no problems'];
  }
};

export const getGenderTitle = (gender: UserGender | undefined): string => {
  if (!gender) return 'Noble';
  
  switch (gender) {
    case 'king': return 'King';
    case 'queen': return 'Queen';
    case 'jester': return 'Jester';
    case 'noble': return 'Noble';
    case 'neutral': return 'Sovereign';
    default: return 'Noble';
  }
};

export const getGenderEmoji = (gender: UserGender | undefined): string => {
  if (!gender) return '👑';
  
  switch (gender) {
    case 'king': return '👑';
    case 'queen': return '👸';
    case 'jester': return '🃏';
    case 'noble': return '⚜️';
    case 'neutral': return '🏅';
    default: return '👑';
  }
};

export const getInitials = (displayName: string | undefined, username: string): string => {
  if (!displayName) return username.substring(0, 2).toUpperCase();
  
  const parts = displayName.split(' ');
  if (parts.length === 1) return displayName.substring(0, 2).toUpperCase();
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

export const getTeamAbsurdStat = (team: UserTeam | string | undefined): string => {
  if (!team) return 'Has saved approximately $0 by not participating in our financial folly';
  
  switch (team) {
    case 'red':
      return 'Members collectively spent $127,493 in under 3 minutes during the "Midnight Madness" event';
    case 'green':
      return 'Average member spends 42 minutes analyzing a $5 purchase, then impulse buys at $500 item';
    case 'blue':
      return '74% of members claim they "don\'t care about rank" while checking the leaderboard hourly';
    default:
      return 'No statistics available, much like their contributions';
  }
};

export const getTeamHistoricalNote = (team: UserTeam | string | undefined): string => {
  if (!team) return 'History does not remember those who refused to part with their money';
  
  switch (team) {
    case 'red':
      return 'Founded by Lord Hastings Moneybags who famously said "I\'ll worry about the consequences after I see my name at the top"';
    case 'green':
      return 'Established by the Countess of Calculon, who created 17 spreadsheets to justify her first donation';
    case 'blue':
      return 'Created by the Duke of Delay, who waited until precisely the right moment to donate... and missed it';
    default:
      return 'No recorded history of significance';
  }
};
