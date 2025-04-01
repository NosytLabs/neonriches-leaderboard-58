
import { UserProfile } from "@/types/user";

// Mock authentication service
export const loginWithEmail = async (email: string, password: string) => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = await mockAuthLogin(email, password);
  
  return {
    success: true,
    user,
    token: "mock-jwt-token"
  };
};

// Mock authentication service
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
      notifications: true,
      profileVisibility: "public",
      allowProfileLinks: true,
      theme: "dark",
      marketingEmails: false,
      soundEffects: true,
      showBadges: true
    }
  };
};

export const registerWithEmail = async (username: string, email: string, password: string) => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = {
    id: `user_${Date.now()}`,
    username,
    displayName: username,
    email,
    profileImage: `https://api.dicebear.com/7.x/personas/svg?seed=${username}`,
    bio: "New SpendThrone member!",
    totalSpent: 0,
    amountSpent: 0,
    walletBalance: 50,
    rank: 9999,
    previousRank: 9999,
    tier: "bronze",
    team: "none",
    joinedDate: new Date().toISOString(),
    cosmetics: {
      border: ["starter-border"],
      color: ["starter-color"],
      font: [],
      title: ["newcomer"],
      badge: [],
      theme: [],
      background: [],
      effect: [],
      emoji: []
    },
    isVerified: false,
    profileBoosts: [],
    followers: [],
    following: [],
    profileViews: 0,
    profileClicks: 0,
    spendStreak: 0,
    settings: {
      showRank: true,
      showTeam: true,
      showSpending: true,
      showEmailOnProfile: false,
      darkMode: true,
      rankChangeAlerts: false,
      emailNotifications: true,
      notifications: true,
      profileVisibility: "public",
      allowProfileLinks: true,
      theme: "dark",
      marketingEmails: false,
      soundEffects: true,
      showBadges: true
    }
  };
  
  return {
    success: true,
    user
  };
};

export const logoutUser = async () => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 500));
  localStorage.removeItem("authToken");
  return true;
};

export const updateUserData = async (userData: UserProfile): Promise<UserProfile> => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 500));
  return userData;
};

export const fetchUserProfile = async (): Promise<UserProfile | null> => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const token = localStorage.getItem("authToken");
  if (!token) return null;
  
  // Return a mock user profile
  return {
    id: "user_abc123",
    username: "royaluser",
    displayName: "Royal User",
    profileImage: "https://api.dicebear.com/7.x/personas/svg?seed=royal",
    email: "user@example.com",
    bio: "I am a loyal member of SpendThrone!",
    totalSpent: 1200,
    amountSpent: 1200,
    walletBalance: 350,
    rank: 42,
    previousRank: 47,
    tier: "gold",
    team: "blue",
    joinedDate: new Date().toISOString(),
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
      notifications: true,
      profileVisibility: "public",
      allowProfileLinks: true,
      theme: "dark",
      marketingEmails: false,
      soundEffects: true,
      showBadges: true
    }
  };
};
