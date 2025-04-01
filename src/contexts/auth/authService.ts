
import { UserProfile } from "@/types/user";

export const mockAuthLogin = async (email: string, password: string): Promise<UserProfile> => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    id: "user_abc123",
    username: "royaluser",
    displayName: "Royal User",
    profileImage: "https://api.dicebear.com/7.x/personas/svg?seed=royal",
    email: email,
    bio: "I am a loyal member of SpendThrone!",
    totalSpent: 1200,
    amountSpent: 1200,
    walletBalance: 350,
    rank: 42,
    previousRank: 47,
    tier: "gold",
    team: "blue",
    joinedDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    cosmetics: {
      border: ["gold-border", "premium-border"],
      color: ["royal-blue", "gold"],
      font: ["serif", "elegant"],
      title: ["big-spender", "royal-member"],
      badge: ["gold-member"],
      theme: ["royal-theme"],
      background: [],
      effect: [],
      emoji: []
    },
    isVerified: true,
    profileBoosts: [],
    followers: [],
    following: [],
    profileViews: 120,
    profileClicks: 45,
    spendStreak: 7,
    settings: {
      showRank: true,
      showTeam: true,
      showSpending: true,
      showEmailOnProfile: false,
      darkMode: true,
      rankChangeAlerts: true,
      emailNotifications: true,
      language: "en",
      allowMessages: true
    }
  };
};
