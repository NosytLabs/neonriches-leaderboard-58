
export interface RoyalActivity {
  id: string;
  type: 'spend' | 'rank' | 'team' | 'profile' | 'cosmetic' | 'system';
  title: string;
  description: string;
  timestamp: Date;
  amount?: number;
  icon?: string;
  targetUser?: string;
  sourceUser?: string;
  team?: 'red' | 'green' | 'blue';
  rankChange?: number;
  isPositive?: boolean;
}
