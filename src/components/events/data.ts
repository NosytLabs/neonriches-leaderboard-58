
import { Event, EventDetails, EventStats } from '@/types/events';

// Mock events data
export const eventsData: Event[] = [
  {
    id: "evt-001",
    title: "Spring Fire Sale",
    name: "Spring Fire Sale",
    description: "A limited-time event where you can ascend through the ranks at a discounted price!",
    image: "/images/events/firesale.jpg",
    imageUrl: "/images/events/firesale.jpg",
    startDate: "2023-03-15T00:00:00Z",
    endDate: "2023-03-22T00:00:00Z",
    type: "firesale",
    status: "completed",
    createdAt: "2023-02-15T00:00:00Z",
    updatedAt: "2023-03-22T00:00:00Z"
  },
  {
    id: "evt-002",
    title: "Summer Tournament of Champions",
    name: "Summer Tournament of Champions",
    description: "Compete against other nobles to prove your worth and earn exclusive rewards!",
    image: "/images/events/tournament.jpg",
    imageUrl: "/images/events/tournament.jpg",
    startDate: "2023-07-01T00:00:00Z",
    endDate: "2023-07-15T00:00:00Z",
    type: "tournament",
    status: "upcoming",
    createdAt: "2023-05-15T00:00:00Z",
    updatedAt: "2023-05-15T00:00:00Z"
  },
  {
    id: "evt-003",
    title: "100K Spending Challenge",
    name: "100K Spending Challenge",
    description: "Can you spend $100,000 before anyone else? Special rewards await those who dare!",
    image: "/images/events/challenge.jpg",
    imageUrl: "/images/events/challenge.jpg",
    startDate: "2023-05-15T00:00:00Z",
    endDate: "2023-06-15T00:00:00Z",
    type: "challenge",
    status: "active",
    createdAt: "2023-04-01T00:00:00Z",
    updatedAt: "2023-05-15T00:00:00Z"
  },
  {
    id: "evt-004",
    title: "Royal Mockery Festival",
    name: "Royal Mockery Festival",
    description: "A delightful opportunity to shame your rivals and assert dominance in the royal court!",
    image: "/images/events/mockery.jpg",
    imageUrl: "/images/events/mockery.jpg",
    startDate: "2023-09-01T00:00:00Z",
    endDate: "2023-09-15T00:00:00Z",
    type: "shame",
    status: "upcoming",
    createdAt: "2023-07-15T00:00:00Z",
    updatedAt: "2023-07-15T00:00:00Z"
  }
];

// Mock event details data
export const eventDetailsData: EventDetails[] = [
  {
    id: "evt-001",
    title: "Spring Fire Sale",
    name: "Spring Fire Sale",
    description: "A limited-time event where you can ascend through the ranks at a discounted price!",
    image: "/images/events/firesale.jpg",
    longDescription: "The Spring Fire Sale is a semi-annual event that allows all nobles to climb the ranks with special discounted spending. During this event, every dollar spent counts as 1.5 dollars towards your rank progress. This is the perfect opportunity to boost your standing in the royal court without emptying your treasury.",
    rules: [
      "All spending during the event period counts as 1.5x towards rank progression",
      "Minimum spend of $50 required to participate",
      "Bonus rank progress is calculated at the end of the event",
      "Purchases of Royal Subscription packages receive an additional 10% bonus"
    ],
    rewards: [
      "Top spender receives exclusive 'Spring Sovereign' title and profile decoration",
      "All participants who spend $500+ receive a special Spring Fire Sale commemorative certificate",
      "Random rewards distributed daily to active participants"
    ],
    rewardTypes: ["Titles", "Certificates", "Profile Decorations", "Rank Boosts"],
    eligibility: ["All active members are eligible to participate", "Account must be in good standing"],
    participationRequirements: ["Minimum spend of $50 during the event period"],
    specialRules: ["Rank boosts do not apply to team contribution calculations"],
    createdAt: "2023-02-15T00:00:00Z"
  },
  {
    id: "evt-002",
    title: "Summer Tournament of Champions",
    name: "Summer Tournament of Champions",
    description: "Compete against other nobles to prove your worth and earn exclusive rewards!",
    image: "/images/events/tournament.jpg",
    longDescription: "The Summer Tournament of Champions is our premier competitive event where nobles can compete directly against each other in a series of spending challenges. Each day brings a new opportunity to climb the tournament leaderboard. Glory, titles, and exclusive rewards await those who demonstrate their commitment to the royal treasury.",
    rules: [
      "Tournament runs for two weeks with daily challenges",
      "Daily spending is tracked on separate leaderboards",
      "Overall tournament ranking is based on cumulative spending",
      "Minimum daily participation of $10 required to qualify for rewards"
    ],
    rewards: [
      "Tournament Champion receives the 'Champion's Crown' profile effect (permanent)",
      "Top 10 finishers receive 'Champion's Circle' title (permanent)",
      "Top 50 finishers receive special tournament certificate",
      "Daily challenge winners receive 24-hour profile boosts"
    ],
    rewardTypes: ["Profile Effects", "Titles", "Certificates", "Profile Boosts"],
    eligibility: ["All members of Basic tier and above", "Account must be at least 30 days old"],
    participationRequirements: ["Minimum daily spend of $10 to qualify for daily challenges"],
    specialRules: ["Tournament spending does not receive Fire Sale multipliers or other event bonuses"],
    createdAt: "2023-05-15T00:00:00Z"
  }
];

// Mock event stats data
export const eventStatsData: EventStats = {
  id: "stats-001",
  eventId: "evt-001",
  participantsCount: 1247,
  totalSpent: 157892.50,
  totalPrizes: 15000,
  averageSpent: 126.62,
  prizePool: 25000,
  totalPokes: 3456,
  mostPoked: [
    { username: "lordcashington", pokeCount: 342 },
    { username: "countesswealth", pokeCount: 289 },
    { username: "dukespender", pokeCount: 215 }
  ]
};

export { eventsData, eventDetailsData, eventStatsData };
