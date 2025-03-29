
import React, { createContext, useState, useContext, useEffect } from 'react';
import { User, UserRole, UserTier } from '@/types/user';
import { v4 as uuidv4 } from 'uuid';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  register: (email: string, username: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  updateUserProfile: (updates: Partial<User>) => void;
  awardCosmetic: (type: string, item: string) => void;
  openAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  signIn: () => {},
  signOut: () => {},
  register: () => {},
  login: () => {},
  logout: () => {},
  updateUserProfile: () => {},
  awardCosmetic: () => {},
  openAuthModal: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('throne_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const register = (email: string, username: string, password: string) => {
    // Create a new user
    const newUser: User = {
      id: uuidv4(),
      email,
      username,
      displayName: username,
      profileImage: `/throne-assets/avatars/default-${Math.floor(Math.random() * 5) + 1}.jpg`,
      bio: "A noble newcomer to the realm.",
      tier: 'bronze',
      role: 'user',
      team: null,
      rank: 9999,
      previousRank: 9999,
      walletBalance: 0,
      totalSpent: 0,
      spentAmount: 0,
      amountSpent: 0,
      joinDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      isVerified: false,
      gender: 'prefer-not-to-say',
      profileViews: 0,
      profileClicks: 0,
      followers: 0,
      following: 0,
      isVIP: false,
      badges: [],
      spendStreak: 0,
      socialLinks: {},
      cosmetics: {
        borders: [],
        colors: [],
        fonts: [],
        emojis: [],
        banners: [],
        themes: [],
        effects: [],
        titles: []
      },
      settings: {
        showRank: true,
        showTeam: true,
        showSpending: true,
        publicProfile: true,
        allowMessages: true,
        emailNotifications: true,
        darkMode: true,
        language: 'en',
        profileVisibility: true,
        allowProfileLinks: true,
        showEmailOnProfile: false,
        rankChangeAlerts: true,
        shameAlerts: true,
        newFollowerAlerts: true,
        theme: 'dark'
      },
      profileBoosts: []
    };
    
    // Save user to localStorage
    localStorage.setItem('throne_user', JSON.stringify(newUser));
    setUser(newUser);
  };
  
  const login = (email: string, password: string) => {
    // Mock login - in a real app, this would validate credentials
    // For now, just create a mock user if none exists
    const mockUser: User = {
      id: uuidv4(),
      email: email || 'noble@spendthrone.com',
      username: 'NobleSpender',
      displayName: 'Sir Spends-a-Lot',
      profileImage: '/throne-assets/avatars/royal-1.jpg',
      bio: "The realm's most extravagant noble, known for financial excess and questionable decision-making.",
      tier: 'gold',
      role: 'user',
      team: 'red',
      rank: 42,
      previousRank: 45,
      walletBalance: 150,
      totalSpent: 500,
      spentAmount: 500,
      amountSpent: 500,
      joinDate: '2023-04-15T10:30:00Z',
      createdAt: '2023-04-15T10:30:00Z',
      isVerified: true,
      gender: 'king',
      profileViews: 128,
      profileClicks: 67,
      followers: 24,
      following: 12,
      isVIP: true,
      badges: ['early_supporter', 'big_spender', 'team_champion'],
      spendStreak: 3,
      socialLinks: {
        twitter: 'https://twitter.com/sirspends',
        instagram: 'https://instagram.com/sirspends',
        website: 'https://sirspends.com'
      },
      cosmetics: {
        borders: ['golden', 'royal'],
        colors: ['crimson', 'gold'],
        fonts: ['medieval', 'script'],
        emojis: ['crown', 'money_bag', 'gem'],
        banners: ['royal_red', 'gold_trim'],
        themes: ['dark_castle', 'royal_court'],
        effects: ['gold_sparkle', 'coin_rain'],
        titles: ['Duke of Dollars', 'Count of Cash']
      },
      settings: {
        showRank: true,
        showTeam: true,
        showSpending: true,
        publicProfile: true,
        allowMessages: true,
        emailNotifications: true,
        darkMode: true,
        language: 'en',
        profileVisibility: true,
        allowProfileLinks: true,
        showEmailOnProfile: false,
        rankChangeAlerts: true,
        shameAlerts: true,
        newFollowerAlerts: true,
        theme: 'dark'
      },
      profileBoosts: [
        {
          id: uuidv4(),
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          level: 2,
          type: 'visibility',
          strength: 1.5
        }
      ]
    };
    
    localStorage.setItem('throne_user', JSON.stringify(mockUser));
    setUser(mockUser);
  };
  
  const logout = () => {
    localStorage.removeItem('throne_user');
    setUser(null);
  };
  
  const updateUserProfile = (updates: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates };
    localStorage.setItem('throne_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };
  
  const awardCosmetic = (type: string, item: string) => {
    if (!user || !user.cosmetics) return;
    
    const updatedCosmetics = { ...user.cosmetics };
    
    switch (type) {
      case 'border':
        if (!updatedCosmetics.borders.includes(item)) {
          updatedCosmetics.borders = [...updatedCosmetics.borders, item];
        }
        break;
      case 'color':
        if (!updatedCosmetics.colors.includes(item)) {
          updatedCosmetics.colors = [...updatedCosmetics.colors, item];
        }
        break;
      case 'font':
        if (!updatedCosmetics.fonts.includes(item)) {
          updatedCosmetics.fonts = [...updatedCosmetics.fonts, item];
        }
        break;
      case 'emoji':
        if (!updatedCosmetics.emojis.includes(item)) {
          updatedCosmetics.emojis = [...updatedCosmetics.emojis, item];
        }
        break;
      case 'banner':
        if (!updatedCosmetics.banners.includes(item)) {
          updatedCosmetics.banners = [...updatedCosmetics.banners, item];
        }
        break;
      case 'theme':
        if (!updatedCosmetics.themes.includes(item)) {
          updatedCosmetics.themes = [...updatedCosmetics.themes, item];
        }
        break;
      case 'effect':
        if (!updatedCosmetics.effects.includes(item)) {
          updatedCosmetics.effects = [...updatedCosmetics.effects, item];
        }
        break;
      case 'title':
        if (!updatedCosmetics.titles.includes(item)) {
          updatedCosmetics.titles = [...updatedCosmetics.titles, item];
        }
        break;
      default:
        break;
    }
    
    updateUserProfile({ cosmetics: updatedCosmetics });
  };
  
  // For backward compatibility
  const signIn = login;
  const signOut = logout;
  const openAuthModal = () => setAuthModalOpen(true);
  
  const isAuthenticated = !!user;
  
  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated,
        signIn, 
        signOut,
        register,
        login,
        logout,
        updateUserProfile,
        awardCosmetic,
        openAuthModal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
