
import { TeamColor } from '@/types/team';

export const teamBenefits: Record<TeamColor, string[]> = {
  red: [
    'Damage bonus in team competitions',
    'Early access to combat events',
    'Loyalty rewards for long-term members'
  ],
  blue: [
    'Cooldown reduction on abilities',
    'Bonus reputation with scholars',
    'Access to exclusive knowledge bases'
  ],
  green: [
    'Resource gathering bonus',
    'Growth-related achievements unlock faster',
    'Environmentally-friendly status effects'
  ],
  gold: [
    'Increased currency drops',
    'Merchant discounts in the marketplace',
    'Bonus rewards from treasure events'
  ],
  purple: [
    'Exclusive cosmetic items',
    'Enhanced stealth capabilities',
    'Rare item drop rate increase'
  ],
  none: [
    'No faction restrictions',
    'Neutral status in faction conflicts',
    'Balanced stat distribution'
  ],
  neutral: [
    'Diplomatic immunity in certain zones',
    'Access to neutral-only quests',
    'Flexible alliance options'
  ],
  silver: [
    'Enhanced defense capabilities',
    'Resistance to negative status effects',
    'Bonuses during night cycles'
  ],
  bronze: [
    'Bonus experience gain',
    'Crafting cost reduction',
    'Improved durability for equipment'
  ]
};
