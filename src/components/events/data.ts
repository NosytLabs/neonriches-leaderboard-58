// Add this import if it doesn't already exist
import { ShameAction } from './hooks/useShameEffect';

export const currentEvent = {
  id: 1,
  name: "Medieval Public Shaming Festival",
  description: "Engage in medieval-style public ridicule by throwing rotten food at other nobles or placing them in the stocks!",
  startDate: new Date(Date.now() - 86400000 * 2), // 2 days ago
  endDate: new Date(Date.now() + 86400000 * 5), // 5 days from now
  image: "/assets/events/public-shaming.jpg",
  progress: 60, // Added missing progress property
  rewards: [
    { name: "Shame Badge", description: "Shows how many times you've publicly shamed others", tier: "Bronze" },
    { name: "Royal Jester Hat", description: "Special profile decoration", tier: "Silver" },
    { name: "Immunity Crown", description: "Protection from being shamed for 48 hours", tier: "Gold" }
  ]
};

export const upcomingEvents = [
  {
    id: 2,
    name: "Royal Census",
    description: "Update your profile information for extra rewards and team bonuses!",
    startDate: new Date(Date.now() + 86400000 * 7), // 7 days from now
    endDate: new Date(Date.now() + 86400000 * 14), // 14 days from now
    image: "/assets/events/royal-census.jpg"
  },
  {
    id: 3,
    name: "Treasure Hunt",
    description: "Solve riddles and find hidden treasures throughout the kingdom!",
    startDate: new Date(Date.now() + 86400000 * 18), // 18 days from now
    endDate: new Date(Date.now() + 86400000 * 25), // 25 days from now
    image: "/assets/events/treasure-hunt.jpg"
  }
];

// Adding the missing eventStats export
export const eventStats = {
  participantsCount: 219,
  totalPokes: 317,
  prizePool: 2487,
  mostPoked: {
    username: "SilverBaron",
    pokeCount: 18
  }
};

// Top users for shaming targets
export const topUsers = [
  {
    id: 1,
    username: "RoyalOverlord",
    amountSpent: 2500,
    rank: 1,
    team: "red",
    profileImage: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    username: "GoldenThrone",
    amountSpent: 2200,
    rank: 2,
    team: "green",
    profileImage: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 3,
    username: "WealthyNoble",
    amountSpent: 1900,
    rank: 3,
    team: "blue",
    profileImage: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 4,
    username: "RegalSpender",
    amountSpent: 1650,
    rank: 4,
    team: "red",
    profileImage: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: 5,
    username: "PurpleDuke",
    amountSpent: 1480,
    rank: 5,
    team: "green",
    profileImage: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 6,
    username: "RoyalJester",
    amountSpent: 1250,
    rank: 6,
    team: "blue",
    profileImage: "https://i.pravatar.cc/150?img=16"
  }
];

// Available shame actions and their pricing
export const shameActions: Record<ShameAction, {price: number, title: string, description: string, icon: string}> = {
  tomatoes: {
    price: 0.5,
    title: "Throw Tomatoes",
    description: "Pelt with rotten tomatoes. A classic form of public ridicule.",
    icon: "🍅"
  },
  eggs: {
    price: 1.0,
    title: "Throw Rotten Eggs",
    description: "Hurl rotten eggs, covering in putrid yolk. The stench will linger for a day.",
    icon: "🥚"
  },
  stocks: {
    price: 2.0,
    title: "Place in Stocks",
    description: "Place in the public stocks. The ultimate medieval humiliation.",
    icon: "🪵"
  }
};
