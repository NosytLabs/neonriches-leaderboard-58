
import { Event, EventDetails, EventStats } from '@/types/events';

export const events: Event[] = [
  {
    id: "1",
    name: "Royal Tournament",
    title: "Royal Tournament",
    description: "Compete for glory and riches in our first tournament",
    startDate: "2023-06-01",
    endDate: "2023-06-30",
    type: "tournament",
    status: "completed",
    imageUrl: "/images/events/tournament.jpg",
    createdAt: "2023-05-15"
  },
  {
    id: "2",
    name: "Summer Auction",
    title: "Summer Auction",
    description: "Bid on exclusive items and special privileges",
    startDate: "2023-07-15",
    endDate: "2023-07-18",
    type: "auction",
    status: "upcoming",
    imageUrl: "/images/events/auction.jpg",
    createdAt: "2023-06-20"
  }
];

export const mockEventDetails: EventDetails = {
  id: "1",
  name: "Royal Tournament",
  title: "Royal Tournament",
  description: "Compete for glory and riches in our first tournament",
  startDate: "2023-06-01",
  endDate: "2023-06-30",
  type: "tournament",
  status: "completed",
  imageUrl: "/images/events/tournament.jpg",
  rules: [
    "All participants must have a minimum rank of 10",
    "Points are awarded based on daily contribution",
    "The top 3 players will receive special rewards"
  ],
  prizes: [
    { rank: "1st", reward: "Royal Crown Cosmetic + 1000 bonus points" },
    { rank: "2nd", reward: "Silver Badge + 500 bonus points" },
    { rank: "3rd", reward: "Bronze Badge + 250 bonus points" }
  ],
  rewards: [
    {
      id: "1",
      name: "Royal Crown",
      description: "A magnificent crown for the tournament champion",
      type: "cosmetic",
      tier: "legendary",
      imageUrl: "/images/rewards/crown.png",
      rarity: "legendary",
      value: 1000
    },
    {
      id: "2",
      name: "Silver Badge",
      description: "A shining silver badge for the runner-up",
      type: "badge",
      tier: "epic",
      imageUrl: "/images/rewards/silver-badge.png",
      rarity: "epic",
      value: 500
    }
  ],
  createdAt: "2023-05-15"
};

export const eventStats: EventStats = {
  id: "event-stats-1",
  usersParticipating: 128,
  totalContributed: 25600,
  topContributor: "WhaleKing",
  daysRemaining: 5,
  teamsParticipating: 3,
  leadingTeam: "Red Team",
  prizePool: 50000,
  totalPrizes: 5,
  participantsCount: 128,
  participantCount: 128,
  totalPokes: 562,
  totalSpent: 25600,
  averageSpent: 200,
  highestSpender: {
    userId: "user-1",
    username: "WhaleKing",
    amount: 5000
  },
  activeTeams: [
    { id: "team-1", name: "Red Team", count: 45 },
    { id: "team-2", name: "Blue Team", count: 42 },
    { id: "team-3", name: "Green Team", count: 41 }
  ],
  mostPoked: [
    { username: "PoorGuy", pokeCount: 45 },
    { username: "EasyTarget", pokeCount: 32 },
    { username: "NewPlayer", pokeCount: 28 }
  ]
};

// Export alias for backward compatibility
export const eventDetails = mockEventDetails;

// Export mock top users for PublicShamingFestival
export const topUsers = [
  {
    id: 1,
    username: "KingSpender",
    displayName: "King Spender",
    profileImage: "/images/avatars/king.jpg",
    rank: 1,
    team: "red",
    amountSpent: 10000
  },
  {
    id: 2,
    username: "QueenSpender",
    displayName: "Queen Spender",
    profileImage: "/images/avatars/queen.jpg",
    rank: 2,
    team: "blue",
    amountSpent: 9500
  },
  {
    id: 3,
    username: "DukeWallet",
    displayName: "Duke Wallet",
    profileImage: "/images/avatars/duke.jpg",
    rank: 3,
    team: "green",
    amountSpent: 8800
  },
  {
    id: 4,
    username: "CountMoney",
    displayName: "Count Money",
    profileImage: "/images/avatars/count.jpg",
    rank: 4,
    team: "gold",
    amountSpent: 7200
  }
];
