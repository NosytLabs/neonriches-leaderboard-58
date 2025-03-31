
import { TeamColor, TeamType } from "@/types/mockery-types";

// Team color utility functions
export const getTeamColor = (team: TeamType | TeamColor): string => {
  const colorMap: Record<string, string> = {
    red: '#dc2626',
    blue: '#2563eb',
    green: '#16a34a',
    gold: '#eab308',
    purple: '#9333ea',
    none: '#6b7280',
    neutral: '#6b7280'
  };
  
  return colorMap[team] || colorMap.none;
};

// Alias for getTeamColor to support existing code
export const getTeamBorderColor = getTeamColor;

export const getTeamName = (team: TeamType | TeamColor): string => {
  const nameMap: Record<string, string> = {
    red: 'Crimson Order',
    blue: 'Azure Legion',
    green: 'Emerald Dynasty',
    gold: 'Golden Empire',
    purple: 'Royal Court',
    none: 'Unaligned',
    neutral: 'Neutral'
  };
  
  return nameMap[team] || nameMap.none;
};

export const getTeamMotto = (team: TeamType | TeamColor): string => {
  const mottoMap: Record<string, string> = {
    red: 'Fortune favors the bold',
    blue: 'Knowledge is true power',
    green: 'Growth through harmony',
    gold: 'Prosperity above all',
    purple: 'Divine right to rule',
    none: 'Chart your own path',
    neutral: 'Balance in all things'
  };
  
  return mottoMap[team] || mottoMap.none;
};

export const getTeamBenefit = (team: TeamType | TeamColor): string => {
  const benefitMap: Record<string, string> = {
    red: '+15% attack power in mockery battles',
    blue: '+10% increased wallet interest rate',
    green: '-20% cost on profile boosts',
    gold: '+25% bonus on first monthly deposit',
    purple: 'Royal cosmetics unlock at rank 10 instead of 50',
    none: 'Freedom to change teams at any time',
    neutral: 'Balanced benefits across all features'
  };
  
  return benefitMap[team] || benefitMap.none;
};

export const getTeamSecurityGuarantee = (team: TeamType | TeamColor): string => {
  const securityMap: Record<string, string> = {
    red: 'Protected by unbreakable battle oaths',
    blue: 'Safeguarded by ancient wisdom',
    green: 'Secured by natural balance',
    gold: 'Ensured by prosperity pacts',
    purple: 'Protected by royal decree',
    none: 'Self-reliance is your shield',
    neutral: 'Universal protection through balance'
  };
  
  return securityMap[team] || securityMap.none;
};

export const getTeamAbsurdStat = (team: TeamType | TeamColor): string => {
  const statMap: Record<string, string> = {
    red: '87% of members claim to have fought a digital dragon',
    blue: '42% believe they can predict market movements by reading tea leaves',
    green: '63% claim their plants grow faster when they wear team colors',
    gold: '91% sleep with their crypto wallets under their pillows',
    purple: '79% address themselves with royal titles in private',
    none: '96% believe they're actually NPCs in someone else's game',
    neutral: '50% of statistics are made up on the spot'
  };
  
  return statMap[team] || statMap.none;
};

export const getTeamHistoricalNote = (team: TeamType | TeamColor): string => {
  const noteMap: Record<string, string> = {
    red: 'Founded by a former video game speed-runner who believed real life needed a leaderboard',
    blue: 'Started as a book club that evolved into a competitive wealth philosophy',
    green: 'Originally a gardening discord that pivoted to wealth generation',
    gold: 'Created by former poker players who missed the thrill of high stakes',
    purple: 'Established by cosplay enthusiasts with a particular love for royal characters',
    none: 'Not a team at all, but a philosophical stance against arbitrary grouping',
    neutral: 'Founded by professional mediators seeking balance in all things'
  };
  
  return noteMap[team] || noteMap.none;
};

export const getTeamNFTJoke = (team: TeamType | TeamColor): string => {
  const jokeMap: Record<string, string> = {
    red: 'Our NFTs are so exclusive they don't actually exist',
    blue: 'We invented a blockchain that runs on pure intellectual superiority',
    green: 'Our NFTs are sustainably farmed and 100% organic',
    gold: 'Each NFT comes with a virtual butler who ignores you',
    purple: 'Our NFTs are royalty-free, but still expect to be treated like royalty',
    none: 'We believe in NFTs: Nice Friendly Thoughts',
    neutral: 'Our NFTs are perfectly balanced - they're worth exactly what you paid'
  };
  
  return jokeMap[team] || jokeMap.none;
};

export const getTeamCryptoRoast = (team: TeamType | TeamColor): string => {
  const roastMap: Record<string, string> = {
    red: 'People who think pressing buy faster makes the price go up',
    blue: 'Overthinking every trade until the opportunity has passed',
    green: 'Believes staring at plants helps portfolio growth',
    gold: 'The only thing more inflated than their wallets is their ego',
    purple: 'Expects their crypto to curtsy before being traded',
    none: 'Can't even commit to a blockchain, let alone a team',
    neutral: 'Too afraid to have an opinion on whether crypto will go up or down'
  };
  
  return roastMap[team] || roastMap.none;
};
