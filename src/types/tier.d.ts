
export interface TierDetails {
  name: string;
  label: string;
  minSpend: number;
  maxSpend: number | null;
  color: string;
  benefits: string[];
  marketingBenefits?: string[];
  icon: string;
}

export type TierName = 'basic' | 'bronze' | 'silver' | 'gold' | 'royal';
