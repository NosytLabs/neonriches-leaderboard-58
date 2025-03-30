
import { Event, EventReward, EventStats, EventType } from "@/types/events";

// Define mock users for public shaming festival
export const topUsers = [
  { id: 1, username: "RoyalSpender1", profileImage: "https://i.pravatar.cc/150?img=1", rank: 1, team: "red", amountSpent: 5000, lastMocked: new Date().toISOString() },
  { id: 2, username: "GoldenThrone", profileImage: "https://i.pravatar.cc/150?img=2", rank: 2, team: "blue", amountSpent: 4500, lastMocked: new Date().toISOString() },
  { id: 3, username: "WealthyNoble", profileImage: "https://i.pravatar.cc/150?img=3", rank: 3, team: "green", amountSpent: 4000, lastMocked: new Date().toISOString() },
  { id: 4, username: "PurpleSovereign", profileImage: "https://i.pravatar.cc/150?img=4", rank: 4, team: "red", amountSpent: 3500, lastMocked: new Date().toISOString() },
  { id: 5, username: "GoldHoarder", profileImage: "https://i.pravatar.cc/150?img=5", rank: 5, team: "green", amountSpent: 3000, lastMocked: new Date().toISOString() },
  { id: 6, username: "RoyalJester", profileImage: "https://i.pravatar.cc/150?img=6", rank: 6, team: "blue", amountSpent: 2500, lastMocked: new Date().toISOString() }
];

// Mock event data
export const mockEvents: Event[] = [
  {
    id: "1",
    name: "Royal Spending Tournament",
    title: "Royal Tournament",
    description: "Compete to spend the most and climb the ranks faster during this limited time event!",
    type: "competition" as EventType,
    startDate: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
    endDate: new Date(Date.now() + 86400000 * 5).toISOString(), // 5 days from now
    imageUrl: "https://source.unsplash.com/random/800x600/?golden,crown",
    image: "https://source.unsplash.com/random/800x600/?golden,crown",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    status: "active",
    rewards: [
      {
        id: "r1",
        name: "Golden Crown",
        description: "A prestigious cosmetic for your profile",
        type: "cosmetic",
        value: 100,
        imageUrl: "/images/rewards/crown.png",
        rarity: "legendary",
      },
      {
        id: "r2",
        name: "Royal Title",
        description: "Exclusive 'Tournament Champion' title",
        type: "title",
        value: 50,
        imageUrl: "/images/rewards/title.png",
        rarity: "epic",
      },
      {
        id: "r3",
        name: "Bonus Rank Points",
        description: "500 bonus points towards your rank",
        type: "bonus",
        value: 500,
        imageUrl: "/images/rewards/rank.png",
        rarity: "rare",
      }
    ]
  },
  {
    id: "2",
    name: "Medieval Mockery Festival",
    title: "Mockery Festival",
    description: "Engage in harmless medieval tomfoolery by tossing virtual rotten tomatoes!",
    type: "social" as EventType,
    startDate: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    endDate: new Date(Date.now() + 86400000 * 3).toISOString(), // 3 days from now
    imageUrl: "https://source.unsplash.com/random/800x600/?medieval,jester",
    image: "https://source.unsplash.com/random/800x600/?medieval,jester",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    status: "active",
    rewards: [
      {
        id: "r4",
        name: "Jester Hat",
        description: "A colorful jester hat cosmetic",
        type: "cosmetic",
        value: 50,
        imageUrl: "/images/rewards/jester.png",
        rarity: "rare",
      },
      {
        id: "r5",
        name: "Mockery Master",
        description: "Exclusive title for most active participants",
        type: "title",
        value: 30,
        imageUrl: "/images/rewards/mockerytitle.png",
        rarity: "uncommon",
      },
      {
        id: "r6",
        name: "Novelty Throne Border",
        description: "Special profile border with tomato design",
        type: "border",
        value: 40,
        imageUrl: "/images/rewards/border.png",
        rarity: "uncommon",
      }
    ]
  }
];

// Mock event stats
export const mockEventStats: EventStats[] = [
  {
    id: "stat1",
    eventId: "1",
    participantsCount: 150,
    totalSpent: 25000,
    topContributors: ["RoyalSpender1", "GoldenThrone", "WealthyNoble"],
    participantCount: 150,
    averageSpend: 166.67,
    highestSpend: 1200,
    lowestSpend: 5,
    duration: 7,
    topContribution: 1200,
    prizePool: 5000,
    totalPrizes: 10,
    totalPokes: 342,
    mostPoked: [
      { username: "RoyalJester", pokeCount: 42 },
      { username: "PurpleSovereign", pokeCount: 38 }
    ]
  },
  {
    id: "stat2",
    eventId: "2",
    participantsCount: 87,
    totalSpent: 8750,
    topContributors: ["RoyalJester", "PurpleSovereign", "GoldHoarder"],
    participantCount: 87,
    averageSpend: 100.57,
    highestSpend: 800,
    lowestSpend: 10,
    duration: 5,
    topContribution: 800,
    prizePool: 2000,
    totalPrizes: 5,
    totalPokes: 217,
    mostPoked: [
      { username: "RoyalSpender1", pokeCount: 53 },
      { username: "GoldenThrone", pokeCount: 41 }
    ]
  }
];
