
import { Event, EventDetails, EventStats } from '@/types/events';

export const events: Event[] = [
  {
    id: '1',
    name: 'Royal Tournament',
    description: 'Compete with other nobles to climb the ranks and win exclusive titles.',
    startDate: '2023-10-15T00:00:00Z',
    endDate: '2023-10-25T23:59:59Z',
    type: 'tournament',
    status: 'active',
    image: '/images/events/tournament.jpg',
    createdAt: '2023-10-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Public Shaming Festival',
    description: 'Show your power by publicly shaming those of lower status!',
    startDate: '2023-10-20T00:00:00Z',
    endDate: '2023-10-30T23:59:59Z',
    type: 'mockery',
    status: 'upcoming',
    image: '/images/events/mockery.jpg',
    createdAt: '2023-10-05T00:00:00Z'
  },
  {
    id: '3',
    name: 'Royal Auction',
    description: 'Bid on exclusive cosmetics and status symbols.',
    startDate: '2023-11-01T00:00:00Z',
    endDate: '2023-11-07T23:59:59Z',
    type: 'auction',
    status: 'upcoming',
    image: '/images/events/auction.jpg',
    createdAt: '2023-10-10T00:00:00Z'
  }
];

export const eventDetails: Record<string, EventDetails> = {
  '1': {
    id: '1',
    name: 'Royal Tournament',
    description: 'Compete with other nobles to climb the ranks and win exclusive titles. The more you spend, the higher your chances of winning!',
    startDate: '2023-10-15T00:00:00Z',
    endDate: '2023-10-25T23:59:59Z',
    type: 'tournament',
    status: 'active',
    image: '/images/events/tournament.jpg',
    rules: [
      'Each dollar spent during the tournament counts as one point.',
      'Top 10 spenders will receive exclusive rewards.',
      'Tournament standings are updated hourly.',
      'In case of a tie, the earlier spender wins.'
    ],
    prizes: [
      { rank: '1st', reward: 'Exclusive "Tournament Champion" title + 5000 status points' },
      { rank: '2nd', reward: 'Exclusive "Tournament Runner-up" title + 2500 status points' },
      { rank: '3rd', reward: 'Exclusive "Tournament Medalist" title + 1000 status points' },
      { rank: '4-10', reward: '500 status points + Tournament Participant badge' }
    ],
    rewards: [
      {
        id: 'reward1',
        name: 'Tournament Champion Title',
        description: 'An exclusive title showing your dominance',
        type: 'title',
        tier: 'legendary',
        imageUrl: '/images/rewards/champion-title.png'
      },
      {
        id: 'reward2',
        name: 'Golden Tournament Frame',
        description: 'A luxurious golden frame for your profile',
        type: 'cosmetic',
        tier: 'epic',
        imageUrl: '/images/rewards/gold-frame.png'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Public Shaming Festival',
    description: 'Show your power by publicly shaming those of lower status! A celebration of the medieval tradition of public ridicule, reinvented for the digital age.',
    startDate: '2023-10-20T00:00:00Z',
    endDate: '2023-10-30T23:59:59Z',
    type: 'mockery',
    status: 'upcoming',
    image: '/images/events/mockery.jpg',
    createdAt: '2023-10-05T00:00:00Z',
    rules: [
      'Pay to shame other users with various mockery effects.',
      'Each mockery costs between $5-$50 depending on the effect.',
      'Users can purchase "Royal Protection" to avoid being mocked.',
      'The user who spends the most on mockery wins the "Royal Jester" title.'
    ],
    prizes: [
      { rank: 'Most Spent', reward: '"Royal Jester" title + Mockery Crown cosmetic' },
      { rank: 'Most Mocked', reward: '"Village Fool" title (cannot be removed for 1 week)' },
      { rank: 'Participation', reward: 'Festival Participant badge' }
    ]
  }
};

export const eventStats: Record<string, EventStats> = {
  '1': {
    id: '1',
    usersParticipating: 127,
    totalContributed: 15750,
    topContributor: 'whalemaster',
    daysRemaining: 5,
    teamsParticipating: 3,
    leadingTeam: 'red',
    totalSpent: 15750,
    prizePool: 10000,
    totalPrizes: 15,
    participantsCount: 127
  },
  '2': {
    id: '2',
    usersParticipating: 89,
    totalContributed: 8920,
    topContributor: 'trollking',
    daysRemaining: 10,
    teamsParticipating: 3,
    leadingTeam: 'green',
    totalPokes: 420,
    mostPoked: 'moneybags',
    totalSpent: 8920
  }
};
