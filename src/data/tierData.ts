
import { TierDetails } from "@/types/tier";

export const tiers: TierDetails[] = [
  {
    name: 'bronze',
    label: 'Bronze Noble',
    minSpend: 0,
    maxSpend: 99,
    color: 'text-amber-700',
    benefits: [
      'Basic profile customization',
      'Standard leaderboard visibility',
      'Participation in public events'
    ],
    icon: 'shield'
  },
  {
    name: 'silver',
    label: 'Silver Baron',
    minSpend: 100,
    maxSpend: 499,
    color: 'text-gray-400',
    benefits: [
      'All Bronze benefits',
      'Team chat access',
      'Silver profile banner',
      'One free mockery action per week'
    ],
    icon: 'sword'
  },
  {
    name: 'gold',
    label: 'Gold Count',
    minSpend: 500,
    maxSpend: 1999,
    color: 'text-amber-500',
    benefits: [
      'All Silver benefits',
      'Profile animation effects',
      'Advanced profile customization',
      'Three free mockery actions per week'
    ],
    icon: 'crown'
  },
  {
    name: 'platinum',
    label: 'Platinum Duke',
    minSpend: 2000,
    maxSpend: 9999,
    color: 'text-cyan-400',
    benefits: [
      'All Gold benefits',
      'Featured on homepage rotation',
      'Royal council voting power (x2)',
      'Five free mockery actions per week'
    ],
    icon: 'scepter'
  },
  {
    name: 'diamond',
    label: 'Diamond Marquess',
    minSpend: 10000,
    maxSpend: 49999,
    color: 'text-blue-400',
    benefits: [
      'All Platinum benefits',
      'Custom profile title',
      'Ability to create private events',
      'Team chat moderation powers',
      'Ten free mockery actions per week'
    ],
    icon: 'diamond'
  },
  {
    name: 'royal',
    label: 'Royal Monarch',
    minSpend: 50000,
    maxSpend: null,
    color: 'text-purple-500',
    benefits: [
      'All Diamond benefits',
      'Custom profile aesthetics',
      'Featured permanently on front page',
      'Admin console access',
      'Unlimited mockery actions'
    ],
    icon: 'throne'
  }
];
