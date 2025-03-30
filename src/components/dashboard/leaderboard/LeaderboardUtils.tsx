
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { LeaderboardUser } from '@/types/leaderboard';
import { UserProfile, TeamColor, UserTier } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';

// Mock data for leaderboard
export const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: '1',
    username: 'whalemaster',
    displayName: 'Whale Master',
    profileImage: '/images/avatars/user1.jpg',
    tier: 'royal',
    team: 'red',
    rank: 1,
    previousRank: 1,
    walletBalance: 50000,
    totalSpent: 25000,
    amountSpent: 25000,
    isVIP: true,
    isFounder: true,
    isVerified: true
  },
  {
    id: '2',
    username: 'goldspender',
    displayName: 'Gold Spender',
    profileImage: '/images/avatars/user2.jpg',
    tier: 'premium',
    team: 'green',
    rank: 2,
    previousRank: 3,
    walletBalance: 30000,
    totalSpent: 20000,
    amountSpent: 20000,
    isVIP: true
  },
  {
    id: '3',
    username: 'royalbuyer',
    displayName: 'Royal Buyer',
    profileImage: '/images/avatars/user3.jpg',
    tier: 'premium',
    team: 'blue',
    rank: 3,
    previousRank: 2,
    walletBalance: 15000,
    totalSpent: 15000,
    amountSpent: 15000,
    isVIP: true
  },
  {
    id: '4',
    username: 'statusseeker',
    displayName: 'Status Seeker',
    profileImage: '/images/avatars/user4.jpg',
    tier: 'basic',
    team: 'red',
    rank: 4,
    previousRank: 5,
    walletBalance: 10000,
    totalSpent: 10000,
    amountSpent: 10000
  },
  {
    id: '5',
    username: 'moneybags',
    displayName: 'Money Bags',
    profileImage: '/images/avatars/user5.jpg',
    tier: 'basic',
    team: 'green',
    rank: 5,
    previousRank: 4,
    walletBalance: 8000,
    totalSpent: 8000,
    amountSpent: 8000
  }
];

export const getTeamBadge = (team: TeamColor | undefined | null) => {
  if (!team) return null;
  
  const teamColors: Record<TeamColor, { bg: string, text: string }> = {
    red: { bg: 'bg-royal-crimson/20', text: 'text-royal-crimson' },
    blue: { bg: 'bg-royal-navy/20', text: 'text-royal-navy' },
    green: { bg: 'bg-emerald-600/20', text: 'text-emerald-500' },
    gold: { bg: 'bg-royal-gold/20', text: 'text-royal-gold' }
  };
  
  const teamNames: Record<TeamColor, string> = {
    red: 'Crimson',
    blue: 'Azure',
    green: 'Emerald',
    gold: 'Golden'
  };
  
  const color = teamColors[team];
  
  return (
    <Badge variant="outline" className={`${color.bg} ${color.text} border-0`}>
      {teamNames[team]}
    </Badge>
  );
};

export const formatLeaderboardAmount = (amount: number | undefined): string => {
  if (amount === undefined) return '$0';
  return formatCurrency(amount);
};

export type { LeaderboardUser };
