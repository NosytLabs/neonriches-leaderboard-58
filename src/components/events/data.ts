
import { Event, EventDetails, EventStats } from "@/types/events";

// Sample event data for the application
export const eventsData: Event[] = [
  {
    id: "event1",
    title: "Royal Treasury Boost",
    description: "Increase your rank faster with premium boosts for 24 hours!",
    type: "treasure",
    startDate: "2023-07-01T12:00:00Z",
    endDate: "2023-07-02T12:00:00Z",
    status: "active",
    image: "/assets/events/treasure-boost.jpg",
    rewards: [
      {
        id: "reward1",
        name: "2x Spending Multiplier",
        description: "Your spending counts double towards your rank for 24 hours",
        type: "multiplier"
      }
    ]
  },
  {
    id: "event2",
    title: "Great Shame Festival",
    description: "Participate in the public shaming of lower-ranked users",
    type: "shame",
    startDate: "2023-07-03T12:00:00Z",
    endDate: "2023-07-10T12:00:00Z",
    status: "active",
    image: "/assets/events/shame-festival.jpg"
  },
  {
    id: "event3",
    title: "Royal Tournament",
    description: "Compete against other users in spending challenges",
    type: "team",
    startDate: "2023-07-15T12:00:00Z",
    endDate: "2023-07-18T12:00:00Z",
    status: "upcoming",
    image: "/assets/events/royal-tournament.jpg"
  },
  {
    id: "event4",
    title: "Treasury Fire Sale",
    description: "All rank boosts and cosmetics are 50% off!",
    type: "treasure",
    startDate: "2023-06-15T12:00:00Z",
    endDate: "2023-06-18T12:00:00Z",
    status: "completed",
    image: "/assets/events/fire-sale.jpg"
  }
];

// Event details for expanded view
export const eventDetailsData: Record<string, EventDetails> = {
  "event1": {
    id: "event1",
    title: "Royal Treasury Boost",
    description: "Increase your rank faster with premium boosts for 24 hours!",
    longDescription: "During this special event, all contributions to the royal treasury will count double towards your rank advancement. This is a perfect opportunity for those aspiring to climb the ranks quickly. The boost applies automatically to all transactions during the event period.",
    rules: [
      "All spending during the event counts double towards rank",
      "Boost applies automatically, no action required",
      "Boost does not stack with other multipliers",
      "Minimum spend of $5 required to participate"
    ],
    prizes: [
      "Top spender: Royal Crown cosmetic",
      "Top 10 spenders: Gold Coin badge",
      "All participants: Event Participation certificate"
    ],
    type: "treasure",
    startDate: "2023-07-01T12:00:00Z",
    endDate: "2023-07-02T12:00:00Z",
    status: "active",
    image: "/assets/events/treasure-boost.jpg",
    imageUrl: "/assets/events/treasure-boost.jpg",
    createdAt: "2023-06-15T12:00:00Z"
  },
  "event2": {
    id: "event2",
    title: "Great Shame Festival",
    description: "Participate in the public shaming of lower-ranked users",
    longDescription: "A satirical event where users can purchase cosmetic 'shame' effects to apply to other users. These effects are purely visual and do not affect functionality or rank. It's a tongue-in-cheek feature poking fun at social media status games.",
    rules: [
      "Shame effects are purely cosmetic",
      "Effects last for 24 hours",
      "Users can purchase protection from shame effects",
      "All interactions must follow community guidelines"
    ],
    prizes: [
      "Most creative shamer: Jester's Hat cosmetic",
      "Most shamed user: Martyr's Badge (exclusive)",
      "All participants: Shame Festival certificate"
    ],
    type: "shame",
    startDate: "2023-07-03T12:00:00Z",
    endDate: "2023-07-10T12:00:00Z",
    status: "active",
    image: "/assets/events/shame-festival.jpg",
    imageUrl: "/assets/events/shame-festival.jpg",
    createdAt: "2023-06-20T12:00:00Z"
  }
};

// Event participation statistics
export const eventStatsData: Record<string, EventStats> = {
  "event1": {
    id: "event1",
    participantCount: 128,
    totalSpent: 25600,
    averageSpent: 200,
    topSpender: {
      id: "user123",
      username: "MoneyKing",
      spent: 2500
    },
    startDate: "2023-07-01T12:00:00Z",
    endDate: "2023-07-02T12:00:00Z"
  },
  "event2": {
    id: "event2",
    participantCount: 87,
    totalSpent: 8700,
    averageSpent: 100,
    topSpender: {
      id: "user456",
      username: "ShameWizard",
      spent: 1200
    },
    startDate: "2023-07-03T12:00:00Z",
    endDate: "2023-07-10T12:00:00Z"
  }
};

// Sample data for the public shaming festival
export const topUsers = [
  {
    id: 1,
    username: "GoldenThrone",
    profileImage: "/assets/avatars/user1.jpg",
    rank: 1,
    amountSpent: 10000,
    team: "gold"
  },
  {
    id: 2,
    username: "SilverSpender",
    profileImage: "/assets/avatars/user2.jpg",
    rank: 2,
    amountSpent: 7500,
    team: "blue"
  },
  {
    id: 3,
    username: "BronzeBaroness",
    profileImage: "/assets/avatars/user3.jpg",
    rank: 3,
    amountSpent: 5000,
    team: "red"
  },
  {
    id: 4,
    username: "RoyalJester",
    profileImage: "/assets/avatars/user4.jpg",
    rank: 4,
    amountSpent: 4500,
    team: "green"
  }
];
