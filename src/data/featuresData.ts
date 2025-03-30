import { Feature, FeatureInfo } from '@/types/features';
import { Crown, Users, CreditCard, Trophy, Target, Palette, Tag, BarChart3, Bell, MessageSquare, Eye, ShoppingBag, Share2 } from 'lucide-react';
import React from 'react';

const featuresData: Record<Feature, FeatureInfo> = {
  leaderboard: {
    id: 'leaderboard',
    title: 'Royal Leaderboard',
    description: 'View the most influential nobles in the kingdom',
    category: 'core',
    icon: React.createElement(Trophy),
    isPremium: false,
    color: 'text-royal-gold',
    bgColor: 'bg-royal-gold/10',
    details: [
      'Real-time ranking updates',
      'Historical rank tracking',
      'Personalized statistics'
    ]
  },
  profile: {
    id: 'profile',
    title: 'Noble Profile',
    description: 'Customize your royal presence',
    category: 'core',
    icon: React.createElement(Users),
    isPremium: false,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    details: [
      'Profile customization',
      'Achievement showcase',
      'Spending history'
    ]
  },
  certificates: {
    id: 'certificates',
    title: 'Royal Certificates',
    description: 'Earn and display official royal documents',
    category: 'premium',
    icon: React.createElement(Crown),
    isPremium: true,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    details: [
      'Customizable certificates',
      'Achievement documentation',
      'Shareable on social media'
    ]
  },
  teams: { id: 'teams', title: 'Teams', description: 'Team features', category: 'social', icon: React.createElement(Users), isPremium: false },
  mockery: { id: 'mockery', title: 'Mockery', description: 'Mock other users', category: 'social', icon: React.createElement(Target), isPremium: false },
  cosmetics: { id: 'cosmetics', title: 'Cosmetics', description: 'Cosmetic items', category: 'personalization', icon: React.createElement(Palette), isPremium: true },
  subscriptions: { id: 'subscriptions', title: 'Subscriptions', description: 'Premium subscriptions', category: 'premium', icon: React.createElement(CreditCard), isPremium: false },
  marketing: { id: 'marketing', title: 'Marketing', description: 'Marketing tools', category: 'business', icon: React.createElement(BarChart3), isPremium: true },
  analytics: { id: 'analytics', title: 'Analytics', description: 'Data analytics', category: 'business', icon: React.createElement(BarChart3), isPremium: true },
  notifications: { id: 'notifications', title: 'Notifications', description: 'Notification system', category: 'core', icon: React.createElement(Bell), isPremium: false },
  messaging: { id: 'messaging', title: 'Messaging', description: 'Messaging system', category: 'social', icon: React.createElement(MessageSquare), isPremium: true },
  visibility: { id: 'visibility', title: 'Visibility', description: 'Visibility controls', category: 'privacy', icon: React.createElement(Eye), isPremium: true },
  marketplace: { id: 'marketplace', title: 'Marketplace', description: 'Buy and sell items', category: 'commerce', icon: React.createElement(ShoppingBag), isPremium: true },
  marketing_dashboard: { id: 'marketing_dashboard', title: 'Marketing Dashboard', description: 'Advanced marketing tools', category: 'business', icon: React.createElement(BarChart3), isPremium: true },
  referrals: { id: 'referrals', title: 'Referrals', description: 'Referral program', category: 'social', icon: React.createElement(Share2), isPremium: false }
};

export default featuresData;
