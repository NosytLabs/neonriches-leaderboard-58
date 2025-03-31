
import { Event, EventDetails, EventStats } from '@/types/events';

// Define event data
export const events: Event[] = [
  {
    id: '1',
    name: 'Royal Gold Rush',
    title: 'Royal Gold Rush',
    description: 'Compete to contribute the most to the royal treasury and win exclusive rewards!',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'tournament',
    status: 'active',
    image: '/events/gold-rush.jpg',
    imageUrl: '/events/gold-rush.jpg'
  },
  {
    id: '2',
    name: 'Public Shaming Festival',
    title: 'Public Shaming Festival',
    description: 'Send your rivals to the stocks! A lighthearted way to mark your competitors with visual effects.',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'mockery',
    status: 'active',
    image: '/events/public-shaming.jpg',
    imageUrl: '/events/public-shaming.jpg'
  },
  {
    id: '3',
    name: 'Royal Auction',
    title: 'Royal Auction',
    description: 'Bid on exclusive profile cosmetics and effects that can\'t be purchased elsewhere.',
    startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'auction',
    status: 'upcoming',
    image: '/events/royal-auction.jpg',
    imageUrl: '/events/royal-auction.jpg'
  }
];

export const eventDetails: EventDetails[] = [
  {
    id: '1',
    name: 'Royal Gold Rush',
    title: 'Royal Gold Rush',
    description: 'Compete to contribute the most to the royal treasury and win exclusive rewards!',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'tournament',
    status: 'active',
    image: '/events/gold-rush.jpg',
    imageUrl: '/events/gold-rush.jpg',
    rules: [
      'Participants must spend at least $5 during the event period',
      'The top 10 spenders will receive exclusive cosmetic rewards',
      'All participants will receive a participation certificate',
      'Teams with the highest collective contribution will receive bonus rewards'
    ],
    prizes: [
      {
        rank: '1st Place',
        reward: 'Golden Crown Cosmetic'
      },
      {
        rank: '2nd Place',
        reward: 'Silver Scepter Cosmetic'
      },
      {
        rank: '3rd Place',
        reward: 'Bronze Throne Cosmetic'
      },
      {
        rank: 'Top 10',
        reward: 'Royal Gold Rush Participant Badge'
      }
    ],
    rewards: [
      {
        id: '1',
        name: 'Golden Crown',
        description: 'A shimmering crown that marks you as royalty',
        type: 'cosmetic',
        tier: 'legendary',
        value: 1000
      }
    ]
  },
  {
    id: '2',
    name: 'Public Shaming Festival',
    title: 'Public Shaming Festival',
    description: 'Send your rivals to the stocks! A lighthearted way to mark your competitors with visual effects.',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'mockery',
    status: 'active',
    image: '/events/public-shaming.jpg',
    imageUrl: '/events/public-shaming.jpg',
    rules: [
      'All mockery effects are purely visual and have no impact on rankings',
      'Effects last for 24 hours',
      'Users can purchase protection from mockery',
      'Premium users receive discounts on mockery actions'
    ],
    prizes: [],
    rewards: []
  },
  {
    id: '3',
    name: 'Royal Auction',
    title: 'Royal Auction',
    description: 'Bid on exclusive profile cosmetics and effects that can\'t be purchased elsewhere.',
    startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'auction',
    status: 'upcoming',
    image: '/events/royal-auction.jpg',
    imageUrl: '/events/royal-auction.jpg',
    rules: [
      'All bids are final',
      'Items are exclusive and will not be available again',
      'Minimum bid increments of $5',
      'Winners must have sufficient funds to pay for their winning bids'
    ],
    prizes: [],
    rewards: []
  }
];

export const eventStats: EventStats = {
  usersParticipating: 342,
  totalContributed: 15780,
  topContributor: 'GoldKing',
  daysRemaining: 5,
  teamsParticipating: 3,
  leadingTeam: 'Red',
  participantCount: 342,
  totalSpent: 15780,
  averageSpent: 46.1,
  highestSpender: {
    userId: 'user-goldking',
    username: 'GoldKing',
    amount: 2500
  },
  activeTeams: [
    { id: 'red', name: 'Red Team', count: 120 },
    { id: 'blue', name: 'Blue Team', count: 115 },
    { id: 'green', name: 'Green Team', count: 107 }
  ]
};

export type { Event, EventDetails };
