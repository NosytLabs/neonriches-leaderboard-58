
import { Event, EventDetails, EventStats, EventType } from '@/types/events';

export const events: Event[] = [
  {
    id: '1',
    name: 'Royal Mockery Festival',
    title: 'Royal Mockery Festival',
    description: 'A satirical take on medieval public shaming - apply purely cosmetic effects to other users\' profiles.',
    type: 'shame' as EventType, // Fixed type
    startDate: '2023-06-01T00:00:00Z',
    endDate: '2023-07-01T00:00:00Z',
    imageUrl: '/events/mockery-festival.jpg',
    image: '/events/mockery-festival.jpg',
    createdAt: '2023-05-30T00:00:00Z',
    updatedAt: '2023-05-30T00:00:00Z',
    status: 'active',
    rewards: [
      {
        id: '101',
        name: 'Royal Shame Badge',
        description: 'A badge marking your participation in the Royal Mockery Festival',
        type: 'badge',
        value: 1,
        imageUrl: '/rewards/royal-shame-badge.png',
        rarity: 'uncommon'
      },
      {
        id: '102',
        name: 'Crown Emoji',
        description: 'A special emoji to use in chat and comments',
        type: 'emoji',
        value: 1,
        imageUrl: '/rewards/crown-emoji.png',
        rarity: 'rare'
      }
    ]
  },
  {
    id: '2',
    name: 'Spending Showdown Tournament',
    title: 'Spending Showdown Tournament',
    description: 'Compete with other members to climb the spending ranks and win exclusive rewards!',
    type: 'competition' as EventType, // Fixed type
    startDate: '2023-07-01T00:00:00Z',
    endDate: '2023-07-31T00:00:00Z',
    imageUrl: '/events/spending-showdown.jpg',
    image: '/events/spending-showdown.jpg',
    createdAt: '2023-06-15T00:00:00Z',
    updatedAt: '2023-06-15T00:00:00Z',
    status: 'upcoming',
    rewards: [
      {
        id: '201',
        name: 'Gold Crown Border',
        description: 'An exclusive profile border available only to top spenders',
        type: 'border',
        value: 1,
        imageUrl: '/rewards/gold-crown-border.png',
        rarity: 'legendary'
      },
      {
        id: '202',
        name: 'Royal Title',
        description: 'An exclusive title to display on your profile',
        type: 'title',
        value: 1,
        imageUrl: '/rewards/royal-title.png',
        rarity: 'epic'
      },
      {
        id: '203',
        name: 'Cash Bonus',
        description: 'A cash bonus for your spending efforts',
        type: 'cash',
        value: 500,
        imageUrl: '/rewards/cash-bonus.png',
        rarity: 'rare'
      }
    ]
  },
  {
    id: '3',
    name: 'Seasonal Royal Celebration',
    title: 'Seasonal Royal Celebration',
    description: 'Join the seasonal festivities with special events, rewards, and community challenges!',
    type: 'seasonal' as EventType, // Fixed type
    startDate: '2023-08-15T00:00:00Z',
    endDate: '2023-09-15T00:00:00Z',
    imageUrl: '/events/seasonal-celebration.jpg',
    image: '/events/seasonal-celebration.jpg',
    createdAt: '2023-07-20T00:00:00Z',
    updatedAt: '2023-07-20T00:00:00Z',
    status: 'upcoming',
    rewards: [
      {
        id: '301',
        name: 'Seasonal Theme',
        description: 'A limited-time theme for your profile',
        type: 'theme',
        value: 1,
        imageUrl: '/rewards/seasonal-theme.png',
        rarity: 'rare'
      },
      {
        id: '302',
        name: 'Exclusive Background',
        description: 'A special background for your profile during the celebration',
        type: 'background',
        value: 1,
        imageUrl: '/rewards/exclusive-background.png',
        rarity: 'epic'
      }
    ]
  }
];

