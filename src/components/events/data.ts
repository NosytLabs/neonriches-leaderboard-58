
import { Event, EventDetails, EventReward, EventStats } from '@/types/events';

// Sample top users for mocking
export const topUsers = [
  {
    id: 1,
    username: "royalspender",
    displayName: "Royal Spender",
    profileImage: "/images/avatars/royal-spender.png",
    rank: 1,
    team: "red",
    amountSpent: 5000,
    tier: "royal"
  },
  {
    id: 2,
    username: "goldenmidas",
    displayName: "Golden Midas",
    profileImage: "/images/avatars/golden-midas.png",
    rank: 2,
    team: "gold",
    amountSpent: 4500,
    tier: "gold"
  },
  {
    id: 3,
    username: "silverstreak",
    displayName: "Silver Streak",
    profileImage: "/images/avatars/silver-streak.png",
    rank: 3,
    team: "blue",
    amountSpent: 3800,
    tier: "silver"
  },
  {
    id: 4,
    username: "bronzebearer",
    displayName: "Bronze Bearer",
    profileImage: "/images/avatars/bronze-bearer.png",
    rank: 4,
    team: "green",
    amountSpent: 2500,
    tier: "bronze"
  }
];

// Sample events
export const upcomingEvents: Event[] = [
  {
    id: "event-1",
    name: "Royal Tournament",
    description: "Compete for the title of Royal Champion",
    startDate: "2025-05-01T00:00:00Z",
    endDate: "2025-05-07T00:00:00Z",
    type: "tournament",
    status: "upcoming",
    createdAt: "2025-04-15T00:00:00Z"
  },
  {
    id: "event-2",
    name: "Mockery Festival",
    description: "A week of royal mockery and satire",
    startDate: "2025-05-10T00:00:00Z",
    endDate: "2025-05-17T00:00:00Z",
    type: "mockery",
    status: "upcoming",
    createdAt: "2025-04-20T00:00:00Z"
  },
  {
    id: "event-3",
    name: "Treasure Hunt",
    description: "Find the hidden royal treasures",
    startDate: "2025-05-20T00:00:00Z",
    endDate: "2025-05-27T00:00:00Z",
    type: "treasure",
    status: "upcoming",
    createdAt: "2025-04-25T00:00:00Z"
  }
];

// Sample active events
export const activeEvents: Event[] = [
  {
    id: "event-4",
    name: "Public Shaming",
    description: "Shame others in a medieval-style spectacle",
    startDate: "2025-04-25T00:00:00Z",
    endDate: "2025-05-05T00:00:00Z",
    type: "shame",
    status: "active"
  }
];

// Sample event rewards
export const eventRewards: EventReward[] = [
  {
    id: "reward-1",
    name: "Royal Crown",
    description: "A crown fit for royalty",
    type: "cosmetic",
    tier: "legendary",
    imageUrl: "/images/rewards/royal-crown.png"
  },
  {
    id: "reward-2",
    name: "Gold Scepter",
    description: "A symbol of royal power",
    type: "cosmetic",
    tier: "epic",
    imageUrl: "/images/rewards/gold-scepter.png"
  }
];

// Sample event details
export const mockEventDetails: EventDetails = {
  id: "event-1",
  name: "Royal Tournament",
  description: "Compete for the title of Royal Champion",
  startDate: "2025-05-01T00:00:00Z",
  endDate: "2025-05-07T00:00:00Z",
  type: "tournament",
  status: "upcoming",
  rules: [
    "Each participant must spend at least $10 to enter",
    "The winner is determined by total amount spent during the event",
    "All transactions are final"
  ],
  prizes: [
    { rank: "1st", reward: "Royal Crown + 100 Bonus Points" },
    { rank: "2nd", reward: "Gold Scepter + 50 Bonus Points" },
    { rank: "3rd", reward: "Silver Chalice + 25 Bonus Points" }
  ],
  rewards: eventRewards,
  createdAt: "2025-04-15T00:00:00Z"
};

// Sample event stats
export const mockEventStats: EventStats = {
  id: "event-stats-1",
  usersParticipating: 150,
  totalContributed: 25000,
  topContributor: "royalspender",
  daysRemaining: 7,
  teamsParticipating: 4,
  leadingTeam: "red",
  prizePool: 10000,
  totalPokes: 325,
  participantsCount: 150,
  totalSpent: 25000,
  mostPoked: [
    { username: "bronzebearer", pokeCount: 42 },
    { username: "silverstreak", pokeCount: 38 },
    { username: "goldenmidas", pokeCount: 25 }
  ]
};

// Sample mockery event stats
export const mockeryEventStats: EventStats = {
  id: "event-stats-2",
  usersParticipating: 200,
  totalContributed: 15000,
  topContributor: "goldenmidas",
  daysRemaining: 5,
  teamsParticipating: 4,
  leadingTeam: "gold",
  prizePool: 7500,
  totalPokes: 458,
  participantsCount: 200,
  totalSpent: 15000,
  mostPoked: [
    { username: "royalspender", pokeCount: 56 },
    { username: "bronzebearer", pokeCount: 41 },
    { username: "silverstreak", pokeCount: 33 }
  ]
};
