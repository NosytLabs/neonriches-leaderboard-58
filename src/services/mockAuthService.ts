
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
      showBadges: true,
      showTeam: true,
      showSpending: true
    }
  };
};

// Add missing functions mentioned in error messages
export const signInWithEmail = async (email: string): Promise<boolean> => {
  console.log(`Sending magic link to ${email}...`);
  
  // Simulate a delay for sending the magic link
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return true to indicate successful email sending
  return true;
};

export const verifyMfaCode = async (code: string): Promise<boolean> => {
  console.log(`Verifying MFA code: ${code}`);
  
  // Simple validation that the code is 6 digits
  if (!/^\d{6}$/.test(code)) {
    throw new Error('Invalid verification code');
  }
  
  // Simulate a delay for verification
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return true to indicate successful verification
  return true;
};

export const resetPassword = async (email: string): Promise<boolean> => {
  console.log(`Sending password reset link to ${email}...`);
  
  // Validate email format
  if (!email || !email.includes('@')) {
    throw new Error('Invalid email address');
  }
  
  // Simulate a delay for sending the reset link
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return true to indicate successful email sending
  return true;
};
