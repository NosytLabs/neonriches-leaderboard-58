
/**
 * User tier types
 */
export type UserTier = 'free' | 'basic' | 'premium' | 'royal' | 'founder';

/**
 * Tier details interface
 */
export interface TierDetails {
  id: UserTier;
  name: string;
  label: string;
  description: string;
  color: string;
  icon?: string;
  features?: string[];
  benefits: string[];
  minSpend: number;
  maxSpend?: number;
}
