
import { UserTeam, UserTier } from '@/types/user';

// Get the hex color for a team
export const getTeamColor = (team: string): string => {
  switch (team) {
    case 'red':
      return '#EF4444';
    case 'green':
      return '#10B981';
    case 'blue':
      return '#3B82F6';
    default:
      return '#6B7280';
  }
};

// Get the border color for a team
export const getTeamBorderColor = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'border-red-500';
    case 'green':
      return 'border-green-500';
    case 'blue':
      return 'border-blue-500';
    default:
      return 'border-gray-500';
  }
};

// Get the background color class for a team
export const getTeamBgColorClass = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'bg-red-500/20';
    case 'green':
      return 'bg-green-500/20';
    case 'blue':
      return 'bg-blue-500/20';
    default:
      return 'bg-gray-500/20';
  }
};

// Get the text color class for a team
export const getTeamTextColorClass = (team: UserTeam): string => {
  switch (team) {
    case 'red':
      return 'text-red-400';
    case 'green':
      return 'text-green-400';
    case 'blue':
      return 'text-blue-400';
    default:
      return 'text-gray-400';
  }
};

// Get the spending tier based on amount spent
export const getSpendingTier = (amountSpent: number): UserTier => {
  if (amountSpent >= 25000) return 'whale';
  if (amountSpent >= 10000) return 'shark';
  if (amountSpent >= 5000) return 'dolphin';
  if (amountSpent >= 1000) return 'fish';
  if (amountSpent >= 250) return 'octopus';
  if (amountSpent > 0) return 'crab';
  return 'free';
};

// Get a user-friendly label for a spending tier
export const getSpendingTierLabel = (tier: UserTier): string => {
  switch (tier) {
    case 'whale':
      return 'Whale';
    case 'shark':
      return 'Shark';
    case 'dolphin':
      return 'Dolphin';
    case 'fish':
      return 'Fish';
    case 'octopus':
      return 'Octopus';
    case 'crab':
      return 'Crab';
    case 'pro':
      return 'Pro';
    case 'free':
      return 'Free';
    default:
      return 'Free';
  }
};
