
import React, { ReactNode } from 'react';
import { Crown, Trophy, CreditCard, Award, Users, Activity, ShieldCheck, Bell, Rocket, Sparkles } from 'lucide-react';

export interface FeatureInfo {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: ReactNode;
  isPremium: boolean;
  isNew?: boolean;
  comingSoon?: boolean;
  color?: string;
  bgColor?: string;
  details?: string[];
  content?: string;
}

export type Feature = string;

// Features data
const featuresData: Record<Feature, FeatureInfo> = {
  leaderboard: {
    id: 'leaderboard',
    title: 'Royal Leaderboard',
    description: 'Climb the ranks and showcase your status to all other nobles.',
    category: 'core',
    icon: <Trophy className="h-6 w-6" />,
    isPremium: false,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    details: [
      'Real-time ranking updates',
      'Personalized rank tracking',
      'Historical rank progression',
      'Team-based competitions'
    ],
    content: 'The Royal Leaderboard is the centerpiece of SpendThrone, where nobles compete for status and recognition.'
  },
  
  statusSymbols: {
    id: 'statusSymbols',
    title: 'Status Symbols',
    description: 'Unlock exclusive badges, titles, and decorations as you spend more.',
    category: 'cosmetics',
    icon: <Crown className="h-6 w-6" />,
    isPremium: true,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    details: [
      'Custom profile badges',
      'Animated titles and effects',
      'Royal decorations',
      'Exclusive emotes'
    ],
    content: 'Status symbols are visual indicators of your wealth and position within the SpendThrone community.'
  },
  
  teamCompetitions: {
    id: 'teamCompetitions',
    title: 'Team Competitions',
    description: 'Join a team and compete in exclusive events for team glory.',
    category: 'social',
    icon: <Users className="h-6 w-6" />,
    isPremium: false,
    isNew: true,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    details: [
      'Team-based rewards',
      'Weekly competitions',
      'Team chat channels',
      'Team achievements'
    ],
    content: 'Team competitions add another layer of competition and camaraderie to the SpendThrone experience.'
  },
  
  paymentOptions: {
    id: 'paymentOptions',
    title: 'Premium Payment Options',
    description: 'Multiple ways to contribute to your status, including crypto.',
    category: 'financial',
    icon: <CreditCard className="h-6 w-6" />,
    isPremium: false,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    details: [
      'Credit/Debit cards',
      'Cryptocurrency',
      'Subscription options',
      'Mobile payments'
    ],
    content: 'SpendThrone offers various payment methods to make it easy for you to climb the ranks.'
  },
  
  specialEvents: {
    id: 'specialEvents',
    title: 'Royal Events',
    description: 'Limited-time events where you can earn exclusive rewards.',
    category: 'events',
    icon: <Sparkles className="h-6 w-6" />,
    isPremium: true,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    details: [
      'Seasonal competitions',
      'Exclusive challenges',
      'Special promotions',
      'Limited-time rewards'
    ],
    content: 'Royal Events offer unique opportunities to boost your status and earn exclusive rewards.'
  },
  
  certificates: {
    id: 'certificates',
    title: 'Royal Certificates',
    description: 'Official documents proving your noble status and achievements.',
    category: 'recognition',
    icon: <Award className="h-6 w-6" />,
    isPremium: true,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    details: [
      'Personalized certificates',
      'Digital and physical options',
      'Shareable on social media',
      'Official SpendThrone seal'
    ],
    content: 'Royal Certificates provide tangible proof of your achievements and status within the SpendThrone kingdom.'
  },
  
  analytics: {
    id: 'analytics',
    title: 'Spending Analytics',
    description: 'Track your spending and see how it contributes to your status.',
    category: 'tools',
    icon: <Activity className="h-6 w-6" />,
    isPremium: false,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    details: [
      'Spending history',
      'Rank progression',
      'Impact visualization',
      'Comparative analytics'
    ],
    content: 'Spending Analytics help you understand how your contributions affect your position on the leaderboard.'
  },
  
  security: {
    id: 'security',
    title: 'Rank Protection',
    description: 'Premium features to protect your rank from being overtaken.',
    category: 'protection',
    icon: <ShieldCheck className="h-6 w-6" />,
    isPremium: true,
    comingSoon: true,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    details: [
      'Temporary rank freezing',
      'Rank decay protection',
      'Priority notifications',
      'Advanced security options'
    ],
    content: 'Rank Protection features help you maintain your position on the leaderboard when you can\'t actively participate.'
  },
  
  notifications: {
    id: 'notifications',
    title: 'Status Alerts',
    description: 'Get notified when your rank changes or when you're close to a milestone.',
    category: 'engagement',
    icon: <Bell className="h-6 w-6" />,
    isPremium: false,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    details: [
      'Rank change alerts',
      'Milestone notifications',
      'Team activity updates',
      'Custom alert settings'
    ],
    content: 'Status Alerts keep you informed about important changes to your rank and status.'
  },
  
  boosts: {
    id: 'boosts',
    title: 'Status Boosts',
    description: 'Limited-time multipliers for your spending to climb ranks faster.',
    category: 'advantages',
    icon: <Rocket className="h-6 w-6" />,
    isPremium: true,
    isNew: true,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    details: [
      'Temporary spending multipliers',
      'Special event bonuses',
      'Team boost synergies',
      'Strategic advantage options'
    ],
    content: 'Status Boosts provide temporary advantages that help you climb the ranks more efficiently.'
  }
};

// Array version for easier iteration
export const featuresArray = Object.values(featuresData);

// Default export 
export default featuresData;
