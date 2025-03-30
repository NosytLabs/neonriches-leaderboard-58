
import { TeamType } from '@/types/user';

/**
 * Get the display name for a team
 * @param team Team identifier
 * @returns Human-readable team name
 */
export function getTeamName(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return 'Royal Crimson';
    case 'green': return 'Emerald Kingdom';
    case 'blue': return 'Azure Dynasty';
    case 'none': return 'Unaligned';
    default: return 'Unaligned';
  }
}

/**
 * Get the color class for a team
 * @param team Team identifier
 * @returns CSS color class for the team
 */
export function getTeamColor(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return 'text-royal-crimson';
    case 'green': return 'text-royal-gold'; // Using gold for green team
    case 'blue': return 'text-royal-navy';
    default: return 'text-white';
  }
}

/**
 * Get the border color class for a team
 * @param team Team identifier
 * @returns CSS border color class for the team
 */
export function getTeamBorderColor(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return 'border-royal-crimson/30';
    case 'green': return 'border-royal-gold/30'; // Using gold for green team
    case 'blue': return 'border-royal-navy/30';
    default: return 'border-white/10';
  }
}

/**
 * Get the background color class for a team
 * @param team Team identifier
 * @returns CSS background color class for the team
 */
export function getTeamBgColor(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return 'bg-royal-crimson/10';
    case 'green': return 'bg-royal-gold/10'; // Using gold for green team
    case 'blue': return 'bg-royal-navy/10';
    default: return 'bg-white/5';
  }
}

/**
 * Get the motto for a team
 * @param team Team identifier
 * @returns Team motto
 */
export function getTeamMotto(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return 'Crimson Coins Rule the Realm';
    case 'green': return 'All That Glitters Is Our Gold';
    case 'blue': return 'Deep Waters Run Rich with Wealth';
    default: return 'Choose a team to display your allegiance';
  }
}

/**
 * Get a benefit description for a team
 * @param team Team identifier
 * @returns Team benefit description
 */
export function getTeamBenefit(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return '5% bonus on all transactions to fellow Crimson members';
    case 'green': return 'Weekly golden profile boost for loyal Gold supporters';
    case 'blue': return 'Exclusive access to Azure Dynasty team events';
    default: return 'Join a team to unlock team benefits';
  }
}

/**
 * Get an absurd statistic for a team
 * @param team Team identifier
 * @returns Absurd team statistic
 */
export function getTeamAbsurdStat(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return 'Members have collectively spent enough to buy 3 private islands';
    case 'green': return 'Our gold reserves would sink a medium-sized yacht';
    case 'blue': return 'If stacked, our transactions would reach the mesosphere';
    default: return 'No team statistics available';
  }
}

/**
 * Get the security guarantee for a team
 * @param team Team identifier
 * @returns Team security guarantee text
 */
export function getTeamSecurityGuarantee(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return 'Protected by an army of highly-trained digital knights';
    case 'green': return 'Secured by state-of-the-art golden blockchain technology';
    case 'blue': return 'Guarded by the mythical sea creatures of the deep web';
    default: return 'Standard security protocols in place';
  }
}

/**
 * Get a satirical NFT joke for a team
 * @param team Team identifier
 * @returns Team NFT joke
 */
export function getTeamNFTJoke(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return 'Our NFTs are so exclusive they don\'t even exist';
    case 'green': return 'Each transaction creates a digital statue in your honor*';
    case 'blue': return 'Your profile is technically underwater real estate';
    default: return 'NFTs are digital assets with questionable utility';
  }
}

/**
 * Get a crypto roast for a team
 * @param team Team identifier
 * @returns Team crypto roast
 */
export function getTeamCryptoRoast(team: TeamType | null | undefined): string {
  switch (team) {
    case 'red': return 'Making real cash disappear faster than a cryptocurrency exchange';
    case 'green': return 'Our gold is as real as your crypto portfolio gains';
    case 'blue': return 'More stable than a stablecoin during a financial crisis';
    default: return 'Cryptocurrency: turning electricity into speculation since 2009';
  }
}

/**
 * Get the title based on gender
 * @param gender Gender identifier
 * @returns Appropriate title for the gender
 */
export function getGenderTitle(gender: string | null | undefined): string {
  switch (gender) {
    case 'king': return 'His Majesty';
    case 'queen': return 'Her Majesty';
    case 'jester': return 'The Honorable Jester';
    case 'neutral': return 'Your Excellency';
    case 'noble': return 'Noble Sovereign';
    default: return 'Your Highness';
  }
}

/**
 * Get an emoji for a gender
 * @param gender Gender identifier
 * @returns Emoji representing the gender
 */
export function getGenderEmoji(gender: string | null | undefined): string {
  switch (gender) {
    case 'king': return '👑';
    case 'queen': return '👸';
    case 'jester': return '🃏';
    case 'neutral': return '🏅';
    case 'noble': return '🎭';
    default: return '👤';
  }
}

/**
 * Get the initials from a name
 * @param name Full name
 * @returns Initials (up to 2 characters)
 */
export function getInitials(name: string | undefined | null): string {
  if (!name) return '?';
  
  const parts = name.split(' ');
  if (parts.length === 1) {
    return name.substring(0, 2).toUpperCase();
  }
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}