export const eventDetails: EventDetails[] = [
  {
    id: '1',
    name: 'Royal Mockery Festival',
    title: 'Royal Mockery Festival',
    description: 'A satirical take on medieval public shaming - apply purely cosmetic effects to other users\' profiles. All effects are visual only and do not impact functionality or rankings.',
    type: 'shame' as EventType, // Fixed type
    startDate: '2023-06-01T00:00:00Z',
    endDate: '2023-07-01T00:00:00Z',
    imageUrl: '/events/mockery-festival.jpg',
    image: '/events/mockery-festival.jpg',
    createdAt: '2023-05-30T00:00:00Z',
    updatedAt: '2023-05-30T00:00:00Z',
    status: 'active',
    rules: [
      'All shaming effects are purely visual and do not affect functionality',
      'Users can purchase protection to prevent being shamed',
      'Effects last for 24 hours unless removed by the target user (with protection)',
      'Premium users get a discount on shaming actions',
      'Be respectful - this is satirical fun, not actual harassment'
    ],
    prizes: [
      {
        name: 'Top Mocker',
        description: 'Awarded to the user who applies the most mockery effects',
        reward: 'Exclusive Crown Emoji and Profile Badge'
      },
      {
        name: 'Most Protected',
        description: 'Awarded to the user who purchases the most protection',
        reward: 'Royal Shield Border'
      }
    ],
    rewards: [
      {
        id: '101',
        name: 'Royal Shame Badge',
        description: 'A badge marking your participation in the Royal Mockery Festival',
        type: 'badge',
        value: 1,
        imageUrl: '/rewards/royal-shame-badge.png',
        rarity: 'uncommon'
      },
      {
        id: '102',
        name: 'Crown Emoji',
        description: 'A special emoji to use in chat and comments',
        type: 'emoji',
        value: 1,
        imageUrl: '/rewards/crown-emoji.png',
        rarity: 'rare'
      }
    ]
  },
  {
    id: '2',
    name: 'Spending Showdown Tournament',
    title: 'Spending Showdown Tournament',
    description: 'Compete with other members to climb the spending ranks and win exclusive rewards! This month-long event celebrates our top spenders with exclusive cosmetics and benefits.',
    type: 'competition' as EventType, // Fixed type
    startDate: '2023-07-01T00:00:00Z',
    endDate: '2023-07-31T00:00:00Z',
    imageUrl: '/events/spending-showdown.jpg',
    image: '/events/spending-showdown.jpg',
    createdAt: '2023-06-15T00:00:00Z',
    updatedAt: '2023-06-15T00:00:00Z',
    status: 'upcoming',
    rules: [
      'All spending on the platform during the event period counts toward your total',
      'Users must have a verified account to participate',
      'Rewards are distributed based on final ranking at event end',
      'Top 3 spenders receive premium rewards',
      'All participants receive a participant badge'
    ],
    prizes: [
      {
        name: '1st Place',
        description: 'Top spender during the event period',
        reward: 'Gold Crown Border, Royal Title, and $500 Cash Bonus'
      },
      {
        name: '2nd Place',
        description: 'Second highest spender during the event',
        reward: 'Silver Crown Border, Duke Title, and $250 Cash Bonus'
      },
      {
        name: '3rd Place',
        description: 'Third highest spender during the event',
        reward: 'Bronze Crown Border, Knight Title, and $100 Cash Bonus'
      }
    ],
    rewards: [
      {
        id: '201',
        name: 'Gold Crown Border',
        description: 'An exclusive profile border available only to top spenders',
        type: 'border',
        value: 1,
        imageUrl: '/rewards/gold-crown-border.png',
        rarity: 'legendary'
      },
      {
        id: '202',
        name: 'Royal Title',
        description: 'An exclusive title to display on your profile',
        type: 'title',
        value: 1,
        imageUrl: '/rewards/royal-title.png',
        rarity: 'epic'
      },
      {
        id: '203',
        name: 'Cash Bonus',
        description: 'A cash bonus for your spending efforts',
        type: 'cash',
        value: 500,
        imageUrl: '/rewards/cash-bonus.png',
        rarity: 'rare'
      }
    ]
  },
  {
    id: '3',
    name: 'Seasonal Royal Celebration',
    title: 'Seasonal Royal Celebration',
    description: 'Join the seasonal festivities with special events, rewards, and community challenges! A time for all community members to come together and celebrate.',
    type: 'seasonal' as EventType, // Fixed type
    startDate: '2023-08-15T00:00:00Z',
    endDate: '2023-09-15T00:00:00Z',
    imageUrl: '/events/seasonal-celebration.jpg',
    image: '/events/seasonal-celebration.jpg',
    createdAt: '2023-07-20T00:00:00Z',
    updatedAt: '2023-07-20T00:00:00Z',
    status: 'upcoming',
    rules: [
      'Daily challenges award points toward seasonal rewards',
      'Community milestones unlock special content for all users',
      'Premium users get double points for all activities',
      'Limited-time cosmetics are available only during the event',
      'All users who participate in at least 5 daily challenges receive a commemoration badge'
    ],
    prizes: [
      {
        name: 'Season Champion',
        description: 'Highest points earned during the seasonal event',
        reward: 'Exclusive Seasonal Theme and Title'
      },
      {
        name: 'Community Builder',
        description: 'Most contribution to community milestones',
        reward: 'Special Background and Community Badge'
      }
    ],
    rewards: [
      {
        id: '301',
        name: 'Seasonal Theme',
        description: 'A limited-time theme for your profile',
        type: 'theme',
        value: 1,
        imageUrl: '/rewards/seasonal-theme.png',
        rarity: 'rare'
      },
      {
        id: '302',
        name: 'Exclusive Background',
        description: 'A special background for your profile during the celebration',
        type: 'background',
        value: 1,
        imageUrl: '/rewards/exclusive-background.png',
        rarity: 'epic'
      }
    ]
  }
];

export const eventStats: Record<string, EventStats> = {
  '1': {
    id: 'stats-1',
    eventId: '1',
    participantsCount: 156,
    totalSpent: 3500,
    prizePool: 1500,
    totalPrizes: 1500, // For backward compatibility
    topContributors: ['user1', 'user2', 'user3'],
    averageSpend: 22.5,
    highestSpend: 250,
    lowestSpend: 5,
    duration: 30,
    topContribution: 250,
    totalPokes: 432,
    mostPoked: [
      { username: 'RoyalPeasant', pokeCount: 42 },
      { username: 'CourtJester', pokeCount: 35 },
      { username: 'DuchessOfDigital', pokeCount: 28 }
    ]
  },
  '2': {
    id: 'stats-2',
    eventId: '2',
    participantsCount: 87,
    totalSpent: 12500,
    prizePool: 3000,
    totalPrizes: 3000, // For backward compatibility
    topContributors: ['user4', 'user5', 'user6'],
    averageSpend: 143.7,
    highestSpend: 1200,
    lowestSpend: 10,
    duration: 31,
    topContribution: 1200,
    totalPokes: 0,
    mostPoked: []
  }
};
