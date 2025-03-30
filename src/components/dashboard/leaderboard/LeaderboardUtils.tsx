
import React from 'react';
import { LeaderboardUser } from '@/types/leaderboard';
import { Badge } from '@/components/ui/badge';
import { toTeamType, toUserTier } from '@/utils/typeUtils';
import { TeamType, UserTier } from '@/types/user';

export interface LeaderboardColumn {
  id: string;
  header: string;
  accessorKey?: string;
  accessorFn?: (row: LeaderboardUser) => any;
  cell?: (row: LeaderboardUser) => React.ReactNode;
  size?: number;
  minSize?: number;
  sortable?: boolean;
}

export const getTeamColor = (team?: TeamType) => {
  if (!team) return 'bg-gray-500';
  const teamColors = {
    red: 'bg-royal-crimson text-white',
    blue: 'bg-royal-navy text-white',
    green: 'bg-emerald-600 text-white',
    gold: 'bg-royal-gold text-black',
  };
  return teamColors[team] || 'bg-gray-500';
};

export const getTierColor = (tier: UserTier) => {
  const tierColors = {
    free: 'bg-gray-500 text-white',
    basic: 'bg-slate-700 text-white',
    premium: 'bg-purple-600 text-white',
    royal: 'bg-royal-gold text-black',
    founder: 'bg-gradient-to-r from-purple-600 to-royal-gold text-white',
  };
  return tierColors[tier] || 'bg-gray-500';
};

export const getTierName = (tier: UserTier) => {
  const tierNames = {
    free: 'Commoner',
    basic: 'Squire',
    premium: 'Knight',
    royal: 'Noble',
    founder: 'Founder'
  };
  return tierNames[tier] || tier.charAt(0).toUpperCase() + tier.slice(1);
};

export const renderTeamBadge = (team?: TeamType) => {
  if (!team) return null;
  const safeTeam = toTeamType(team as string);
  return (
    <Badge variant="outline" className={`${getTeamColor(safeTeam)} text-xs`}>
      {safeTeam.charAt(0).toUpperCase() + safeTeam.slice(1)}
    </Badge>
  );
};

export const renderTierBadge = (tier: UserTier) => {
  const safeTier = toUserTier(tier as string);
  return (
    <Badge className={`${getTierColor(safeTier)} text-xs`}>
      {getTierName(safeTier)}
    </Badge>
  );
};

export const formatValue = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
};

export const getRankChange = (current: number, previous?: number): number => {
  if (!previous) return 0;
  return previous - current;
};

export const formatRankChange = (change: number): string => {
  if (change === 0) return '—';
  return change > 0 ? `+${change}` : `${change}`;
};

export const getRankChangeColor = (change: number): string => {
  if (change === 0) return 'text-gray-400';
  return change > 0 ? 'text-green-500' : 'text-royal-crimson';
};

export { LeaderboardUser };
