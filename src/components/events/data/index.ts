
import { EventDetails, EventStats, Event } from '@/types/events';

// Mock event data for development purposes
export const events: Event[] = [
  {
    id: 'event-1',
    title: 'Royal Tournament',
    description: 'A grand competition for glory and riches',
    startDate: new Date(Date.now() + 86400000 * 2), // 2 days from now
    endDate: new Date(Date.now() + 86400000 * 5), // 5 days from now
    type: 'tournament',
    status: 'upcoming',
    maxParticipants: 100,
    currentParticipants: 36,
    rewards: ['250 gold coins', 'Royal Badge', 'Special Title'],
    teamEvent: true,
    requiredTier: 'basic',
    imageUrl: '/events/tournament.jpg',
    name: 'Royal Tournament',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'event-2',
    title: 'Public Shaming Festival',
    description: 'Express your disapproval with style',
    startDate: new Date(), // Now
    endDate: new Date(Date.now() + 86400000 * 3), // 3 days from now
    type: 'mockery',
    status: 'active',
    maxParticipants: 0, // Unlimited
    currentParticipants: 156,
    rewards: ['Discount on mockery actions', 'Jester Badge'],
    teamEvent: false,
    requiredTier: 'free',
    imageUrl: '/events/festival.jpg',
    name: 'Public Shaming Festival',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'event-3',
    title: 'Royal Auction',
    description: 'Bid on exclusive cosmetic items',
    startDate: new Date(Date.now() + 86400000 * 7), // 7 days from now
    endDate: new Date(Date.now() + 86400000 * 8), // 8 days from now
    type: 'auction',
    status: 'upcoming',
    maxParticipants: 0, // Unlimited
    currentParticipants: 0,
    rewards: ['Exclusive cosmetics', 'Limited edition titles'],
    teamEvent: false,
    requiredTier: 'premium',
    imageUrl: '/events/auction.jpg',
    name: 'Royal Auction',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const eventDetails: Record<string, EventDetails> = {
  'event-1': {
    id: 'event-1',
    title: 'Royal Tournament',
    description: 'A grand competition for glory and riches',
    longDescription: 'Compete in our royal tournament to prove your worth! Participants will battle in various challenges including spending contests, team recruitment, and mockery prowess. The winners will be granted exclusive rewards and eternal glory in our kingdom.',
    rules: [
      'Must be at least Squire rank to participate',
      'Teams must have a minimum of 5 members',
      'All spending during the event counts double towards your rank',
      'Mockery actions against opposing teams grant bonus points'
    ],
    rewards: [
      {
        id: 'reward-1',
        name: '250 gold coins',
        description: 'Added directly to your wallet',
        tier: 'common',
        type: 'currency',
        value: 250,
        imageUrl: '/rewards/coins.jpg',
        rarity: 'common'
      },
      {
        id: 'reward-2',
        name: 'Royal Badge',
        description: 'Exclusive profile badge for tournament winners',
        tier: 'rare',
        type: 'cosmetic',
        value: 1,
        imageUrl: '/rewards/badge.jpg',
        rarity: 'rare'
      },
      {
        id: 'reward-3',
        name: 'Special Title',
        description: '"Champion of the Realm" title for your profile',
        tier: 'epic',
        type: 'title',
        value: 1,
        imageUrl: '/rewards/title.jpg',
        rarity: 'epic'
      }
    ],
    schedule: [
      { date: new Date(Date.now() + 86400000 * 2), title: 'Opening Ceremony' },
      { date: new Date(Date.now() + 86400000 * 3), title: 'Team Challenges' },
      { date: new Date(Date.now() + 86400000 * 4), title: 'Individual Contests' },
      { date: new Date(Date.now() + 86400000 * 5), title: 'Awards Ceremony' }
    ],
    startDate: new Date(Date.now() + 86400000 * 2).toISOString(),
    endDate: new Date(Date.now() + 86400000 * 5).toISOString(),
    type: 'tournament',
    imageUrl: '/events/tournament.jpg',
    name: 'Royal Tournament'
  },
  'event-2': {
    id: 'event-2',
    title: 'Public Shaming Festival',
    description: 'Express your disapproval with style',
    longDescription: 'Join our medieval-inspired mockery festival! During this event, all mockery actions are discounted and special themed mockery effects are available. Show your rivals who\'s boss by decorating their profiles with eggs, tomatoes, and more!',
    rules: [
      'All users can participate',
      '50% discount on all mockery actions',
      'Special festival mockery effects available',
      'Most active participants receive special rewards'
    ],
    rewards: [
      {
        id: 'reward-1',
        name: 'Discount on mockery actions',
        description: '25% permanent discount on all future mockery actions',
        tier: 'uncommon',
        type: 'discount',
        value: 25,
        imageUrl: '/rewards/discount.jpg',
        rarity: 'uncommon'
      },
      {
        id: 'reward-2',
        name: 'Jester Badge',
        description: 'Special profile badge for festival participants',
        tier: 'common',
        type: 'cosmetic',
        value: 1,
        imageUrl: '/rewards/jester.jpg',
        rarity: 'common'
      }
    ],
    schedule: [
      { date: new Date(), title: 'Festival Begins' },
      { date: new Date(Date.now() + 86400000 * 1), title: 'Tomato Day' },
      { date: new Date(Date.now() + 86400000 * 2), title: 'Egg Day' },
      { date: new Date(Date.now() + 86400000 * 3), title: 'Festival Ends' }
    ],
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 86400000 * 3).toISOString(),
    type: 'mockery',
    imageUrl: '/events/festival.jpg',
    name: 'Public Shaming Festival'
  },
  'event-3': {
    id: 'event-3',
    title: 'Royal Auction',
    description: 'Bid on exclusive cosmetic items',
    longDescription: 'Participate in our exclusive royal auction! Rare and unique cosmetic items, titles, and effects will be available for bidding. These items will never be available through regular purchases, so don\'t miss your chance!',
    rules: [
      'Premium tier or higher required to participate',
      'All bids are final and non-refundable',
      'Minimum bid increments of 10 gold coins',
      'Winning bids are processed immediately'
    ],
    rewards: [
      {
        id: 'reward-1',
        name: 'Exclusive cosmetics',
        description: 'Unique profile decorations and effects',
        tier: 'legendary',
        type: 'cosmetic',
        value: 3,
        imageUrl: '/rewards/cosmetics.jpg',
        rarity: 'legendary'
      },
      {
        id: 'reward-2',
        name: 'Limited edition titles',
        description: 'Rare titles that will never be available again',
        tier: 'epic',
        type: 'title',
        value: 2,
        imageUrl: '/rewards/rare-title.jpg',
        rarity: 'epic'
      }
    ],
    schedule: [
      { date: new Date(Date.now() + 86400000 * 7), title: 'Auction Preview' },
      { date: new Date(Date.now() + 86400000 * 7.5), title: 'Bidding Begins' },
      { date: new Date(Date.now() + 86400000 * 8), title: 'Auction Ends' }
    ],
    startDate: new Date(Date.now() + 86400000 * 7).toISOString(),
    endDate: new Date(Date.now() + 86400000 * 8).toISOString(),
    type: 'auction',
    imageUrl: '/events/auction.jpg',
    name: 'Royal Auction'
  }
};

export const eventStats: EventStats = {
  activeEvents: 1,
  upcomingEvents: 2,
  pastEvents: 8,
  totalParticipation: 2456,
  popularEvent: 'Public Shaming Festival',
  totalRewardsDistributed: 15750,
  teamParticipation: {
    red: 823,
    blue: 762,
    green: 687,
    gold: 184
  },
  id: 'stats-1',
  eventId: 'global',
  participantsCount: 2456,
  totalSpent: 152480,
  topContributors: ['user-1', 'user-2', 'user-3'],
  averageSpend: 62.1,
  highestSpend: 5430,
  lowestSpend: 1,
  duration: 30,
  prizePool: 25000,
  topContribution: 5430
};
