
import { TierDetails } from "@/types/tier";

export const tiers: TierDetails[] = [
  {
    name: 'basic',     // Changed from 'free' to match UserTier
    label: 'Free',
    minSpend: 0,
    maxSpend: 99,
    color: 'text-white/70',
    benefits: [
      'Basic profile customization',
      'Standard leaderboard visibility',
      'Participation in public events'
    ],
    icon: 'user'
  },
  {
    name: 'bronze',
    label: 'Bronze',
    minSpend: 100,
    maxSpend: 999,
    color: 'text-amber-600',
    benefits: [
      'All Free benefits',
      'Team chat access',
      'Bronze profile banner',
      'One mockery action per week'
    ],
    icon: 'shield'
  },
  {
    name: 'silver',
    label: 'Silver',
    minSpend: 1000,
    maxSpend: 9999,
    color: 'text-gray-300',
    benefits: [
      'All Bronze benefits',
      'Profile animation effects',
      'Advanced profile customization',
      'Three mockery actions per week'
    ],
    icon: 'sword'
  },
  {
    name: 'gold',
    label: 'Royal Gold',
    minSpend: 10000,
    maxSpend: null,
    color: 'text-royal-gold',
    benefits: [
      'All Silver benefits',
      'Featured on homepage rotation',
      'Royal council voting power',
      'Unlimited mockery actions'
    ],
    icon: 'crown'
  }
];
