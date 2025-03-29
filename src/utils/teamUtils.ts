
import { UserTeam } from '@/types/user';
import { Shield, Zap, Flame, Snowflake } from 'lucide-react';
import React from 'react';

/**
 * Get the color associated with a team
 */
export const getTeamColor = (team?: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'text-red-500';
    case 'green':
      return 'text-green-500';
    case 'blue':
      return 'text-blue-500';
    default:
      return 'text-gray-400';
  }
};

/**
 * Get the border color associated with a team
 */
export const getTeamBorderColor = (team?: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'border-red-500';
    case 'green':
      return 'border-green-500';
    case 'blue':
      return 'border-blue-500';
    default:
      return 'border-gray-400';
  }
};

/**
 * Get the icon associated with a team
 */
export const getTeamIcon = (team?: UserTeam): React.ReactNode => {
  switch (team) {
    case 'red':
      return <Flame className="h-4 w-4 text-red-500" />;
    case 'green':
      return <Zap className="h-4 w-4 text-green-500" />;
    case 'blue':
      return <Snowflake className="h-4 w-4 text-blue-500" />;
    default:
      return <Shield className="h-4 w-4 text-gray-400" />;
  }
};

/**
 * Get a motto for a team
 */
export const getTeamMotto = (team?: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Burning through the ranks with fiery determination!";
    case 'green':
      return "Electrifying the competition with every contribution!";
    case 'blue':
      return "Freezing the competition in their tracks!";
    default:
      return "Join a team and show your loyalty!";
  }
};

/**
 * Get a benefit for a team
 */
export const getTeamBenefit = (team?: UserTeam): string => {
  switch (team) {
    case 'red':
      return "5% bonus on Mockery effects against non-Red members";
    case 'green':
      return "10% discount on profile boost purchases";
    case 'blue':
      return "25% longer duration on profile visibility effects";
    default:
      return "Join a team to unlock team benefits!";
  }
};

/**
 * Get a humorous absurd statistic for a team
 */
export const getTeamAbsurdStat = (team?: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Red team members have collectively spent enough to buy 3,721 medieval castles";
    case 'green':
      return "Green team's spending could power the entire internet for 24 minutes";
    case 'blue':
      return "Blue team members have collectively clicked 'deposit' enough times to wear out 42 mice";
    default:
      return "Teams have collectively spent enough to buy a small island nation";
  }
};

/**
 * Get a made-up historical note about a team
 */
export const getTeamHistoricalNote = (team?: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Founded by the legendary Sir Spendsalot in the first crypto winter";
    case 'green':
      return "Originally formed by a group of tech billionaires hiding their pocket change";
    case 'blue':
      return "Rumored to be secretly backed by an anonymous whale from the ancient NFT boom";
    default:
      return "Each team traces its lineage to the great spending wars of 2023";
  }
};

/**
 * Get a joke about NFTs related to a team
 */
export const getTeamNFTJoke = (team?: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Red team's NFT collection is so hot it needs its own fire insurance";
    case 'green':
      return "Green team is still waiting for their JPEGs to moon any day now";
    case 'blue':
      return "Blue team holds more frozen assets than Antarctica";
    default:
      return "Team NFTs: Because regular JPEGs weren't expensive enough";
  }
};

/**
 * Get a satirical security guarantee for a team
 */
export const getTeamSecurityGuarantee = (team?: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Red team security: protected by dragons and at least two blockchain buzzwords";
    case 'green':
      return "Green team guarantees your data is safe-ish, most of the time";
    case 'blue':
      return "Blue team security is so cold even hackers don't want to touch it";
    default:
      return "Our security is like a medieval castle, if the castle was made of JavaScript";
  }
};

/**
 * Get a satirical crypto roast for a team
 */
export const getTeamCryptoRoast = (team?: UserTeam): string => {
  switch (team) {
    case 'red':
      return "Red team thinks 'proof of burn' means setting money on fire";
    case 'green':
      return "Green team's blockchain strategy: have you tried turning it off and on again?";
    case 'blue':
      return "Blue team's crypto strategy is still in cold storage... from 2017";
    default:
      return "Our crypto strategy is about as stable as the markets";
  }
};

/**
 * Get emoji representation for gender/royal title
 */
export const getGenderEmoji = (gender?: string): string => {
  switch (gender) {
    case 'king':
      return '👑';
    case 'queen':
      return '👸';
    case 'jester':
      return '🃏';
    case 'noble':
      return '⚜️';
    default:
      return '👤';
  }
};

/**
 * Get initials from username or display name
 */
export const getInitials = (name?: string): string => {
  if (!name) return '??';
  
  const parts = name.split(' ');
  if (parts.length === 1) {
    return name.substring(0, 2).toUpperCase();
  }
  
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};
