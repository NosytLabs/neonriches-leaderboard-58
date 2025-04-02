
import { UserProfile } from '@/types/user-consolidated';

// Simulate authentication service for testing without backend
const mockAuthService = {
  login: async (email: string, password: string): Promise<{ success: boolean; user?: UserProfile; error?: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    if (email === 'demo@example.com' && password === 'password') {
      return {
        success: true,
        user: {
          id: 'user-123',
          username: 'demo_user',
          displayName: 'Demo User',
          email: 'demo@example.com',
          profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
          bio: 'This is a demo user account',
          joinedDate: new Date().toISOString(),
          tier: 'premium',
          team: 'gold',
          rank: 42,
          previousRank: 45,
          totalSpent: 1500,
          amountSpent: 1500,
          walletBalance: 500,
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
          },
          // Add required fields
          profileBoosts: [],
          cosmetics: {
            border: [],
            color: [],
            font: [],
            emoji: [],
            title: [],
            background: [],
            effect: [],
            badge: [],
            theme: []
          },
          spendStreak: 0
        }
      };
    }
    
    return {
      success: false,
      error: 'Invalid email or password'
    };
  },
  
  register: async (username: string, email: string, password: string): Promise<{ success: boolean; user?: UserProfile; error?: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    
    // Check for existing user (demo purposes)
    if (email === 'demo@example.com') {
      return {
        success: false,
        error: 'Email already in use'
      };
    }
    
    return {
      success: true,
      user: {
        id: `user-${Date.now()}`,
        username,
        displayName: username,
        email,
        profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
        bio: '',
        joinedDate: new Date().toISOString(),
        tier: 'basic',
        team: 'none',
        rank: 999,
        previousRank: 999,
        totalSpent: 0,
        amountSpent: 0,
        walletBalance: 100,
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
        },
        // Add required fields
        profileBoosts: [],
        cosmetics: {
          border: [],
          color: [],
          font: [],
          emoji: [],
          title: [],
          background: [],
          effect: [],
          badge: [],
          theme: []
        },
        spendStreak: 0
      }
    };
  },
  
  logout: async (): Promise<{ success: boolean }> => {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    return { success: true };
  },
  
  resetPassword: async (email: string): Promise<{ success: boolean; error?: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    return { success: true };
  }
};

export default mockAuthService;
