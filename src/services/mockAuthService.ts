
import { UserProfile } from '@/types/user-consolidated';

// Mock implementation of Google sign-in
export const signInWithGoogle = async (): Promise<boolean> => {
  // In a real implementation, this would redirect to Google OAuth
  console.log('Signing in with Google...');
  
  // Simulate a delay for the authentication process
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return true to indicate successful authentication
  return true;
};

// Function to create a mock user profile
export const createMockUser = (username: string): UserProfile => {
  return {
    id: `user-${Date.now()}`,
    username,
    displayName: username.charAt(0).toUpperCase() + username.slice(1),
    email: `${username}@example.com`,
    profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
    bio: `I am ${username}, a noble spender in the realm of SpendThrone.`,
    joinedDate: new Date().toISOString(),
    tier: 'basic',
    team: 'blue',
    rank: Math.floor(Math.random() * 100) + 1,
    previousRank: Math.floor(Math.random() * 100) + 1,
    totalSpent: Math.floor(Math.random() * 1000),
    amountSpent: Math.floor(Math.random() * 1000),
    walletBalance: Math.floor(Math.random() * 500),
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true
    }
  };
};
