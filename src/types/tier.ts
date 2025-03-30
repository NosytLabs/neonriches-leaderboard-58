
export type UserTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'royal';

export interface TierDetails {
  name: UserTier;
  label: string;
  minSpend: number;
  maxSpend: number | null;
  color: string;
  benefits: string[];
  icon: string;
}
