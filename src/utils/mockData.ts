
import { User, UserProfile, UserTier, SocialLink } from '@/types/user';

export const mockUsers: UserProfile[] = [
  {
    id: "user1",
    username: "RoyalSpender",
    displayName: "Lord Spendington",
    email: "royal@example.com",
    profileImage: "/throne-assets/avatars/royal-1.jpg",
    bio: "The realm's most extravagant noble, spending digital currency like water.",
    tier: "platinum",
    team: "red",
    rank: 1,
    previousRank: 2,
    walletBalance: 500,
    totalSpent: 5000,
    spentAmount: 5000,
    amountSpent: 5000,
    gender: "king",
    joinDate: "2023-01-15T00:00:00Z",
    joinedAt: "2023-01-15T00:00:00Z",
    createdAt: "2023-01-15T00:00:00Z",
    profileViews: 1523,
    profileClicks: 342,
    followers: 78,
    following: 25,
    spendStreak: 12,
    isVIP: true,
    cosmetics: {
      borders: ["royal", "gold", "premium"],
      colors: ["royal-gold", "royal-crimson", "royal-purple"],
      fonts: ["medieval", "royal"],
      emojis: ["crown", "money", "gem"],
      titles: ["Lord of Excess", "Duke of Digital"],
      backgrounds: ["throne-room", "royal-court"],
      effects: ["sparkle", "glow"],
      badges: ["top-spender", "royal-member", "big-whale"],
      themes: ["royal", "dark-gold"],
      banners: ["royal-red", "gold-trim"],
      activeBorder: "royal",
      activeColor: "royal-gold",
      activeFont: "medieval",
      foundersPass: true
    },
    subscription: {
      status: "active",
      tier: "royal",
      interval: "monthly",
      startDate: "2023-01-15T00:00:00Z",
      endDate: "2023-02-15T00:00:00Z",
      autoRenew: true,
      features: ["profile-boosts", "exclusive-cosmetics", "mockery-discounts"],
      isActive: true
    },
    socialLinks: [
      { id: "twitter", platform: "Twitter", url: "https://twitter.com/lordspendington", clicks: 67 },
      { id: "instagram", platform: "Instagram", url: "https://instagram.com/lordspendington", clicks: 45 },
      { id: "website", platform: "Website", url: "https://lordspendington.com", clicks: 23 }
    ]
  },
  {
    id: "user2",
    username: "SilverStrategist",
    displayName: "Countess of Coins",
    email: "silver@example.com",
    profileImage: "/throne-assets/avatars/royal-2.jpg",
    bio: "Second only to royalty. Building wealth through strategic digital investments.",
    tier: "gold",
    team: "blue",
    rank: 2,
    previousRank: 3,
    walletBalance: 250,
    totalSpent: 2500,
    spentAmount: 2500,
    amountSpent: 2500,
    gender: "queen",
    joinDate: "2023-02-10T00:00:00Z",
    joinedAt: "2023-02-10T00:00:00Z",
    createdAt: "2023-02-10T00:00:00Z",
    profileViews: 892,
    profileClicks: 213,
    followers: 45,
    following: 17,
    spendStreak: 8,
    isVIP: true,
    cosmetics: {
      borders: ["silver", "premium"],
      colors: ["silver", "blue-shimmer"],
      fonts: ["elegant", "noble"],
      emojis: ["moneybag", "chart", "diamond"],
      titles: ["Countess of Coins", "Master Strategist"],
      backgrounds: ["treasury", "blue-court"],
      effects: ["shimmer", "pulse"],
      badges: ["second-place", "strategic-spender"],
      themes: ["silver-blue", "elegant-dark"],
      banners: ["blue-banner", "silver-trim"],
      activeBorder: "silver",
      activeColor: "blue-shimmer",
      activeFont: "elegant",
      foundersPass: true
    },
    subscription: {
      status: "active",
      tier: "premium",
      interval: "quarterly",
      startDate: "2023-02-10T00:00:00Z",
      endDate: "2023-05-10T00:00:00Z",
      autoRenew: true,
      features: ["profile-customization", "team-benefits", "leaderboard-highlights"],
      isActive: true
    },
    socialLinks: [
      { id: "twitter", platform: "Twitter", url: "https://twitter.com/countessofcoins", clicks: 42 },
      { id: "linkedin", platform: "LinkedIn", url: "https://linkedin.com/in/countessofcoins", clicks: 31 }
    ]
  },
  {
    id: "user3",
    username: "BronzeBeliever",
    displayName: "Earl of Economy",
    email: "bronze@example.com",
    profileImage: "/throne-assets/avatars/royal-3.jpg",
    bio: "Rising through the ranks with steady spending and wise investments.",
    tier: "silver",
    team: "green",
    rank: 3,
    previousRank: 5,
    walletBalance: 100,
    totalSpent: 1000,
    spentAmount: 1000,
    amountSpent: 1000,
    gender: "king",
    joinDate: "2023-03-05T00:00:00Z",
    joinedAt: "2023-03-05T00:00:00Z",
    createdAt: "2023-03-05T00:00:00Z",
    profileViews: 562,
    profileClicks: 147,
    followers: 23,
    following: 42,
    spendStreak: 5,
    isVIP: false,
    cosmetics: {
      borders: ["bronze", "basic"],
      colors: ["bronze", "green-tint"],
      fonts: ["practical", "clean"],
      emojis: ["chart-up", "coin", "handshake"],
      titles: ["Earl of Economy", "Rising Noble"],
      backgrounds: ["market", "green-garden"],
      effects: ["subtle-glow", "growth"],
      badges: ["rising-star", "consistent-spender"],
      themes: ["bronze-green", "economy"],
      banners: ["green-growth", "bronze-edge"],
      activeBorder: "bronze",
      activeColor: "green-tint",
      activeFont: "practical",
      foundersPass: false
    },
    subscription: {
      status: "active",
      tier: "basic",
      interval: "monthly",
      startDate: "2023-03-05T00:00:00Z",
      endDate: "2023-04-05T00:00:00Z",
      autoRenew: true,
      features: ["basic-customization", "team-chat", "leaderboard-presence"],
      isActive: true
    },
    socialLinks: [
      { id: "twitter", platform: "Twitter", url: "https://twitter.com/earlofeconomy", clicks: 19 },
      { id: "medium", platform: "Medium", url: "https://medium.com/@earlofeconomy", clicks: 12 }
    ]
  }
];

export const getMockUserByRank = (rank: number): UserProfile | undefined => {
  return mockUsers.find(user => user.rank === rank);
};

export const getMockUserById = (id: string): UserProfile | undefined => {
  return mockUsers.find(user => user.id === id);
};

export const getMockUserByUsername = (username: string): UserProfile | undefined => {
  return mockUsers.find(user => user.username === username);
};

export default mockUsers;
