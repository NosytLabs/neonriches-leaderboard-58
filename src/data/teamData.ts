
import { TeamColor, TeamData } from '@/types/team';

/**
 * Team data repository
 * Contains all static data related to teams
 */
export const teams: Record<TeamColor, TeamData> = {
  red: {
    id: 'red',
    name: 'Crimson Order',
    motto: 'Fortune favors the bold',
    color: '#dc2626',
    benefits: [
      '+15% attack power in mockery battles',
      'Exclusive crimson profile frames',
      'Bonus daily rank points during conquests'
    ],
    securityGuarantee: 'Protected by unbreakable battle oaths',
    absurdStat: '87% of members claim to have fought a digital dragon',
    historicalNote: 'Founded by a former video game speed-runner who believed real life needed a leaderboard',
    nftJoke: 'Our NFTs are so exclusive they don\'t actually exist',
    cryptoRoast: 'People who think pressing buy faster makes the price go up'
  },
  blue: {
    id: 'blue',
    name: 'Azure Legion',
    motto: 'Knowledge is true power',
    color: '#2563eb',
    benefits: [
      '+10% increased wallet interest rate',
      'Reduced cooldown on profile boosts',
      'Special team cosmetic unlocks'
    ],
    securityGuarantee: 'Safeguarded by ancient wisdom',
    absurdStat: '42% believe they can predict market movements by reading tea leaves',
    historicalNote: 'Started as a book club that evolved into a competitive wealth philosophy',
    nftJoke: 'We invented a blockchain that runs on pure intellectual superiority',
    cryptoRoast: 'Overthinking every trade until the opportunity has passed'
  },
  green: {
    id: 'green',
    name: 'Emerald Dynasty',
    motto: 'Growth through harmony',
    color: '#16a34a',
    benefits: [
      '-20% cost on profile boosts',
      'Enhanced growth-themed animations',
      'Special monthly rewards'
    ],
    securityGuarantee: 'Secured by natural balance',
    absurdStat: '63% claim their plants grow faster when they wear team colors',
    historicalNote: 'Originally a gardening discord that pivoted to wealth generation',
    nftJoke: 'Our NFTs are sustainably farmed and 100% organic',
    cryptoRoast: 'Believes staring at plants helps portfolio growth'
  },
  gold: {
    id: 'gold',
    name: 'Golden Empire',
    motto: 'Prosperity above all',
    color: '#eab308',
    benefits: [
      '+25% bonus on first monthly deposit',
      'Exclusive golden profile effects',
      'Special status indicators'
    ],
    securityGuarantee: 'Ensured by prosperity pacts',
    absurdStat: '91% sleep with their crypto wallets under their pillows',
    historicalNote: 'Created by former poker players who missed the thrill of high stakes',
    nftJoke: 'Each NFT comes with a virtual butler who ignores you',
    cryptoRoast: 'The only thing more inflated than their wallets is their ego'
  },
  purple: {
    id: 'purple',
    name: 'Royal Court',
    motto: 'Divine right to rule',
    color: '#9333ea',
    benefits: [
      'Royal cosmetics unlock at rank 10 instead of 50',
      'Special royal titles available',
      'Extended protection duration'
    ],
    securityGuarantee: 'Protected by royal decree',
    absurdStat: '79% address themselves with royal titles in private',
    historicalNote: 'Established by cosplay enthusiasts with a particular love for royal characters',
    nftJoke: 'Our NFTs are royalty-free, but still expect to be treated like royalty',
    cryptoRoast: 'Expects their crypto to curtsy before being traded'
  },
  none: {
    id: 'none',
    name: 'Unaligned',
    motto: 'Chart your own path',
    color: '#6b7280',
    benefits: [
      'Freedom to change teams at any time',
      'No team-specific restrictions',
      'Independent rewards system'
    ],
    securityGuarantee: 'Self-reliance is your shield',
    absurdStat: '96% believe they\'re actually NPCs in someone else\'s game',
    historicalNote: 'Not a team at all, but a philosophical stance against arbitrary grouping',
    nftJoke: 'We believe in NFTs: Nice Friendly Thoughts',
    cryptoRoast: 'Can\'t even commit to a blockchain, let alone a team'
  },
  neutral: {
    id: 'neutral',
    name: 'Neutral',
    motto: 'Balance in all things',
    color: '#6b7280',
    benefits: [
      'Balanced benefits across all features',
      'Universal compatibility bonuses',
      'Special mediator status'
    ],
    securityGuarantee: 'Universal protection through balance',
    absurdStat: '50% of statistics are made up on the spot',
    historicalNote: 'Founded by professional mediators seeking balance in all things',
    nftJoke: 'Our NFTs are perfectly balanced - they\'re worth exactly what you paid',
    cryptoRoast: 'Too afraid to have an opinion on whether crypto will go up or down'
  }
};

// A utility function to get a team by ID
export const getTeamById = (teamId: TeamColor): TeamData => {
  return teams[teamId] || teams.none;
};
