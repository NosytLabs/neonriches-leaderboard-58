
import { Event, EventDetails, EventStats, EventParticipant, EventReward } from '@/types/events';

export const events: Event[] = [
  {
    id: 'event-1',
    title: 'Royal Tournament of Wealth',
    name: 'Royal Tournament of Wealth',
    description: 'Compete against other nobles in a grand tournament of spending. The highest contributor will be crowned Champion of Wealth.',
    type: 'tournament',
    startDate: '2023-08-15T00:00:00Z',
    endDate: '2023-08-22T23:59:59Z',
    status: 'completed',
    imageUrl: '/assets/events/tournament.jpg',
    image: '/assets/events/tournament.jpg',
    createdAt: '2023-07-25T12:00:00Z',
    updatedAt: '2023-07-25T12:00:00Z'
  },
  {
    id: 'event-2',
    title: 'Festival of Mockery',
    name: 'Festival of Mockery',
    description: 'A week-long festival where nobles can mock others for spending too little or too much. Purely satirical fun!',
    type: 'shame',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-09-08T23:59:59Z',
    status: 'active',
    imageUrl: '/assets/events/mockery.jpg',
    image: '/assets/events/mockery.jpg',
    createdAt: '2023-08-15T12:00:00Z',
    updatedAt: '2023-08-15T12:00:00Z'
  },
  {
    id: 'event-3',
    title: 'Team Challenge: Red vs Blue',
    name: 'Team Challenge: Red vs Blue',
    description: 'Support your team by contributing to the common treasury. The team with the highest total contribution wins special privileges for all members.',
    type: 'team',
    startDate: '2023-10-01T00:00:00Z',
    endDate: '2023-10-15T23:59:59Z',
    status: 'upcoming',
    imageUrl: '/assets/events/team.jpg',
    image: '/assets/events/team.jpg',
    createdAt: '2023-09-15T12:00:00Z',
    updatedAt: '2023-09-15T12:00:00Z'
  },
  {
    id: 'event-4',
    title: 'Treasure Hunt',
    name: 'Treasure Hunt',
    description: 'A special event where spending in specific categories reveals clues to find a hidden treasure. The first to solve all clues gets a massive treasure bonus.',
    type: 'treasure',
    startDate: '2023-07-01T00:00:00Z',
    endDate: '2023-07-10T23:59:59Z',
    status: 'completed',
    imageUrl: '/assets/events/treasure.jpg',
    image: '/assets/events/treasure.jpg',
    createdAt: '2023-06-15T12:00:00Z',
    updatedAt: '2023-06-15T12:00:00Z'
  }
];

export const eventDetails: Record<string, EventDetails> = {
  'event-1': {
    id: 'event-1-details',
    title: 'Royal Tournament Details',
    name: 'Royal Tournament Details',
    description: 'The Royal Tournament of Wealth is the premier competition for nobles to demonstrate their financial might. Spend lavishly to climb the ranks and earn the respect of your peers.',
    rules: [
      'All spending during the tournament period counts toward your score',
      'The participant with the highest total spending wins the Golden Crown',
      'Second and third place will receive Silver and Bronze titles respectively',
      'Participants must be registered nobles of the kingdom',
      'Tournament results are final and non-negotiable'
    ],
    rewards: ['Crown Cosmetic', 'Title Upgrade', 'Profile Boost'],
    rewardTypes: ['Cosmetic', 'Title', 'Boost'],
    eligibility: ['All registered users'],
    participationRequirements: ['Spend at least $5 during the event period'],
    specialRules: ['Bonus multipliers for consistent daily spending'],
    type: 'tournament',
    startDate: '2023-08-15T00:00:00Z',
    endDate: '2023-08-22T23:59:59Z',
    createdAt: '2023-07-25T12:00:00Z',
    image: '/assets/events/tournament-detail.jpg',
    longDescription: 'An extended description of the tournament with all important details.'
  },
  'event-2': {
    id: 'event-2-details',
    title: 'Festival of Mockery Details',
    name: 'Festival of Mockery Details',
    description: 'The Festival of Mockery is a satirical event celebrating the absurdity of digital wealth displays. During this festival, nobles can engage in friendly mockery by purchasing tomato throws, egg throws, or even placing others in stocks!',
    rules: [
      'Mockery actions cost real money which contributes to your spending rank',
      'Mockery effects are purely visual and last for 24 hours',
      'Nobles can purchase protection shields to avoid being mocked',
      'All mockery is intended in good fun - keep it light-hearted!',
      'The most mocked noble will receive the "Court Jester" title'
    ],
    rewards: ['Jester Title', 'Mockery Animations', 'Royal Decree'],
    rewardTypes: ['Title', 'Animation', 'Feature'],
    eligibility: ['All registered users'],
    participationRequirements: ['No minimum spending required'],
    specialRules: ['Bonus rewards for creative mockery actions'],
    type: 'shame',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-09-08T23:59:59Z',
    createdAt: '2023-08-15T12:00:00Z',
    image: '/assets/events/mockery-detail.jpg',
    longDescription: 'A detailed description of the Festival of Mockery event.'
  }
};

export const eventStats: Record<string, EventStats> = {
  'event-1': {
    id: 'event-1-stats',
    eventId: 'event-1',
    participantsCount: 156,
    totalSpent: 45678,
    totalPrizes: 5000,
    averageSpent: 292.8,
    prizePool: 10000,
    totalPokes: 320,
    mostPoked: [
      { username: 'RichDuke', pokeCount: 45 },
      { username: 'LavishLord', pokeCount: 32 }
    ]
  },
  'event-2': {
    id: 'event-2-stats',
    eventId: 'event-2',
    participantsCount: 78,
    totalSpent: 3450,
    totalPrizes: 1000,
    averageSpent: 44.2,
    prizePool: 2000,
    totalPokes: 156,
    mostPoked: [
      { username: 'SpenderOne', pokeCount: 23 },
      { username: 'RoyalFool', pokeCount: 17 }
    ]
  }
};

export const topUsers = [
  { id: 1, username: 'GoldenKing', profileImage: 'https://source.unsplash.com/random/100x100?face=1', rank: 1, team: 'red', amountSpent: 5000 },
  { id: 2, username: 'DiamondDuchess', profileImage: 'https://source.unsplash.com/random/100x100?face=2', rank: 2, team: 'blue', amountSpent: 4200 },
  { id: 3, username: 'SapphireSultan', profileImage: 'https://source.unsplash.com/random/100x100?face=3', rank: 3, team: 'green', amountSpent: 3500 },
  { id: 4, username: 'EmeraldEmpress', profileImage: 'https://source.unsplash.com/random/100x100?face=4', rank: 4, team: 'red', amountSpent: 2800 },
  { id: 5, username: 'OpalOverseer', profileImage: 'https://source.unsplash.com/random/100x100?face=5', rank: 5, team: 'green', amountSpent: 2500 },
  { id: 6, username: 'RubyRegent', profileImage: 'https://source.unsplash.com/random/100x100?face=6', rank: 6, team: 'blue', amountSpent: 2000 }
];
