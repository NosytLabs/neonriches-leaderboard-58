
import { Event, EventDetails } from '@/types/events';

// Define event data
export const events: Event[] = [
  {
    id: '1',
    name: 'Royal Gold Rush',
    description: 'Compete to contribute the most to the royal treasury and win exclusive rewards!',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'tournament',
    status: 'active',
    image: '/events/gold-rush.jpg',
    title: 'Royal Gold Rush'
  },
  {
    id: '2',
    name: 'Public Shaming Festival',
    description: 'Send your rivals to the stocks! A lighthearted way to mark your competitors with visual effects.',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'mockery',
    status: 'active',
    image: '/events/public-shaming.jpg',
    title: 'Public Shaming Festival'
  },
  {
    id: '3',
    name: 'Royal Auction',
    description: 'Bid on exclusive profile cosmetics and effects that can\'t be purchased elsewhere.',
    startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'auction',
    status: 'upcoming',
    image: '/events/royal-auction.jpg',
    title: 'Royal Auction'
  }
];

export const eventDetails: EventDetails[] = [
  {
    id: '1',
    name: 'Royal Gold Rush',
    description: 'Compete to contribute the most to the royal treasury and win exclusive rewards!',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'tournament',
    status: 'active',
    image: '/events/gold-rush.jpg',
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
    title: 'Royal Gold Rush',
    rewards: [
      {
        id: '1',
        name: 'Golden Crown',
        description: 'A shimmering crown that marks you as royalty',
        type: 'cosmetic',
        tier: 'legendary'
      }
    ]
  },
  {
    id: '2',
    name: 'Public Shaming Festival',
    description: 'Send your rivals to the stocks! A lighthearted way to mark your competitors with visual effects.',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'mockery',
    status: 'active',
    image: '/events/public-shaming.jpg',
    rules: [
      'All mockery effects are purely visual and have no impact on rankings',
      'Effects last for 24 hours',
      'Users can purchase protection from mockery',
      'Premium users receive discounts on mockery actions'
    ],
    prizes: [],
    title: 'Public Shaming Festival',
    rewards: []
  },
  {
    id: '3',
    name: 'Royal Auction',
    description: 'Bid on exclusive profile cosmetics and effects that can\'t be purchased elsewhere.',
    startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'auction',
    status: 'upcoming',
    image: '/events/royal-auction.jpg',
    rules: [
      'All bids are final',
      'Items are exclusive and will not be available again',
      'Minimum bid increments of $5',
      'Winners must have sufficient funds to pay for their winning bids'
    ],
    prizes: [],
    title: 'Royal Auction',
    rewards: []
  }
];

export const eventStats = {
  usersParticipating: 342,
  totalContributed: 15780,
  topContributor: 'GoldKing',
  daysRemaining: 5,
  teamsParticipating: 3,
  leadingTeam: 'Red'
};

export type { Event, EventDetails };
