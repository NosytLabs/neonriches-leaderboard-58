
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
    requiredTier: 'basic'
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
    requiredTier: 'free'
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
    requiredTier: 'premium'
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
        tier: 'common'
      },
      {
        id: 'reward-2',
        name: 'Royal Badge',
        description: 'Exclusive profile badge for tournament winners',
        tier: 'rare'
      },
      {
        id: 'reward-3',
        name: 'Special Title',
        description: '"Champion of the Realm" title for your profile',
        tier: 'epic'
      }
    ],
    schedule: [
      { date: new Date(Date.now() + 86400000 * 2), title: 'Opening Ceremony' },
      { date: new Date(Date.now() + 86400000 * 3), title: 'Team Challenges' },
      { date: new Date(Date.now() + 86400000 * 4), title: 'Individual Contests' },
      { date: new Date(Date.now() + 86400000 * 5), title: 'Awards Ceremony' }
    ]
  },
  'event-2': {
    id: 'event-2',
    title: 'Public Shaming Festival',
    description: 'Express your disapproval with style',
    longDescription: 'Join our medieval-inspired mockery festival! During this event, all mockery actions are discounted and special themed mockery effects are available. Show your rivals who's boss by decorating their profiles with eggs, tomatoes, and more!',
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
        tier: 'uncommon'
      },
      {
        id: 'reward-2',
        name: 'Jester Badge',
        description: 'Special profile badge for festival participants',
        tier: 'common'
      }
    ],
    schedule: [
      { date: new Date(), title: 'Festival Begins' },
      { date: new Date(Date.now() + 86400000 * 1), title: 'Tomato Day' },
      { date: new Date(Date.now() + 86400000 * 2), title: 'Egg Day' },
      { date: new Date(Date.now() + 86400000 * 3), title: 'Festival Ends' }
    ]
  },
  'event-3': {
    id: 'event-3',
    title: 'Royal Auction',
    description: 'Bid on exclusive cosmetic items',
    longDescription: 'Participate in our exclusive royal auction! Rare and unique cosmetic items, titles, and effects will be available for bidding. These items will never be available through regular purchases, so don't miss your chance!',
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
        tier: 'legendary'
      },
      {
        id: 'reward-2',
        name: 'Limited edition titles',
        description: 'Rare titles that will never be available again',
        tier: 'epic'
      }
    ],
    schedule: [
      { date: new Date(Date.now() + 86400000 * 7), title: 'Auction Preview' },
      { date: new Date(Date.now() + 86400000 * 7.5), title: 'Bidding Begins' },
      { date: new Date(Date.now() + 86400000 * 8), title: 'Auction Ends' }
    ]
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
  }
};
