
export interface Event {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  type: 'poke' | 'boost' | 'team' | 'special';
  image: string;
  rewards: {
    title?: string;
    badge?: string;
    currency?: number;
  };
  progress?: number;
}

// Current event data
export const currentEvent: Event = {
  id: 'poke-party-v1',
  name: 'Royal Poke Party',
  description: 'Pay to temporarily drop someone down one rank for 24 hours. Purely a cosmetic change that does not affect their actual contribution rank. Participation fees go into next week\'s prize pool.',
  startDate: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  endDate: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
  type: 'poke',
  image: 'https://images.unsplash.com/photo-1601901379446-8cebc3e1e8ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  rewards: {
    title: 'Royal Poker',
    badge: 'Poker Extraordinaire',
    currency: 0
  },
  progress: 0.6
};

// Upcoming events data
export const upcomingEvents: Event[] = [
  {
    id: 'golden-chest-v1',
    name: 'Golden Chest Boost',
    description: 'Every dollar spent during this event has a 10% chance to be doubled in rank value. No change to your actual contribution amount, but your rank might increase a bit more than expected!',
    startDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    endDate: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    type: 'boost',
    image: 'https://images.unsplash.com/photo-1611203565424-a66e8fc5db9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rewards: {
      title: 'Chest Hunter',
      badge: 'Golden Discoverer'
    }
  },
  {
    id: 'team-war-v1',
    name: 'RGB Team War',
    description: 'Teams compete to contribute the most during the event. The winning team's members all receive a special profile border for one week. No change to the 1:1 rank ratio.',
    startDate: new Date(new Date().getTime() + 21 * 24 * 60 * 60 * 1000), // 21 days from now
    endDate: new Date(new Date().getTime() + 28 * 24 * 60 * 60 * 1000), // 28 days from now
    type: 'team',
    image: 'https://images.unsplash.com/photo-1506634064465-7dab4de896ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rewards: {
      title: 'War Champion',
      badge: 'Team Warrior'
    }
  }
];

// Event stats
export const eventStats = {
  participantsCount: 78,
  actionsPerformed: 243,
  topSpender: {
    username: 'GoldenKnight',
    amount: 325,
  },
  mostPoked: {
    username: 'SilverBaron',
    pokeCount: 17,
  }
};

// Top users (poke targets)
export const topUsers = [
  {
    id: 1,
    username: 'WealthWizard',
    rank: 2,
    amountSpent: 1200,
    team: 'red',
    profileImage: 'https://i.pravatar.cc/150?img=1',
    pokeCount: 3
  },
  {
    id: 2,
    username: 'CashKing',
    rank: 3,
    amountSpent: 980,
    team: 'green',
    profileImage: 'https://i.pravatar.cc/150?img=2',
    pokeCount: 1
  },
  {
    id: 3,
    username: 'MoneySage',
    rank: 4,
    amountSpent: 750,
    team: 'green',
    profileImage: 'https://i.pravatar.cc/150?img=3',
    pokeCount: 0
  },
  {
    id: 4,
    username: 'RegalSpender',
    rank: 5,
    amountSpent: 690,
    team: 'blue',
    profileImage: 'https://i.pravatar.cc/150?img=4',
    pokeCount: 5
  },
  {
    id: 5,
    username: 'GoldenPocket',
    rank: 6,
    amountSpent: 580,
    team: 'red',
    profileImage: 'https://i.pravatar.cc/150?img=5',
    pokeCount: 2
  },
  {
    id: 6,
    username: 'DiamondWallet',
    rank: 7,
    amountSpent: 470,
    team: 'blue',
    profileImage: 'https://i.pravatar.cc/150?img=6',
    pokeCount: 1
  }
];

// Function to get team color
export const getTeamColor = (team: string): string => {
  switch (team.toLowerCase()) {
    case 'red':
      return 'team-red';
    case 'green':
      return 'team-green';
    case 'blue':
      return 'team-blue';
    default:
      return 'royal-gold';
  }
};
